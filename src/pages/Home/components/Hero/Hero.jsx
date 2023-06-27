import useAnimateOnView from 'hooks/useAnimateOnView';

import Button from 'components/Button/Button';
import Wrapper from 'components/Wrapper/Wrapper';
import HeroIllustration from 'assets/images/illustration-working.svg';

import styles from './Hero.module.scss';

const Hero = () => {
  const animate = useAnimateOnView();

  return (
    <section className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <div ref={animate} className={styles.content}>
          <h1 className='fadeIn'>More than just <br /> shorter links</h1>
          <p className='fadeIn'>Build your brand's recognition and get detailed insigtts on how your links are performing.</p>
          <Button type='link' url='/pricing' style='bold rounded' className='fadeIn'>Get Started</Button>
        </div>
        <div className={styles.illustration}>
          <img src={HeroIllustration} alt="" />
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero