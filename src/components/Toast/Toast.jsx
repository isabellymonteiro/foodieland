import React from 'react'
import ErrorIcon from '../../../public/icons/error.svg'
import SuccessIcon from '../../../public/icons/success.svg'
import CloseIcon from '../../../public/icons/close.svg'
import './toast.css'

export const toastStatus = {
  success: 'SUCCESS',
  error: 'ERROR'
}

const Toast = ({ handleClose, text, status }) => {

  const icon = status === toastStatus.error ? ErrorIcon : SuccessIcon
  const color = status === toastStatus.error ? '#FC2D2D' : '#4ECB71'

  return (
    <div className='toast__container' style={{ border: `3px solid ${color}` }}>
      <div className='toast__content'>
        <img className='toast__icon' alt='' src={icon}></img>
        <p className='toast__text'>{text}</p>
      </div>
      <button onClick={handleClose} className='toast__close-button' aria-label='close'>
        <img className='toast__close-button__img' src={CloseIcon}></img>
      </button>
    </div>
  )
}

export default Toast