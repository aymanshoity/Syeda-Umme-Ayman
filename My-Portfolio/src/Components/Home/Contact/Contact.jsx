
import { ValidationError, useForm } from '@formspree/react';
import backgroundImage from '../../../assets/pic11.jpeg'
import Swal from 'sweetalert2';

const Contact = () => {
    const [state, handleSubmit] = useForm("maygrvge");
    if (state.succeeded) {
        Swal.fire({
            title: "Good job!",
            text: "Your message has been sent!",
            icon: "success"
          });
    }

    
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="hero-content text-center py-6 bg-[#B0578D] text-[#FFE4D6]">

                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Dhaka, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>01973507152</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>aymanShoity@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <div className="pl-8">
                        
                        <form onSubmit={handleSubmit}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFE4D6]">Your Name</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name" className="input input-bordered text-black" required
                                />
                                <ValidationError
                                    prefix="Your Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email" className="label">
                                    <span className="label-text text-[#FFE4D6]">Email</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="email" className="text-black input input-bordered" required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFE4D6]">Message</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required className="textarea textarea-bordered text-black" placeholder="Type your Message"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-[#B0578D] bg-[#FACBEA]" type="submit" disabled={state.submitting}>
                                    Send
                                </button>

                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;