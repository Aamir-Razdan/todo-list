// Seleoctors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');


//Event Listeners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
 


//Function 

function addTodo(event){
    
    // this is for the holding the refresh of browser
    //Prevent form from submitting
    event.preventDefault();

   // Todo DIV
   const todoDiv=document.createElement('div');
   todoDiv.classList.add('todo');

   //Create LI
   const newTodo=document.createElement('li');
   newTodo.innerText=todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);


//    cheak mark button
   const completedButton=document.createElement('button');
   completedButton.innerHTML='<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   
   todoDiv.appendChild(completedButton);
   
   // check trash button
   const trashButton=document.createElement('button');
   trashButton.innerHTML='<i class="fas fa-trash "></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
   
   // Append to list
   todoList.appendChild(todoDiv);

    //clear todo Input value

    todoInput.value="";

}


function deleteCheck(event){
    // event.preventDefault();
    const item=event.target;
    if(item.classList[0]==="trash-btn"){
         //delete todo
        const todo=item.parentElement;
         //this is for animation
        todo.classList.add('fall'); 
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
        // todo.remove();

    }
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display='flex';
                }else{
                    todo.style.display='none';
                }
                break;
        }
    });
}