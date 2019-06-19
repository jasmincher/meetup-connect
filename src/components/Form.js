import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Form.css'


const Form = () => (
    <div className="form">

        <form>


            <div className="form-group">
                <input type="text" className="form-control" id="input1" placeholder="Enter First Name" />
                <label for="input1">First Name</label>
            </div>


            <div className="form-group">
                <input type="text" className="form-control" id="input2" placeholder="Enter Last Name" />
                <label for="input2">Last Name</label>
            </div>


            <div className="form-group">
                <input type="email" className="form-control" id="input3" placeholder="Enter Email" />
                <label for="input3">Email</label>
            </div>

            <div className="form-group">
                <input type="text" className="form-control" id="input4" placeholder="Enter City" />
                <label for="input4">City</label>
            </div>

            <div className="form-group">
                <input type="text" className="form-control" id="input4" placeholder="Enter Interest" />
                <label for="input4">Interest</label>
            </div>

            <div className="button">
                <Link to="/Results">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </Link>
            </div>

        </form>
    </div>
)

export default Form;