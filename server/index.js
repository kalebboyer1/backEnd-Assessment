const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { getAdvice } = require('./controller')

app.get("/api/advice", getAdvice);

let namesArr = [
    {
        fullName: "Draden Boyer"
    },
    {
        fullName: "Max Smith"
    },
    {
        fullName: "Mckay Brewer"
    }
]

const { getName } = require('./controller')

app.get('/api/name', getName);


app.listen(4000, () => console.log("Server running on 4000"));
