import { render } from "@testing-library/react";
import React, { Component, Fragment } from "react";

export default class App extends Component{
    render(){
        return(   

<React.Fragment>
<div className="App">
	  			
	 			<body className="App-body">
		 		 	<p>Login to access the full dashboard</p>
					<label htmlFor="email" onClick={() => {
						// select corresponding input
						document.getElementById('password').focus();
					}}>Email</label>
					<input type="email" id="email" />
					<label htmlFor="password" onClick={() => {
						// select corresponding input
						document.getElementById('password').focus();
					}}>Password</label>
					<input type="password" id="password" />
					<button>OK</button>
	  			</body>
				
			</div>
</React.Fragment>
        )
    }
}