const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getAdvice, getGoals, addGoal, changeGoal, deleteGoal } = require('./controller')

const { getFortune } = require('./controller')



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/advice", getAdvice);

app.get('/api/goals', getGoals);
app.post('/api/goals', addGoal);
app.put('/api/goals', changeGoal);
app.delete('/api/goals/:index', deleteGoal);



app.listen(4000, () => console.log("Server running on 4000"));
