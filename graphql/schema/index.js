const { buildSchema } = require('graphql');
module.exports = buildSchema(`
type Booking{
    _id: ID!
    event : Event!
    user : User!
    createdAt:String!
    updatedAt:String!
}
type Event{
    _id : ID!
    title:String!
    description:String!
    price:String!
    date:String!
    creator:User!
}   
type User{
    _id:ID!
    email:String!
    password:String
    createdEvents:[Event!]

}
type Registration{
    _id :ID!
    fullname:String!
    emailid:String!
    contact:String!
    password:String!
    city:String!
    address:String!
    
}
type AuthData{
    userId: ID!
    token:String!
    tokenExpiration:Int!
}

input EventInput{
    title:String! 
     description:String!
     price:String!
     date:String!

}
input UserInput{
    email:String!
    password:String!
}

input RegisterInput{
    fullname:String!
    emailid:String!
    contact:String!
    password:String!
    city:String!
    address:String!
}
type RootQuery{
events: [Event!]!
bookings:[Booking]!  
login(email: String!,password:String!): AuthData! 
register:[Registration]!
}

type RootMutation{
createEvent(eventInput:EventInput): Event

createUser(userInput:UserInput): User 
bookingEvent(eventId:ID!):Booking!
cancelBooking(bookingId:ID!):Event!
createRegistration(registerInput:RegisterInput):Registration
}

schema {
query: RootQuery
mutation: RootMutation
}
`)