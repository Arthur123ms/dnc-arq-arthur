import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectList/ProjectList"
import Header from "../components/Header/Header"
import { useContext } from "react"

import { AppContext } from "../contexts/AppContext"



function Projects () {
    const appContext = useContext(AppContext)
    return (
        <>
        <Header/>
        <Banner title={appContext.languages[appContext.language].menu.projects}image="projects.jpg"/>
        <div className="container">
            
            <ProjectList />
        </div>
       
        <Footer/>
        

        </>
    )
}

export default Projects