import React from "react";
/*import { useState } from 'react';*/
/*import arrowUp from '../assets/arrow_up.svg;*/
import "../styles/Dropdown.css";

class Dropdown extends React.Component {
	state = {
		visible: false,
	};
	toggleDropdown = () => {
		this.setState({ visible: !this.state.visible });
	};
	fillContent = (content) => {
		if (Array.isArray(content)) {
			return (
				<ul>
					{content.map((equipment, index) => (
						<li key={`equipment${index}`}>{equipment}</li>
					))}
				</ul>
			);
		} else {
			return <p>{content}</p>;
		}
	};
	handleKeyPress = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			e.stopPropagation();
			this.toggleDropdown()
		}
	}
	render() {
		return (
			<div className="dropdown">
				<div
					className="dropdown__toggle"
					onClick={this.toggleDropdown}
					onKeyPress={this.handleKeyPress}
					tabIndex="0"
					role="button"
					aria-pressed={this.state.visible}
					aria-expanded={this.state.visible}
				>
					<div className="dropdown__toggle-title">{this.props.title}</div>
					<div className="dropdown__toggle-icon">
						{this.state.visible ? (
							<i className="fas fa-chevron-up"></i>
						) : (
							<i className="fas fa-chevron-down"></i>
						)}
					</div>
				</div>
				{this.state.visible ? (
					<div className="dropdown__content">
						{this.fillContent(this.props.content)}
					</div>
				) : null}
			</div>
		);
	}
}

export default Dropdown;

/* 
const Dropdown = ({ title, content, type = 'large' }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<article
			className={'dropdown ' + (type === 'large' ? 'large' : 'small') + (isOpen ? '' : ' closed')}
			onClick={() => {
				setIsOpen(!isOpen)
			}}>
			<div className='dropdown__label'>
				<h3>{title}</h3>
				<img
					className={isOpen ? 'arrow_down' : ''}
					src={arrowUp}
					alt='chevron to close or open dropdown'></img>
			</div>
			<div className='dropdown__content'>{content}</div>
		</article>
	);
};

export default Dropdown; */