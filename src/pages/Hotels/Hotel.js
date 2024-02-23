//import React from 'react';
import Header from "../../components/Header/Header";
import "./Hotel.css";
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

export default function About2() {
  const [hotel, setHotel] = useState('');
  const [checkin, setCheckin] = useState(0);
  const [checkout, setCheckout] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  // State for number of rooms
const [totalBill, setTotalBill] = useState(0); // State for total bill

// Function to handle adding rooms to cart and updating the bill
const handleAddToCart = () => {
  const product = {
    id: 1, // Use a unique identifier for each product
    price: 100, // Sample price for each room
  };

  addToCart(product);
  setTotalBill(totalBill + product.price * rooms); // Update bill based on the number of rooms
};

// Simulated addToCart logic based on the number of rooms
const addToCart = (product) => {
  console.log(`Adding ${rooms} rooms to cart:`, product); // Simulated addToCart logic
  // Implement your addToCart functionality here (e.g., push items to cart state)
};

  async function handleSubmit(evt){
    evt.preventDefault();

    fetch('http://localhost:3000/pranav', { 
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ hotel, checkin, checkout, adults, children, rooms, totalBill })
    })
    //.then(() => {navigate('/Home2')})
    .catch(err => {console.log(err)})
    }

  return (
    <main>
    <Header/>
    <section className='slide-form'>
        <div className='container'>
            <h2>Enjoy your holidays</h2>
            <form action=' ' onSubmit={handleSubmit}>
            <div className='flex-space'>
                <input type='text' placeholder='Enter hotel name' onChange={(evt)=>{setHotel(evt.target.value)}}/>
                </div>
                <div className='flex-space'>
                <input type='text' placeholder='Check in' onChange={(evt)=>{setCheckin(evt.target.value)}}/>
                <input type='text' placeholder='Check out' onChange={(evt)=>{setCheckout(evt.target.value)}}/>
                </div>
                <div className='flex-space'>
                <input type='number' placeholder='Adults' onChange={(evt)=>{setAdults(evt.target.value)}} />
                <input type='number' placeholder='Children' onChange={(evt)=>{setChildren(evt.target.value)}}/>
                </div>
                <div className='flex-space'>
                <input type='number of rooms' placeholder='Rooms' onChange={(evt)=>{setRooms(evt.target.value)}}/>
                <button type='button' onClick={handleAddToCart}>Click here to know your bill</button>
                </div><div className='flex-space'>
                <input type="submit" value="Send" onClick={()=>{alert("submitted")}} className="submit" required />


                
                </div>
                

            </form>
            <div className='hotel-bill' onChange={(evt)=>{setTotalBill(evt.target.value)}}>Hotel-Bill : ${totalBill}</div>
            
        </div>
    </section>
    </main>
  )
}