// pages/index.tsx
import styles from '../CSS/Home.module.css';

const Homep: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Welcome to My Portfolio</h1>
          <p>Crafting beautiful and functional web experiences</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with a focus on creating engaging and interactive user experiences. I enjoy learning new technologies and finding innovative solutions to complex challenges.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>What I Offer</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Web Development</h3>
            <p>Building responsive, modern, and optimized websites using the latest technologies.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>UI/UX Design</h3>
            <p>Designing visually appealing and intuitive interfaces to enhance user engagement.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>SEO Optimization</h3>
            <p>Improving website visibility and ranking with effective SEO practices.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Homep;