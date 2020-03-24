import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import img from '../images/PersonalDetails.JPG';

class personalDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="base-container-table">
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr className="mainRow">
                        <th>Information:</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="rows">
                        <th className="columns">
                            Full Name:  Luis Enrique Meza González <br />
                            Email:      luisemezag@gmail.com <br/>
                            Age: 20 years Old <br />
                            From: Culiacan, Sinaloa. <br />
                        </th> 
                        <th className="columns">
                            <div className="image">
                                <ReactBootstrap.Image src={img} className="image"/>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </ReactBootstrap.Table>
        </div>  
        );
    }
}

export default personalDetails;