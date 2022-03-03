import { rentals } from '../../data/Rentals.js';
import RentalCard from "../RentalCard/index";
import '../RentalList/RentalList.css';

function RentalList() {
    return (
        <div className="rental-list">
            { rentals.map(({ id, title, cover }) => 
            <div key={id}>
            <RentalCard
            title ={title}
            cover={cover} />
            </div>
            )}
        </div>
    )
}

export default RentalList