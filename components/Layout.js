import styles from "../styles/Layout.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar styles={styles.header} />
      <div>{children}</div>
      <Footer styles={styles.footer} />
    </>
  );
};

export default Layout;
