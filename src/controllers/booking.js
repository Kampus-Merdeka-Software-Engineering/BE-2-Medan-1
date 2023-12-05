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
    const { bookingId, name, email, telepon, quantity, dateAt, totalPrice } = req.body;
    const Booking = new booking({
        bookingId,
        name,
        email,
        telepon,
        quantity,
        dateAt,
        totalPrice,
    });

    const addBooking = await Booking.save();
    res.status(201).json({ message: 'Booking created successfully', data: addBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add booking' });
  }
};

module.exports = { addBooking, getBooking };