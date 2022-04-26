import React, { useEffect, useState } from "react";
// import repos from "../data/repos"
import Repo from '../components/repo'

const Repos = () => {
    
    const [repos, setRepos] = useState([])

    useEffect(() => {

        const data = sessionStorage.getItem("repos")
        let myRepos

        if(data){
            myRepos = JSON.parse(data)
            myRepos = myRepos.slice(1,12)
            return setRepos(myRepos)
        }
        

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/arizamoisesco/repos")
            let myRepos = await response.json()
        
            sessionStorage.setItem("repos", JSON.stringify(myRepos))

            setRepos(myRepos)
        }

        fetchRepos()
        
    }, [])

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