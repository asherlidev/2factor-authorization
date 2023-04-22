import mongoose  from "mongoose"

export default async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");
        console.log("mongodb connected");
    }catch(e){
        console.log(e)
    }

}