import Thumbnail from "./Thumbnail";
import Header from "./Header";
import React from "react";

import "./Display.css"

let createThumbnail = (article, i) => {
	return(
		<Thumbnail key={i} imageurl={article.imageurl} link={article.link}/>
	);
};

export default class Display extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		var generalArticles = this.props.articles.map(createThumbnail);
		return (
			<div className="display-container">
				<Header/>
				<p className="section-description" >Trending</p>
				{generalArticles}
			</div>
		);
	};
}
