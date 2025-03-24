import React from 'react'
import Header from './components/Header'
import Body from './Body'
import Footer from './components/Footer'
import { SelectionProvider } from './SelectionProvider'

const App = () => {
  return (
    <>
   <SelectionProvider>
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
   </SelectionProvider> 
    </>
  )
}

export default App