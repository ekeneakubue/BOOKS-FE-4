import React ,{ useId, useState} from 'react'
import { MdOutlineLock, MdOutlineEmail } from "react-icons/md"
import { LuEye } from "react-icons/lu"
import { FaRegEyeSlash } from "react-icons/fa6"
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const baseURL = 'https://bookworm-backend-1.onrender.com';


export default function Login() {
    const navigate = useNavigate();
    const redirectToDashboard = () => {
        navigate("/dashboard");
    };

    const [successmessage, setSuccessmessage]= useState('')
    const [errormessage, setErrormessage]= useState('')
    const [formData, setFormData] = useState(

        {
            email: "",
            password: "",

        }
    );

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false);

    const id = useId()

    // Handle change function
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }


    async function handleSubmit(event) {
        event.preventDefault()

        const formValidation = {}

        const regExp = /^[^\s@]+@[^\s@]+ [a-zA-Z0-9._]\.[^\s@]+$/;

        if (!formData.fullName.trim()) {
            formValidation.fullName = "! Field should not be empty"
        }

        if (!formData.email.trim()) {
            formValidation.email = "! Field should not be empty"
        }
         else if (!regExp.test(formData.email)) {
            formValidation.email = "! Please enter a valid email address"
        }

        if (!formData.password.trim()) {
            formValidation.password = "! Password is required"
        } else if (formData.password.length < 6) {
            formValidation.password = "! Password should be at least 6 characters"

        }

        if (formData.confirmPassword !== formData.password) {
            formValidation.confirmPassword = "! Passwords do not match"
        }

        setErrors(formValidation)

        if (Object.keys(formValidation).length === 0) {
            alert("Signed up successfully!")
        }
        console.log("Form submitted:", formData);
        
    }

    const handleOnClick=async()=>{
        try {
            const response = await axios.post(`${baseURL}/user/login`, {
               email:formData.email,
               passWord:formData.password,
            });

            console.log('Sign Up Response:', response.data);
            setSuccessmessage(response.data.message)
            setErrormessage(response.data.message); 
            redirectToDashboard();
        } catch (error) {
            console.error('Sign Up Error:', error.response.data);
        }
    }
  return (
    <div className={styles.login_page}>
        <div className={styles.login_left}>
            <Link to='/'>
                <div className={styles.login_brand}>
                    <img src="images/full_logo.png" alt="" />
                </div>
            </Link>

            <h2 className={styles.header}>Create an account</h2>
            <p>Choose a preferred Signup method</p>


            <form action="POST" onSubmit={handleSubmit}>                
                <button className={styles.google_btn}>
                    <img src="images/g.png" alt="" />
                    Google
                </button>                    
                
                <div className={styles.or}>
                    <div>
                        <hr />or<hr />    
                    </div>    
                </div>

                <div className={styles.input_container}>
                    <MdOutlineEmail/>
                    <input 
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={formData.email}
                        className={styles.input_box}
                        required
                    />
                </div>
                <div className={styles.input_container}>
                    <MdOutlineLock/>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                        value={formData.password}
                        className={styles.input_box}
                        maxLength={8}
                        required
                    />                    
                    {
                        showPassword ?
                            <LuEye
                                className={styles.eye_icon}
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        :
                            <FaRegEyeSlash 
                                className={styles.eye_icon} 
                                onClick={() => setShowPassword(!showPassword)} 
                            />
                    }
                </div>
                


                <div className={styles.pwd_details}>
                    <div className={styles.remember}>
                        <input type='checkbox'
                            id={id}
                            name='remember'
                            checked={formData.remember}
                            onChange={handleChange}
                            className={styles.checkbox} 
                        />
                        <label htmlFor={id}>
                            Remember me
                        </label>
                    </div>
                    <div className={styles.right_detail}>
                        <Link to = '/forgotpassword'>Forgot password</Link>    
                    </div>    
                </div>  
                <button className={styles.login_button} onClick={handleOnClick}>Login</button>
                <div className={styles.dont_have_account}>
                    <span>Don't have an account? </span>
                    <span>
                        <Link to = '../signup'>Signup</Link>
                    </span>    
                </div>      
            </form>
        </div>
        <div className={styles.login_right}>
            <img src="images/login-pic.png" className={styles.user} alt="woman-reading-a-book" />
                
            <div>
                <div className={styles.title}>Let's Begin</div>
                <p>Open the pages to a world of free reads!</p>
                <div className={styles.page_circ}>
                    <span className={styles.circ}></span>
                    <span className={`${styles.circ} ${styles.active}`}></span>
                </div>
            </div>
        </div>
    </div>
  )
}