import { NavLink } from 'react-router-dom';

import styles from './MenuDesktop.module.scss';

import Button from 'components/Button/Button';

const MenuDesktop = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu_wrapper}>
        <li>
          <NavLink to='/features' className={styles.menu_item}>Features</NavLink>
        </li>
        <li>
          <NavLink to='/pricing' className={styles.menu_item}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/resources' className={styles.menu_item}>Resources</NavLink>
        </li>
      </ul>
      <ul className={styles.menu_wrapper}>
        <li>
          <NavLink to='/login' className={styles.menu_item}>Login</NavLink>
        </li>
        <li>
          <Button type='link' url='/signup' style='p-sm rounded'>Sign Up</Button>
        </li>
      </ul>
    </nav>
  )
}

export default MenuDesktop