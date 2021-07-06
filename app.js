const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');
const dataRouter = require('./routes/dataRoutes');
const paymentRouter = require('./routes/paymentRoutes');
const cartRouter = require('./routes/cartRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/proshop/admin', adminRouter);
app.use('/api/v1/proshop/users', userRouter);
app.use('/api/v1/proshop/data', dataRouter);
app.use('/api/v1/proshop/payment', paymentRouter);
app.use('/api/v1/proshop/cart', cartRouter);
module.exports = app;
