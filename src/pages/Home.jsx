

import Header from  "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import ProjectList from "../components/ProjectList/ProjectList"



function Home () {
    return (
        <>
        <Header/>
        <div className="container">
             <Hero />
             <ProjectList />
        </div>
       
        <Footer/>
        </>
    )
}

export default Home