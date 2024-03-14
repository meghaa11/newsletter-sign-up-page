import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import iconList from '../../Assets/icon-list.svg';
import desktopSignup from '../../Assets/illustration-sign-up-desktop.svg';
import mobileSignup from '../../Assets/illustration-sign-up-mobile.svg';
import Modal from '../Modal/Modal'

const Newsletter = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email,setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value
        setEmail(inputEmail)
        setValidEmail(emailRegex.test(inputEmail) || inputEmail === '')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();       
        if(validEmail){
            console.log('Email submitted correctly');
            setIsModalOpen(true);
        }
        else{
            console.error('Error')
        }

    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setEmail('')
    }

  return isModalOpen ? ( <Modal onCloseModal={handleCloseModal} email={email}/> 
  ) : 
  (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.left_content}>
                    <div className="title">
                        <h1>Stay Updated!</h1>
                    </div>
                    <div className={styles.subtitle}>
                        <p>Join 60,000+ product managers receiving monthly updates on: </p>
                    </div>
                    <div className={styles.list}>
                        <img src={iconList} alt="List" />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div className={styles.list}>
                        <img src={iconList} alt="List" />
                        <p>Measuring to ensure updates are a success</p>
                    </div>
                    <div className={styles.list}>
                        <img src={iconList} alt="List" />
                        <p>And much more!</p>
                    </div>
                    <div className="input">
                        <div className={styles.email_label}>
                            <label htmlFor='email'>Email address</label>
                            {!validEmail && validEmail !== '' && (
                                <p className={styles.warning}>Valid email required</p>
                            ) }
                        </div>
                        <input type="email" name="email" placeholder='email@company.com' value={email} onChange={handleEmailChange} className={!validEmail && validEmail !== '' ? styles.input_error : ''} />
                    </div>
                    <div className="submit-button">
                        <button type='button' onClick={handleSubmit} disabled={!validEmail && validEmail !== ''}>Subscribe to monthly newsletter</button>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <picture>
                    <source media="(min-width: 651px)" srcSet={desktopSignup} />
                    <source media="(max-width: 650px)" srcSet={mobileSignup} />
                    <img src={desktopSignup} alt="Sign Up" />
                </picture>
            </div>
        </div>
    </div>
  )
}

export default Newsletter