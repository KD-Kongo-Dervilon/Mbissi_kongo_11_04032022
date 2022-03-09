import { component } from 'react';
import Carousel from '../../Components/Carousel';
import RentalTitle from '../../Components/RentalTitle';
import Collapse from '../../Components/Collapse';
import Rating from '../../Components/Rating';
import Tags from '../../Components/Tags';
import Host from '../../Components/Host';
import '../Rental/Rental.css';

const rentals = 'http://localhost:3000/data.json';

class Rental extends component {
    constructor(props) {
        super(props);

        this.state = {
            rentalData: [],
            id: {},
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(rentals)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    rentalData: data,
                    id: id,
                });
            });
        }

    render() {
        const { rentalData, id } = this.state;

        if (rentalData.length === 0) {
            return <div></div>;
        }

        const rental = rentalData.find((rental) => rental.id === id);

        return (
            <div>
                <Carousel picture={rental.pictures[0]} />
                <div className="rental-presentation">
                    <div className="title-tags">
                    <RentalTitle
                        title={rental.title}
                        location={rental.location}
                    />
                    <div className="tags-wrapper">
                        <Tags tags={rental.tags} />
                    </div>
                </div>

                <div className="host-rating">
                    <Host name={rental.host.name} picture={rental.host.picture} />
                    <Rating rating={rental.rating} />
                </div>
            </div>
            <div className="rental__collapse-wrapper">
                <Collapse title={'Description'} text={rental.description} />
                <Collapse title={'Équipements'} text={rental.equipments} />
            </div>
        </div>
        );
    }
}

//function Rental() {
//    return (
//        <div> Page Location </div>
//    )
//}

export default Rental