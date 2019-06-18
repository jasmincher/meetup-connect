import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Form.css'


const Form = () => (
    <div className="form">


        <form>


            <div className="form-group">
                <label for="input1">First Name</label>
                <input type="text" className="form-control" id="input1" placeholder="Enter first name" />
            </div>


            <div className="form-group">
                <label for="input2">Last Name</label>
                <input type="text" className="form-control" id="input2" placeholder="Enter last name" />
            </div>


            <div className="form-group">
                <label for="input3">Email</label>
                <input type="email" className="form-control" id="input3" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label for="input4">Zip Code</label>
                <input type="number" className="form-control" id="input4" placeholder="Enter Zipcode" />
            </div>




     <Link to="/Results">
     <button type="submit" className="btn btn-primary">Submit</button>
     </Link>       

        </form>
    </div>
)

export default Form;
