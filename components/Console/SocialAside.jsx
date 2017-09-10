import React from "react";
import Paper from 'material-ui/Paper';


export default class SocialAside extends React.Component {
    render() {
        return (
            <aside>
                <ul id="social-sidebar">
                    <li>
                        <a target='_blank' href="https://www.facebook.com/Lakshya.changinglives" className="entypo-facebook"><span>Facebook</span></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://twitter.com/Lakshya_Change" className="entypo-twitter"><span>Twitter</span></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.linkedin.com/groups/4869364/profile" className="entypo-linkedin"><span>Linkedin</span></a>
                    </li>
                </ul>
            </aside>
        );
    }

}