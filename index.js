const workoutList = document.querySelector("#workout-list")
const workoutURL = "http://localhost:3000/workouts"

fetch(workoutURL)
    .then(response => response.json())
    .then(workouts => workouts.forEach(
        workout => {
            const h2 = document.createElement("h2")
            h2.innerHTML = `
                <a href="exercises.html?id=${workout.id}">${workout.name}</a>
                `
            workoutList.append(h2)
        }
    ))