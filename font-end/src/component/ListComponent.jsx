import React,{useEffect,useState} from 'react'
import { delMed, listmedecine } from '../service/MedecineService'
import{useNavigate} from 'react-router-dom'
const ListComponent = () => {
   
    const [medecines,setv1]=useState([])

    const navi=useNavigate();

    useEffect(()=>{
        getAll();
    },[])

    function getAll(){
        listmedecine().then((response)=>{
            setv1(response.data);
        
        }).catch(error=>{
            console.error(error);
        })
    }
    function addMed(){
        navi('/add-medecine')

    }

    function updateMe(id){
        navi(`/edit-medecine/${id}`)
    }

    function deleteMe(id){
        console.log(id);
        delMed(id).then((repose)=>{
            getAll();
        }).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='container'>
            <h2>ListComponent</h2>
            <button className='btn btn-primary mb-2' onClick={addMed}>
                Add Medechine
            </button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>DateMan</th>
                        <th>Vexpiry</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        medecines.map(v1 =>
                            <tr key={v1.id}>
                                <td>{v1.id}</td>
                                <td>{v1.name}</td>
                                <td>{v1.type}</td>
                                <td>{v1.dateMan}</td>
                                <td>{v1.vexpiry}</td>
                                <td>{v1.quantity}</td>
                                <td>{v1.price}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=>updateMe(v1.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={()=>deleteMe(v1.id)} style={{marginLeft:'10px'}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    )
}

export default ListComponent