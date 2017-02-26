module.exports.start = () => {
  const express = require('express');
  const app = express();
  app.use(express.static('./templates'));

  return new Promise((resolve, reject) => {
    app.listen(3000, err => err ? reject(err) : resolve());
  });
};
