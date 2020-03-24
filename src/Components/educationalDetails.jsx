import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import img from '../images/School.JPG';

class educationalDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="base-container-table">
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr className="mainRowE">
                        <th></th>
                        <th>My Education:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="rows1">
                        <th className="columns">
                            <div className="image">
                                <ReactBootstrap.Image src={img} className="image"/>
                            </div>
                        </th> 
                        <th className="columns">
                            Elementary School: Instituto América.<br />
                            High School: Tecnológico de Monterrey.<br/>
                            Actually Studying: Digital Systems and Robotics Engineering.<br />
                            Sports practiced: Volleyball, Soccer, Basketball.<br />
                            Instruments Learned: Guitar, Piano, Bass, Drums. <br />
                        </th>
                    </tr>
                </tbody>
            </ReactBootstrap.Table>
        </div>  
        );
    }
}

export default educationalDetails;