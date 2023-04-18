import Advantages from '@/components/Advantages/Advantages';
import styles from '../styles/Home.module.scss';
import Hero from '@/components/Hero/Hero';
import Info from '@/components/Info/Info';

export const getStaticProps = async () => {
  const response = await fetch('https://www.blockchain.com/ticker');
  if (response.status == 200) {
    const data = await response.json();
    return {
      props: { data: data },
    }
  } else {
    return {
      props: { data: 'no data' }
    }
  }
};

let activePublisher;
let dailyPublishers;
let activeCampaigns;


const Home = ({ data }) => {
  if (data !== 'no data') {
    activePublisher = Math.round(data.USD.last).toString();
    dailyPublishers = Math.round(data.EUR.last).toString();
    activeCampaigns = Math.round(data.GBP.last).toString();
  } else {
    activePublisher = 'no data'
    dailyPublishers = 'no data'
    activeCampaigns = 'no data'
  }

  return (
    <div className={styles.wrapper}>
      <Hero
        activePublisher={activePublisher}
        dailyPublishers={dailyPublishers}
        activeCampaigns={activeCampaigns}
      />
      <Info />
      <Advantages />
    </div>
  )
};

export default Home;
