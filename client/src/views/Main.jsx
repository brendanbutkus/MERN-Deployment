import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom'


const Main = (props) => {
    const [pirates, setPirates] = useState([])
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/findall")
        .then(res=>{
            console.log(res.data);
            setPirates(res.data.results)

        })
        // .sort(function(a, b) {
        //     if(a.pirateName.toLowerCase() < b.pirateName.toLowerCase()) return -1;
        //     if(a.pirateName.toLowerCase() > b.pirateName.toLowerCase()) return 1;
        //     return 0;
        //    })
        
        .catch(err=>console.log(err))
    }, [])

    const onDeleteHandler = (_id, index) => {
        console.log(_id);
        console.log(index);

        axios.delete(`http://localhost:8000/api/pirates/${_id}/delete`)
        .then(res=>{
            console.log(res);
            const copyPirates = [...pirates];
            copyPirates.splice(index,1);
            setPirates(copyPirates);
            
        })
        history.push("/")
        .catch(err=>console.log(err));
    }

    

    return (
        <div className='w-50 mx-auto mt-5'>
            <Link to="/pirates/create" className='mb-5 btn btn-lg btn-success'>Add an pirate </Link>

            {
                pirates.map((item, i) => {
                    return (
                    <div className=' mb-5'>
                        <h1 key={i}>{item.pirateName}</h1>
                        <img src={item.imgUrl} alt={item.pirateName} />
                        <p><Link to={`/pirates/${item._id}`} className='btn btn-primary btn-lg'>View Pirate</Link></p>
                        <button className='btn btn-danger btn-lg' onClick={()=>onDeleteHandler(item._id)}>Walk the plank</button>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Main;
