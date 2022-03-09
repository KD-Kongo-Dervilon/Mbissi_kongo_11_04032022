import {component} from 'react'
import { rentals } from '../../data/Rentals.js';
import RentalCard from "../RentalCard/index";
import '../RentalList/RentalList.css';

class RentalList extends component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div className="rental-list">
                {rentals.map(({ id, title, cover }) =>
                    <div key={id}>
                        <RentalCard 
                        id={id}
                        title={title}
                        cover={cover}/>
                    </div>
                )}
            </div>
        )
    }
}



//function RentalList() {
//    return (
//        <div className="rental-list">
//            { rentals.map(({ id, title, cover }) => 
//            <div key={id}>
//            <RentalCard
//            title ={title}
//            cover={cover} />
//            </div>
//           )}
//        </div>
//    )
//}

export default RentalList