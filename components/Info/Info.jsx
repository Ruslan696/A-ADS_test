import Link from 'next/link';
import styles from '../../styles/Info.module.scss'

const Info = () => {
  return (
    <section className={styles.info}>
      <div className='container'>
        <div className={styles.info__container}>
          <h3 className={styles.subtitle}>A-ADS provides alternative technologies for
            <Link href={'/'}> monetizing your traffic</Link>
          </h3>
          <div className={styles.descr}>
            In addition to the ability to sell ads on your website directly, you can also earn from the pool of our active advertisers.<br /><br />
            Our advertising model doesn&#039;t limit your earnings by clicks and impressions, but expands it with advertisers&#039; budgets they eager to spend on your website.
          </div>
        </div>
      </div>
    </section>
  )
};

export default Info;
