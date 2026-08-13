import './WhatsAppButton.css'

const whatsappNumber = '5492923425319'

const defaultMessage =
  'Hola Nicolás, vi tu portfolio y quisiera consultarte por un proyecto web.'

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a Nicolás por WhatsApp"
      title="Contactame por WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M16.04 3C9.4 3 4 8.31 4 14.84c0 2.29.67 4.52 1.93 6.42L4 28l6.98-1.82a12.2 12.2 0 0 0 5.05 1.09h.01C22.68 27.27 28 21.96 28 15.42 28 8.88 22.68 3 16.04 3Zm0 21.99a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-4.14 1.08 1.11-4.02-.23-.37a9.55 9.55 0 0 1-1.51-5.16c0-5.29 4.55-9.66 10.16-9.66 5.6 0 10.16 4.37 10.16 9.66 0 5.28-4.56 10.05-10.17 10.05Zm5.57-7.23c-.3-.15-1.8-.88-2.08-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.66.07-.3-.15-1.29-.47-2.46-1.5a9.1 9.1 0 0 1-1.7-2.09c-.18-.3-.02-.46.13-.61.14-.14.3-.35.46-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.25-.59-.5-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.51s1.09 2.92 1.24 3.12c.15.2 2.14 3.24 5.19 4.54.72.31 1.29.49 1.73.63.73.23 1.39.2 1.91.12.58-.09 1.8-.73 2.05-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"
        />
      </svg>

      <span>WhatsApp</span>
    </a>
  )
}

export { WhatsAppButton }