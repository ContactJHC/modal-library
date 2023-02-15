import React from 'react';
import { useCallback, useEffect } from 'react';
import './Modal.css'
import closeIcon from '../assets/close-icon.svg'

/**
 * Returns a modal component with props which are explained below:
 * the width of the modal is managed via the width attribute of the style prop or the large prop or the small prop
 * - large : boolean - true or false
 * - small : boolean - true or false
 * - style : object - written in React Inline Css Style according to the schema below
 * {
    width : '',
    backgroundColor: '',
    borderRadius: '',
    color: '',
    fontSize: ''
  }
 * - onClose : function - the closing behavior or the modal
 * - show : boolean - with regards to the local state of [show, setShow] if the modal is visible or not
 * - the modal content is defined bu the children prop directly in the <Modal> </Modal> component
 *
 */
  import React from 'react';
  import { useCallback, useEffect } from 'react'
  import './Modal.css'
  import closeIcon from '../../assets/close-icon.svg'
  
  /**
   * Returns a modal component with props which are explained below:
   * the width of the modal is managed via the width attribute of the style prop or the large prop or the small prop
   * - large : boolean - true or false
   * - small : boolean - true or false
   * - style : object - written in React Inline Css Style according to the schema below
   * {
      width : '',
      backgroundColor: '',
      borderRadius: '',
      color: '',
      fontSize: ''
    }
   * - onClose : function - the closing behavior or the modal
   * - show : boolean - with regards to the local state of [show, setShow] if the modal is visible or not
   * - the modal content is defined bu the children prop directly in the <Modal> </Modal> component
   *
   */
  
  export default function Modal(props) {
      
      const { onClose } = props;
      const closeOnEscapeKeyDown = useCallback((e) => {
          if ((e.charCode || e.keyCode) === 27) {
              onClose();
          }
      }, [onClose]);
  
      useEffect(() => {
          document.body.addEventListener('keydown', closeOnEscapeKeyDown)
          return function cleanup() {
              document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
          }
      }, [closeOnEscapeKeyDown])
  
    return (
      <div className=
          {`modal ${props.show ? 'show' : ''}`} 
          onClick={props.onClose}
      >
          <div 
              className = {
                  `modal-content 
                  ${props.small ? 'small' : ''}
                  ${props.large ? 'large' : ''}
                  `
              }
              onClick={e => e.stopPropagation()}
              style = {{
                  width:`${props.style.width}`,
                  backgroundColor:`${props.style.backgroundColor}`,
                  borderRadius:`${props.style.borderRadius}`,
                  color:`${props.style.color}`,
                  fontSize:`${props.style.fontSize}`,
                  textAlign: `${props.style.textAlign}`,
                  fontFamily: `${props.style.fontFamily}`,
                  height: `${props.style.height}`,
                  margin: `${props.style.margin}`,
                  display: `${props.style.display}`,
                  justifyContent: `${props.style.justifyContent}`,
                  alignItems: `${props.style.alignItems}`
              }}
          >
  
              <div className='modal-body'>
                  {props.children}                
              </div>
              <button onClick={props.onClose} className='button'>
                  <img className='button-icon' src={props.isIcon ? props.closeIcon : closeIcon} alt='close' />
              </button>
          </div>
  
      </div>
    )
  }
  