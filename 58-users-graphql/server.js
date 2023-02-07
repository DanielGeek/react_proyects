require('dotenv').config()
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Listening on http://localhost:${process.env.EXPRESS_PORT}`);
});

module.exports = app;
