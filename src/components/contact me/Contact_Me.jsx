import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTextArea, setInputTextArea] = useState('');

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

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_k55x2x2', 'template_cw9tcds', form.current, 'uf7j5ZFHiK2ynoUNL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section className='flex flex-col items-center mt-10 dark:text-slate-50 text-start'>
            <h2 className='text-2xl underline decoration-teal-500 decoration-2'>Contact me</h2>

            <form ref={form} onSubmit={sendEmail} className='w-1/2 mt-5 flex flex-col space-y-6 dark:text-gray-800'>
                <input className='py-1' type="text" placeholder='Name' name="user_name" value={inputName} onChange={handleInputName} />
                <input className='py-1' type="email" placeholder='e-m@il' name="user_email" value={inputEmail} onChange={handleInputEmail} />
                <textarea placeholder='Message' name="message" value={inputTextArea} onChange={handleinputTextArea} />
                <div className='flex justify-center'>
                    <button type="submit" value="Send" className='px-2 py-1 rounded-sm border dark:text-slate-50 border-slate-100 hover:bg-teal-500 hover:border-none transition duration-300 ease-out'>Send e-m@il</button>
                </div>
            </form>
        </section>
    )
}

export default ContactMe