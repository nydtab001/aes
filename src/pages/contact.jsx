import { Helmet } from 'react-helmet'
import PageHeader from '../components/PageHeader2'
import Footer from '../components/Footer2'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading2'
import Heading1 from '../components/assets/Heading1'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import ScrollTop from '../components/assets/ScrollTop'

export default function Contact() {
  const reduce = useReducedMotion()
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | fallback

  function onChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function validate() {
    const err = {}
    if (!form.firstName || form.firstName.trim().length < 1) err.firstName = 'First name is required'
    if (!form.lastName || form.lastName.trim().length < 1) err.lastName = 'Last name is required'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email address'
    if (!form.message || form.message.trim().length < 5) err.message = 'Message must be at least 5 characters'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', message: '' })
      } else if (res.status === 404) {
        setStatus('fallback')
        openMailto()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('fallback')
      openMailto()
    }
  }

  function openMailto() {
    const subject = encodeURIComponent('Contact from website')
    const body = encodeURIComponent(`${form.firstName} ${form.lastName}%0A%0A${form.message}%0A%0AContact email: ${form.email}`)
    window.location.href = `mailto:info@aeszim.co.zw?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Helmet>
        <title>Alauwndy Engineering Solutions - Contact</title>
      </Helmet>
  <PageHeader />
  <ScrollTop />
      <SectionHeading title="CONTACT" bg="bg-white" />

      <Section className="bg-white">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={reduce ? { duration: 0 } : undefined}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[360px]">
            <div className="flex flex-col h-full justify-start md:pt-6 md:items-start text-left">
              <div className="mx-auto w-fit">
                <Heading1 width="max-sm:w-10 w-24" className="text-3xl md:text-4xl text-indigo-950 mb-4" title="Get in touch" />
              </div>
              <p className="text-gray-700 mb-6">We'd love to hear from you. Send us a message and we'll get back to you shortly.</p>
              <div className="space-y-4">
                <p className="text-gray-800 font-semibold">ALAUWNDY ENGINEERING SOLUTIONS</p>
                <p className="text-gray-800">Office 208</p>
                <p className="text-gray-800">2nd Floor</p>
                <p className="text-gray-800">CABS building,</p>
                <p className="text-gray-800">L. Takawira and J. Moyo St</p>
                <p className="text-gray-800">Bulawayo</p>
                <p className="text-gray-800"><strong>Phone:</strong> +263 77 220 0855</p>
                <p className="text-gray-800"><strong>Email:</strong> info@aeszim.co.zw</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 max-sm:px-0 flex flex-col h-full">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First name</label>
                    <input id="firstName" name="firstName" value={form.firstName} onChange={onChange} className="w-full p-3 border" />
                    {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last name</label>
                    <input id="lastName" name="lastName" value={form.lastName} onChange={onChange} className="w-full p-3 border" />
                    {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" value={form.email} onChange={onChange} className="w-full mb-4 p-3 border" />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}

                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={onChange} className="w-full mb-4 p-3 border min-h-[160px] resize-y" />
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="mt-auto">
                <button disabled={status === 'sending'} type="submit" className={`px-6 py-3 rounded font-semibold ${status === 'sending' ? 'bg-gray-400 text-white' : 'bg-indigo-950 text-white'}`}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              <div className="mt-4" aria-live="polite">
                {status === 'success' && <p className="text-sm text-green-600">Message sent — we'll get back to you shortly.</p>}
                {status === 'error' && <p className="text-sm text-red-600">There was an error sending your message. You can <a className="underline text-indigo-600" href={`mailto:info@aeszim.co.zw?subject=Contact%20from%20website&body=${encodeURIComponent(form.message || '')}`}>email us directly</a>.</p>}
                {status === 'fallback' && <p className="text-sm text-yellow-600">No server endpoint available — opening your email client to send the message.</p>}
              </div>
            </form>
          </div>
        </motion.div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto text-center pb-12">
            <div className='mx-auto w-fit'>
          <Heading1 width='max-sm:w-0 w-24' className="max-sm:text-2xl md:text-4xl text-indigo-950" title="Other ways to reach us" />
            </div>

          <div className="mt-6 w-full overflow-hidden shadow-sm">
            <iframe
              title="AES location on Google Maps"
              src="https://www.google.com/maps?q=CABS+building+L.+Takawira+and+J.+Moyo+St+Bulawayo+Zimbabwe&output=embed"
              className="w-full h-64 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            <a href="https://www.google.com/maps/search/?api=1&query=CABS+building+L.+Takawira+and+J.+Moyo+St+Bulawayo+Zimbabwe" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Open in Google Maps</a>
          </p>
        </div>
      </Section>

      <Footer />
    </>
  )
}


