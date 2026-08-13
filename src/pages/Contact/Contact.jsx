import { ContactForm } from '../../components/ContactForm/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <section
      className="contact-page"
      aria-labelledby="contact-title"
    >
      <div className="contact-page__information">
        <p className="contact-page__eyebrow">Contacto</p>

        <h1 id="contact-title">
          Hablemos de tu próximo proyecto
        </h1>

        <p className="contact-page__introduction">
          Completá el formulario para contarme tu idea, consulta o
          propuesta. Podés revisar una demostración de su validación.
        </p>

        <address className="contact-page__details">
          <div>
            <span aria-hidden="true">✉</span>

            <p>
              <strong>Correo electrónico</strong>
              <a href="mailto:jnandreis@outlook.com">
                jnandreis@outlook.com
              </a>
            </p>
          </div>

          <div>
            <span aria-hidden="true">⌖</span>

            <p>
              <strong>Ubicación</strong>
              Bahía Blanca, Argentina
            </p>
          </div>

          <div>
            <span aria-hidden="true">◷</span>

            <p>
              <strong>Disponibilidad</strong>
              Abierto a propuestas y proyectos
            </p>
          </div>
        </address>

        <div className="contact-page__note">
          <h2>¿Qué podés incluir?</h2>
          <p>
            Contame qué necesitás, cuál es el objetivo del proyecto y
            si existe una fecha estimada de entrega.
          </p>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export { Contact }