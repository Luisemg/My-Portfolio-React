import React from 'react';
import './App.scss';
import {Layout, Header, Navigation, Content} from 'react-mdl'
import {Link} from 'react-router-dom';
import Main from './Components/main';


class App extends React.Component{

  render(){
    return(
      <div className="demo-big-content">
          <Layout>
              <Header title="LUISEMG PORTFOLIO" scroll>
                  <Navigation>
                      <Link to="/">Main Page</Link>
                      <Link to="/personalDetails">Personal Details</Link>
                      <Link to="/educationalDetails">Educational Details</Link>
                      <Link to="/experience">Experience</Link>
                  </Navigation>
              </Header>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }

}

export default App;
