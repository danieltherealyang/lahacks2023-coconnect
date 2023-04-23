const cohere = require("cohere-ai")
const express = require("express")
const cors = require("cors")
const {writeToJson } = require("./utils")

require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen()

API_KEY = process.env.COHERE_API_KEY