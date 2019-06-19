import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Form.css'


const Form = () => (
    <div className="form">

        <form>


            <div className="form-group">
                <label for="input1">First Name</label>
                <input type="text" className="form-control" id="input1" placeholder="Enter First Name" />
            </div>


            <div className="form-group">
                <label for="input2">Last Name</label>
                <input type="text" className="form-control" id="input2" placeholder="Enter Last Name" />
            </div>


            <div className="form-group">
                <label for="input3">Email</label>
                <input type="email" className="form-control" id="input3" placeholder="Enter Email" />
            </div>

            <div className="form-group">
                <label for="input4">City</label>
                <input type="text" className="form-control" id="input4" placeholder="Enter City" />
            </div>

            <div className="form-group">
                <label for="input4">Interest</label>
                <input type="text" className="form-control" id="input4" placeholder="Enter Interest" />
            </div>

            <div className="button">
                <Link to="/Results">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
            </div>

        </form>
    </div>
)

export default Form;
