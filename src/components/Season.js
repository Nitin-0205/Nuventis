// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../styles/season.css"
import Episode from "./Episode";
import { useParams } from 'react-router';
// import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import img from "F:\ReactApps\nuventis\public\favicon.ico";
const Season = () => {
    const [seasonName, setSeasonName] = useState([]);
    const [seasonId, setseasonId] = useState(2);
    const [episodeId, setepisodeId] = useState(null);
    const {id} = useParams();

    useEffect(
        () => {
            getSeasonDetail();
        }
        ,[seasonId]);

    const url = `https://api.tvmaze.com/shows/${id}/seasons`;
    function getSeasonDetail() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => { setSeasonName(data); setepisodeId(data[0].id)})
            .catch((err) => { console.log(err) })
    };
    return (
        <div className="mainComp">
            <div id="Sea">
                <h3 className="title">Seasons</h3>
                <div className="showCont">

                    {seasonName?.map((data) => {
                        return (
                            <div key = {data.id} className="Shows" onClick={()=>{setepisodeId(data.id);}}>
                                <img src={data.image.medium} alt="Season" />
                                <div className="ShowDetail">
                                    <h4 className="showName">Season {data.number} </h4>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
            <Episode id = {episodeId} />
        </div>
    )
}
export default Season;
