import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\]?)$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Impactful</span>
          </h2>
          <p className="section-subtitle">
            Open to remote engineering roles, on-site relocation, and high-impact full-stack collaborations.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Details Bento Card */}
          <div className="bento-card contact-info-card">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">
              Currently available for full-time Full Stack Developer roles. Feel free to connect directly via email, phone, or LinkedIn.
            </p>

            <div className="contact-methods">
              <motion.a
                href="mailto:chiragtank1971@gmail.com"
                className="method-item"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="method-label">Direct Email</div>
                  <div className="method-value">chiragtank1971@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+916367583182"
                className="method-item"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="method-label">Phone</div>
                  <div className="method-value">+91-6367583182</div>
                </div>
              </motion.a>

              <div className="method-item">
                <div className="method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="method-label">Location &amp; Availability</div>
                  <div className="method-value">Rajasthan, India &bull; Remote / Relocation</div>
                </div>
              </div>
            </div>

            <div className="connect-socials">
              <span className="socials-title">Follow &amp; Network:</span>
              <div className="social-links-row">
                <motion.a
                  href="https://github.com/Chirag-Tank1971"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Image src="/assets/png/github-ico.png" alt="GitHub" width={20} height={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/chirag-tank"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Image src="/assets/png/linkedin-ico.png" alt="LinkedIn" width={20} height={20} />
                </motion.a>
                <motion.a
                  href="https://x.com/ChiragT38130967"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Image src="/assets/png/twitter-ico.png" alt="Twitter" width={20} height={20} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Form Bento Card */}
          <div className="bento-card contact-form-card">
            {submitted ? (
              <motion.div
                className="success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form
                action="https://formsubmit.co/chiragtank1971@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    required
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    required
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.2rem;
          align-items: stretch;
        }
        .contact-info-card {
          padding: 3.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .info-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.2rem;
          letter-spacing: -0.02em;
        }
        .info-desc {
          font-size: 1.55rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 3.2rem;
        }
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3.6rem;
        }
        .method-item {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          padding: 1.4rem;
          border-radius: 1.4rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }
        .method-item:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-hover);
          transform: translateX(4px);
        }
        .method-icon {
          width: 44px;
          height: 44px;
          border-radius: 1.2rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .method-label {
          font-size: 1.25rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .method-value {
          font-size: 1.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .connect-socials {
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }
        .socials-title {
          font-size: 1.3rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          display: block;
          margin-bottom: 1.2rem;
        }
        .social-links-row {
          display: flex;
          gap: 1rem;
        }
        .social-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 1.2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .social-icon-btn:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
        }
        .contact-form-card {
          padding: 3.6rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .form-label {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .form-input {
          padding: 1.2rem 1.6rem;
          border-radius: 1.2rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          outline: none;
          transition: all 0.2s ease;
        }
        .form-input:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
        .form-textarea {
          resize: vertical;
        }
        .input-error {
          border-color: var(--accent-rose) !important;
        }
        .error-message {
          font-size: 1.25rem;
          color: var(--accent-rose);
        }
        .success-state {
          padding: 4rem 2rem;
          text-align: center;
        }
        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
