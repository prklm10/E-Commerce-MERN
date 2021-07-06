const stripe = require('stripe')(
  process.env.STRIPE_SECRET_KEY
);
const { v4: uuidv4 } = require('uuid');

exports.payment = (req, res) => {
  const { product, token } = req.body;
  console.log(
    `Products: ${JSON.stringify(product)}`
  );
  console.log(`Tokens: ${JSON.stringify(token)}`);
  const idempontencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then(
      (customer) => {
        stripe.charges.create({
          amount: product.price * 100,
          currency: 'inr',
          customer: customer.id,
          receipt_email: token.email,
          description: `Your purchases are ${product.name}`,
        });
      },
      { idempontencyKey }
    )
    .then((result) => {
      res.status(200).json({
        status: 'Ok',
        result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: 'Fail',
        message: err.message,
      });
    });
};
