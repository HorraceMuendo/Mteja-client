import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [values, setValues] = useState({
        firstname :'',
        lastname : '',
        email :'',
        password: ''
    })
    const navigate = useNavigate();
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]:value})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('',values)
            .then(res=>{
                console.log("Succesfully registered")
                navigate('/');
            })
            .catch(err => console.log(err))
    }




  return (
    <div>Signup</div>
  )
}

export default Signup