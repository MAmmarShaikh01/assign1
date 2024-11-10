import React from 'react';
import styles from '../CSS/Home.module.css'
import Link from 'next/link';

const MainContent= () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to MyFancySite!</h1>
        <p className={styles.heroSubtitle}>
          We're here to create something amazing. Join us on our journey!
        </p>
        <Link href = "/about" className={styles.ctaButton}>
          More about us
        </Link>
      </section>

      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>Our Features</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
          
            <h3>Innovative Design</h3>
            <p>Crafting unique designs that set your business apart from the crowd.</p>
          </div>
          <div className={styles.featureCard}>
           
            <h3>Cutting-edge Technology</h3>
            <p>Leveraging the latest technologies to bring your ideas to life.</p>
          </div>
          <div className={styles.featureCard}>
           
            <h3>Reliable Support</h3>
            <p>Always here to help, with dedicated customer support when you need it most.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
