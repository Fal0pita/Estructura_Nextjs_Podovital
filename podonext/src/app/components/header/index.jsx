import style from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <a href="#" className={style.logo}>
            <img src="images/Logo.png" alt="Logo" className={style.logo_img} />
          </a>
        </div>
        <nav className={style.nav}>
          <a href="/home" className={style.nav_a}>
            Home
          </a>
          <a href="/services" className={style.nav_a}>
            Servicios
          </a>
          <a href="/about" className={style.nav_a}>
            Conócenos
          </a>
          <a href="/contact" className={style.nav_a}>
            Contacto
          </a>
        </nav>
      </header>
    </>
  );
}
