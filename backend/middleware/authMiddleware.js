import jwt from 'jsonwebtoken';
import User from '../models/usersAddModel.js';
import expressAsyncHandler from 'express-async-handler';

export const protect = expressAsyncHandler(async (req, res, next) => {
let token;

// Check if Authorization header exists and starts with 'Bearer'
if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
        // Extract token
        token = req.headers.authorization.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user to request, excluding password
        req.user = await User.findById(decoded.id).select('-password');

        next(); // Move to the next middleware or route
    } catch (err) {
        console.error(err);
        res.status(401);
        throw new Error('Not authorized');
    }
}

// No token provided
if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
}
});
