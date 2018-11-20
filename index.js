// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    
    completeTask: function() {
      this.complete = true;
    },
    
    logState: function() {
      console.log(`${this.title} has ${this.complete ? " " : " not " }been completed`);
    }

  };
  return task;
}


const task1 = newTask("Celan Cat Litter", "Take all the :poop: out of the litter box");
const task2 = newTask("Do Laundry", ":peeved:")
const tasks = [task1, task2];

task1.logState();
task1.completeTask();
task1.logState();

console.log(tasks)