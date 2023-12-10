import {createPortal} from 'react-dom'
import { forwardRef , useImperativeHandle, useRef} from 'react';
import Button from './Button';

// by accepting the children we are giving user the reusability of the modal
// we are wrapping our function by forwardRef so that we can connect ref to the modal and we are using createPortal as we do not want to make our modal go down the widget tree

const Modal = forwardRef(function Modal({children , buttonCaption} , ref) {
    const dialog = useRef(); 
    useImperativeHandle(ref , () => {
        return {
        open() {
            dialog.current.showModal();

        }
    }
    });


    return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
        {children}
        <form method='dialog' className='mt-4 text-right'>
            <Button>
                
                {buttonCaption}
            </Button>

        </form>
    
    </dialog>
     ,document.getElementById('modal-root')
    );
})


export default Modal;

