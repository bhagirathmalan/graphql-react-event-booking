const Registration = require('../../models/reg')

const { transformRegistration } = require('./merge');


module.exports = {
    createRegistration: async(args) => {
    

    const registration = new Registration({
        fullname: args.registerInput.fullname,
        emailid: args.registerInput.emailid,
        contact: args.registerInput.contact,
        password: args.registerInput.password,
        city: args.registerInput.city,
        address: args.registerInput.address
    });
    let createdRegistration;
    try {
        const result = await registration.save()
        createdRegistration = transformRegistration(result);
        return createdRegistration;
    } catch (err) {

        console.log(err);
        throw err;
    }

    }
}