const mongoose = require('mongoose');

module.exports = (uri) => new Promise((resolve, reject) => {
  mongoose.connection
    .on('error', error => reject(error))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => resolve(mongoose.connections[0]));

  mongoose.connect(uri,
    { useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
});
