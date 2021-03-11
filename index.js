const workoutList = document.querySelector("#workout-list")
const workoutURL = "http://localhost:3000/workouts"

fetch(workoutURL)
    .then(response => response.json())
    .then(workouts => workouts.forEach(
        workout => {
            const firstCard = document.createElement("div")

            const h2 = document.createElement("h2")

            firstCard.className = "workout-card"

            firstCard.innerHTML = `
                <a href="exercises.html?id=${workout.id}">${workout.name}</a>
                <h3>Difficulty: ${workout.difficulty}</h3>
                `
            workoutList.append(firstCard, h2)
        }
    ))