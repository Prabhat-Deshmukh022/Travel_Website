const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
//app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/BookReview', { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log('Database connected'))
.catch(err => console.log('Error is ='+err))

const bookSchema = {
  whereto: String,
  howmany: Number,
  arrival: String,
  departure: String,
  transportType: String, // Update field name to match the frontend
  totalBill: Number, // Update field name to match the frontend
  name: String,
};

const Book = mongoose.model('Book', bookSchema);

app.post('/book', async function (req, res) {
  console.log(req.body);
  const { whereto, howmany, arrival, departure, transportType, totalBill, name } = req.body;
  const book = new Book({ whereto, howmany, arrival, departure, transportType, totalBill, name });
  await book.save();
});

const reviewSchema = {
  name : String,
  phone : Number,
  email : String,
  message : String
}

const Review = mongoose.model('Message', reviewSchema);

app.post('/review', async function (req, res) {
  console.log(req.body)
  const { name, phone, email, message } = req.body;
  const m = new Review({ name, phone, email, message });
  await m.save();
}) 

const hotelSchema = {
  hotelName : String,
  checkin : String,
  checkout: String,
  Adults : Number,
  Children : Number,
  Rooms : Number,
  HotelBill : Number
}

const Hotel = mongoose.model('Hotel', hotelSchema);

app.post('/pranav', async function (req, res) {
  console.log(req.body)
  const { hotelName, checkin, checkout, Adults, Children, Rooms, HotelBill } = req.body;
  const h = new Hotel({ hotelName, checkin, checkout, Adults, Children, Rooms, HotelBill });
  await h.save();
}) 

/*app.get('/review', async function(req,res){
  const review = await Review.find({}) //Review 
  res.json(review)
})*/

app.listen(3000, console.log('Listening on port 3000'))