import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import useAnimateOnView from 'hooks/useAnimateOnView';

import Button from 'components/Button/Button';
import Wrapper from 'components/Wrapper/Wrapper';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as IconFb } from 'assets/images/icon-facebook.svg';
import { ReactComponent as IconTt } from 'assets/images/icon-twitter.svg';
import { ReactComponent as IconPint } from 'assets/images/icon-pinterest.svg';
import { ReactComponent as IconInsta } from 'assets/images/icon-instagram.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <PreFooter />
      <MainFooter />
    </footer>
  )
}

const PreFooter = () => {
  const animate = useAnimateOnView();

  return (
    <div ref={animate} className={styles.pre_footer}>
      <h2 className='fadeIn'>Boost your links today</h2>
      <Button type='link' style='rounded bold' url='/pricing' className='fadeIn'>Get Started</Button>
    </div>
  )
}

const MainFooter = () => {
  const animate = useAnimateOnView();

  return (
    <div className={styles.main_footer}>
      <Wrapper ref={animate} className={styles.inner}>
        <Link to='/' className={`${styles.logo} fadeIn`}>
          <Logo />
        </Link>
        <Pages />
        <SocialMedia />
      </Wrapper>
    </div>
  )
}

const Pages = () => {

  return (
    <nav className={styles.pages}>
      <ul className='fadeIn'>
        <li><h5>Features</h5></li>
        <li><Link to='/'>Link Shortening</Link></li>
        <li><Link to='/'>Branded Links</Link></li>
        <li><Link to='/'>Analytics</Link></li>
      </ul>
      <ul className='fadeIn'>
        <li><h5>Resources</h5></li>
        <li><Link to='/'>Blog</Link></li>
        <li><Link to='/'>Developers</Link></li>
        <li><Link to='/'>Support</Link></li>
      </ul>
      <ul className='fadeIn'>
        <li><h5>Company</h5></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Our Team</Link></li>
        <li><Link to='/'>Career</Link></li>
        <li><Link to='/'>Contact</Link></li>
      </ul>
    </nav>
  )
}

const SocialMedia = () => {
  return (
    <ul className={styles.socmed}>
      <li className='fadeIn'>
        <Link to='https://www.facebook.com' target='_blank'>
          <IconFb />
        </Link>
      </li>
      <li className='fadeIn'>
        <Link to='https://twitter.com' target='_blank'>
          <IconTt />
        </Link>
      </li>
      <li className='fadeIn'>
        <Link to='https://www.pinterest.ph' target='_blank'>
          <IconPint />
        </Link>
      </li>
      <li className='fadeIn'>
        <Link to='https://www.instagram.com' target='_blank'>
          <IconInsta />
        </Link>
      </li>
    </ul>
  )
}

export default Footer