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
    fontSize: ''
  }
 * - onClose : function - the closing behavior or the modal
 * - show : boolean - with regards to the local state of [show, setShow] if the modal is visible or not
 * - the modal content is defined bu the children prop directly in the <Modal> </Modal> component
