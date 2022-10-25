import "../index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <h1><span className='logo'><FontAwesomeIcon icon={faBiohazard}></FontAwesomeIcon></span>Tvmaze shoWs</h1>
            <ul>
                <li>
                    <Link to ="/Nuventis" className="home"><FontAwesomeIcon icon ={faCameraRetro}/> Shows </Link>
                </li>
            </ul>
        </div>

    )
}
export default Header;