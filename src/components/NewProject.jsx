import Input from "./Input"
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({onAdd , onCancel}) {

    const modal = useRef();

     const title = useRef();
     const description = useRef();
     const dueDate = useRef();
     function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation ....

        console.log(enteredDescription);
        // also we need to send the data to app.jsx as we are keeping array there // hence lifting state up


        // validating the user input 

        if(enteredTitle.trim() ==='' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            // show error modal
            modal.current.open();
            return;
            
        }
        onAdd({
            title: enteredTitle ,
            description: enteredDescription,
            dueDate: enteredDueDate
            // object being passsed as projectData in handleAddProject fn in app.jsx // this method is always used 
            // also we are passsing the object as whole form here 
        });
        // executing this function to pass the data in app.jsx

     }

    return <>
    <Modal ref={modal} buttonCaption = 'Okay'> 
    <h2 className='text-xl font-bold text-stone-700 mt-4 my-4' >Invalid Input</h2>
    <p className='text-slate-700 mb-4'>Oops... looks like you forgot to enter a value</p>
    <p className='text-slate-700 mb-4'>Please enter correct values in the text-field</p>
    
    </Modal>
     <div className="w-[35rem] mt-16" >
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                Cancel
            </button></li>
            <li><button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}>
                Save 
            </button></li>
        </menu>

        <div>
            <Input ref={title} label="Title" isTextArea={false}/>
            <Input ref={description} label="Description" isTextArea={true} />
            <Input type="date" ref={dueDate}  label="Due Date" isTextArea={false}/>
        </div>
    </div>
    </>
}