import style from "./contact.module.css";

export default function Contact() {
  return (
    <section id="contacto">
      <div className={style.fondo_cont}>
        <div className={style.cuadro_cont}>
          <h1 className={style.cuadro_cont_h1}>Contacto</h1>
          <div className={style.secc_cont}>
            <div className={style.fondo_clarito}>
              <div className={style.cont_contact}>
                <h4>Podóloga Clínica Andrea Altamirano</h4>
                <p className={style.info_andrea}>
                  Rol MINSAL 3195 <br />
                  RNPI 38070 Superintendencia de Salud
                </p>
                <h4 className={style.ubic}>Ubicación</h4>
                <img src="images/location.png" alt="Ubicación" />
                <p>
                  Calle Dirección #1234, Cunco <br /> Región de la Araucanía
                </p>
                <h4 className={style.telef}>Teléfono</h4>
                <img src="images/whatsapp_blanco.png" alt="" />
                <p>+569 7537 4694</p>
                <h4 className={style.horar}>Horario de atención</h4>
                <p>
                  {" "}
                  Lunes a Sábado <br />
                  10:00 a 19:00 hrs
                </p>
              </div>
            </div>
            <div className={style.fondomapa}>
              <a
                target="_target"
                href="https://www.google.com/maps/@-38.9317702,-72.0360412,15.64z?entry=ttu"
              >
                <img
                  src="images/mapacunco.png"
                  className={style.fondomapa_a_img}
                  alt="Clickable Image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
