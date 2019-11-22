import React from "react";

import "./Header.css"

export default class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render() {

		return (
				<img className="header-image" src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZKALKJLFQFECNGLNTICSJUMFF4.png"/>
		);
	};
}
