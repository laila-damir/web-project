import "./Contact.css";
import Navbar from "../Home/NavBar.jsx"; 

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact-section">
                <div className="contact-background">
                    <div className="title">
                        <h2>Contact Us</h2>
                    </div>
                </div>

                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
