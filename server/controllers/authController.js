const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExit = await User.findOne({ email });
        if (userExit) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ _id: newUser._id, email: newUser.email });
    } catch (error) {
        res.status(500).json({ message: `registration failed ${error.message}` });
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ user: { _id: user._id, email: user.email }, token });
    } catch (error) {
        res.status(500).json({ message: `login failed :  ${error.message}` });
    }

}

exports.CheckRoute = async (req, res) => {
    res.status(200).json({ message: "Protected Route" });
}