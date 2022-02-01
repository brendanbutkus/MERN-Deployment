import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const View = (props) => {
    const [view, setView] = useState({});
    const {_id} = useParams();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
        .then(res => {
            console.log(res);
            setView(res.data.results)
        })
        .catch(err => console.log(err));
    }, [_id])


        return(

            <div className='w-50 mx-auto'>
                <h1>Name: {view.pirateName}</h1>
                <p>Position: {view.crewPosition}</p>
                <p>Treasures: {view.treasureChests}</p>
                <p>{view.pirateCatchPhrase}</p>
                <p>Peg Leg:{view.pegLeg  && "yes"}</p>
                <p>Eye Patch:{view.eyePatch && "yes"}</p>
                <p>Hook Hand:{view.hookHand && "yes"}</p>
            </div>


        )



}


export default View;

