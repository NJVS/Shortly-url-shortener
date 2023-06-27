import styles from './MenuToggler.module.scss';

const MenuToggler = ({ isMenuToggled, setIsMenuToggled }) => {
  return (
    <button className={`${styles.container} ${isMenuToggled ? styles.toggled : ''}`} onClick={() => setIsMenuToggled(!isMenuToggled)}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}

export default MenuToggler