const destination = require ('../models/destination');

const getDestination = async (req, res) => {
  try {
    const Destination = await destination.findAll();
    res.status(200).json(Destination);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

const addDestination = async (req, res) => {
  try {
    const { destinationId, title, subTitle, bonus, price, image } = req.body;

    const Destination = new destination({
        destinationId,
        title,
        subTitle,
        bonus,
        price,
        image
    });

    const addDestination = await Destination.save();
    res.status(201).json({ message: 'Destination created successfully', data: addDestination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add destination' });
  }
};

module.exports = { addDestination, getDestination };