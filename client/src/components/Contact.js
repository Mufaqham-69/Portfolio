import React, { useState } from 'react';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been received. I will get back to you shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again or email me directly.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network error or server unavailable. Please reach out directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-label">07 // Connect</div>
      <h2 className="section-title">Let's Build Something Exceptional</h2>
      <p className="section-desc">
        Interested in collaborating, exploring engineering opportunities, or discussing AI/ML systems? Send a message.
      </p>

      <div className="contact-container">
        {/* Info Column */}
        <div className="contact-info-col">
          <div className="contact-card-sidebar">
            <h3 className="sidebar-heading">Contact Information</h3>
            <p className="sidebar-sub">
              Feel free to reach out directly through the form or via my social profiles.
            </p>

            <div className="contact-methods">
              <a href="mailto:syedalihussain@email.com" className="method-item">
                <div className="method-icon"><FiMail /></div>
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-val">syedalihussain@email.com</div>
                </div>
              </a>

              <div className="method-item">
                <div className="method-icon"><FiMapPin /></div>
                <div>
                  <div className="method-label">Location</div>
                  <div className="method-val">Hyderabad, Telangana, India</div>
                </div>
              </div>
            </div>

            <div className="sidebar-socials">
              <div className="socials-label">Social Channels</div>
              <div className="socials-links">
                <a href="https://linkedin.com/in/syedalihussain" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <FiLinkedin /> <span>LinkedIn</span>
                </a>
                <a href="https://github.com/syedalihussain" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <FiGithub /> <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="contact-form">
            {status.type && (
              <div className={`status-banner ${status.type}`}>
                {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="e.g. AI Project Collaboration / Job Opportunity"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Share project details, requirements, or your query..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
