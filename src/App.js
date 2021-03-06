import { useState } from "react"
import Header from "./components/Header"; 
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";




const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Task 1",
        day:'Feb 5 at 2:20pm',
        reminder:true
    },
    {
        id: 2,
        text: "Task 2",
        day:'Feb 6 at 2:20pm',
        reminder:false
    },
    {
        id: 3,
        text: "Task 3",
        day:'Feb 7 at 2:20pm',
        reminder:true
    },
])

/* -------------------------------- add task -------------------------------- */
const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

/* ------------------------------- Delete task ------------------------------ */
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}

/* ----------------------------- Toggle reminder ---------------------------- */
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder:!task.reminder}:task))
}


  return (
    <div className='container'>
      <Header  onAdd={()=> setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask}
      />
     {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}
        />):(
          'No Task to show'
          )}
    </div>
  );
}




export default App;
