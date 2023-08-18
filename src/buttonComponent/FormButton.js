import React from 'react'
import fbtn from '../scss/formbutton.module.css'
import { useForm } from "react-hook-form";

function FormButton(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
  return (
    <div id={props.id}>
        <button className={`${fbtn.button}`}>
            
        </button>
    </div>
  )
}

export default FormButton