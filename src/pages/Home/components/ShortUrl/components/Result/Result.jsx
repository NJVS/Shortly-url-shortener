import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button/Button';
import styles from './Result.module.scss';


const Result = ({ fullLink, shortLink, className }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(shortLink)
      .then(() => {
        setIsCopied(true);

        // revert back btnCopy after 2.5s
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch((error) => {
        alert(`${error}: Error copying url to clipboard.`);
      })
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <p className={styles.full_link}>{fullLink}</p>
      <div>
        <Link to={shortLink} target='_blank' className={styles.short_link}>{shortLink}</Link>
        <Button type='button' className={`${styles.btn_copy} ${isCopied ? styles.copied : ''}`} style='p-xsm bold' onClick={copyToClipboardHandler} >{isCopied ? 'Copied!' : 'Copy'}</Button>
      </div>
    </div>
  )
}

export default Result