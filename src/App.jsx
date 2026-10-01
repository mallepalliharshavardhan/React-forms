import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState(
    {
      FirstName: '',
      lastName: '',
      Email: '',
      Contact: '',
      Gender: '',
      skill: '',
      resume: null,
      LinkedinUrl: '',
      UrlGit: '',
      about:''
    })

  const handleChange = (e) => {
    const {name,vaule} = e.target
   setValues((prev)=>({...values,[name]:[values]}));
  
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   console.log(values);
  alert(" Application Submitted, Thank you for your time!");
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Job Application</h2>
          <div>
            <label htmlFor='FirstName' >First Name:</label>
            <input type='text' placeholder='Enter firstName' required name='FirstName' onChange={(e)=> handleChange(e)} value={values.FirstName} />
          </div>
          <div>
            <label htmlFor='lastName' >Last Name:</label>
            <input type='text' placeholder='Enter lastName' required name='lastName' onChange={(e)=> handleChange(e)} value={values.lastName} />
          </div>
          <div>
            <label htmlFor='Email' >Email:</label>
            <input type='email' placeholder='Enter emailId' required name='Email' onChange={(e)=> handleChange(e)} value={values.Email}/>
          </div>
          <div>
            <label htmlFor='Contact' >Contact:</label>
            <input type='tel' placeholder='Enter phoneNumber' required name='Contact' onChange={(e)=> handleChange(e)} value={values.Contact} />
          </div>
          <div>
            <label htmlFor='Gender'>Gender :</label>
            <input type='radio' name='gender' onChange={(e)=> setValues(e.target.value)} value={values.Gender}/>Male
            <input type='radio' name='gender' onChange={(e)=> setValues(e.target.value)} value={values.Gender}/>Female
            <input type='radio' name='gender' onChange={(e)=> setValues(e.target.value)} value={values.Gender}/>Other
          </div>
          <div>
            <label htmlFor='Skill'>Domain:</label>
            <select name='skill' onChange={(e)=> setValues(e.target.value)} value={values.skill}>
              <option>Select</option>
              <option name='skill'>Web Development</option>
              <option name='skill'>Data Science</option>
              <option name='skill'>Operations</option>
              <option name='skill'>Cyber security</option>
               
            </select>
          </div>
          <div>
            <label htmlFor='resume'>Resume</label>
            <input type='file' name='resume' placeholder='Upload resume' onChange={(e)=> setValues((prev)=>({...prev,resume: e.target.files?.[0] ?? null,}))} value={values.resume} />
          </div>
          <div>
            <label htmlFor='LinkedinUrl'>LinkeIn</label>
            <input type='url' placeholder='enter LinkedIn profile Url' onChange={(e)=> setValues(e.target.value)} value={values.LinkedinUrl} />
            <label htmlFor='UrlGit'>GitHub</label>
            <input type='url' placeholder='enter Github Url' onChange={(e)=> setValues(e.target.value)} value={values.UrlGit } />
          </div>
          <div>
            <label htmlFor='about'>Why should we hire you?</label>
            <textarea id='about' cols='30' rows='8' name="about" onChange={(e)=> setValues(e.target.value)} value={values}>Write about you skills ,projects and what makes a good fit for the role</textarea>
          </div>
          <div>
            <button type='reset'>Reset</button>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
