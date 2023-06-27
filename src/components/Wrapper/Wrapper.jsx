import { forwardRef } from 'react';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children, className, style }, ref) => {
  return (
    <div ref={ref} className={`${styles.container} ${className ? className : ''}`} style={style}>
      {children}
    </div>
  )
}

export default forwardRef(Wrapper)