import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Patisserie</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {['Home', 'Menu', 'Cakes', 'Pastries', 'Contact'].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className={styles.navLink}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Button text="Order Now" variant="primary" />
      </nav>
    </header>
  );
};

