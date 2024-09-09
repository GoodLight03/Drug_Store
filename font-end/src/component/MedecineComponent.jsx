import React, { useEffect, useState } from 'react'
import { createMed, getMed, updateMed } from '../service/MedecineService'
import { useNavigate, useParams } from 'react-router-dom'
const MedecineComponent = () => {

    const [dateMan, setdateMan] = useState('')
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [quantity, setquantity] = useState('')
    const [type, settype] = useState('')
    const [vexpiry, setvexpiry] = useState('')

    const { id } = useParams();

    const handledateMan = (e) => setdateMan(e.target.value);

    const handlename = (e) => setname(e.target.value);

    const handleprice = (e) => setprice(e.target.value);

    const handlequantity = (e) => setquantity(e.target.value);

    const handletype = (e) => settype(e.target.value);

    const handlevexpiry = (e) => setvexpiry(e.target.value);

    const [error, setError] = useState({
        dateMan: '',
        name: '',
        price: '',
        quantity: '',
        type: '',
        vexpiry: ''
    })

    const nav = useNavigate();

    useEffect(()=>{
        if(id){
            getMed(id).then((response)=>{
                setdateMan(response.data.dateMan);
                setname(response.data.name);
                setprice(response.data.price);
                setquantity(response.data.quantity);
                settype(response.data.type);
                setvexpiry(response.data.vexpiry);
            }).catch(error=>{
                console.log(error);
            })
        }
    },[id])

    function saveorUpdateMed(e) {
        e.preventDefault();

        const med = { dateMan, name, price, quantity, type, vexpiry }
        console.log(med)


        if (validateform()) {
            if(id){
                updateMed(id,med).then((response)=>{
                    console.log(response.data);
                    nav('/');
                }).catch(error=>{
                    console.log(error);
                })
            }else{
                createMed(med).then((response) => {
                    console.log(response.data);
                    nav('/');
                }).catch(error=>{
                    console.log(error);
                })
            }
            
        }


    }

    function validateform() {
        let valid = true;
        const errorCoppy = { ...error }

        if (name.trim()) {
            errorCoppy.name = '';
        } else {
            errorCoppy.name = 'Name is required';
            valid = false;
        }

        if (price.trim()) {
            errorCoppy.price = '';
        } else {
            errorCoppy.price = 'Price is required';
            valid = false;
        }

        if (quantity.trim()) {
            errorCoppy.quantity = '';
        } else {
            errorCoppy.quantity = 'Quantity is required';
            valid = false;
        }

        if (type.trim()) {
            errorCoppy.type = '';
        } else {
            errorCoppy.type = 'Type is required';
            valid = false;
        }

        setError(errorCoppy);
        return valid;

    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Med</h2>
        }else{
            return <h2 className='text-center'>Add Med</h2>
        }
    }

    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Date St</label>
                                <input
                                    type='date'
                                    //placeholder='Enter name'
                                    value={dateMan}
                                    className='form-control'
                                    onChange={handledateMan}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter name'
                                    value={name}
                                    className={`form-control ${error.name ? 'is-invalid' : ''}`}
                                    onChange={handlename}>

                                </input>
                                {error.name && <div className='invalid-feedback'>{error.name}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Price</label>
                                <input
                                    type='text'
                                    placeholder='Enter price'
                                    value={price}
                                    className={`form-control ${error.price ? 'is-invalid' : ''}`}
                                    onChange={handleprice}>

                                </input>
                                {error.price && <div className='invalid-feedback'>{error.price}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Quantity</label>
                                <input
                                    type='text'
                                    placeholder='Enter quantity'
                                    value={quantity}
                                    className={`form-control ${error.quantity ? 'is-invalid' : ''}`}
                                    onChange={handlequantity}>

                                </input>
                                {error.quantity && <div className='invalid-feedback'>{error.quantity}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Type</label>
                                <input
                                    type='text'
                                    placeholder='Enter type'
                                    value={type}
                                    className={`form-control ${error.type ? 'is-invalid' : ''}`}
                                    onChange={handletype}>

                                </input>
                                {error.type && <div className='invalid-feedback'>{error.type}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Date End</label>
                                <input
                                    type='date'
                                    //placeholder='Enter name'
                                    value={vexpiry}
                                    className='form-control'
                                    onChange={handlevexpiry}>
                                </input>
                            </div>

                            <button className='btn btn-success' onClick={saveorUpdateMed}>Save</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MedecineComponent