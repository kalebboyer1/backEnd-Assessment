module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        return
    },

    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way.", "Do not make extra work for yourself.", "Go take a rest; you deserve it.", "In the end all things will be known.", "Others can help you now."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
        return
    },

    getAdvice: (req, res) => {
        const newAdvice = ["Eat healthier.", "Drink more water.", "Get out and Exercise.", "Train your brain."]

        let randomIndex = Math.floor(Math.random() * newAdvice.length)
        let randomAdvice = newAdvice[randomIndex]

        res.status(200).send(randomAdvice)
        return
    },



    getName: (req, res) => {
        let fullNamesArr = namesArr.map(namesObj => {
            return fullname
        })

        res.status(200).send(newName)
        return
    }
}