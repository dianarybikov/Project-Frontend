const workoutsURL = "http://localhost:3000/workouts/"
const queryParams = new URLSearchParams(window.location.search)
const workoutsId = queryParams.get("id")

const workoutInfo = document.querySelector("#exercise-list")

fetch(workoutsURL + workoutsId)
    .then(response => response.json())
    .then(workouts => {
        workouts.exercises.map(exercise => {

            const workoutCard = document.createElement("div")
    
            workoutCard.className = 'exercise-card'
            workoutCard.innerHTML = `
                <h1>${exercise.name}</h1>
                <h2>Directions: <br>${exercise.description}</h2>
                <h3>Primary Muscles Used: <br>${exercise.primary_muscle}</h3>
                <h4>Length of Time: <br>${exercise.time_duration} minute(s)</h4>
                <br><br>
                <img src="${exercise.image}" alt="${exercise.name} image">
                `
            workoutInfo.append(workoutCard)
            
            document.body.append(workoutCard)
        })

    })


