const workoutList = document.querySelector("#workout-list")
const workoutURL = "http://localhost:3000/workouts"

fetch(workoutURL)
    .then(response => response.json())
    .then(workouts => workouts.forEach(
        workout => {
            const firstCard = document.createElement("div")
            const secondCard = document.createElement("div")
            const thirdCard = document.createElement("div")
            const fourthCard = document.createElement("div")
            const fifthCard = document.createElement("div")
            const sixthCard = document.createElement("div")
            const h2 = document.createElement("h2")

            firstCard.className = "workout-card"
            secondCard.className = "workout-card"
            thirdCard.className = "workout-card"
            fourthCard.className = "workout-card"
            fifthCard.className = "workout-card"
            sixthCard.className = "workout-card"
            firstCard.innerHTML = `
                <a href="exercises.html?id=${workout.id}">${workout.name}</a>
                `
            workoutList.append(firstCard, h2)
        }
    ))