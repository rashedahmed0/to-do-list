
// step 1 set const name 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// setp 2 use event click handler 
document.getElementById("add-task").addEventListener('click', function () {

    // step 3 check the validation
    if (inputBox.value === '') {
        alert('You must write something');

    }
    else {
        // step 4 create li element 
        let li = document.createElement("li");
        // step 5 set the value of li by the inputBox value
        li.innerHTML = inputBox.value;
        // step 6 use appendchil 
        listContainer.appendChild(li);
        // step 7 create span
        let span = document.createElement('span')
        // step 8 set span innerhtml 
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        //step 9 remove the input text 
        inputBox.value = '';
        saveData()
    }


    // create new  event listener 
    listContainer.addEventListener('click', function (e) {

        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveData()
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove()
            saveData()
        }
    }, false);
})
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask();
