import '../Assests/CSS/ReviewLogin.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';





const AdLogin = () => {



  const navigate = useNavigate();
  const [data, setData] = useState({

    email: '',
    password: ''


  })

  const logx = (e) => {
    e.preventDefault();
    const a = localStorage.getItem('email');
    const b = localStorage.getItem('pass');
    if (a === data.email && b === data.password) {

      navigate('/Addashboard');

    }
    else
      alert('Invalid Credentials');
  }

  const HandleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })

  }
  return (

    <div>
      <Nav />

      <div class="container1">
        {/* <h3>ADMIN LOGIN</h3> */}
        <div class="logo">
        </div>

        <center> <form class="form-control" onSubmit={logx}>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="Email" onChange={HandleChange} />

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" name="password" onChange={HandleChange} />






          <button class="enter" type="submit" >Login</button >


        </form></center>




   </div>

 </div>


  )
}
export default AdLogin;