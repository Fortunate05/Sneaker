import React from 'react'
import "./Login.css"

export default function Login() {
    return (
        <div className='login'>
            <div class="box"><div class="header">Login</div>
                <div><input class="form-control" type="text" placeholder="Email" fdprocessedid="7rvfvf" />
                </div><div><input class="form-control" type="password" placeholder="Password" fdprocessedid="5wz3ru" />
                </div><a href="/register">Need an Account?</a><button fdprocessedid="avyl3h">Login</button></div>
        </div>
    )
}
