import {component} from 'react'
import { Link } from 'react-router-dom';
import '../Error/Error.css'

class Error extends component {
    render() {
        return (
            <div className="error">
            <div className="error__number">404</div>
            <div className="error__text">
                Oops! La page que vous demandez n'existe pas...
            </div>
            <Link to="/" className="error__homepage-link">
                Retourner sur la page d'accueil
            </Link>
            </div>
        );
    }
}

//function Error() {
//    return (
//        <div>404 Oops! La page que vous demandez n'existe pas... </div>
//    )
//}

export default Error 