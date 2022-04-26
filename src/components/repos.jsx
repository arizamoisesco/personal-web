import React from "react";
import repos from "../data/repos"
import Repo from '../components/repo'

const Repos = () => {
    return(
        <>
            <header className="text-center">
                <div className = "max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold">Mis Proyectos</h1>
                    <p>Colaboración y contribución de código</p>
                </div>
            </header>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    repos.map((repo) => {
                        return <Repo repo = {repo} key = {repo.id} />
                    })
                }
            </ul>
        </>
        
        
    )
    
}

export default Repos