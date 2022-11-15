import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTextArea, setInputTextArea] = useState('')

    const form = useRef();

    const handleInputName = event => {
        setInputName(event.target.value)
    }

    const handleInputEmail = event => {
        setInputEmail(event.target.value)
    }

    const handleinputTextArea = event => {
        setInputTextArea(event.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k55x2x2', 'template_cw9tcds', form.current, 'uf7j5ZFHiK2ynoUNL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };    
    return (
        <section className='flex justify-center'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <label>Name</label>
                <input type="text" name="user_name" value={inputName} onChange={handleInputName} />
                <label>Email</label>
                <input type="email" name="user_email" value={inputEmail} onChange={handleInputEmail} />
                <label>Message</label>
                <textarea name="message" value={inputTextArea} onChange={handleinputTextArea} />
                <input type="submit" value="Send" />
            </form>
        </section>
    )
}

export default ContactMe