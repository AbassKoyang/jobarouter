import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom';

const Contact = () => {
  const data = useActionData();
  return (
    <div className="contact">
        <h3>Contact Us</h3>

        <Form method='post' action='/help/contact'>
            <label htmlFor="email">
                <span>Your email:</span>
                <input type="email" name='email' required />
            </label>
            <label htmlFor="message">
                <span>Your message:</span>
                <textarea name='message' required></textarea>
            </label>
            <button>Submit</button>
            {data && data.error && <p>{data.error}</p>}
        </Form>
    </div>
  )
}

export const contactAction = async ({request}) => {
  const data = await request.formData();
  // You can log the received data or do whatever you need with it
  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(submission);
  console.log(request);

  //i'm just gonna do a little validation here to to make use of the useActionData Hook to display the error message
  if(submission.message.length < 10){
    return  {error: "Message must be at least 10 characters long"};
  }

  // Normally this data is supposed to be sent to an api but i'm just gonna redirect the user
  // back to the homepage for simplicity purposes
  return redirect('/');
}

export default Contact