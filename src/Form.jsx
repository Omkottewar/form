import React, { useState } from 'react'

const Form = () => {
    const [age,setAge] = useState();
    const [firstName,setFirstName] = useState('');
    const [middleName,setMiddleName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const ageCalculator = (e)=>{
        const age = new Date(e.target.value);
        const currentyear = new Date().getFullYear() 
        const birthYear = age.getFullYear();
        setAge(currentyear-birthYear)

        return currentyear-birthYear
    }
    
    const data ={
        'firstName': firstName,
        'lastName': lastName,
        'age':age,
        'email':email,
        'password':password,
        "confirmPassword":confirmPassword
    }

    function handler(e){
        e.preventDefault()
        if(validateInput(data)){
            alert('Form Submitted Successfully');
        }
    }

    function validateInput({firstName,lastName,age,password,confirmPassword}){
        if(firstName.trim()===''){
            alert('Firstname is a required field')
            return false
        }
        if(lastName.trim()===''){
            alert('LastName is a required field')
            return false
        }
        if(age<18){
            console.log(age)
            alert ('You must be above 18 to fill this form')
            return false
        }

        if(password.length<8){
            alert('Password length must be greater than 8 letters')
            return false
        }

        if(confirmPassword!==password ){
            alert('Password doesnot match')
            return false
        }
return true;
    }
  return (


    <div className='w-[500px] m-auto '>
                <h1 className='text-white font-bold  text-5xl m-auto my-10 '>Please Fill This Form</h1>
        <form action="" onSubmit={handler} className='bg-gray-400 '> 

            <div className="flex flex-col gap-10  p-10 " >
            <label htmlFor="first-name" className='rounded-sm bg-white pl-2'>First Name:
            <input type="text" required id='first-name' onChange={(e)=> setFirstName(e.target.value)} placeholder='Enter First Name' className='rounded-sm p-2 ml-2'  />
            </label>
            <label htmlFor="middle-name" className='rounded-sm bg-white pl-2'>Middle Name:
            <input type="text" id='middle-name' onChange={(e)=> setMiddleName(e.target.value)} placeholder='Enter Middle Name' className='rounded-sm p-2 ml-2' />
            </label>
            <label htmlFor="last-name" className='rounded-sm bg-white pl-2'>Last Name:
            <input type="text"  required id='last-name' onChange={(e)=> setLastName(e.target.value)} placeholder='Enter Last Name' className='rounded-sm p-2 ml-2' />
            </label>

            <p className='bg-white '
            >FullName : {firstName} {middleName} {lastName}</p>
            
            <label htmlFor="age" ></label>
            <input type="date"  onChange={(e)=>{ageCalculator(e)}}  required/> 
           <div className="bg-white flex flex-row gap-10">
           <span>Age:</span><span>{age}</span>
           </div>
           
           <label htmlFor="email" className='rounded-sm bg-white '>Email :
            <input type="email"  required id='email' onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email' className='rounded-sm p-2 ml-2' />
            </label>

            <label htmlFor="password" className='rounded-sm bg-white '>Password :
            <input type="password"  required id='password' onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' className='rounded-sm p-2 ml-2' />
            </label>

            <label htmlFor="confirm-password" className='rounded-sm bg-white  '>Confirm Password :
            <input type="password"  required id='confirm-password' onChange={(e)=> setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='rounded-sm p-2 ml-2' />
            </label>

            <select name="role" id="role" required>
                <option value="none" >Select role</option>
                <option value="developer">Developer</option>
                <option value="tester">Tester</option>
                <option value="manager">Manager</option>
                <option value=""></option>
            </select>


        <button type='submit' className='px-2 py-1 bg-blue-500 text-white font-bold rounded-md h-12' >submit</button>
        </div>
        </form>
    </div>
  )
}

export default Form