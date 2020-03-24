import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import img from '../images/Experience.JPG';

class experience extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="base-container-table">
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr className="mainRowW">
                        <th>Work and Projects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="rows">
                        <th className="columnsW">
                            <ReactBootstrap.Image src={img} className="imageW"/>
                        </th>
                    </tr>
                </tbody>
            </ReactBootstrap.Table>
            <div className="accordionS">
            <ReactBootstrap.Accordion defaultActiveKey="0">
                <ReactBootstrap.Card>
                    <ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button} variant="link" eventKey="0" className="workName">
                        Drone Control on a Glove: 
                    </ReactBootstrap.Accordion.Toggle>
                    </ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Collapse eventKey="0">
                    <ReactBootstrap.Card.Body className="workInfo">
                        --> It was an Advance Digital Systems Project Using an FPGA and Serial Communication. <br/>
                        --> Different sensors were used on the glove to detect which movement should the drone realize. <br/>
                        --> VHDL programming language was used to program the FPGA, and C# to control the drone and the communication between devices.<br/>
                    </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button} variant="link" eventKey="1" className="workName">
                        Coordinator of an Education Project with Intel:
                    </ReactBootstrap.Accordion.Toggle>
                    </ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Collapse eventKey="1">
                    <ReactBootstrap.Card.Body className="workInfo">
                        --> Worked teaching robotics to a group of 30 kids at a public elementary school, with the objective of showing them the possibilities we can achieve using robotics. <br/>
                        --> This project was made by Intel, they donate the equipment to the school and hired me.
                    </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button} variant="link" eventKey="2" className="workName">
                        English Teacher at the Tecnologico de Monterrey Language School:
                    </ReactBootstrap.Accordion.Toggle>
                    </ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Collapse eventKey="2">
                    <ReactBootstrap.Card.Body className="workInfo">
                        --> Teaching different levels and ages (between 10 to 50 years old), on groups with an average of 15-20 students.
                    </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button} variant="link" eventKey="3" className="workName">
                        Access Control using an RFID Module:
                    </ReactBootstrap.Accordion.Toggle>
                    </ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Collapse eventKey="3">
                    <ReactBootstrap.Card.Body className="workInfo">
                        --> Using an ATPMega128p microcontroller, designed and implemented an access control, only accesible with a certain card, with the possibilities to add more cards. <br/>
                        --> It was programmed on C language, using the CodeVision AVR IDE.
                    </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button} variant="link" eventKey="4" className="workName">
                        Network Problems Solving:
                    </ReactBootstrap.Accordion.Toggle>
                    </ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Collapse eventKey="4">
                    <ReactBootstrap.Card.Body className="workInfo">
                        --> Designing and implementing networking solutions to problems with basic enterprises. <br/>
                        --> Achieved by using theory such as subnetting, VLSM, NAT, PAT, DHCP and routing protocols such as RIP, OSPF and EIGRP.
                    </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button} variant="link" eventKey="5" className="workName">
                        ProKarma ITP:
                    </ReactBootstrap.Accordion.Toggle>
                    </ReactBootstrap.Card.Header>
                    <ReactBootstrap.Accordion.Collapse eventKey="5">
                    <ReactBootstrap.Card.Body className="workInfo">
                        --> Learning different methodologies to implement WEB Services such as React.Js, SpringBoot, Spring MVC and Node.Js.<br/>
                        --> Worked also on different hyphotetic projects, such as a Retail project and a store that sold furniture. <br/>
                        --> Used a lot of Java, JavaScript, ES6, CSS, HTML and many other tools.
                    </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
            </ReactBootstrap.Accordion>
            </div>
        </div>  
        );
    }
}

export default experience;