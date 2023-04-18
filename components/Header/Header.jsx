import Link from 'next/link';
import styles from '../../styles/Header.module.scss'
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header} >
      <div className='container'>
        <div className={styles.header__container}>
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
