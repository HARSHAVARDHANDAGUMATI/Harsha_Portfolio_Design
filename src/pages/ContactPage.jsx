import { useState } from 'react'
import toast from 'react-hot-toast'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTag from '../components/ui/SectionTag'
import Button from '../components/ui/Button'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    toast.success('Message drafted successfully.')
    setForm(initialForm)
  }

  return (
    <main className="page-shell">
      <div className="portfolio-frame">
        <Navbar />
        <SectionTag>CONTACT</SectionTag>

        <section className="contact-page__panel">
          <div className="contact-page__intro">
            <h1>Get in Touch</h1>
            <p>
              If you are interested in my work or want
              <br />
              to provide feedback about this website,
              <br />
              I am open to exchanging ideas .
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" value={form.message} onChange={handleChange} required />
            </label>

            <Button type="submit" className="contact-form__submit">
              Send
            </Button>
          </form>
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default ContactPage
