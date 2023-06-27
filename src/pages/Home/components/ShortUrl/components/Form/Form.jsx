import { forwardRef, useContext } from 'react';
import { ShortenUrlContext } from '../../context/ShortenUrlContext';
import styles from './Form.module.scss';
import Button from 'components/Button/Button';

const Form = ({ className }, ref) => {
  const { submitHandler, inputHandler, inputUrl, isUrlInvalid, errorMessage } = useContext(ShortenUrlContext);

  return (
    <form ref={ref} onSubmit={submitHandler} className={`${styles.container} ${className}`} noValidate>
      <div className={`${styles.input_group}`}>
        <input type="url" className={`${isUrlInvalid ? styles.invalid : ''}`} onChange={inputHandler} value={inputUrl} placeholder='Shorten a link here...' />
        {isUrlInvalid && (<p className={styles.error_msg}>{errorMessage}</p>)}
      </div>
      <Button type='submit'>Shorten It!</Button>
    </form>
  )
}

export default forwardRef(Form)