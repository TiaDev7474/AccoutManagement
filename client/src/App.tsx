import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { GlobalContext } from './Context/GlobalContetx'

function App() {
 

  return (
    <GlobalContext>
      <BrowserRouter>
          
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App
