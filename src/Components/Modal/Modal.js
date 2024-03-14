import React from 'react'
import styles from './Modal.module.css'
import iconList from '../../Assets/icon-success.svg'

function Modal({onCloseModal,email}) {

    const handleDismiss = () => {
        onCloseModal();
    }

  return (
    <div className={styles.container}>
        <div className={styles.success}>
              <div className={styles.success_content}>
                <div>
                    <img src={iconList} alt="success" />
                </div>
                <div>
                    <h1>Thanks for Subscribing!</h1>
                </div>
                <div>
                    <p>
                        A confirmation mail has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription. 
                    </p>
                </div>
                <div className="dismiss-message">
                        <button type='button' onClick={handleDismiss}>Dismiss Message</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Modal