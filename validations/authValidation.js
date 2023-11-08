import Joi from 'joi';

 const authSchema = Joi.object({
  mobile: Joi.string()
    .pattern(new RegExp('^[0-9]{10}$'))
    .message('Mobile number must be a 10-digit numeric value')
    .required(),
    });

export const validateAuth = (req, res, next) => {
  const { error } = authSchema.validate(req.body); 
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};