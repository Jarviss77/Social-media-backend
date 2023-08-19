import User from '../models/user.models.js';
import { io } from '../app.js';

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id)=> findById(id))
        );
        
        const FormatedFriends = friends.map(
            
            ({_id, FirstName, LastName, occupation, PicturePath, location}) => {

                return {_id, FirstName, LastName, occupation, PicturePath, location};
        }
        );

        res.status(200).json(FormatedFriends);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addRemoveFriend = async (req, res) => {
    try {

        const {id, friendId} = req.params;
        const user  = await User.findById(id);

        if(user.friends.includes(friendId)){
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        }else{
            user.friends.push(friendId);
            friend.friends.push(id);

            io.emit("NewFriends", {id, friendId});

        }

        await user.save();
        await friend.save();

        const friends  = await Promise.all(
            user.friends.map((id) => findById(id))
        );

        const FormatedFriends = friends.map(
            
            ({_id, FirstName, LastName, occupation, PicturePath, location}) => {

                return {_id, FirstName, LastName, occupation, PicturePath, location};
        }
        );
        res.status(200).json(FormatedFriends);
    } catch (error) {
        res.status(404).json({ error: error.message });

    }

}
