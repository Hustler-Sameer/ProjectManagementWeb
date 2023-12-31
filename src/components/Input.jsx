

// desturcting the props using curly brackets and taking in isTextArea hence if isTextArea true we will render textArea or else we will return an input tag


import {  forwardRef } from "react"

const Input = forwardRef( function Input( { label ,isTextArea , ...props} , ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    // we are also expecting some extra props and according we are going to share that in the rendered component
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
       {isTextArea ? <textarea ref={ref} className= {classes} {...props}/>
        : <input ref={ref} className={classes}  {...props}/>}
    </p>
});

export default Input;
// now this ref in textArea and input points to the incoming ref