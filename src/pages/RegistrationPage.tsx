import "../scss/registrationpage.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const RegistrationPage = () => {

 const [emailInputColor, setEmailInputColor] = useState<boolean | any>(false)
 const [passwordInputColor, setPasswordInputColor] = useState<boolean | any>(false)
 const [emailInputValue, setEmailInputValue] = useState<boolean | any>("")
 const [passwordInputValue, setPasswordInputValue] = useState<boolean | any>("")
 const [checked, setChecked] = useState<boolean | any>(false)
 const [welcomeText, setWelcomeText] = useState<null | any>(null)

 const spinner = <div className="text-center">
 <div className="spinner-border" role="status" style={{color: "#125757"}}>
   <span className="visually-hidden">Loading...</span>
 </div>
</div>

 useEffect(() => {
    if (emailInputValue) {
        setEmailInputColor("lightcyan")
    } else if (emailInputValue === "") {
        setEmailInputColor(null)
    } if (passwordInputValue) {
        setPasswordInputColor("lightcyan")
    } else if (passwordInputValue === "") {
        setPasswordInputColor(null)
    }
 }, [emailInputValue, passwordInputValue])

 const onSubmit = (e: any) => {
    e.preventDefault()
 }

 const navigate = useNavigate()
 const ifInputValuesAreTrue = () => {
     if (emailInputValue && passwordInputValue) {
       setChecked(true)
       setTimeout(() => {
        setWelcomeText("Welcome...")
       }, 500)
       setTimeout(() => {
        navigate("/homepage")
       }, 3700) 
     }
 }

  return (
<>
<div className='w-100 vh-100 d-flex align-items-center flex-column justify-content-center home'>
<form onSubmit={onSubmit}>
 <h1 className="text-center">Register &#128054;</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Name</label>
    <input 
    required 
    autoFocus 
    type="text" 
    placeholder="Enter your name..." 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    value={emailInputValue}
    onChange={(e: any) => setEmailInputValue(e.target.value)}
    style={{backgroundColor: emailInputColor}}
    />
  </div>
  <div className="mb-3 mt-4">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
    <input 
    required
    type="password" 
    placeholder="Enter your password..." 
    className="form-control" 
    id="exampleInputPassword1" 
    value={passwordInputValue}
    onChange={(e: any) => setPasswordInputValue(e.target.value)}
    style={{backgroundColor: passwordInputColor}}
    />
  </div>
  <div className="mb-3 form-check">
    <input 
    readOnly
    checked={checked}
    required
    type="checkbox" 
    className="form-check-input" 
    id="exampleCheck1" />
    <label className="form-check-label fw-bold" htmlFor="exampleCheck1">Confirm</label>
  </div>
  <button 
  type="submit" 
  id="submit-btn"
  onClick={ifInputValuesAreTrue}
  >
    Submit
  </button>
 <div className="spinner text-center d-flex justify-content-center align-items-center gap-4 pt-3">
   <h1>{welcomeText}</h1>
   {welcomeText ? spinner : null}
 </div>
</form>
</div>
</>
  )
}



