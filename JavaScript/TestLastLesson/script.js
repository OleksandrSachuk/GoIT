(function(window){
    document.addEventListener('DOMContentLoaded',function () {
        var savedData = JSON.parse(localStorage.getItem('todoList')) || {
            'unselected': [],
            'selected': []
        },
                button = document.querySelector('.add-task'),
                todoList = document.querySelector('.todos'),
                todoListChecked = document.querySelector('.todos_checked'),
                newTodoInput = document.querySelector('.new-task'),
                addNewTask = function(){
                    var newTodo = document.createElement('li'),
                            todoCheckBox = document.createElement('input'),
                            todoText = document.createElement('span'),
                            todoDelete = document.createElement('button'),
                            newTodoText = newTodoInput.value.trim();

                    if(newTodoText){
                        newTodo.className = 'todo';
                        todoCheckBox.type = 'checkbox';
                        todoCheckBox.className = 'todo__check';
                        todoCheckBox.onclick = function(){
                            var moveString = this.nextSibling.textContent;
                            if(this.checked){
                                
                                savedData.unselected.splice(savedData.selected.indexOf(moveString),1);
                                savedData.selected.push(moveString);
                                todoListChecked.appendChild(this.parentNode);
                                
                            } else {
                                avedData.selected.splice(savedData.selected.indexOf(moveString),1);
                                savedData.unselected.push(moveString);
                                todoList.appendChild(this.parentNode);
                            }
                            localStorage.setItem('todoList',JSON.stringify(savedData));
                        }

                        todoText.innerHTML = newTodoText;
                        todoText.className = 'todo__text';

                        todoDelete.innerHTML = 'Delete';
                        todoDelete.className = 'todo__delete';
                        todoDelete.onclick = function(){
                            var delString = this.previousSibling.textContent;
                            if (this.parentNode.querySelector('.todo_checked').checked) {
                                savedData.selected.splice(savedData.selected.indexOf(delString),1);
                            } else {
                                savedData.unselected.splice(savedData.unselected.indexOf(delString),1);
                            };
                            localStorage.setItem('todoList',JSON.stringify(savedData));
                            this.parentNode.outerHTML = '';
                        };
                        newTodo.appendChild(todoCheckBox);
                        newTodo.appendChild(todoText);
                        newTodo.appendChild(todoDelete);
                        todoList.appendChild(newTodo);
                        savedData.unselected.push(newTodoText);
                        localStorage.setItem('todoList',JSON.stringify(savedData));

                        newTodoInput.value = '';
                    } else {
                        alert('Input something');
                    }
                };
        newTodoInput.onkeypress = function(event){
            if(event.keyCode == 13){
                addNewTask();
            }
        };
        button.onclick = addNewTask;
    });
})(window);