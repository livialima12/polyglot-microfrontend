import React, { useEffect, useState } from 'react';

const App = () => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    window.addEventListener('nomedoevento', (event:any) => {
      updateTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ])
    })
  }, []);

  return (
    <div>
      <p>Componente react</p>
    </div>
  )
}

export default App