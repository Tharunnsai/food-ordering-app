import React, {useState} from 'react'
import UserService from '../services/UserService'
import {useNavigate} from 'react-router-dom'

const CreateUserComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')

  const navigate = useNavigate();

  //arrow function
  const createEmployee = (e) => {
    e.preventDefault(); // da se ne bi osvezavala stranica svaki put kad se form submituje, tako kaze indijac na yt

    const user = {firstName, lastName, email, username, phoneNumber, password, address}
    
    UserService.createEmployee(user).then((response) =>{

      console.log(response.data);
      navigate("/users");

    }).catch(error =>{
      console.log(error);
    })
  }
  //br da pomeri karticu od navbara
  return (
    <div>
      <br/> 
        <div className='container-add-employee'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h2 className='text-center'>Create new employee</h2>
              <div className='card-body'>
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label'>First name: </label>
                    <input  
                        type="text"
                        placeholder="Insert first name" 
                        name = "firstName" 
                        className="form-control" 
                        value={firstName}
                        onChange = {(e) => setFirstName(e.target.value)}
                        >
                        
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Last name: </label>
                    <input  
                        type="text"
                        placeholder="Insert last name" 
                        name = "lastName" 
                        className="form-control" 
                        value={lastName}
                        onChange = {(e) => setLastName(e.target.value)}
                        >
                        
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Email: </label>
                    <input  
                        type="text"
                        placeholder="Insert email name" 
                        name = "email" 
                        className="form-control" 
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                        >
                        
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Phone number: </label>
                    <input  
                        type="text"
                        placeholder="Insert phone number" 
                        name = "phoneNumber" 
                        className="form-control" 
                        value={phoneNumber}
                        onChange = {(e) => setPhoneNumber(e.target.value)}
                        >
                        
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Username: </label>
                    <input  
                        type="text"
                        placeholder="Insert username" 
                        name = "username" 
                        className="form-control" 
                        value={username}
                        onChange = {(e) => setUsername(e.target.value)}
                        >
                        
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Password: </label>
                    <input  
                        type="text"
                        placeholder="Insert password" 
                        name = "password" 
                        className="form-control" 
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                        >
                        
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Address: </label>
                    <input  
                        type="text"
                        placeholder="Insert address" 
                        name = "address" 
                        className="form-control" 
                        value={address}
                        onChange = {(e) => setAddress(e.target.value)}
                        >
                        
                    </input>
                  </div>

                  <button className='btn btn-success' onClick={(e) => createEmployee(e)}>Add new employee</button>

                </form>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default CreateUserComponent