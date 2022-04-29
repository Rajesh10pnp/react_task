import React,{useState} from 'react';
import './../App.css'
import { useForm } from 'react-hook-form';

const FormValidation = () => {
    const [handleChange, values, errors] = useState();
    
    const useForm =()=>{

    }
  return (
    <div>
         <form>
      <input type="email" name="email" placeholder="E-mail"  onChange={handleChange} />
      <input type="password" name="password" placeholder="password" onChange={handleChange} />
      <input type="text" name="username" placeholder="username" onChange={handleChange} />
      <input type="number" name="Phone" placeholder="Phone" onChange={handleChange} />
      <input type="submit" value="Submit" className="submit" onChange={handleChange}  />
      
      </form>
    </div>
  )
}

export default FormValidation