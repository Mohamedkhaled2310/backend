const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('patient', 'doctor', 'staff').default('patient')
});

module.exports = {
  validateUserInput: (data) => {
    const { error, value } = userValidationSchema.validate(data, { abortEarly: false });
    if (error) {
      const formattedErrors = error.details.map(err => err.message.replace(/"/g, ''));
      throw new Error(formattedErrors.join(', '));
    }
    return value;
  }
};
