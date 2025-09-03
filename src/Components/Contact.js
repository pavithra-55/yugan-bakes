import React from 'react';
import './css/Contact.css';
function Contact(props) {
    return (
        <div className='container margin-top'>
            <h3 className='text-center'>Contact Me</h3>
            <form className='container mb-3'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingName" placeholder="eg. Jhon Mathew" />
                    <label for="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    );
}

export default Contact;