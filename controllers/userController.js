// Example user controller
export const getUserProfile = (req, res) => {
    res.json({ message: "User profile fetched successfully!", user: req.user });
};
