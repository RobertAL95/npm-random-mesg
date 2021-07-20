const messages = [
    "Robert",
    "Ana",
    "Nicolay",
    "Diego",
    "Calorine",
    "Paulina",
    "Laura"
];

const randomMsg = () => {
    const message =
        messages[Math.floor(Math.random() * messages.length)];
    console.log(message);

};

module.exports = {
    randomMsg
};