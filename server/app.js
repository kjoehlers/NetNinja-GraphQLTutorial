const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connection info
const uri =
  // 'mongodb+srv://mongoKen:5Dolandk_mlab@cluster0-w10yz.mongodb.net/gql-ninja?';
  'mongodb+srv://mongoKen:5Dolandk_mlab@cluster0-w10yz.mongodb.net/gql-ninja?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

// connect to mlab database
// make sure to replace my db string & creds with your own
/* mongoose.connect('mongodb://ninja:test@ds161148.mlab.com:61148/graphql-ninja') */
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// bind express with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
