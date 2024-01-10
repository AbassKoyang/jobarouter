import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <h3>Contact Us</h3>

        <form>
            <label htmlFor="email">
                <span>Your email:</span>
                <input type="email" name='email' required />
            </label>
            <label htmlFor="message">
                <span>Your message:</span>
                <textarea name='message' required></textarea>
            </label>
            <button type='button'>Submit</button>
        </form>
    </div>
  )
}

export default Contact