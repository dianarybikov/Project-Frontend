const workoutsURL = "http://localhost:3000/workouts/"
const queryParams = new URLSearchParams(window.location.search)
const workoutsId = queryParams.get("id")

const workoutInfo = document.querySelector("#exercise-list")

fetch(workoutsURL + workoutsId)
    .then(response => response.json())
    .then(workouts => {
        workouts.exercises.map(exercise => {

            const workoutCard = document.createElement("div")
    
            workoutCard.className = 'workout-card'
            workoutCard.innerHTML = `
                <h1>Name: ${exercise.name}</h1>
                <h2>Description: ${exercise.description}</h2>
                <h3>Primary Muscles Used: ${exercise.primary_muscle}</h3>
                <h4>Time Duration: ${exercise.time_duration} minute(s)</h4>
                <img src="${exercise.image}" alt="${exercise.name} image">
                `
            workoutInfo.append(workoutCard)
            
            document.body.append(workoutCard)
        })

    })


