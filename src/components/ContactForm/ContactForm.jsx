import { useState } from 'react'
import './ContactForm.css'

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))

    setSubmitStatus('idle')
  }

  function validateForm() {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Ingresá tu nombre.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Ingresá tu correo electrónico.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Ingresá un correo electrónico válido.'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Ingresá el asunto de tu consulta.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Escribí un mensaje.'
    } else if (formData.message.trim().length < 20) {
      newErrors.message =
        'El mensaje debe tener al menos 20 caracteres.'
    }

    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitStatus('error')
      return
    }

    setErrors({})
    setSubmitStatus('success')
    setFormData(initialFormData)
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contact-form__group">
        <label htmlFor="name">Nombre</label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />

        {errors.name && (
          <p
            className="contact-form__error"
            id="name-error"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="email">Correo electrónico</label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@correo.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />

        {errors.email && (
          <p
            className="contact-form__error"
            id="email-error"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="subject">Asunto</label>

        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="¿En qué puedo ayudarte?"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={
            errors.subject ? 'subject-error' : undefined
          }
        />

        {errors.subject && (
          <p
            className="contact-form__error"
            id="subject-error"
          >
            {errors.subject}
          </p>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">Mensaje</label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Contame sobre tu proyecto..."
          rows="7"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? 'message-error' : undefined
          }
        />

        {errors.message && (
          <p
            className="contact-form__error"
            id="message-error"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button className="contact-form__button" type="submit">
        Enviar mensaje
        <span aria-hidden="true">→</span>
      </button>

      <div
        className="contact-form__status"
        aria-live="polite"
        aria-atomic="true"
      >
        {submitStatus === 'success' && (
          <p className="contact-form__success">
            El formulario se completó correctamente. Esta es una
            demostración y todavía no envía correos.
          </p>
        )}

        {submitStatus === 'error' && (
          <p className="contact-form__general-error">
            Revisá los campos marcados antes de continuar.
          </p>
        )}
      </div>
    </form>
  )
}

export { ContactForm }