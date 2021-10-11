const Event = require('../../models/event');
const User = require('../../models/user');
const reg = require('../../models/reg');
const Registration = require('../../models/reg');
const { dateToString } = require('../../helpers/date');


const events = async eventIds => {
    try {
        const events = await Event.find({ _id: { $in: eventIds } });
        events.map(event => {
            return transformEvent(event);
        });
    } catch (err) {
        throw err;

    };
    const singleEvent = async eventId => {
        try {
            const event = await Event.findById(eventId);
            return transformEvent(event);
        } catch (err) {
            throw err;
        }
    };

    const user = async userId => {
        try {
            const user = await User.findById(userId);

            return {
                ...user._doc,
                _id: user.id,
                createdEvents: events.bind(this, user._doc.createdEvents)
            };
        } catch (err) {

            throw err;
        }
    }
};
const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        date: dateToString(event._doc.date),
        creator: user.bind(this, event.creator)
    };

};
const transformRegistration = reg => {
    return {
        ...reg._doc,
        _id: reg.id
        
    };

};
const transformBooking = booking => {
    return {
        ...booking.doc,
        _id: booking.id,
        user: user.bind(this, booking._doc.user),
        event: singleEvent.bind(this, booking._doc.event),
        createdAt: dateToString(booking._doc.createdAt),
        UpdatedAt: dateToString(booking._doc.createdAt)


    }
};



exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
exports.transformRegistration = transformRegistration;


// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;