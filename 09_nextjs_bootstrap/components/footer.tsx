import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div className="container d-flex justify-content-between">
        <p>Chris Guest 2022©</p>
        <p>commitid:0000000000000</p>
    </div>
  </footer> 
  );
}

