//1st class
//Difine UI constant
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// Load all event
loadEventListeners();
function loadEventListeners(){
	//add task event
	form.addEventListener('submit', addTask);
	//remove task event
	taskList.addEventListener('click', removeTask);

	//clear task
	clearBtn.addEventListener('click', clearTask);
	//filter task
	filter.addEventListener('keyup', filtertask);
}


//add task
function addTask(e){
	if(taskInput.value === ''){
		alert('Add a Task');
	}
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
	
	const link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	link.innerHTML = '<i class= "fa fa-remove"></i>';
	
	li.appendChild(link);
	taskList.appendChild(li);
	taskInput.value = '';
	e.preventDefault();
}

//remove task
function removeTask(e){
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm('Are You Sure')){
			e.target.parentElement.parentElement.remove();
		}
	}

}

//clear task
function clearTask(e){
	taskList.innerHTML='';

	e.preventDefault();
}

//filter task
function filtertask(e){
	const text = (e).target.value.toLowerCase();
		
		document.querySelectorAll('.collection-item').forEach(function(task){
			const item = task.firstChild.textContent;
			if(item.toLowerCase().indexOf(text) != -1){
				task.style.display = 'block';
			}
			else{
				task.style.display = 'none';
			}
		})
	}
