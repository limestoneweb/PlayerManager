// middleware/auth.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 * Middleware to authenticate users based on JWT token.
 *
 * @param {object} req - The request object containing the headers.
 * @param {object} res - The response object for sending responses.
 * @param {function} next - The next middleware function to be called.
 */
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the token
    const decodedData = jwt.verify(token, process.env.JWT);
    req.userId = decodedData?.id; // Assign user ID to request object

    // Check if user ID is present in the decoded token
    if (!req.userId) {
      return res.status(401).json({ message: "Invalid token" });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default auth;
