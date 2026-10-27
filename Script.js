const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function tambahTugas() {
    const namaTugas = taskInput.value.trim();

    if (namaTugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    span.textContent = namaTugas;
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete-button";

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.append(checkbox, span, deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addButton.addEventListener("click", tambahTugas);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        tambahTugas();
    }
});