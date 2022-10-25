// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../styles/episode.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Episode = (prop) => {
    const [seasonName, setSeasonName] = useState([]);

    useEffect(
        () => {
            getEpisodeDetail();
        }
        ,[prop.id]);


    const url = `https://api.tvmaze.com/seasons/${prop.id}/episodes`;
    function getEpisodeDetail() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => { setSeasonName(data); })
            .catch((err) => { console.log(err) })
    };
    return (
        <div id="Eps">
            <h3 className="title" > Episodes</h3>
            <div className="epsCont">

                {seasonName?.map((data) => {
                    return (
                        <div key={data.id} className="episodes" >
                            <img src={data.image != null?data.image.medium:null} alt="episode" />
                            <div className="epDetail">
                                <h4>{data.name}</h4>
                                <h5 className="seaEp">S{data.season}/E{data.number}</h5>
                                <h6 className="duration"><span>{data.airtime}</span>  {data.airdate}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Episode;
