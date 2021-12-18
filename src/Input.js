import React from 'react'
import inputs from './inputs.css'
function Input() {
    return (
        <div className="container" >
            <img src="logo2.jpg"></img>
            <div className="text">
            <h1>It's a delight to have you<br/>onboard</h1>
            <p>Help us know you better.<br/>(This is how we optimize Wobot as per your business needs)</p>
            </div>
            <div class="mb-3">
                <label for="Input1" class="form-label">Comany Name</label>
                <input type="text" className="form-control" id="Input1" placeholder="e.g. Example Inc"></input>
            </div>
            <label class="form-label" >Industry</label>
            <select class="form-select" aria-label="Default select example">
                <option selected >Select</option>
                <option value="1">Consulting</option>
                <option value="2">Service</option>
                <option value="3">Production</option>
            </select>
            <div className="radio">
                <label class="form-label mt-3" >Company Size</label>
                <div className="radio-buttons">
                    <button class="button2">1-20</button>
                    <button class="button2">21-50</button>
                    <button class="button2">51-200</button>
                    <button class="button2">201-500</button>
                    <button class="button2">500+</button>
                </div>
            </div>
            <button class="button">Get started</button>
        </div>
    )
}

export default Input
