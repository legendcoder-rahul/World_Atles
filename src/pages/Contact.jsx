export const Contact =()=> {

    const handleFormSubmit =(formData)=>{
       // console.log("Form submitted with data:", formData.entries());
        const formInputData= Object.fromEntries(formData.entries())
        console.log("Form input data:", formInputData);
    }

    return <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
            <input type="text" required autoComplete="false"
            placeholder="Enter your name"
            className="form-control"
            name="username"
            />

            <input type="text" required autoComplete="false"
            placeholder="Enter your Email"
            className="form-control"
            name="Email"
            />

            <textarea 
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required autoComplete="false"
            > 
            </textarea>

            <button type="submit" >Send</button>
        </form></div>
        
    </section>
}