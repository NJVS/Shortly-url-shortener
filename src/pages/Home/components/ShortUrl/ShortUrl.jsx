import { useEffect, useRef, useState } from 'react';
import { ShortenUrlProvider } from './context/ShortenUrlContext';
import styles from './ShortUrl.module.scss';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useAnimateOnView from 'hooks/useAnimateOnView';
import Wrapper from 'components/Wrapper/Wrapper';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

const ShortUrl = () => {
  const formRef = useRef(null);
  const animate = useAnimateOnView();
  const { width, height } = useWindowDimensions();
  const [overflow, setOverflow] = useState(); // wrapper overflowY

  useEffect(() => {
    setOverflow(() => formRef.current.offsetHeight / 2);
  }, [width, height])

  return (
    <ShortenUrlProvider>
      <section ref={animate} className={styles.container} >
        <Wrapper className={styles.wrapper} style={{ transform: `translateY(-${overflow}px)` }}>
          <Form ref={formRef} className='fadeIn' />
          <Results />
        </Wrapper>
      </section>
    </ShortenUrlProvider>
  )
}

export default ShortUrl