import React from 'react'
import Header from './components/Header'
import Body from './Body'
import Footer from './components/Footer'
import AutorisatComponent from './components/AutorisatComponent'
import { SelectionProvider } from './SelectionProvider'

const App = () => {
  const[isAutorised, setAutorised]=React.useState(false)
  const storedData = localStorage.getItem('leaderData');
  console.log(storedData)
  function onAutorise(){
    setAutorised((prevState)=>!prevState)
  }

  return (
    <>
   <SelectionProvider>
      <div>
        {isAutorised ? (<>  
        
        <Header/>
        <Body/>
        </>):(<AutorisatComponent 
              onAutorise={onAutorise}
              />)}
       
        
      
      </div>
   </SelectionProvider > 
    </>
  )
}

export default App