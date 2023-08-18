import mongoose from 'mongoose'

const storySchema = mongoose.Schema(
    {
        userId : {
            type: String,
            required: true,
        },
        ContentPath: String,
        Description: String,
        Expires: {
            type: Date,
            default: Date.now + 24*60*60*1000,
        },
    },
    {timestamps: true}
);

const Story = mongoose.model("Story", storySchema);

export default Story;





