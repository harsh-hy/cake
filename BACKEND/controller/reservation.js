import ErrorHandler from "../error/error.js";
import { sendEmail } from "../utils/emailSender.js"; // Import your email sending function

// Controller function to handle reservation creation
export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return res.status(400).json({ message: "Please fill all fields in the reservation form" });
    }

    try {
        // Return a static success response
        res.status(201).json({
            success: true,
            message: "Reservation successfully placed!",
            reservation: { firstName, lastName, email, phone, time, date }
        });
    } catch (error) {
        return next(error);
    }
};
