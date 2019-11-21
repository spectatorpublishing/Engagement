import Thumbnail from "./Thumbnail";
import React from "react";

import "./Display.css"

export default class Display extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		var articles = this.props.articles.map(function(article, i) {
			return(
				<Thumbnail key={i} imageurl={article.imageurl} link={article.link}/>
			);
		});

		return (
			<div className="display-container">
				{articles}
			</div>
		);
	};
}
