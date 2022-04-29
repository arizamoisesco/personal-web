import React, { useEffect, useState } from "react";
// import repos from "../data/repos"
import Repo from '../components/repo'

const Repos = () => {
    
    const [repos, setRepos] = useState([])
    const [reposCount, setReposCount] = useState([])

    useEffect(() => {

        const data = sessionStorage.getItem("repos")
        let myRepos

        if(data){
            myRepos = JSON.parse(data)

            setReposCount(myRepos.length)

            myRepos = myRepos.slice(1,10)
            return setRepos(myRepos)
        }
        

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/arizamoisesco/repos")
            let myRepos = await response.json()
        
            setReposCount(myRepos.length)

            sessionStorage.setItem("repos", JSON.stringify(myRepos))

            myRepos = myRepos.slice(1,10)

            setRepos(myRepos)
        }

        fetchRepos()
        
    }, [])

    return(
        <>
            <section className="max-w-4xl mx-auto mt-12">
                <header className="text-center">
                    <div className = "max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold">Mis Proyectos</h1>
                        <p>Colaboración y contribución de código</p>
                    </div>
                </header>
                <ul className="grid grid-cols-1 px-4 md:grid-cols-2 md:px-2 lg:grid-cols-3 gap-4 my-4">
                    {
                        repos.map((repo) => {
                            return <Repo repo = {repo} key = {repo.id} />
                        })
                    }
                </ul>
                <div className="mt-8 text-center">
                    <a href="https://github.com/arizamoisesco" className="btn" target="_blank" rel="noopener noreferrer">
                        Ver mas en Github ({reposCount})
                    </a>
                </div>
            </section>
            
        </>
        
        
    )
    
}

export default Repos