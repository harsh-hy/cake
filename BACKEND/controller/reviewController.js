import { sendEmail } from "../utils/emailSender.js";

// Controller to get all reviews
const getAllReviews = async (req, res) => {
  try {
    // Return a static response instead of querying the database
    const reviews = [
      { name: "John Doe", content: "Great service!", rating: 5 },
      { name: "Jane Smith", content: "Loved the food!", rating: 4 }
    ];
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to add a new review
const addReview = async (req, res) => {
  const { name, content, rating, email } = req.body;

  // Validation
  if (!name || !content || !rating || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Return a static success response
    res.status(201).json({ message: 'Review added successfully', review: { name, content, rating } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  getAllReviews,
  addReview,
};
