import React from 'react'
import { useContextState } from '../Components/utils/global.context'



const Detail = () => {
  const { state } = useContextState()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (

    <div> className= {state.theme}
      <h1>Detail Dentist id </h1>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
    
  )
}

export default Detail