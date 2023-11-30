"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div>Logo</div>
      <nav className={styles.nav}>
        <Link href="/" className={pathname === "/" ? "active" : null}>
          Главная
        </Link>
        <Link href="/about" className={pathname === "/about" ? "active" : null}>
          О нас
        </Link>
        <Link
          href="/services"
          className={pathname === "/services" ? "active" : null}
        >
          Услуги
        </Link>
      </nav>
    </header>
  );
};

export default Header;
