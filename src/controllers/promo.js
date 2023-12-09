const promo = require ('../models/promo');

const getPromo = async (req, res) => {
  try {
    const Promo = await promo.findAll();
    res.status(200).json(Promo);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

const addPromo = async (req, res) => {
  try {
    const { promoId, title, subTitle, bonus, price, image } = req.body;

    const Promo = new promo({
      promoId,
        title,
        subTitle,
        bonus,
        price,
        image
    });

    const addPromo = await Promo.save();
    res.status(201).json({ message: 'Promo created successfully', data: addPromo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add promo' });
  }
};

const deletePromo = async (req, res) => {
  try {
    const deletedPromoCount = await promo.destroy({ where: {} });

    if (deletedPromoCount > 0) {
      res.status(200).json({ message: 'All Promo data deleted successfully' });
    } else {
      res.status(404).json({ message: 'No Promo data found to delete' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete Promo data' });
  }
};
module.exports = { addPromo, getPromo, deletePromo };
