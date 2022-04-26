import React from 'react';
import repos from '../data/repos'

const Repo = (props) => {
    return(
        <li className='flex items-center'>
            <div className='flex-1'>
                <h4 className='text-pink-600 font-bold'>{props.repo.name}</h4>
                <p className='text-sm text-gray-800 overflow-y-hidden' style={{height:"1.5em"}}>{props.repo.description}</p>
            </div>
            <a href={props.repo.html_url} target="_blank" rel='noopener noreferrer'> Ver</a>
        </li>
    )
}

export default Repo
