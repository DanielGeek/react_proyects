
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

export const changeValueButton = (idButton, newValueButton) => document.getElementById(idButton).innerHTML = newValueButton;
