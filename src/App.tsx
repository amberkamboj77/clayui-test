import './App.css'
import ClayButton from "@clayui/button"

function App() {

  const handleClickButton= () => {
    console.log("Button pressed")
  }

  return (
    <div className='App'>
      Hello world
      <ClayButton onClick={handleClickButton}>Hi</ClayButton>
    </div>
  )
}

export default App
