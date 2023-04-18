import styles from '../../styles/Hero.module.scss';
import Image from 'next/image';
import Button from '../Button';


const Hero = ({ activePublisher, dailyPublishers, activeCampaigns }) => {
  console.log('hero', activePublisher)
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.hero__container}>
          <div className={styles.content}>
            <h1 className={styles.title}>EARN CRYPTO WITH A-ADS</h1>
            <h2 className={styles.subtitle}>The first crypto advertising network in the market </h2>
            <p className={styles.descr}>Do you have your own website, blog, or online media?<br /> Become our partner and start earning on advertising right now!</p>
            <ul className={styles.info}>
              <li className={styles.info__item}>
                <p className={styles.info__text}><span className={styles.info__number}>{activePublisher}</span><br />Active publishers</p>
                <div className={styles.info__line}></div>
              </li>
              <li className={styles.info__item}>
                <p className={styles.info__text}>
                  <span className={styles.info__number}>{dailyPublishers ? dailyPublishers : 'no data'}</span><br />Publishers earn per day</p>
                <div className={styles.info__line}></div>
              </li>
              <li className={styles.info__item}>
                <p className={styles.info__text}><span className={styles.info__number}>{activeCampaigns}</span><br />Active campaigns</p>
              </li>
            </ul>
            <Button text={'Start Now'} onClick={() => console.log('click')} />
          </div>
          <Image src={'/hero-img.svg'} width={515} height={317} alt='A-ADS picture' />
        </div>

      </div>
    </section>
  )
};

export default Hero;
