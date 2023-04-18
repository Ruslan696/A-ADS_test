import styles from '../../styles/Advantages.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className='container'>
        <div className={styles.advanttages__container}>
          <div className={styles.information}>
            <h3 className={styles.subtitle}>A-ADS is global advertising
              <Link href={'/'}> for&nbsp;everyone</Link>
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>Simple HTML code embeddable in any website</li>
              <li className={styles.item}>We don&apos;t collect your users&apos; personal data</li>
              <li className={styles.item}>Fixed and adaptive ad units sizes</li>
              <li className={styles.item}>The ability to filter ads content by category</li>
              <li className={styles.item}>Transparent payouts and live statistics</li>
              <li className={styles.item}>Worldwide audience coverage</li>
            </ul>
          </div>
          <div className={styles.advertising}>
            <div className={styles.text}>Your visitors can view stats and buy ads directly on your site. If they become advertisers,
              <Link href={'/'}> you will get 50% of our fees</Link> collected from them
            </div>
            <Image src={'/arrow.svg'} width={17} height={38} alt='arrow' />
            <div className={styles.emptyField}></div>
          </div>
        </div>

      </div>
    </section>
  )
};

export default Advantages;
