import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/Form.css'


class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="form">

                <form>


                    <div className="form-group">
                        <input type="text" className="form-control" id="input1" placeholder="First Name" />
                        <label for="input1">First Name</label>
                    </div>


                    <div className="form-group">
                        <input type="text" className="form-control" id="input2" placeholder="Last Name" />
                        <label for="input2">Last Name</label>
                    </div>


                    <div className="form-group">
                        <input type="email" className="form-control" id="input3" placeholder="Email"/>
                        <label for="input3">Email</label>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="input4" placeholder="City" />
                        <label for="input4">City</label>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="input5" placeholder="Interest" />
                        <label for="input4">Interest</label>
                    </div>

                    <div className="button">
                        <Link to={"/Connect"}>
                            <button type="submit" className="btn btn-dark" onClick={this.props.searchEvent} >Submit</button>
                        </Link>
                    </div>

                </form>
            </div>
        )
    }
}
export default Form;
