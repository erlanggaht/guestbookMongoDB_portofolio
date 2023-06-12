import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

const mongoSchema = new Schema({
    expireAt: {
        type: Date,
    },
    name : {
        type : String,
        required : true,
    },
    pesan : {
        type : String,
        maxLength : 100,
        minLength : 1 
    },
    limitComment : {
        type : Number,
        min : 1,
        max : 5
        
    }
})

mongoSchema.index ({ expireAt: 1 }, { expireAfterSeconds: 0 })
const guestbook = mongoose.model('guestbook',mongoSchema)

export default guestbook



