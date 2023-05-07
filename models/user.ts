import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email já existe'],
        required: [true, 'Email é necessário']
    },
    username: {
        type: String,
        required: [true, 'Username é necessário'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
        "Username inválido, deve conter entre 8-20 letras e ser único!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);
export default User;