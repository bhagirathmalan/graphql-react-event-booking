const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const regsResolver = require('./regs');

const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...bookingResolver,
    ...regsResolver
};


module.exports = rootResolver;