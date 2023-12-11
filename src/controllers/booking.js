const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path');
const booking = require ('../models/booking');

const getBooking = async (req, res) => {
  try {
    const Booking = await booking.findAll();
    res.status(200).json(Booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

const addBooking = async (req, res) => {
  try {
    const { bookingId, name, email, telepon, quantity, dateAt, totalPrice, productName } = req.body;
    const Booking = new booking({
        bookingId,
        name,
        email,
        telepon,
        quantity,
        dateAt,
        totalPrice,
        productName,
    });

    const addBooking = await Booking.save();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
          user: 'sukatripnews00@gmail.com',
          pass: 'psrx pbbl uuzo ffsx',
        },
      });
      
      const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
    };
    transporter.use('compile', hbs(handlebarOptions));
      // Setup email data
      const formattedTotalPrice = totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      const mailOptions = {
        from: 'sukatripnews00@gmail.com',
        to: email,
        subject: 'Booking Ticket Suka Trip Asia',
        template: 'email',
        context: {
          name,
          email,
          telepon,
          quantity,
          dateAt,
          formattedTotalPrice,
          productName,
        },
      };
      
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.error('Error:', error);
        }
        console.log('Email sent:', info.response);
      });
    res.status(201).json({ message: 'Booking created successfully', data: addBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add booking' });
  }
};

module.exports = { addBooking, getBooking };
