'use strict';

const { createApp } = require('./app');

const PORT = process.env.PORT || 3000;

const app = createApp();
const server = app.listen(PORT, () => {
  console.log(`KT3 App listening on port ${PORT}`);
});

module.exports = server;
