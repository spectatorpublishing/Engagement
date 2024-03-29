import React from "react";

import "./Thumbnail.css"

export default class Thumbnail extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="thumbnail-container">
				<a href={this.props.link}>
					<img src={this.props.imageurl}/>
				</a>
			</div>
		);
	}
}
