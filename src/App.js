import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

const [tasks, setTask] = useState([
  {
    id: 1,
    title: 'Automehanicar',
    reminder: false
  },
  {
    id: 2,
    title: 'Sastanak',
    reminder: true
  }
])

  return (
    <div className = 'container'>
      <Header title = 'Task tracker'/>
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
