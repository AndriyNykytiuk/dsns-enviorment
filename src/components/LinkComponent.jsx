import React from 'react'
import { useSelection } from '../SelectionProvider'
import LeadersRender from './LeadersRender'
import RopesRender from './RopesRender'
import BeltRender from './BeltRender'
import GlovesRender from './GlovesRender'
import AdditionalInfo from './AdditionalInfo'

const LinkComponent = () => {
const[list,setList]=React.useState(false)

const {setSelectedItem,setShowAdditionalInfo}=useSelection()

function toogleList(){
    setList(prevList=>!prevList)
}
function handleClick(item){
    setSelectedItem(prev=>(prev===item?null:item))
}

  return (
    <>

        <div className='w-full bg-gray-200 text-center rounded cursor-pointer drop-shadow-xs'           
        onClick={() => {
                     toogleList();
                     setShowAdditionalInfo(true) 
                }}>
            <h3>Випробування</h3>
        </div>
        {list && <div>
            <ul className='text-center transition-all duration-300 ease-in cursor-pointer'>
                <li onClick={()=>handleClick(<LeadersRender/>)}>драбини</li>
                <li onClick={()=>handleClick(<RopesRender/>)}>мотузки</li>
                <li onClick={()=>handleClick(<GlovesRender/>)}>рукавиці</li>
                <li onClick={()=>handleClick(<BeltRender/>)}>ремені</li>
            </ul>
        </div>}
       
    </>
  )
}

export default LinkComponent