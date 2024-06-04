import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
    <header>
            <h1 id="Welcome">Welcome to CSS test page ! </h1>
            <hr></hr>
        </header>
<div class="box" id="box1">
            <h2>Div 1 </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed fugiat laboriosam id quia 
                asperiores quis, porro commodi nesciunt facere beatae 
                quaerat laborum aliquid voluptatem nisi, dolores voluptate placeat ea.</p>
        </div>

    </>
  )
}

export default App
