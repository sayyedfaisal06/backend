const mongoose = require('mongoose');
const config = require('config');
const FakeDB = require('./FakeDB');

mongoose.connect(
  process.env.mongoURI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  async () => {
    const fakeDB = new FakeDB();
    console.log('Starting populating DB');
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log('DB has been populated!');
  }
);
