import React from 'react';
import ConnectCard from './ConnectCard';
import Woman from '../images/placeholder-woman.jpg'
import axios from 'axios';




const svLocation = "http://172.20.10.6:4000";


class Connect extends React.Component {


    state = {
        dat: []
    }

componentDidMount(){
    this.something();

}



    something =()=> {
    axios.get(svLocation + "/UserInfo")
        .then(res => {
            console.log(res)
            console.log("i got something")
        this.setState ({
            dat:res.data
        })

        

        })
    }
    
        render() {
           const contact = this.state.dat.map(co => <ConnectCard co={co} />)
            console.log(contact)
            
        
    return (

        <div className="connect">

        {contact}
         

        </div>
    )
        }
}

export default Connect;
