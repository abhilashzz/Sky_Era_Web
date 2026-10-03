import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, ArrowRight } from 'lucide-react';
import '../styles/modal.css';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    orgType: 'Museum',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const orgTypeOptions = [
    'Museum',
    'School / University',
    'Science Centre',
    'Cultural Organization',
    'Educational Organization',
    'Other'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message about your space or interest.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-dialog">
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <img
                src="/logo/SKY_ERA.png"
                alt="SkyEra"
                className="modal-logo-img"
              />

              <h3 className="modal-title" id="modal-title">
                Request a Demo
              </h3>
              <p className="modal-subtitle">
                Connect with our team to explore how the Sky Era interactive museum kiosk can be adapted for your institution.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="demo-fullName">
                  Full Name *
                </label>
                <input
                  id="demo-fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="e.g. Dr. Ananda Wickramasinghe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              {/* Organization */}
              <div className="form-group">
                <label className="form-label" htmlFor="demo-organization">
                  Organization / Institution *
                </label>
                <input
                  id="demo-organization"
                  type="text"
                  className={`form-input ${errors.organization ? 'error' : ''}`}
                  placeholder="e.g. Science Centre, Heritage Museum, International School"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
                {errors.organization && <span className="error-text">{errors.organization}</span>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="demo-email">
                  Email Address *
                </label>
                <input
                  id="demo-email"
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="name@institution.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Organization Type */}
              <div className="form-group">
                <label className="form-label" htmlFor="demo-orgType">
                  Organization Type
                </label>
                <select
                  id="demo-orgType"
                  className="form-select"
                  value={formData.orgType}
                  onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                >
                  {orgTypeOptions.map((type) => (
                    <option key={type} value={type} style={{ background: '#020817', color: '#FFFFFF' }}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="demo-message">
                  Message / Exhibition Context *
                </label>
                <textarea
                  id="demo-message"
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your space, target audience, or desired timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '1.75rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request a Demo</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Your details will be used solely for scheduling your Sky Era project demonstration.
              </div>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="modal-success-state">
            <div className="modal-success-icon">
              <CheckCircle2 size={36} color="#D6A85F" />
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Demo Request Received
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.fullName}</strong>. Our team will review your inquiry for <strong style={{ color: '#FFFFFF' }}>{formData.organization}</strong> and reach out to schedule an interactive presentation.
            </p>
            <button
              className="btn btn-primary"
              onClick={onClose}
              style={{ minWidth: '180px' }}
            >
              <span>Back to Showcase</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
