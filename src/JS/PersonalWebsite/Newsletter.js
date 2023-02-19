import React from "react"

export default function Newsletter() {

    const [formData, setFormData] = React.useState({
        email: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevDataForm => {
            return {
                ...prevDataForm,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

    }

    return (
        <>
        <section id="newsletter">
            <div class="newstext">
                <h4>Sign Up For Newsletter</h4>
                <p>Get E-mail updates about my latest news and <span>special offer.</span></p>
            </div>
            <div class="form">
                <input onChange={handleChange} type="email" placeholder="Your Email Address" name="email" value={formData.email}/>
                <button class="normal" onSubmit={handleSubmit}>Sign Up</button>
            </div>
         </section>
        </>
    )
}