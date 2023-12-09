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

const deleteDestination = async (req, res) => {
  try {
    const deletedDestinationCount = await destination.destroy({ where: {} });

    if (deletedDestinationCount > 0) {
      res.status(200).json({ message: 'All Destination data deleted successfully' });
    } else {
      res.status(404).json({ message: 'No Destination data found to delete' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete Destination data' });
  }
};

module.exports = { addDestination, getDestination, deleteDestination };
