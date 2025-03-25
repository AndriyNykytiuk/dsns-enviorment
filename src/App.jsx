import React from 'react'
import Header from './components/Header'
import Body from './Body'
import Footer from './components/Footer'
import AutorisatComponent from './components/AutorisatComponent'
import { SelectionProvider } from './SelectionProvider'

const App = () => {
  return (
    <>
   <SelectionProvider>
      <div>
        
        <AutorisatComponent/>
        {/*
        <Header/><Body/>*/}
        
      </div>
   </SelectionProvider> 
    </>
  )
}

export default App