import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setErrors(prev => ({
          ...prev,
          [name]: 'Valid email is required: ex@abc.xyz'
        }));
      }
    } else {
      if (!value.trim()) {
        setErrors(prev => ({
          ...prev,
          [name]: `${name === 'name' ? 'Name' : 'Message'} is required`
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Valid email is required: ex@abc.xyz';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required: ex@abc.xyz';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, submit it
    e.target.submit();
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </span>
        </h2>
        <div className="wrap-contact100">
          <form
            action="https://formsubmit.co/chiragtank1971@gmail.com"
            method="post"
            className="contact100-form validate-form"
            onSubmit={handleSubmit}
          >
            <label className="contact__form-label" htmlFor="name">Full Name</label>
            <div className={`wrap-input100 validate-input ${errors.name ? 'alert-validate' : ''}`} data-validate={errors.name || 'Name is required'}>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <label className="contact__form-label" htmlFor="email">Email</label>
            <div className={`wrap-input100 validate-input ${errors.email ? 'alert-validate' : ''}`} data-validate={errors.email || 'Valid email is required: ex@abc.xyz'}>
              <input
                className="input100"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <label className="contact__form-label" htmlFor="message">Message</label>
            <div className={`wrap-input100 validate-input ${errors.message ? 'alert-validate' : ''}`} data-validate={errors.message || 'Message is required'}>
              <textarea
                className="input100"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button type="submit" className="btn btn--med btn--theme dynamicBgClr">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

