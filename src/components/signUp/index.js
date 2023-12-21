import { useState } from "react"
import axios from "axios"
import "./inde.css"


function Signup() {
  const[formData,setFormData]=useState({email:'',password:''})
  const onSubmitform= (e)=>{
      e.preventDefault()
     let options={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
     }
     axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyDMemtYuMCF81z2AUUfD30_N7mBoq5LAGI]",options)
       .then((res)=>console.log(res))
  }   

  const handleEvent=(event)=>{
    const{ name,value}=event.target
      setFormData({...formData,[name]:value})
  }
  console.log(formData)
  return (
    <div className="body">
      <div className="titles">
        <h1>Tags</h1>
        <p>Differenet types of Tags</p>
      </div>
    <form onSubmit={onSubmitform}>
        <label htmlFor="email">EMAIL</label>
        <input onChange={handleEvent} name='email' type="email" value={formData.email} id='email'/><br></br>
        <label htmlFor="password">PASSWORD</label>
        <input onChange={handleEvent} name='password' type="password" value={formData.password} id='password'/>
        <button type="submit">SUBMIT</button>
    </form>
</div>
  )
}
export default Signup