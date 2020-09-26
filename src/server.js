const app =require('./app.js');

require('dotenv').config();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening on port${port}`);
  /* eslint-enable no-console */
});
