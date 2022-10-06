import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    gameDescription: {
        type: String,
        required: true
    },
    yearReleased: {
        type: int,
        required: true
    },
});

const User = mongoose.model('user', UserSchema);

export default User;