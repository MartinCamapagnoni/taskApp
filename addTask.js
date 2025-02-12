function saveTask(e){
    e.preventDefault()
    const value = document.querySelector("#taskName").value

    window.location = "index.html?task=" + value
}