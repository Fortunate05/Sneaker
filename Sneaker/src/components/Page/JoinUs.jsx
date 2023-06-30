import React from 'react'

function JoinUs() {
  return (
    <div>
      <form>
    <div className="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    </form>
    </div>
  )
}

export default JoinUs