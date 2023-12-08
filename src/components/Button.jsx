
export default function Button ( {children , ...props}) {
 // taking ...props also to make sure that we can pass other properties as well to the button whenever necessary

    return <button  className=" px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" {...props}>
    {children}
</button>
}