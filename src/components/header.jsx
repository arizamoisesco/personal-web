import React from 'react';
import ilustration from  '../imgs/professor.svg'
import Form from './contact.form'

const Header = () => {
    return(
        <header className='bg-blue-100  dark:bg-slate-900 w-full rounded-b-lg'>
            <div className='container mx-auto p-12 max-w-4xl'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex-1'>
                        <h1 className=' font-bold text-sky-500 text-6xl'>Hola Soy Moises Ariza</h1>
                        <p className='text-xl dark:text-white '>Formador en desarrollo web fullstack y desarrollador backend</p>
                    </div>
                    
                    <img src={ilustration} alt="Profesor en el tablero" style={{height: "300px"}}/>
                </div>
                <div>
                    <Form/>
                </div>
            </div>
        </header>
    )
    
}

export default Header
