// import { useState } from 'react'
import k from '../img/icons8-heroku-96.png';

function Header() {
  return (
    <header className="flex itens-center justify-between">
      <div className="text-white ml-80 mb-10">
      <img src={k} alt="logo" width={100} className='p-2 mt-4' />
      </div>
      <div className="flex justify-around mr-80 p-10 mt-4">
        <a href="#" className="text-lg underline decoration-myColors-tertiary px-8 hover:text-violet-400 transition duration-300  focus:ring text-white">Sobre</a>
        <a href="#" className="text-lg underline decoration-myColors-tertiary px-8 hover:text-violet-400 transition duration-300 focus:ring text-white">Contato</a>
        <a href="#" className="text-lg underline decoration-myColors-tertiary px-8 hover:text-violet-400 transition duration-300 focus:ring text-white">Projetos</a>
        <a href="#" className="text-lg underline decoration-myColors-tertiary px-8 hover:text-violet-400 transition duration-300  focus:ring text-white">Experiência</a>
        <a href="#" className="text-lg">Experiência</a>
      </div>
    </header>
  )
}

export default Header;
