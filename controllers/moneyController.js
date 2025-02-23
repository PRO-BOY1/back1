// Example money controller
export const getMoneyDetails = (req, res) => {
    res.json({
        bank: 10000,
        cash: 5000,
        total: 15000,
    });
};

export const updateMoney = (req, res) => {
    const { bank, cash } = req.body;
    const total = bank + cash;

    res.json({
        message: "Money details updated successfully!",
        bank,
        cash,
        total,
    });
};
