const mongoose = require('mongoose');
require('dotenv').config(); 

/**
 * Get database connect URL.
 *
 * Reads URL from MONGODB_URI environment variable 
 *
 * @returns {string} connection URL
 */
const getDbUrl = () => {
  return process.env.MONGODB_URI;
};

/**
 * Connects to database
 */
function connectDB () {
  // Do nothing if already connected
  if (!mongoose.connection || mongoose.connection.readyState === 0) {
    mongoose
      .connect(getDbUrl())
      .then(() => {
        mongoose.connection.on('error', err => {
          console.error(err);
        });

        mongoose.connection.on('reconnectFailed', handleCriticalError);
      })
      .catch(handleCriticalError);
  }
}

/**
 * Handles critical error
 * @param {error} err error
 */
function handleCriticalError (err) {
  console.error(err);
  throw err;
}

/**
 * Disconnects from database
 */
function disconnectDB () {
  mongoose.disconnect();
}

module.exports = { connectDB, disconnectDB, getDbUrl };
