import React from 'react'
import form from '../scss/form.module.css'
import { useForm } from "react-hook-form";

function Form(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data); 
    console.log(watch("example")); 

  return (
    <section id={props.id} className={`py-5`}>
        <form onSubmit={handleSubmit(onSubmit)} className={`${form.formBox}`}>
            <label htmlFor="name">이름</label>
            <input 
                id="name" 
                type="text" 
                placeholder="홍길동"
                {...register("name")}
            />
            <label htmlFor="number">전화번호</label>
            <input 
                id="number" 
                type="tel" 
                placeholder="01000000000"
                {...register("number")}
            />
            <label htmlFor="date">신청 날짜</label>
            <input 
                id="date" 
                type="date"
                min="2023-09-01"
                max="2023-09-30"
                data-placeholder="날짜선택"
                required
             />
            <button type="submit">신청하기</button>
        </form>
    </section>
  )
}

export default Form