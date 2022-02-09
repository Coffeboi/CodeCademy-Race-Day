let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = '9.30'
const registeredEarly = false;
let Age = 8;

if (Age > 18 && registeredEarly) {
    raceNumber += 1000
} else if (Age < 18)
    raceNumber < 1000
else {
    raceNumber > 1000
}

if (Age > 18 && registeredEarly) {
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`)
} else if (Age > 18 && !registeredEarly) {
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`)
} else if (Age < 18)
    console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`)
else {
    console.log('Error! See the registration desk.')
}
