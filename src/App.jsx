import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review project brief', category: 'Planning', done: true },
    { id: 2, title: 'Prepare production build', category: 'Development', done: false },
    { id: 3, title: 'Test deployed application', category: 'Testing', done: false },
  ])

  const completed = tasks.filter((task) => task.done).length

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  function addTask() {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: `New task ${tasks.length + 1}`,
        category: 'General',
        done: false,
      },
    ])
  }

  return (
    <main className="app">
      <header className="header">
        <div>
          <span className="logo">TaskFlow</span>
          <p className="eyebrow">PROJECT DASHBOARD</p>
          <h1>Keep your work moving.</h1>
          <p className="intro">
            Organize your priorities, track progress, and keep today's work
            in one place.
          </p>
        </div>

        <button className="add-button" onClick={addTask}>
          + Add task
        </button>
      </header>

      <section className="stats">
        <div className="stat">
          <span>Total tasks</span>
          <strong>{tasks.length}</strong>
        </div>
        <div className="stat">
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>
        <div className="stat">
          <span>Remaining</span>
          <strong>{tasks.length - completed}</strong>
        </div>
      </section>

      <section className="task-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TODAY</p>
            <h2>Your tasks</h2>
          </div>
          <span className="progress">
            {completed} of {tasks.length} completed
          </span>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <button
              className={`task ${task.done ? 'done' : ''}`}
              key={task.id}
              onClick={() => toggleTask(task.id)}
            >
              <span className="checkbox">{task.done ? '✓' : ''}</span>
              <span className="task-copy">
                <strong>{task.title}</strong>
                <small>{task.category}</small>
              </span>
              <span className="status">
                {task.done ? 'Completed' : 'Open'}
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App