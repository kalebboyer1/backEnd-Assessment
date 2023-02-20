const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const adviceBtn = document.getElementById("adviceButton")

const accomplishedList = document.querySelector("#accomplished-list")
const plannedList = document.querySelector("#planned-list")

const form = document.querySelector('form')
const input = document.querySelector('input')

const baseURL = 'http://localhost:4000/api/goals'

const makeGoals = (arr) => {
    accomplishedList.innerHTML = ""
    plannedList.innerHTML = ""

    arr.forEach((goalObj,index) => {
        let { goal, accomplished } = goalObj
        let listItem = document.createElement('li')
        if(accomplished){
            listItem.innerHTML = `
                <span>${goal}</span>
                <button onclick="changeGoal(${index})">Unaccomplish</button>
                <button onclick="deleteGoal(${index})">Delete</button>
            `
            accomplishedList.appendChild(listItem)
        } else {
            listItem.innerHTML = `
                <span>${goal}</span>
                <button onclick="changeGoal(${goal})">Accomplish</button>
                <button onclick="deleteGoal(${goal})">Delete</button>
            `
            plannedList.appendChild(listItem)
        }
    })
}


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};




const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => console.log(err))
}


const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => console.log(err))
}


const getGoals = () => {
    axios.get(baseURL)
    .then(response => {
        makeGoals(response.data)
    })
    .catch(err => console.log(err))
}


const addGoal = (evt) => {
    evt.preventDefault()

    let bodyObj = {
        goal: input.value,
        accomplished: false
    }

    axios.post(baseURL, bodyObj)
    .then(response => {
        makeGoals(response.data)
    })
    .catch(err => console.log(err))
}

const changeGoal = index => {
    axios.put(baseURL, { index })
    .then(response => {
        makeGoals(response.data)
    })
    .catch(err => console.log(err))
}

const deleteGoal = index => {
    axios.delete(baseURL + `/${index}`)
    .then(response => {
        makeGoals(response.data)
    })
    .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
adviceBtn.addEventListener('click', getAdvice);
form.addEventListener('Make-The-Commitment', addGoal)
getGoals()
