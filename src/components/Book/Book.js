import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Book.css";
import bookimg from "../../book-img.png"

export default function Book() {
  const [whereto, setWhereto] = useState('');
  const [howmany, setHowmany] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [rooms, setRooms] = useState(1); // State for number of rooms
  const [name, setName] = useState("");
  const [totalBill, setTotalBill] = useState(0); // State for total bill

  const [transportType, setTransportType] = useState(''); // State for transport type
  // ... other states

  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    const product = {
      id: 1, // Use a unique identifier for each product
      pricePerRoom: 100, // Sample price for each room
    };

    // Determine the price based on transport type
    let priceMultiplier = 1; // Default multiplier
    switch (transportType.toLowerCase()) {
      case 'air':
        priceMultiplier = 1.5; // Adjust the multiplier as needed
        break;
      case 'bus':
        priceMultiplier = 1.2;
        break;
      case 'train':
        priceMultiplier = 1.1;
        break;
      default:
        priceMultiplier = 1; // If no type is selected, keep the default multiplier
        break;
    }

    // Calculate the total bill based on rooms and transport type
    addToCart(product);
    setTotalBill(totalBill + product.pricePerRoom * rooms * priceMultiplier);
  };

  const addToCart = (product) => {
    const updatedProduct = { ...product, quantity: rooms };
    console.log("Adding to cart:", updatedProduct);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();

    fetch('http://localhost:3000/book', { 
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ whereto, howmany, arrival, departure, transportType, totalBill, name })
    })
    .then(() => {navigate('/Home2')})
    .catch(err => {console.log(err)})

    /*fetch('http://localhost:3000/book')
    .then(res => res.json())
    .then(whereto => setWhereto(whereto))
    .then(howmany => setHowmany(howmany))
    .then(arrival => setArrival(arrival))
    .then(departure => setDeparture(departure))
    .catch(err => console.log(err))*/
  }

  return (<section className="book" id="book">
  <div className="book-img">
    <img src={bookimg} alt="" />
  </div>
  <div className="book-form">
    <h5>BOOK YOUR DESTINATION</h5>
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="Where To" onChange={(evt)=>{setWhereto(evt.target.value)}} required />
      <input type="number" placeholder="How Many" onChange={(evt) => { setHowmany(evt.target.value); setRooms(parseInt(evt.target.value)) }} required />
      <input type="text" placeholder="Arrival date" onChange={(evt)=>{setArrival(evt.target.value)}} required/>
      <input type="text" placeholder="Departure date"  onChange={(evt)=>{setDeparture(evt.target.value)}} required/>
      <input type="text" placeholder="Transport Type (air/bus/train)" onChange={(evt) => { setTransportType(evt.target.value) }} required />
      <textarea
        name=""
        id=""
        cols="5"
        rows="5"
        placeholder="Enter Your Name & Details"
        onChange={(evt)=>{setName(evt.target.value)}} required 
      ></textarea>
      <button className='a' type='button' onClick={handleAddToCart}>
            Calculate Bill
      </button>
      <input type="submit" value="Book Now" onClick={() => { navigate("/Hotel") }} className="submit" required />  
      <input type="submit" value="Book Now" onClick={()=>{alert("booking confirmed")}}className="submit" required />
    </form>
    <p className='b'>Total Bill: ${totalBill}</p>
  </div>
</section>
    
  )
}






/*

  React code - 
  async function handleSubmit(evt) {
    evt.preventDefault();

    fetch('http://localhost:3000/book', { 
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ whereto, howmany, arrival, departure, transportType, totalBill, name })
    })
    .then(() => {navigate('/Home2')})
    .catch(err => {console.log(err)})
  }

  Equivalent code without React - 

  function handleSubmit(evt) {
    evt.preventDefault();

    const formData = {
      whereto: document.getElementById('whereto').value,
      howmany: document.getElementById('howmany').value,
      arrival: document.getElementById('arrival').value,
      departure: document.getElementById('departure').value,
      transportType: document.getElementById('transportType').value,
      name: document.getElementById('nameDetails').value,
      totalBill: totalBill
    };

    // Perform the POST request
    fetch('http://localhost:3000/book', { 
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Navigate to Home2 after successful submission
      window.location.href = '/Home2'; // Assuming '/Home2' is a valid route
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



*/ 