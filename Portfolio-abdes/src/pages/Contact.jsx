import { useState } from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import "./css/contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    emailjs.sendForm('service_e1xvbhq', 'template_ii97sqp', e.target, 'UEXRFJifMlZNo4Okn')
      .then((result) => {
        console.log(result.text);
        setShowModal(true); 
        setFormData({ name: "", email: "", message: "" });

      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className="Contact"
      >
        <h1 className="contact-header">Contact</h1>

        <div className="form-container">


          <form onSubmit={handleSubmit} className="contact-form">
            <label className="form-label">
              First Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            <label className="form-label">
              Last Name:
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              />
            </label>

            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
      </motion.div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Message sent successfully</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;