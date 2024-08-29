
export default function Contact() {
    return (
            <>
                <div className="Contact" id="Contact" href="#Contact Us">
                    <div className="Image">
                            <img src="../Img/ContactImg.jpg" />
                    </div>
                    <div className="contactForm">
                            <h2 id="yap">The Wisconsin Engineering Student Society (NSBE) of The University of Wisconsin - Madison would love to hear from you!</h2>

                            <h3 id="contactLabel">Contact:</h3>
                            <p id="ourEmail">By Email: </p>
                            <form className="Form" >
                                    <div id="fname">
                                            <label>First Name:</label>
                                            <input type="text" name="fname" />
                                    </div>
                                    <div id="lname">
                                            <label>Last Name:</label>
                                            <input type="text" name="lname" />
                                    </div>
                                    <div id="email">
                                            <label>Email:</label>
                                            <input type="email" name="email" />
                                    </div>
                                    <div id="subject">
                                            <label>Subject:</label>
                                            <input type="text" name="subject" />
                                    </div>
                                    <div id="message">
                                            <label>Message:</label>
                                            <textarea name="message" rows="3" ></textarea> 
                                    </div>
                                    <div className="submitContainer">
                                            <input type="submit" id="submit"/>
                                    </div>     
                            </form>
                    </div>
                </div>
            </>
    );
}               