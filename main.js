import React from "react";
import ReactDOM from "react-dom";

import Details from "./components/details";

let contacts = [{
  id: 1,
    name: " vinay",
    phone: "408-613-1234"
},{
  id: 2,
    name: " karan",
    phone: "408-123-1234"
}
,{
    id: 3,
    name: " jhon",
    phone: "123-613-1234"
}
,{
    id:4,
    name: " vijay",
    phone: "408-613-1474"
}
]

class App extends React.Component {
    render() {

        return ( 
            <div>
            <h1> hello </h1> 
            <Details  contacts={this.props.contacts}/>
            <br/>
            </div>
        );
    }
};

ReactDOM.render(<App contacts = {contacts} /> , document.getElementById('root'));