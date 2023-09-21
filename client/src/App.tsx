// import { useState } from 'react'
import './App.css'
import Module from './components/Module'
import moduleData from './data/moduleData'
import './components/Module.css'


function App() {
  const Modules = moduleData.map((item) => {
    return (
      <div className='module'>
        <Module title={item.title} image={item.image} />
      </div>
    )
  })


  return (
    <div className='container'>
      <div className='sidebar'>
        Hi
      </div>
      <div className='modules'>
        {Modules}
      </div>
    </div>
  )
}

export default App
