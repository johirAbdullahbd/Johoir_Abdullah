"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <div className={styles.hr}></div>
          </li>
          <li>
            <Link href="/">
              <div className={`${styles.text} ${pathname === "/" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className={`${styles.text} ${pathname === "/about" ? styles.actives : ""}`} onClick={toggleNavbar}>
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <div className={`${styles.text} ${pathname === "/projects" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Projects
              </div>
            </Link>
          </li>{" "}
          <li>
            <Link href="/dream">
              <div className={`${styles.text} ${pathname === "/dream" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Dream
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className={`${styles.text} ${pathname === "/contact" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Contact
              </div>
            </Link>
          </li>
          <li>
            <div className={styles.hr}></div>
          </li>
        </ul>
      </div>
      <div className={styles.toggle} onClick={toggleNavbar}>
        <div className={styles.toggleBar}></div>
        <div className={styles.toggleBar}></div>
        <div className={styles.toggleBar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
