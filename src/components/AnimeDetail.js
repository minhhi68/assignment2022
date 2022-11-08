import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AnimeDetail() {
    const userName = useParams();
    const [animeList, setAnimeList] = useState([])
    console.log(userName);

    function getData() {
        axios.get("" + userName.id)
            .then(response => response.data)
            .then((data) => {
                setAnimeList(data)
            });
        console.log(animeList);
    }

    useEffect(()=>{
        getData();
    },[])

    return (
      <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div style={{backgroundImage: 'linear-gradient(white), white), url('+animeList.background+') ', backgroundSize: 'cover'}}>
                        <div className="card-body">
                            <div className="row">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
