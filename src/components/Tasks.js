import React from 'react'

const Tasks = ({ tasks }) => {
    return (
        <>
           {tasks.map((task) => {
               <div>
                <h3 key = {task.id}>{task.title}</h3>
               </div>
           })}
        </>
    )
}

export default Tasks
