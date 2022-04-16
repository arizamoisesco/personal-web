import React from 'react';
import ilustration from  '../imgs/prueba.svg'
import Form from './contact.form'

const Header = () => {
    return(
        <header className='bg-gray-300'>
            <div className='container mx-auto p-12 max-w-4xl'>
                <div className='flex justify-center items-center'>
                    <div className='flex-1'>
                        <h1 className=' font-bold text-purple-700 text-6xl'>Hola Soy Moises Ariza</h1>
                        <p className='text-xl'>Formador en desarrollo web fullstack y desarrollador backend</p>
                    </div>
                    
                    <img src={ilustration} alt="Hombre futurista" style={{height: "300px"}}/>
                </div>
                <div>
                    <Form/>
                </div>
            </div>
        </header>
    )
    
}

export default Header
