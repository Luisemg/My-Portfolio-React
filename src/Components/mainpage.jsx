import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';

class MainPage extends Component{
    render(){
        return(
            <div className="base-container-mainpage">
                <div className="welcome-message">
                    <h1>
                        <Welcome />
                    </h1>
                </div>
            </div>
        );
    }
}

function Welcome(){
    const props = useSpring({opacity: 1, marginTop: 250, from: {opacity: 0, marginTop: -100}})
    return <animated.div style={props}> Welcome to Luisemg's Portfolio! </animated.div>
}

export default MainPage;