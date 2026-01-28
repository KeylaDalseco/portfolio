// import { useState } from 'react'
import imageMar from '../img/imageMar.jpg';
// import '../styles/sectionIntro.css';

function SectionIntro() {
  return (
    <section className='section-intro w-screen'>
      <img src={ imageMar } alt='foto-do-mar' className=' imagem-mar w-full h-full opacity-70 relative' />
      <div className='text-red-700'>testando</div>
    </section>
  )
}

export default SectionIntro;