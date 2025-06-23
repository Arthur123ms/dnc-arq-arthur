import { useContext } from "react"

import { Link } from "react-router-dom"

// assets
import './Footer.css'
import Logo from '../../assets/dnc-logo 2.svg'
import Brasil from '../../assets/brasil.svg'
import USA from '../../assets/usa.svg'
import linckedin from '../../assets/linckedin.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'



//CONtext
import { AppContext } from "../../contexts/AppContext"
import Button from '/Users/Arthur Magalahães/REACT.Js/dnc-arq-arthur/src/components/Button/Button'

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguages = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="display-flex  jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo" />
                        <p className="gray-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>

                        <div className="display-flex  social-links">
                            <a href="https://google.com" target="_blank">
                                <img src={facebook} />
                            </a>

                            <a href="https://google.com" target="_blank">
                                <img src={twitter} />
                            </a>

                            <a href="https://google.com" target="_blanc">
                                <img src={linckedin} />
                            </a>

                            <a href="https://google.com" target="_blank">
                                <img src={instagram} />
                            </a>
                        </div>
                    </div>

                    <div className="display-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="contact">{appContext.languages[appContext.language].menu.contact}</Link></li>

                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="gray-1-color"> R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="gray-1-color"> suporte@escoladnc.com.br</p>
                            <p className="gray-1-color"> (19) 99187-4342</p>


                        </div>


                    </div>


                </div>

                <div className="display-flex jc-space-between footer-copy">
                    <p className="gray-1-color">Copyright © DNC - 2024</p>
                    <div className="lang-area display-flex">
                        <Button buttonStyle="unstyled" >
                            <img src={Brasil} height="29px" onClick={() => changeLanguages('br')} />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguages('en')}>
                            <img src={USA} height="29px" />
                        </Button>


                    </div>

                </div>


            </div>






        </footer>
    )
}

export default Footer
