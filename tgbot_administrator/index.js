const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use('/api/admbt', require('./routes/administrator_bot.routes'));
app.use('/api/admbt/chat', require('./routes/chat.routers'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Start Server to PORT = ${PORT}`));
