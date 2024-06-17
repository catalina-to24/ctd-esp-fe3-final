import React from 'react'
import { useContextState } from './utils/global.context'


const Footer = () => {
  const { state } = useContextState()
  return (
    <footer className= {state.theme}>
        <img src="/images/DH.png" alt='DH-logo' />
        <img src="/images/ico-facebook.png" alt='facebook' />
        <img src="/images/ico-instagram.png" alt='instagram' />
        <img src="/images/ico-whatsapp.png" alt='whatsapp' />
        <img src="/images/ico-tiktok.png" alt='tiktok' />
    </footer>
  )
}

export default Footer
