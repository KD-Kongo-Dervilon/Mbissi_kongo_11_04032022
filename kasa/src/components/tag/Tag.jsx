import React from "react";
import "../tag/Tag.css";

class Tag extends React.Component {
	render() {
		return <div className="tag">{this.props.title}</div>;
	}
}

export default Tag;
