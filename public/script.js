var selectedRow = null;

//showing alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

//clearing fields
function clearFields(){
    document.querySelector("#plantName").value = "";
    document.querySelector("#waterTime").value = "";
    document.querySelector("#sunTime").value = "";
}

//adding plants
document.querySelector("#plant-log").addEventListener("submit", (e) =>{
    e.preventDefault();

    //form values
    const plantName = document.querySelector("#plantName").value;
    const waterTime = document.querySelector("#waterTime").value;
    const sunTime = document.querySelector("#sunTime").value;


    //validate
    if(plantName == "" || waterTime == "" || sunTime == ""){
        showAlert("Fill out all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#plant-log");
            const row = document.createElement("tr");
    
            row.innerHTML = `
            <tr>
                <td>${plantName}</td>
                <td>${waterTime}</td>
                <td>${sunTime}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            </tr>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Plant Added", "success");
        }
    
    
        else{
            selectedRow.children[0].textContent = plantName;
            selectedRow.children[1].textContent = waterTime;
            selectedRow.children[2].textContent = sunTime;
            selectedRow = null;
            showAlert("Plant Info Edited", "info");
        }

        clearFields();
    }
});

//edit
document.querySelector("#plant-log").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#plantName").value = selectedRow.children[0].textContent;
        document.querySelector("#waterTime").value = selectedRow.children[1].textContent;
        document.querySelector("#sunTime").value = selectedRow.children[2].textContent;
    }
});

//deleting plants
document.querySelector("#plant-log").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Plant Deleted", "danger");
    }
});