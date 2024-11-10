// pages/contact.tsx
import Head from 'next/head';
import styles from '../CSS/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.contactSection}>
          <h1 className={styles.contactTitle}>Get in Touch</h1>
          <p className={styles.contactSubtitle}>
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>Address: 1234 Street Name, City, State, ZIP</p>
          </div>

          {/* Contact Form */}
          <form className={styles.contactForm}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}
