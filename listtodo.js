var newTodo = document.getElementById("new-item");
;
        var btnAddTodo = document.getElementById("btn-add-todo");

        btnAddTodo.addEventListener('click',addTodo);
        
            var keytodo="keytodo";
      

            var todoString = sessionStorage.getItem(keytodo);
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
                }
                
                render();
                
                sessionStorage.setItem(keytodo,JSON.stringify(todo));
                newTodo.value = '';
            }

            function deleteTodo(a){
                var removeLi = document.getElementById('li-map-'+a+'');
                var xxx = removeLi.value
                todo.splice(a,1);
                sessionStorage.setItem(keytodo,JSON.stringify(todo));
                render();
            }

            // list by map arr---------------------------------------------------------------------
            function render(){
                var contenL1 = document.getElementById('todo-list-map');
            var arrTodoHtml =todo.map(function(item,i){
                return '<li id ="li-map-'+i+'">' + item + '  ' + '<button onclick="deleteTodo('+i+')">Delete</button></li>';
            });
            var content = arrTodoHtml.join('');
            contenL1.innerHTML=content;
            }
            render(); 