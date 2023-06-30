import React from 'react'
import "./Login.css"

function Register() {
    return (
        <div>
            <div className='login'>
            <div className="box">
                <div className="header">Register</div>
                <div><input className="form-control" type="text" placeholder="Name" fdprocessedid="0bsxl5"/>
                </div><div><input className="form-control" type="text" placeholder="Email" fdprocessedid="alopl4u"/>
                </div><div><input className="form-control" type="password" placeholder="Password" fdprocessedid="3mt0w"/>
                </div><a href="/login">Do you have an Account?</a><button fdprocessedid="la775g">Register</button>
            </div>
        </div>
        </div>
    )
}

export default Register