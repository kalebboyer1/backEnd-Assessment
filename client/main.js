const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const adviceBtn = document.getElementById("adviceButton")
const nameBtn = document.getElementById("nameButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);



const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => console.log(err))
}

fortuneBtn.addEventListener('click', getFortune);


const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => console.log(err))
}

adviceBtn.addEventListener('click', getAdvice);


const getName = () => {
    axios.get("http://localhost:4000/api/name/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => console.log(err))
}

nameBtn.addEventListener('click', getName);