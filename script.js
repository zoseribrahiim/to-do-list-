document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todoInput');
    addTodoItem(todoInput.value);
    todoInput.value = '';
});

function addTodoItem(todoText) {
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', this.checked);
    });

    const span = document.createElement('span');
    span.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}
