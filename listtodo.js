var newTodo = document.getElementById("new-item");
;
        var btnAddTodo = document.getElementById("btn-add-todo");

        btnAddTodo.addEventListener('click',addTodo);
        
            var keytodo="keytodo";
      

            // var todoString = sessionStorage.getItem(keytodo);
            var todoString = localStorage.getItem(keytodo);
            if(todoString){
                var todo = JSON.parse(todoString);
            }else{
                var todo = [];
            }
            
            
            function addTodo(){
                // get text from inbox
                
                var newText = newTodo.value;
               
                if(newText){
                    todo.push(newText);
                }else{
                    alert('Warning! Please input todosomething...');
                    newTodo.focus();
                }
                
                render();
                
                localStorage.setItem(keytodo,JSON.stringify(todo));
                newTodo.value = '';
            }

            function deleteTodo(a){
                var removeLi = document.getElementById('li-map-'+a+'');
                var xxx = removeLi.value
                todo.splice(a,1);
                localStorage.setItem(keytodo,JSON.stringify(todo));
                render();
            }

            // list by map arr---------------------------------------------------------------------
            function render(){
                var contenL1 = document.getElementById('todo-list-map');
            var arrTodoHtml =todo.map(function(item,i){
                return '<li class ="li-map p-1" id ="li-map-'+i+'">' + item + '  ' + '<button class ="btn btn-secondary" onclick="deleteTodo('+i+')">Delete</button></li>';
            });
            var content = arrTodoHtml.join('');
            contenL1.innerHTML=content;
            }
            render(); 