(function (window) {
    document.addEventListener('DOMContentLoaded', function () {
        var savedData = JSON.parse(localStorage.getItem('todoList')) || {
                    'unselected': [],
                    'selected': []
                },
            button = document.querySelector('.add-task'),
            todoList = document.querySelector('.todos'),
            todoListChecked = document.querySelector('.todos_checked'),
            newTodoInput = document.querySelector('.new-task');

        newTodoInput.onkeypress = function (event) {
            if (event.keyCode == 13) {
                addNewTask();
            }
        };

        var addNewTask = function (text, isChecked) {
            if(typeof text == 'string') {
                var newTodoText = text,
                    isNew = false;
            }
            else {
                var newTodoText = newTodoInput.value.trim(),
                    isNew = true;
            }

            if (newTodoText) {
                var newTodo = document.createElement('li'),
                    todoCheckbox = document.createElement('input'),
                    todoText = document.createElement('span'),
                    todoDelete = document.createElement('button');

                newTodo.className = 'todo';
                todoCheckbox.type = 'checkbox';
                todoCheckbox.className = 'todo__check';
                todoCheckbox.onclick = function () {
                    var moveString = this.nextSibling.textContent;
                    if (this.checked) {
                        savedData.unselected.splice(savedData.unselected.indexOf(moveString), 1);
                        savedData.selected.push(moveString);
                        todoListChecked.appendChild(this.parentNode);
                    }
                    else {
                        savedData.selected.splice(savedData.selected.indexOf(moveString), 1);
                        savedData.unselected.push(moveString);
                        todoList.appendChild(this.parentNode);
                    }
                    localStorage.setItem('todoList', JSON.stringify(savedData));
                };
                if (!isNew && isChecked) {
                    todoCheckbox.checked = true;
                }

                todoText.innerHTML = newTodoText;
                todoText.className = 'todo__text';

                todoDelete.innerHTML = 'Delete';
                todoDelete.className = 'todo__delete';
                todoDelete.onclick = function () {
                    var delString = this.previousSibling.textContent;
                    if(this.parentNode.querySelector('.todo__check').checked) {
                        savedData.selected.splice(savedData.selected.indexOf(delString), 1);
                    }
                    else {
                        savedData.unselected.splice(savedData.unselected.indexOf(delString), 1);
                    }
                    localStorage.setItem('todoList', JSON.stringify(savedData));
                    this.parentNode.outerHTML = '';
                };

                newTodo.appendChild(todoCheckbox);
                newTodo.appendChild(todoText);
                newTodo.appendChild(todoDelete);
                if(isNew) {
                    todoList.appendChild(newTodo);
                    savedData.unselected.push(newTodoText);
                    localStorage.setItem('todoList', JSON.stringify(savedData));
                    newTodoInput.value = '';
                }
                else {
                    if(!isChecked) {
                        todoList.appendChild(newTodo);
                    }
                    else {
                        todoListChecked.appendChild(newTodo);
                    }
                }
            }
        };
        button.onclick = addNewTask;

        savedData.unselected.forEach(function(item) {
            addNewTask(item, false);
        });
        savedData.selected.forEach(function(item) {
            addNewTask(item, true);
        });
    });
})(window);