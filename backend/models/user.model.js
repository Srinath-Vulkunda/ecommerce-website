import React from 'react';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter your name"]
    },
    email: {
        type: String,
        required: [true,"Please enter your email"],
        unique: true,
        lowercase: true,
        trim:true
    },
    password: {
        type: String,
        required: [true,"Please enter your password"],
        minlength: [6,"Password must be at least 6 characters"]
    },
    cartItems: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        }
    ],
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
}, { timestamps: true });

const User=mongoose.model("User", userSchema);

//pre-save middleware to hash password
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(err){
        next(err);
    }
});

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

export default user;