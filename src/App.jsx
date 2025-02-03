import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'

function App() {
  const [contador, setContador] = useState(0)

  const IncrementarContador = () => setContador(contador + 1)
  const DecrementarContador = () => setContador(contador -1 )
    
  return (
    <>
    <h1 className='text-6xl'>Contador: {contador}</h1>
    <Button text={'Incrementar'} funcionalidad={IncrementarContador}/>
    <Button text={'Decrementar'} funcionalidad={DecrementarContador}/>
    </>
    
  )
}

export default App
