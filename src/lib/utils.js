module.exports = {
    formatContact(contact) {
        function setAge(day, month, year) {
            const today = new Date()
            let age = today.getFullYear() - year
            const countMonth = (today.getMonth() + 1) - month
            if (countMonth < 0 || countMonth == 0 && today.getDate() < day) {
                age = age - 1
            }
            return age
        }
        let {gender, birthday} = contact
        let formattedGender = ""
        if (gender === "M") formattedGender = "Masculino"
        if (gender === "F") formattedGender = "Feminino"
        const birthdayArray = birthday.split("-")
        const month = birthdayArray[1]
        const formattedBirthday = `${birthdayArray[2]}/${birthdayArray[1]}/${birthdayArray[0]}`
        const age = setAge(birthdayArray[2], birthdayArray[1], birthdayArray[0])
        const newContact = {...contact, month, formattedBirthday, formattedGender, age}
        return newContact
    }
}