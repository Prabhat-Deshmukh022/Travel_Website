import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  async function handleSubmit(evt) {
    evt.preventDefault();

    fetch('http://localhost:3000/review', { 
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name, phone, email, message })
    })
    .then(() => {navigate('/Home2')})
    .catch((err) => console.log(err))

    }
  
  return (
    <section className="contact" id="contact">
            <div className="contact-text">
                <h2>Get In <span>Touch</span></h2>
                <p>You can contact us via phone, email, or in person at our office to discuss your travel plans.
                    Our team is readily available to assist you with any inquiries or concerns you may have.
                    If you have specific travel preferences or need assistance, don't hesitate to get in touch with us.
                    We value your feedback and are open to hearing about your travel experiences with our agency.
                    For booking inquiries, you can contact us through our website or give us a call, and we'll be happy to assist.</p>
                <div className="list">
                    <li><a href="tel:+9200000000000000">+9200000000000000</a></li>
                    <li><a href="mailto:abc@gmail.com">abc@gmail.com</a></li>
                    <li><a href="#">Jai Hind</a></li>
                </div>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" onChange={(evt)=>{setName(evt.target.value)}} required />
                    <input type="tel" placeholder="Phone" onChange={(evt)=>{setPhone(evt.target.value)}} required />
                    <input type="email" placeholder="Email" onChange={(evt)=>{setEmail(evt.target.value)}} required />
                    <textarea cols="35" rows="10" placeholder="Message" onChange={(evt)=>{setMessage(evt.target.value)}} required></textarea>
                    <input type="submit" value="Send" onClick={()=>{alert("submitted")}} className="submit" required />
                </form>
            </div>
        </section>
  )
}
