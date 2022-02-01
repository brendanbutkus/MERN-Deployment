import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Create = (props) => {
    const [frontEndError, setFrontEndError] = useState("");

    const crewPositions = ["captain", "quarter master", "boat swain", "powder monkey"];
    const [form, setForm] = useState({

        pirateName: "",
        imgUrl: "",
        treasureChests: null,
        pirateCatchPhrase: "",
        crewPosition: crewPositions[0],
        platform: "",
        pegLeg: false,
        eyePatch: false,
        hookHand: false,
        
    })
    const history = useHistory();

    const [errors, setErrors] = useState({})

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
        if(event.target.value.length < 3){
            setFrontEndError("value must be at least 3 characters");
        }
        else{
            setFrontEndError("");
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(form);

        axios.post("http://localhost:8000/api/pirates/create", form)
        .then(res=> {
            console.log(res);
            history.push("/");
        })
        .catch(err=>{
            console.log(err.response.data);
            setErrors(err.response.data.err.errors);
        })

    }

    // const handlePirateName = (event) => {
    //     setForm(event.target.value);
    //     if(event.target.value.length < 2){
    //         setPirateNameError("Pirate Name  must be at least 2 characters");
    //     }
    //     else{
    //         setPirateNameError("");
    //     }
    // }
    
    return (
        <div>
            <h1>Add pirate here:</h1>
            <form onSubmit= {onSubmitHandler} className='mt-5 w-50 mx-auto'>
                <div className='form-group'>
                    <input type="text" name="pirateName" className='form-control mb-2' placeholder='pirateName' onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.pirateName && errors.pirateName.message}</span>
                    {
                        frontEndError ?
                        <p style={{color: 'red'}}>{ frontEndError }</p> :
                        ''
                    }
                </div>
                <div className='form-group'>
                    <input type="text" name="imgUrl" className='form-control mb-2' placeholder='imgUrl' onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.imgUrl && errors.imgUrl.message}</span>
                </div>
                <div className='form-group'>
                    <input type="number" name="treasureChests" className='form-control mb-2' placeholder='treasureChests' onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.treasureChests && errors.treasureChests.message}</span>
                </div>
                <div className='form-group'>
                    <input type="text" name="pirateCatchPhrase" className='form-control mb-2' placeholder='pirateCatchPhrase' onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.pirateCatchPhrase && errors.pirateCatchPhrase.message}</span>
                </div>
                <select name="crewPosition" className='form-select mb-2'>
                    {
                        crewPositions.map((crewPosition, i)=>{
                            return <option value={crewPosition} key={i} placeholder='crewPosition' onChange={onChangeHandler}>{crewPosition}</option>
                        })
                    }
                </select>
                <span className="alert-danger">{errors.crewPosition && errors.crewPosition.message}</span>
                <div>
                    <label htmlFor="pegLeg">Peg Leg</label>
                    <input type="checkbox" name="pegLeg" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="eyePatch">eye patch</label>
                    <input type="checkbox" name="eyePatch" onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="hookHand">Hook Hand</label>
                    <input type="checkbox" name="hookHand" onChange={onChangeHandler}/>
                </div>
                <input type="submit" className='btn btn-success' value="Add Pirate"/>
            </form>
        </div>
    )
}

export default Create;
                

                