
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'



function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un react router desde cero</p>
      <Link to="/about">Ir a sobre nosotros</Link>
    </>
  )
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1613629107522117632/Jg6B163F_400x400.jpg" alt="foto de Idanfour" />
      </div>
      <p>¡Hola! Me llamo Miguel Ángel y estoy creando un clon de React Router.</p>
      <Link to='/'>Ir a home</Link>
    </>
  )
}


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<HomePage />}>
            
          </Route>
          <Route path='/about' element={<AboutPage/>}>
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
