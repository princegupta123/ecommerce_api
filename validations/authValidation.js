import Joi from 'joi';

export const authSchema = Joi.object({
  mobile: Joi.string()
    .pattern(new RegExp('^[0-9]{10}$'))
    .message('Mobile number must be a 10-digit numeric value')
    .required(),

  otp: Joi.string()
    .pattern(new RegExp('^[0-9]{6}$'))
    .message('OTP must be a 6-digit numeric value')
    .required(),
});
