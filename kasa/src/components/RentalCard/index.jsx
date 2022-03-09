import {component} from 'react';
import PropTypes from 'prop-types';
import '../RentalCard/RentalCard.css';

class RentalCard extends component {
    render() {
        const { id, cover, title } = this.props;
        return (
            <article key={id} className="rental-card">
                <img className="rental-card__img" alt="rental" src={cover} />
                <span className="rental-card__title">{title}</span>
            </article>
        );
    }
}

//function RentalCard({ id, title, cover }) {
//    return (
//        <article key={id} className="rental-card">
//            <img className="rental-card__img" alt="rental" src={cover}/>
//           <span className="rental-card__title">{title}</span>
//        </article>
//    )
//}


RentalCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default RentalCard ;