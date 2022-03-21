const express= require("express");
const { cookie } = require("express/lib/response");

const mongoose= require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://pk_123:pk_123@cluster0.uzwey.mongodb.net/booklib?retryWrites=true&w=majority");
};

const app= express();

app.use(express.json());

const userSchema= mongoose.Schema(
    {
        firstName:{type:String,required:true,},
        lastName:{type:String,required:false},
        age:{type:Number,required:true,},
        email:{type:String,required:true,unique:true,},
        profileImages:{type:Array,required:true},

    },
    {
        versionKey:false,
        timeStamps:true,
    }
);

const User= mongoose.model("user",userSchema);

const bookSchema=mongoose.Schema(
    {
        likes:{type:Number,},
        coverImage:{type:String, required:true,},
        content:{type:String,required:true},

    },
    {
        versionKey:false,
        timeStamps:true,
    }
);
const Book = mongoose.Schema("book",bookSchema);


const publicationSchema=mongoose.Schema(
    {
       name:{type:String,required:true}
        

    },
    {
        versionKey:false,
        timeStamps:true,
    }
);
const Publication = mongoose.Schema("book",publicationSchema);
const commentSchema=mongoose.Schema(
    {
       body:{type:String,required:true}
        

    },
    {
        versionKey:false,
        timeStamps:true,
    }
);
const Comment = mongoose.Schema("book",commentSchema);

app.listen(5000,async function () {
        try {
            await connect();

            console.log("listening port 5431");
        }
        catch (e) {
            console.log("error message :", e);
        }
    })