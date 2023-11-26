import Joi from 'joi';

 const productSchema = Joi.object({
    pName: Joi.string().required(),
    pDescription: Joi.string().min(10).required(),
    price: Joi.number().required(),
    pCategory: Joi.string().required(),
    discountPrice: Joi.number().required()
    });

export const validateProductSchema = (req, res, next) => {
  const { error } = productSchema.validate(req.body); 
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};