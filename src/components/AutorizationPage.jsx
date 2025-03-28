import React from 'react'
import Logo from '../img/logo.svg'

const AutorizationPage = ({onAutorise}) => {
    const squadrons = [
        { 
            id: 1, 
            squad: {
                name: "2",
                members: [
                    { id: 2, name: "22" },
                    { id: 3, name: "23" }
                ]
            }
        },
        { 
            id: 2, 
            squad: {
                name: "3",
                members: [
                    { id: 4, name: "23332" },
                    { id: 5, name: "23444" }
                ]
            }
        }
    ]

    const [selectedSquad, setSelectedSquad] = React.useState(null)
    const [selectDepart, setSelectDepart] = React.useState('')

    return (
        <>
            <div className='container mx-auto p-8 flex flex-col bg-[#163f6b] items-center justify-center border shadow-2xl drop-shadow-xl rounded border-[#eeb47d] w-lg'>
               <div className='px-5   w-sm'>
               <div className='flex justify-center'>
                    <img className='w-40' src={Logo} alt="Image" />
                </div>
                <h2 className='text-center text-[#fffff0] mb-2'>авторизуйся</h2>
                <div className='flex flex-col'>
                    <label className='text-center text-[#fffff0] mb-1'>Виберіть загін:</label>
                    <select
                        className="text-center border bg-[#fffff0] rounded mb-3"
                        value={selectedSquad? selectedSquad.id : ''}
                        onChange={(e) => {
                            const squad = squadrons.find(s => s.id === Number(e.target.value))
                            setSelectedSquad(squad)
                            setSelectDepart('') 
                        }}
                    ><option value=""></option>
                        {squadrons.map((squad) => (
                            <option key={squad.id} value={squad.id}>
                                {squad.squad.name}
                            </option>
                        ))}
                    </select>

                    {selectedSquad && (
                        <>
                            <label className='text-center text-[#fffff0] mb-1'>Виберіть частину:</label>
                            <select
                                className="text-center border bg-[#fffff0] rounded"
                                value={selectDepart}
                                onChange={(e) => setSelectDepart(e.target.value)}
                            >
                                <option value=""></option>
                                {selectedSquad.squad.members.map((depart) => (
                                    <option key={depart.id} value={depart.id}>
                                        {depart.name}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}

                    <div className='flex flex-col p-3'>
                        <input type="text" 
                        placeholder='введи логін'
                        className='border bg-[#fffff0] rounded mb-4'
                        />
                         <input type="password" 
                        placeholder='введи пароль'
                        className='border bg-[#fffff0] rounded'
                        />
                    </div>
                    
                </div>
                <input 
                className='mb-7'
                type='checkbox'></input>
                <label className=' text-[#fffff0] '> Я буду тільки дивитися</label>
                
               </div>
               <button onClick={onAutorise} className='p-2 rounded bg-[#eeb47c] '>Авторизуватися</button>
            </div>
        </>
    )
}

export default AutorizationPage
