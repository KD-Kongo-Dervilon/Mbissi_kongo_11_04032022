import {component} from 'react'
import Hero from '../../components/Hero';
import RentalList from '../../components/RentalList';
import backgroundhome from '../../Assets/background-home.png'

class Home extends component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <div className="wrapper">
                <Hero cover={backgroundhome} isTextVisible={true}/>
                <RentalList/>
            </div>
        )
    }
}

//function Home() {
//    return (
//        <div className="wrapper">
//            <Hero />
//            <RentalList/>
//        </div>
//    )
//}

export default Home 