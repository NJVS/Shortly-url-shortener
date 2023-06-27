import styles from './Card.module.scss';

const Card = ({ icon, title, desc, className }) => {
  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      <div className={styles.icon_wrapper}>
        <img src={icon} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default Card