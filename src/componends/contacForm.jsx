import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value} = e.target
    setFormData({ ...formData, [name]:  value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form Submitted Successfully!")
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <Toaster />
    <div className="container my-2">
      <h2 className="mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
    </>
  
  );
}
