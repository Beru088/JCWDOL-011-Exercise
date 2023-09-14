const express = require("express")
const axios = require("axios")
const router = express.Router()

router.use(express.json())

const base_url = "http://localhost:3000/"

router.get("/", async (req, res) => {
  try {
    const expenses = await axios.get(base_url + "expenses")
    return res.status(200).send({
      message: "Showing expense list",
      data: expenses.data,
    })
  } catch (err) {
    return res.status(500).send({
      message: "expense detail error :" + err.message,
    })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const expenses = await axios.get(base_url + "expenses/" + id)
    return res.status(200).send({
      message: "Showing expense list details",
      data: expenses.data,
    })
  } catch (err) {
    return res.status(500).send({
      message: "expense detail error :" + err.message,
    })
  }
})

router.post("/", async (req, res) => {
  try {
    const { name, nominal, date, category } = req.body
    const data = {
      name,
      nominal,
      date,
      category,
    }
    const expenses = await axios.post(base_url + "expenses", data)
    return res.status(201).send({
      message: "Expense successfully created",
      data: expenses.data,
    })
  } catch (err) {
    return res.status(500).send({
      message: "expense detail error :" + err.message,
    })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { name, nominal, date, category } = req.body
    const data = {
      name,
      nominal,
      date,
      category,
    }
    const expenses = await axios.put(base_url + "expenses/" + id, data)
    return res.status(200).send({
      message: "Expense successfully changed",
      data: expenses.data,
    })
  } catch (err) {
    return res.status(500).send({
      message: "expense detail error :" + err.message,
    })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const expenses = await axios.delete(base_url + "expenses/" + id)
    return res.status(204).send()
  } catch (err) {
    return res.status(500).send({
      message: "expense detail error :" + err.message,
    })
  }
})

router.get("/search", async (req, res) => {
  try {
    const { category, start_date, end_date } = req.query
    const expenses = await axios.get(base_url + "expenses", {
      params: {
        category: category,
        date_gte: start_date,
        date_lte: end_date,
      },
    })

    return res.status(200).send({
      message: `Showing total expense in ${category} category`,
      content: expenses.data,
    })
  } catch (err) {
    return res.status(500).send({
      message: "expense detail error :" + err.message,
    })
  }
})

module.exports = router
