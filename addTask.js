function saveTask(e){
    e.preventDefault()
    const value = document.querySelector("#taskName").value
    const status = document.querySelector("#taskStatus").value

    window.location = "index.html?taskName=" + value + "&taskStatus=" + status
}