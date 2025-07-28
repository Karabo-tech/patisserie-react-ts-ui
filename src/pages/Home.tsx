import React from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Card} from '../components/Card';
import Button from '../components/Button';
import {SectionTitle} from '../components/SectionTitle';
import styles from './Home.module.css';

// Placeholder images
const images = {
  heroCake: '/images/cake.jpg',
  customCake: '/images/custom-cake.jpg',
  macarons: '/images/macarons.jpg',
  cupcakes: '/images/cupcakes.webp',
  holidayCake: '/images/holiday-cake.jpg',
  holidayMacarons: '/images/holiday-macarons.jpg',
  special: '/images/special.webp',
};

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
            {/*<img src={images.heroCake} alt="heroCake" className={styles.holidayImage} />*/}
          <h1 className={styles.heroTitle}>Delight in <span>Pâtissu in Fury Bite!</span></h1>
          <Button text="Order Now" variant="secondary" />
        </section>

        {/* Featured Section */}
        <section className={styles.featured}>
          <SectionTitle text="Delight in every Bite!" />
          <div className={styles.cardGrid}>
            <Card
              title="Custom Cakes"
              description="Handcrafted cakes tailored to your taste."
              imageUrl={images.customCake}
            />
            <Card
              title="Macarons"
              description="Delicate and colorful French treats."
              imageUrl={images.macarons}
            />
            <Card
              title="Cupcake Collections"
              description="Variety of flavors in every bite."
              imageUrl={images.cupcakes}
            />
          </div>
        </section>

        {/* Holiday Collection */}
        
        <section className={styles.holiday}>
          
            <h3 className={styles.holidayTitle}>Holiday Collection</h3>
          <div className={styles.holidayItem}>
            <img src={images.special} alt="special" className={styles.holidayImage} />
          </div>

          <div className={styles.holidayItem}>
            <img src={images.holidayCake} alt="Holiday Cake" className={styles.holidayImage} />
          </div>

          <div className={styles.holidayItem}>
            <img src={images.holidayMacarons} alt="Holiday Macarons" className={styles.holidayImage} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Home;
 //Home;