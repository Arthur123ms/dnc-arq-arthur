import { useState, useEffect, useContext } from 'react'
import './ProjectList.css'

// assests 
import Deslike from '../../assets/deslike.svg'
import Like from '../../assets/like.svg'


// utils
import { getApiData } from '../../services/apiServices'

import Button from '../button/Button'

import { AppContext } from '../../contexts/AppContext'

function ProjectList() {
    const handleSavedProject = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }
    const appContext = useContext(AppContext)
    const [projects, setProjects] = useState([])
    const [favProjects, setFavProject] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            }
            catch {
                setProjects([])
            }
        }
        fetchData()

    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if(savedFavProjects) {
            setFavProject(savedFavProjects)
        }

    }, [])

    return (
        <div className='project-section'>
            <div className='project-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>

            </div>

            <div className='project-grid'>
                {
                    projects ?
                        projects.map((project) => (
                            <div key={project.id} className='project-card display-flex jc-center al-center fd-column' >
                                <div className='thumb tertiary-background '
                                    style={{ backgroundImage: `url(${project.thumb})` }}>

                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle="unstyled" onClick={() => handleSavedProject(project.id)}>
                                    <img src={favProjects.includes(projects.id) ? Deslike : Like} height="20px" />
                                </Button>
                            </div>
                        ))
                        :
                        null
                }
            </div>
        </div>
    )
}

export default ProjectList 