import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { GlobalContext } from './Context/GlobalContetx'
import AppRouter from './Routes/AppRouter'

function App() {
 

  return (
    <GlobalContext>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App
