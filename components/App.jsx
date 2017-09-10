import React from "react";
import Header from './Header.jsx';
import Console from './Console/Console.jsx';
import Footer from './Footer.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    render() {
        return (
            <div className="row-fluid">
               <div className="row-fluid">
                    <Header />
                </div>
                <div className="row-fluid">
                    <Console />
                </div>
                <div className="row-fluid" id="footer">
                    <Footer />
                </div>
               
            </div>
        );
    }

}