import React,{useState} from "react";
import { Link } from 'react-router-dom'
import './SignIn.css'

function SignIn (){
    const serverlink ='https://www.google.co.in/';
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    const handleSubmit = async(e) => {
        //e.preventDefault();
        fetch(url, { 
          method: 'POST', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(params) 
        }).then(response => response.json()) .then(data => console.log(data))
        console.log('Form submitted:', formData);
        alert('Sign In successful!');
          // You can redirect or handle further actions here after successful login
    };


    return(
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username (Email):</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
          {/*errors.username && <span className="error">{errors.username}</span>*/}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          {/*errors.password && <span className="error">{errors.password}</span>*/}
        </div>

        {/* Submit Button */}
        <button type="submit">Sign In</button>
      </form>
      <div className="signUpLink">
        <Link to='/signUp'>New user? Signup here</Link>
      </div>
    </div>
)}
export default SignIn