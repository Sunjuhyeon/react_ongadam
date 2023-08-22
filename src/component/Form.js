import React from 'react'
import form from '../scss/form.module.css'
import { useForm } from "react-hook-form";

function Form(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data); 
    console.log(watch("example")); 

  return (
    <section id={props.id} className={`${form.sectionbg} py-5`}>
        <form onSubmit={handleSubmit(onSubmit)} className={`${form.formBox} d-flex`}>
            <div>
                <div>
                    <input
                    type="text"
                    placeholder="이름"
                    />
                    <input
                    type="text"
                    placeholder="연락처"
                    />
                </div>
                <input
                type="date"
                placeholder="방문날짜"
                className={`w-100`}
                />
            </div>
            <input type="submit" value="신청"/>
        </form>
    </section>
  )
}

export default Form