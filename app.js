const animalDiv = document.getElementById("animal-div")
const animalButton = document.getElementById("show-animal")
const powerDiv = document.getElementById("power-div")
const powerButton = document.getElementById("show-power")
const skillsDiv = document.getElementById("skills-div")
const skillsButton = document.getElementById("show-skills")

animalButton.addEventListener("click", () => {
    animalDiv.classList.toggle('hidden')
})

powerButton.addEventListener("click", () => {
    powerDiv.classList.toggle('hidden')
})

skillsButton.addEventListener("click", () => {
    skillsDiv.classList.toggle('hidden')
})