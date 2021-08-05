import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

const [tasks, setTask] = useState([
  {
    id: 1,
    title: 'Automehanicar',
    time: 'Feb 2nd at 2 PM',
    reminder: false
  },
  {
    id: 2,
    title: 'Sastanak',
    time: 'Nov 11th at 3 PM',
    reminder: true
  }
])

const deleteTask = (id) => {
  console.log('Delete ', id);
  setTask(tasks.filter((task) => task.id !== id));
}

const onToggle = (id) => {
  console.log('Toggle', id);
}

  return (
    <div className = 'container'>
      <Header title = 'Task tracker'/>
      <Tasks 
        tasks = {tasks} 
        onDelete = {deleteTask}
        onToggle = {onToggle}/>
    </div>
  );
}

export default App;
