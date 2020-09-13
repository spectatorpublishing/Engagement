import Thumbnail from "./Thumbnail";
import Header from "./Header";
import React from "react";

import "./Display.css"

const NUM_FEATURED = 2;

let createFeaturedThumbnail = (article, i) => {
	if(i < NUM_FEATURED){
		return(
			<Thumbnail key={i} imageurl={article.imageUrl} link={article.articleLink}/>
		);
	}
};

let createGeneralThumbnail = (article, i) => {
	if(i > NUM_FEATURED){
		return(
			<Thumbnail key={i} imageurl={article.imageUrl} link={article.articleLink}/>
		);
	}
};

export default class Display extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		var featuredArticles = this.props.articles.map(createFeaturedThumbnail);
		var generalArticles = this.props.articles.map(createGeneralThumbnail);
		console.log('props', featuredArticles)
		return (
			<div className="display-container">
				<Header/>
				{featuredArticles}
				{generalArticles}
			</div>
		);
	};
}
