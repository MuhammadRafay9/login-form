import './index.css';
let Login = () => {
    return <div className="login">
        <div className="leftDiv">

        </div>
        <div className="rightDiv">
            <h1>Login to continue</h1>
            <div className='ep'>

                <input type="email" placeholder='Email'/>
                <input type="password"  className='pass' placeholder='Pass' />
            </div>
            <div className='rf'>
              <div className='r'>
                <input type="checkbox" /> <span>Remember me</span>
                
              </div>
              <div className='f'>

                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <button type='submit'>Login</button>
        </div>
    </div>
}

export default Login;