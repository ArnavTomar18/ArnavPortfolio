import { useRef, useEffect } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // intersection observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-in-up'))
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.observe-me').forEach(el => observer.observe(el))

    // emailjs init
    if (window.emailjs) window.emailjs.init('Pk5tN6wpT_dUwlCUD')

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value.trim()
    const email = e.target.email.value.trim()
    const message = e.target.message.value.trim()
    const btn = e.target.querySelector('.form-submit-btn')
    const orig = btn.innerHTML

    if (!name || !email || !message) return alert('Please fill in all fields.')

    try {
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      btn.disabled = true

      // emailjs send — keep your existing keys
      if (window.emailjs) {
        await window.emailjs.send('service_xdlp08c', 'template_ze8uqgn', {
          from_name: name, from_email: email, message
        })
      }

      alert('✅ Message sent successfully! I\'ll get back to you soon.')
      e.target.reset()
    } catch (err) {
      console.error(err)
      alert('❌ Failed to send message. Please try again later.')
    } finally {
      btn.innerHTML = orig
      btn.disabled = false
    }
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header observe-me">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together!</p>
          <p className="contact-description">I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info observe-me">
            <div className="contact-details">
              <div className="contact-item"><i className="fas fa-envelope"></i><span>arnavtomar1812007@gmail.com</span></div>
              <div className="contact-item"><i className="fas fa-phone"></i><span>+91 8871687348</span></div>
              <div className="contact-item"><i className="fas fa-map-marker-alt"></i><span>SRMIST Delhi-NCR</span></div>
            </div>

            <div className="social-section">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/arnavtomar18" target="_blank" rel="noreferrer" className="social-icon" title="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/arnavtomar18" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/arnavtomar.18" target="_blank" rel="noreferrer" className="social-icon" title="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          <form className="contact-form observe-me" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="form-submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}