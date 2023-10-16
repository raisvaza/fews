import Link from 'next/link';
import styles from '../styles/SideNav.module.css'; // You can use CSS modules for styling

export default function SideNav() {
  return (
    <nav className={styles.sideNav}>
      <ul>
        <li>
          <Link href="/home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

