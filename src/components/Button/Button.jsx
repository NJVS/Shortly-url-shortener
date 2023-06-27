import { forwardRef } from 'react';
import { Link } from 'react-router-dom'
import styles from './Button.module.scss';

const Button = ({ type, style, children, url, onClick, className }, ref) => {
  const checkStyle = (s) => (style) && style.split(' ').includes(s);

  const padding = checkStyle('p-sm') ? styles.sm : checkStyle('p-lg') ? styles.lg : '';
  const radius = checkStyle('rounded') ? styles.rounded : '';
  const fontWeight = checkStyle('bold') ? styles.bold : '';


  return type === 'link' ?
    (
      <Link ref={ref} to={url} className={`${styles.container} ${padding} ${radius} ${fontWeight} ${className ? className : ''}`}>
        {children}
      </Link>
    ) :
    (
      <button ref={ref} type={type} onClick={onClick} className={`${styles.container} ${padding} ${radius} ${fontWeight} ${className ? className : ''}`}>
        {children}
      </button>
    )
}


export default forwardRef(Button)