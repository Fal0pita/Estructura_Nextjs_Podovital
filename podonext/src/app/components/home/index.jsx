import style from "./home.module.css";

export default function home() {
  return (
    <section className={style.section}>
      <img
        classname={style.background}
        src="images/Home_pies.png"
        alt="background"
      />
      <div classname={style.background}>
        <div classname={style.ementsec1}>
          <div classname={style.highlight_sec1}>
            <h1 className={style.highlight_sec1_h1}>
              {" "}
              Cuidamos la salud de tus pies{" "}
            </h1>
            <p className={style.highlight_sec1_p}>
              Servicios de podología clínica integral
            </p>
            <button classname={style.btnserv}>
              <a href="/services" classname={style.btn}>
                Servicios
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
