import { component } from 'react';
import '../Rating/Rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Rating extends component {
    constructor(props) {
        super(props);
        this.state = {};
}

    render() {
        const { rating } = this.props;
        const range = [1, 2, 3, 4, 5];

        return (
            <div className="rating">
            {range.map(
                (rangeEl) =>
                    rating >= rangeEl ? (
                        <FontAwesomeIcon
                        icon={faStar}
                        key={rangeEl}
                        style={{ color: '#FF6060' }}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faStar}
                        key={rangeEl}
                        style={{ color: '#E3E3E3' }}
                    />
                )
            )}
        </div>
        );
    }
}
export default Rating;