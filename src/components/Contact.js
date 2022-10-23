import React, { useRef, useState } from 'react'
import emailjs from "emailjs-com";
import { useForm } from 'react-hook-form';

const Contact = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState:{errors}} = useForm();

    const serviceID = "service_ID";
    const templateID = "template_yybu2af";
    const publicKEY = "9F9OMlSvNiXRS9Du0";

    const form = useRef();

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            publicKEY
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, publicKEY) => {
        emailjs.send(serviceID, templateID, variables, publicKEY)
          .then(() => {
              setSuccessMessage("Form sent successfully! I'll be in touch shortly.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      };

  return (
    <div className='contacts'>
        <div className='text-center'>
            <h1>Contact Me</h1>
            <p>Please fill out from and describe your project needs and I will contact you.</p>
            <span className="success-message">{successMessage}</span>
        </div>
        <div className='container'>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
                    {/*NAME INPUT*/}
                    <div className='text-center'>
                    <input
                        type="text" 
                        className='form-control'
                        placeholder='Name'
                        name='name'
                        ref={
                            register({
                              required: "Please enter your name",
                              maxLength: {
                                value: 25,
                                message: "Please enter a name with fewer than 25 characters"
                              }
                            })
                          }
                    />
                    <div className='line'></div>
                    </div>
                    <span className='error-message'>
                        {errors.name && errors.name.message}
                    </span>
                    {/*PHONE INPUT*/}
                    <div className='text-center'>
                    <input
                        id='phone'
                        type="text" 
                        className='form-control'
                        placeholder='Phone Number'
                        name='phone'
                        ref={
                            register({
                              required: "Please enter your phone number",
                            })
                          }
                    />
                    <div className='line'></div>
                    </div>
                    <span className="error-message">
                    {errors.phone && errors.phone.message}
                    </span>
                    {/*EMAIL INPUT*/}
                    <div className='text-center'>
                    <input
                        id='email'
                        type='email' 
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        ref={
                            register({
                              required: "Please provide you email",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid Email!"
                              }
                            })
                          }
                    />
                    <div className='line'></div>
                    </div>
                    <span className="error-message">
                    {errors.email && errors.email.message}
                    </span>
                    {/*SUBJECT*/}
                    <div className='text-center'>
                    <input 
                        id='subject'
                        type='text'
                        className='form-control'
                        placeholder='Subject'
                        name='subject'
                        ref={
                            register({
                              required: "OOPS, you forget to add the subject.",
                            })
                          }
                    />
                    <div className='line'></div>
                    <span className="error-message">
                    {errors.subject && errors.subject.message}
                    </span> 
                    </div>
                </div>
                <div className='col-md-6 col-xs-12'>
                    {/*DESCRIPTION*/}
                    <div className='text-center'>
                    <textarea
                        id='description'
                        type='text' 
                        className='form-control'
                        placeholder='Please briefly describe your project.'
                        name='description'
                        ref={
                            register({
                              required: "Please describe your project needs...",
                            })
                          }
                    ></textarea>
                    <div className='line'></div>
                    </div>
                    <span className="error-message">
                    {errors.description && errors.description.message}
                    </span>
                    <button className='btn-main-offer contact-btn' type="submit">Contact Me</button>  
                </div>
            </div>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
