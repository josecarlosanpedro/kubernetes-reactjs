import React, { useState } from 'react'
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import notification from 'antd/lib/notification';
import axios from 'axios'
import { Input, Space, Button, Row, Col, Divider } from 'antd';

const propTypes = {
  history: PropTypes.object.isRequired,
};
const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const { history } = props
  const handleLogin = async (e) => {
    
    e.preventDefault();
    setLoading(true);
    if(email === "admin" && password === "admin") {
      notification.success({
        message: 'login success'
      })
      setLoading(false);
      localStorage.setItem('isLoggedIn', true);
      window.location = 'home'
    } else {
      notification.error({
        message: 'login Failed',
        description: "error"
      })
      setLoading(false);
    }
  
  }

  console.log(props)
  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }
  const handleChangePassword = event => {
    setPassword(event.target.value)
  }
  const handleLoginClick = () => {
    
    localStorage.setItem('isLoggedIn', true);
    history.push("/doctor/dashboard")
  }
  const handleCreateMDClick = () => {
  
    history.push("/MDRegistration")
  }
  return (
    <section className="login-form-section">
       <img src="https://stg.keepwell.clinic/static/media/logo.3e277677.png" alt="logo" class="responsive" width="100%" height="100%" className="_spacer-md" /> 
             
      <form onSubmit={handleLogin}>
        <label className="_spacer-sm">
          Email Address:
        </label>
        <Input className="_spacer-sm" type="text" onChange={handleChangeEmail} />
        <label className="_spacer-sm">
          Password:
        </label>
        <Input.Password className="_spacer-sm" type="password" onChange={handleChangePassword} />
        <Row>
          <Col md={12} xs={24}>
            <Button type="primary" onClick={() => handleLoginClick("medical-doctor")}>Login</Button>
          
          </Col>
          <Col md={12} xs={24}>
            <Button>Forgot Password</Button>
          
          </Col>
        </Row>

        <Divider />
        <section className="after-divider">

        <p className="_spacer-sm">Not a member yet? Create an account</p>
            <Button className="_spacer-sm" type="primary" onClick={handleCreateMDClick}>Create new Account</Button>
            <Button className="_spacer-sm">Go back</Button>

        </section>
        {/* <input className="_spacer-sm login-button" type="submit" value={loading ? "Logging in..." : "Login"} /> */}
        {/* <button>Forgot Password</button> */}
        {/* <button className="_spacer-sm register-button" onClick={handleRegister}>Register</button> */}
      </form>
    </section>
  )
}

LoginForm.propTypes = propTypes;
export default withRouter(LoginForm)
