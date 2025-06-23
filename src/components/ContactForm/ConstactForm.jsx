import { useEffect, useState, useContext } from 'react'

import './ContactForm.css'

import Button from '/Users/Arthur Magalahães/REACT.Js/dnc-arq-arthur/src/components/Button/Button'

import { AppContext } from '../../contexts/AppContext'

function ContactForm() {
    const appContext = useContext(AppContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState (false)
    const [formSUbmitted, setFormSubmitted] = useState (false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            setFormSubmitLoading(true)
            try{
                const response = await fetch ('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "bbb8f2a6-2e41-48f9-b609-40134efd4ac2"})
                })

                if(response.ok) {
                    setFormSubmitted(true)
                } else {
                    alert('Error ao enviar!')
                }
            } catch (e) {
                alert ('Error: ', e)
            } finally {
                setFormSubmitLoading(false)
            }
        } 
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)

        }

        const isValid = formData.name.trim() &&
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim()

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    return (

        <div className='contact-form display-flex fd-column al-center'>
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className='display-flex form-group'>
                    <input
                        type="text"
                        className='form-input'
                        id='name'
                        name='name'
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        className='form-input'
                        id='email'
                        name='email'
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange={handleChange}
                    />
                </div>
                <div className='display-flex form-group'>
                    <textarea
                        name="message"
                        id="message"
                        className='form-input'
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        onChange={handleChange}
                        rows='4'
                    ></textarea>
                </div>
                <div className='al-center display-flex jc-end form-group'>
                    {formSUbmitted && <p className='text-primary'>{appContext.languages[appContext.language].contact.successMsg}</p>}
                    <Button type="submit" buttonStyle="button-secundary" disabled={!isFormValid || formSubmitLoading}>
                        {appContext.languages[appContext.language].general.send}
                    </Button>
                </div>
            </form>
        </div>

    )
}

export default ContactForm
