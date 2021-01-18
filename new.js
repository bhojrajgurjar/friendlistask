const list = document.getElementById('list')
const input = document.getElementById('searchbar')
var button = document.getElementById('button');
console.log("todolist")
let todolist = [];
button.addEventListener('click', function (e) {
    var special = document.getElementById('spcial')
    special.style.display = 'inherit';
    e.preventDefault()
    addTOlist();
});
function addTOlist(e) {

    const newToDo = input.value;

    if (!newToDo) return;

    todolist.push({
        text: newToDo
    })
    //console.log(todolist)

    localStorage.setItem("todos", JSON.stringify(todolist))

    listRender();
}

function listRender() {
    list.innerHTML = null;


    const todos = localStorage.getItem("todos");
    todolist = JSON.parse(todos);

    for (let i = 0; i < todolist.length; i++) {

        const item = document.createElement('li')
        item.className = 'list-element'

        const text = document.createElement('p')
        text.innerText = todolist[i].text;

        const icon = document.createElement('i')
        icon.className = 'fa fa-minus-square'
        icon.setAttribute('aria-hidden', "true")
        console.log(icon)

        icon.addEventListener('click', function (e) {
            todolist.splice(i, 1);
            localStorage.setItem("todos", JSON.stringify(todolist))
            listRender();
        })

        list.appendChild(item)
        item.appendChild(text)
        item.appendChild(icon)

    }
}



