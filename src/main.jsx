import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Post from './components/Post.jsx'
import Sidebar from './components/Sidebar.jsx'
import './index.css'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
    <Sidebar />
    <div className='right'>
    <Header />
      <Post name="Stage 1: Project Proposal" date="03/10/23" document="https://drive.google.com/file/d/1cDVKD8tqvwPl48TttJS6wqBSLU0QHbv9/view?usp=sharing" />
      <Post name="Stage 2: User and Task Analysis" date="07/10/23" document="https://drive.google.com/file/d/1e8SE0QEwX533qaDziHBTLmdxyLQHaFrV/view?usp=sharing" />
      <Post name="Stage 3: First Prototype" date="21/10/23" document="https://drive.google.com/file/d/1_b4rQD2kqOt9KcaMJSzlnNjG8pFSHpzM/view" />
      <Post name="Stage 4: Functional Prototype" date="21/10/23" document="https://drive.google.com/file/d/1ZCJk37RWpI0nQiO8tGDZHVjcQNbE0vLJ/view" />
    </div>
    </div>
  </React.StrictMode>,
)
