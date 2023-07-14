import style from "./services.module.css";

export default function Services() {
  return (
    <section className={style.section} id="servi">
      <div className={style.fondo_serv}>
        <div className={style.fondo_claro_serv}>
          <h1 className={style.titulo_serv}>Conoce nuestros servicios</h1>
          <div className={style.services}>
            <div className={style.servicios}>
              <input type="checkbox" id="checkserv1" />
              <h4>Atención Podológica Normal</h4>
              <img
                src="images/normal.png"
                className={style.services_img}
                alt="atenciónnormal"
              />
              <div className={style.serv1}>
                <p>
                  {" "}
                  Asepsia del pie
                  <br /> Inspección completa del pie
                  <br /> Evaluación de sensibilidad
                  <br /> Limpieza de surcos ungueales
                  <br /> Onicotomia (corte de uñas)
                  <br /> Retiro de durezas y callosidades (hiperqueratosis)
                  <br /> Pullido de piel
                  <br />
                  Masaje e hidratación del pie
                  <br />
                  Tratamiento de Onicomicosis (hongos en las uñas)
                  <br />
                  Tratamiento de Dermatomicosis (hongos en la piel)
                </p>
                <p></p>
              </div>
              <label className={style.lab_serv1} htmlFor="checkserv1">
                Más información
              </label>
            </div>
            <div className={style.servicios}>
              <input type="checkbox" id="checkserv2" />
              <h4>
                Onicocriptosis <br />
                (Uña Encarnada)
              </h4>
              <img
                src="images/pata1.png"
                className={style.services_img}
                alt="uñaencarnada"
              />
              <div className={style.serv2}>
                <p>
                  Asepsia completa del area afectada del dedo <br />{" "}
                  Despiculización <br /> Curación de avanzada <br /> A cada
                  paciente se le entregarán las indicaciones de cuidado post
                  procedimiento. <br />
                  En caso de requerir curación de avanzada, esto tendrá un valor
                  adicional
                  <br />
                </p>
              </div>
              <label className={style.lab_serv2} htmlFor="checkserv2">
                Más información
              </label>
            </div>
            <div className={style.servicios}>
              <input type="checkbox" id="checkserv3" />
              <h4>
                Tratamiento Verruga <br /> Plantar
              </h4>
              <img
                src="images/plantar.png"
                className={style.services_img}
                alt="verruga"
              />
              <div className={style.serv3}>
                Detalles de servicio y sesiones correspondientes a acordar con
                podóloga.
              </div>
              <label className={style.lab_serv3} htmlFor="checkserv3">
                Más información
              </label>
            </div>
            <div className={style.servicios}>
              <input type="checkbox" id="checkserv4" />
              <h4>Curación de Avanzada</h4>
              <img
                src="images/avanzada.png"
                className={style.services_img}
                alt="avanzada"
              />
              <div className={style.serv4}>
                Servicio disponible en caso de ser necesario según la atención
                recibida.
              </div>
              <label className={style.lab_serv4} htmlFor="checkserv4">
                Más información
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
