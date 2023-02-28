# modal-library 

A customizable modal component made to fit P14 expectations created using `create-react-app`

## Installation

Run the following command:`npm install @contactjhc/modal-library`

## Available Props

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
    fontSize: '',
    textAlign: '',
    fontFamily: '',
    height: '',
    margin: '',
    display: '',
    justifyContent: '',
    alignItems: ''
  }
 * - onClose : function - the closing behavior or the modal
 * - show : boolean - with regards to the local state of [show, setShow] if the modal is visible or not
 * - the modal content is defined by the children prop directly in the <Modal> </Modal> component
 * - closeIcon : variable - an imported customized close icon
 * - isIcon : boolean - set to false it will display the default library icon to be used. Set to yes it will display the imported icon 

## Code example

import { useState } from 'react';
import { Modal } from '@contactjhc/modal-library'
import closeIcon from '../../assets/ri_close-circle-fill.svg'

export default function ModalExample() {

  const [show, setShow] = useState(true)

  let modalStyle = {
    width : '90%',
    backgroundColor: '#1976d2',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1.5rem',
    fontFamily: 'Roboto',
    height: '6rem',
    textAlign: 'center'
  }

return(
  <Modal
      small={true}
      large={false}
      style={modalStyle} 
      onClose={() => setShow(false) } 
      show={show}
      isIcon={false}
      closeIcon={closeIcon}
  >
      <p>Employee Created !</p>
  </Modal>
)