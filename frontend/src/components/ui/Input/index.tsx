import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"

//Passa ao InputHTMLAttributes que é do tipo HTMLInputElement
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...rest}: InputProps){
  return(
    <input 
      {...rest}
      className="mb-4 h-10 rounded-lg bg-inputbg text-white p-4 border border-solid border-border"
    />
  )
}

export function TextArea({...rest}: TextAreaProps){
  return(
    <textarea 
      {...rest}
      className="mb-4 h-10 rounded-lg bg-inputbg text-white p-4 border border-solid border-border"
    />
  )
}