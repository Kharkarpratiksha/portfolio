import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // EmailJS configuration - Replace with your actual IDs
      const serviceId = 'your_service_id'; // Get from EmailJS dashboard
      const templateId = 'your_template_id'; // Create a template in EmailJS
      const publicKey = 'your_public_key'; // Get from EmailJS dashboard

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'kharkarpratikshaaoml@gmail.com',
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" style={{
      padding: '60px 120px',
      background: '#6c4cff',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Contact Us</h2>
      <p style={{ color: '#e0e0e0', marginBottom: '40px', fontSize: '1.1rem' }}>
        Have a question or want to work together? Send me a message!
      </p>

      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ textAlign: 'left' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}>
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              fontSize: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = '#8b7cff'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
          />
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}>
            Your Email *
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              fontSize: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = '#8b7cff'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
          />
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}>
            Your Message *
          </label>
          <textarea
            name="message"
            placeholder="Tell me about your project or inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              fontSize: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              outline: 'none',
              transition: 'border-color 0.3s',
              resize: 'vertical',
              boxSizing: 'border-box',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = '#8b7cff'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '15px 30px',
            background: isSubmitting ? '#555' : '#0a0f2c',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s',
            alignSelf: 'center',
            minWidth: '150px'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.target.style.background = '#1a1f3c';
              e.target.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.target.style.background = '#0a0f2c';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitMessage && (
          <p style={{
            marginTop: '20px',
            color: submitMessage.includes('error') ? '#ff6b6b' : '#4ecdc4',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}>
            {submitMessage}
          </p>
        )}
      </form>

      <div style={{ marginTop: '50px' }}>
        <p style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>Or reach out directly:</p>
        <div style={{ marginTop: '20px' }}>
          <p style={{ margin: '10px 0', fontSize: '1rem' }}>
            <strong>Email:</strong> kharkarpratikshaaoml@gmail.com
          </p>
          <p style={{ margin: '10px 0', fontSize: '1rem' }}>
            <strong>Phone:</strong> +91 9322751539
          </p>
          <p style={{ margin: '10px 0', fontSize: '1rem' }}>
            <strong>Location:</strong> Pune, Maharashtra
          </p>
        </div>
      </div>
    </div>
  );
}