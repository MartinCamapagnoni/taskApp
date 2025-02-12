const addTask = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const task = urlParams.get("task")
    if (task) {
        if (localStorage.getItem("tasks")) {
            const tasks = JSON.parse(localStorage.getItem("tasks"))
            localStorage.setItem("tasks", JSON.stringify([...tasks, task]))
        }
        else {
            localStorage.setItem("tasks", JSON.stringify(([task])))
        }
        window.location = "index.html"
    }
}

window.onload = () => {
    addTask()
    let pageContainer = document.querySelector("#tasksContainer")

    let tasks = []
    if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    console.log(tasks)

    for (let i = 0; i < tasks.length; i++) {
        pageContainer.innerHTML = pageContainer.innerHTML + ` 
        <div class="task-container" style="margin-bottom: 1rem;">
            <div class="taskTop">
                <h3 class="task-name"> ${tasks[i]}</h3>
                <div>
                    <svg data-bs-toggle="modal" data-bs-target="#editModal" style="cursor: pointer;"
                        onclick="editTask('${tasks[i]}', ${i})" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#c94f60"
                            d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718	C43.139,10.526,43.139,9.625,42.583,9.067">
                        </path>
                        <path fill="#f0f0f0" d="M6.905,35.43L5,43l7.571-1.906l0.794-6.567L6.905,35.43z"></path>
                        <path fill="#edbe00" d="M36.032,17.632l-23.46,23.461l-5.665-5.665l23.46-23.461L36.032,17.632z">
                        </path>
                        <linearGradient id="YoPixpDbHWOyk~b005eF1a_OWRPl8fxkRvG_gr1" x1="35.612" x2="35.612" y1="7.494"
                            y2="17.921" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#dedede"></stop>
                            <stop offset="1" stop-color="#d6d6d6"></stop>
                        </linearGradient>
                        <path fill="url(#YoPixpDbHWOyk~b005eF1a_OWRPl8fxkRvG_gr1)"
                            d="M30.363,11.968l4.832-4.834l5.668,5.664l-4.832,4.834L30.363,11.968z"></path>
                        <path fill="#787878" d="M5.965,39.172L5,43l3.827-0.965L5.965,39.172z"></path>
                    </svg>
                    <svg style="cursor: pointer;" onclick="deleteItem(${i})" xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <polygon fill="#f5bc00" points="29,5 29,2 19,2 19,5 9,5 9,11 39,11 39,5"></polygon>
                        <polygon fill="#3dd9eb" points="8.291,11 11.3,42 36.7,42 39.709,11"></polygon>
                        <rect width="36" height="6" x="6" y="8" fill="#3dd9eb"></rect>
                        <rect width="30" height="3" x="9" y="8" fill="#00b3d7"></rect>
                    </svg>
                </div>
            </div>
            <div class="taskBottom">
                <span id="time">2025 02 01</span>
            </div>
        </div>
        `
    }
}

function editTask(taskName, taskIndex) {
    document.getElementById("editTaskInput").value = taskName
    localStorage.setItem("editTask", taskIndex)
}




function deleteItem(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks.splice(id, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    window.location = "index.html"
}

function addNewTask() {
    window.location = "addTask.html"
}

function saveTask() {
    window.location = "index.html"
}

function editTaskModal() {
    const newTaskName = document.getElementById("editTaskInput").value
    const taskId = localStorage.getItem("editTask")
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks[taskId] = newTaskName
    localStorage.setItem("tasks", JSON.stringify(tasks))
    window.location = "index.html"
}
