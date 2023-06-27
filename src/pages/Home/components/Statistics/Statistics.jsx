import Wrapper from 'components/Wrapper/Wrapper';
import styles from './Statistics.module.scss';

import iconBrand from 'assets/images/icon-brand-recognition.svg';
import iconRecord from 'assets/images/icon-detailed-records.svg';
import iconCustom from 'assets/images/icon-fully-customizable.svg';
import Card from './components/Card';
import useAnimateOnView from 'hooks/useAnimateOnView';

const Statistics = () => {
  const headerRef = useAnimateOnView();
  const bodyRef = useAnimateOnView();

  const cardsContent = [
    {
      icon: iconBrand,
      title: "Brand Recognition",
      desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
      icon: iconRecord,
      title: "Detailed Records",
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
      icon: iconCustom,
      title: "Fully Customizable",
      desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }
  ]

  return (
    
    <section className={styles.container}>
      <Wrapper>
        <div ref={headerRef} className={styles.header}>
          <h2 className='fadeIn'>Advance Statistics</h2>
          <p className='fadeIn'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div ref={bodyRef} className={styles.body}>
          {cardsContent.map(({ icon, title, desc }, index) => <Card key={index} icon={icon} title={title} desc={desc} className="fadeIn" />)}
          <hr className={`${styles.bg_line} fadeIn`} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Statistics