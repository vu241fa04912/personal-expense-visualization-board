
const express = require("express");
const router = express.Router();

const Expense = require("../models/Expense");

// API 1: Add a new expense
router.post("/", async (req, res) => {
    try {
        const { title, amount, category, date } = req.body;

        const newExpense = new Expense({
            title,
            amount,
            category,
            date
        });

        const savedExpense = await newExpense.save();

        res.status(201).json(savedExpense);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// API 2: Get all expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();

        res.status(200).json(expenses);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
