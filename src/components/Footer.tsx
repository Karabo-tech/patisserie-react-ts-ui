import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2025 Patisserie. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <span>Follow us: </span>
          <span className={styles.icon}>🌐</span>
          <span className={styles.icon}>📷</span>
          <span className={styles.icon}>🐦</span>
        </div>
      </div>
    </footer>
  );
};

