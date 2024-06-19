import React from 'react'
import Form from '../Components/Form'
import { useContextState } from '../Components/utils/global.context'


const Contact = () => {
  const { state } = useContextState()

  return (
    <div className= {`${state.theme} mainPage formTitle`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact