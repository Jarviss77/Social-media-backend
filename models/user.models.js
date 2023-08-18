import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        FirstName : {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        LastName : {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        Email : {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        Password : {
            type: String,
            required: true,
            min: 5,
        },
        PicturePath : {
            type: String,
            default: "",
        },
        Friends : {
            type: Array,
            default: [],   
        },
        location: String,
        occupation: String,
        viewedprofile: Number,
        impressions: Number,
    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;