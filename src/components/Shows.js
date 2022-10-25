// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../styles/shows.css"
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCameraAlt } from "@fortawesome/free-solid-svg-icons";


const Shows = () => {
    const [seasonName, setSeasonName] = useState([]);
    const [seasonId, setseasonId] = useState(1);
    const navigate = useNavigate();
    useEffect(
        () => {
            getSeasonDetail();
        }
        ,[]);

    const url = `https://api.tvmaze.com/shows`;
    function getSeasonDetail() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => { setSeasonName(data); })
            .catch((err) => { console.log(err) })
    };

    const handleFunction = (val)=>{
        navigate(`/Nuventis/season/${val}`)
        
    }
    return (
        <div id="Show">
                <h3 className="title"><FontAwesomeIcon icon = {faCamera}/> Shows</h3>
                <div className="showCont">

                    {seasonName.map((data) => {
                        return (
                            <div className="Shows" onClick={()=>{handleFunction(data.id)}}>
                                <img src={data.image.medium} alt="Season" />
                                <div className="ShowDetail">
                                    <h4 className="showName">{data.name} </h4>
                                    <h6 className="rating">rating <span>{data.rating.average}</span></h6>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
    )
}
export default Shows;
