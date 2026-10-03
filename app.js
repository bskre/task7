const addTask = (tasks, title) => ([...tasks , {
    id: tasks.length ?
        Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title,
    completed: false
}])

const removeTask = (tasks, taskId) => 
    tasks.filter(t => t.id != taskId)

const completeTask = (tasks, taskId) =>
  tasks.map(t =>
    t.id == taskId ? { ...t, completed: true } : t
  );

const countIncompleteTasks = (tasks) => 
    tasks.filter(t => t.completed == false).length

const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));
const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));
console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));