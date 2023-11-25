
// Create a new task
window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#text");
    const list_el = document.querySelector("#tasks");

   form.addEventListener('submit', (e) => {
    e.preventDefault();

     const tasks = input.value;
// to check if the input is blank so to avoid balnk list
     if (!tasks) {
        alert("please fil out the task");
        return;
     } 
   
// main code to accept input and display it on the webpage
      const task_el = document.createElement("div");
      task_el.classList.add("tasks");
  
      const task_content_el = document.createElement("div");
      // this classlist makes it easy, we just recive the css code with the classname from here
      task_content_el.classList.add("content");
      // task_content_el.innerText = tasks;
  
      task_el.appendChild(task_content_el);

      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = tasks;
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);

      // we want to place actions, either to delete or edit
      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");
// edit code
      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML = "Edit";
  // delete code
      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML = "Delete";

      // now we would append the element to 
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el);
  
      list_el.appendChild(task_el); 

  input.value = "";

//   time to create our edit and delte button really work
      
 task_edit_el.addEventListener('click', () => {
   
   if (task_edit_el.innerText.toLowerCase() == "edit" ){
      task_input_el.removeAttribute("readonly");
      task_edit_el.innerText = "Save";
      task_input_el.focus();
   }else {
      task_input_el.setAttribute("readonly", "readonly");
      task_edit_el.innerText = "Edit";
   }
 });

//  want to write the delete code
task_delete_el.addEventListener('click', () =>{
   list_el.removeChild(task_el);
});

   })
})
  