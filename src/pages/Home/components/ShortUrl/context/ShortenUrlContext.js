import { createContext, useState } from "react"

export const ShortenUrlContext = createContext();

export const ShortenUrlProvider = ({ children }) => {
  const [inputUrl, setInputUrl] = useState('');             // stores input url
  const [prevInputUrl, setPrevInputUrl] = useState(null);     // incase user spams submit even the url doesnt change
  const [results, setResults] = useState([]);               // stores max of 3 results 
  const [errorMessage, setErrorMessage] = useState('');     // stores error message
  const [isUrlInvalid, setIsUrlInvalid] = useState(false);  // validity state

  // check local storage

  // input handler
  const inputHandler = (e) => {
    setInputUrl(e.target.value);
    setIsUrlInvalid(false); // remove invalid state
  }

  // submit handler
  const submitHandler = async (e) => {
    e.preventDefault();

    if (initialUrlCheck()) return;
    
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`, {
        cache: 'no-cache',
      });

      const { ok, result: apiResult, error_code } = await response.json();

      if (ok) {
        setResults(prev => {
          const _prev = results.length < 3 ? prev : prev.slice(0, 2); // can only save 3 results
          return [apiResult, ..._prev];
        });
      } else {
        setIsUrlInvalid(true);

        // api error message
        switch (error_code) {
          case 1:
            setErrorMessage('Please add a link');
            break;
          case 2:
            setErrorMessage('Please enter valid url');
            break;
          case 3:
            setErrorMessage('Rate limit reach. Please try again later');
            break;
          case 4:
            setErrorMessage('Blacklist link');
            break;
          case 6:
            setErrorMessage('Sorry, please try again later.');
            break;
          default:
            break;
        }
      }

      setPrevInputUrl(inputUrl);
      setInputUrl(''); // reset input

    } catch (error) {
      alert('An error occurred', error);
    }
  }

  function initialUrlCheck() {
    const isSameUrl = inputUrl === prevInputUrl; // compare the inputUrl to prevInputUrl
    const _inputUrl = (inputUrl.includes('https://')) ? inputUrl : 'https://'.concat(inputUrl); 
    const alreadyExists = results.some(result => result.original_link == _inputUrl);

    console.log('Initial check: '+ isSameUrl || alreadyExists);

    return isSameUrl || alreadyExists;
  }

  return (
    <ShortenUrlContext.Provider
      value={{
        inputHandler,
        submitHandler,
        errorMessage,
        isUrlInvalid,
        inputUrl,
        results
      }}
    >
      {children}
    </ShortenUrlContext.Provider>
  )
}

