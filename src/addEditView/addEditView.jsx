import React, { useEffect, useState } from 'react'
import "./add.css";
import makeHttpRequest from '../httpServices';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const AddEditView = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [selectedImg, setSelectedImg] = useState("");
    const [operation, setOperation] = useState("add");
    const [id, setId] = useState("")
    const [data, setData] = useState({
        image: "",
        name: "",
        email: "",
        address: "",
        phone: ""
    })

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const imgHandler = (e) => {
        const file = e.target.files[0];
        setSelectedImg(file);
    }

    const validateEmail = (email) => {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    const validatePhone = (phone) => {
        // Simple phone number validation regex
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    const submitHandler = async () => {
        try {
            console.log(data)
            if (!data.name || !data.email || !data.phone || !data.address || !selectedImg) {
                toast.error("All fields are required.");
                return;
            }

            if (!validateEmail(data.email)) {
                toast.error("Invalid email address.");
                return;
            }
    
            if (!validatePhone(data.phone)) {
                toast.error("Invalid phone number. It should be a 10-digit number.");
                return;
            }
            const Data = new FormData;
            Data.append("name", data.name);
            Data.append("email", data.email);
            Data.append("phone", data.phone);
            Data.append('address', data.address);
            Data.append("image", selectedImg);
            const resp = await makeHttpRequest("post", "create", Data);

            setData({
                image: "",
                name: "",
                email: "",
                address: "",
                phone: ""
            });
            setSelectedImg("");
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }

    const editHandler = async()=>{
        try {
            let img = selectedImg ? selectedImg : data?.image
            if (!data.name || !data.email || !data.phone || !data.address || !img) {
                toast.error("All fields are required.");
                return;
            }

            if (!validateEmail(data.email)) {
                toast.error("Invalid email address.");
                return;
            }
    
            if (!validatePhone(data.phone)) {
                toast.error("Invalid phone number. It should be a 10-digit number.");
                return;
            }

            const Data = new FormData;
            Data.append("name", data.name);
            Data.append("email", data.email);
            Data.append("phone", data.phone);
            Data.append('address', data.address);
            if(selectedImg) {
                Data.append("image", selectedImg)
            }
            const resp = await makeHttpRequest('patch', `updateContact/${id}`, Data);
        } catch (error) {
            
        }
    }

    const getData = async(id)=>{
        try {
            const resp = await makeHttpRequest('get', `getContact/${id}`);
            console.log(resp)
            setData({
                image: resp?.data?.image || "",
                name: resp?.data?.name || "",
                email: resp?.data?.email || "",
                address: resp?.data?.address || "",
                phone: resp?.data?.phone || ""
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const method = searchParams.get('method');
        const Id = searchParams.get('id');

        if(method === "view"){
            setOperation("view");
            getData(Id);
        }else if(method === "edit"){
            setOperation("edit");
            getData(Id);
            setId(Id)
        }
    }, [])
    return (
        <div className='container'>
            <div className='header1'>
                <div className="text1">{operation.charAt(0).toUpperCase() + operation.slice(1)} Contact</div>
                <div className="underline1" id='1'></div>
            </div>
            <div className="form">
                <div className="img-section">
                    <img src={selectedImg ? URL.createObjectURL(selectedImg) :
                        data?.image ? data?.image :
                            process.env.REACT_APP_DEFAUL_IMG} alt='' />
                   {operation !== "view"? <input type="file" onChange={imgHandler} />:null}
                </div>
                <div className="text-data-name-emai">
                    <input type="text" placeholder='Enter Name' name='name' value={data?.name} onChange={changeHandler} disabled={operation === "view"}/>
                    <input type="email" placeholder='Enter Email' name='email' value={data?.email} onChange={changeHandler} disabled={operation === "view"}/>
                </div>
                <div className="phone-address">
                    <input type="text" placeholder='Enter Address' name='address' value={data?.address} onChange={changeHandler} disabled={operation === "view"}/>
                    <input type="text" placeholder='Enter Phone' name='phone' value={data?.phone} onChange={changeHandler} disabled={operation === "view"}/>
                </div>
            </div>
            <div className="submit-container">
            <div className="submit" onClick={()=>navigate("/contact-list")}>Back</div>
            {operation === 'edit' ? <div className="submit" onClick={editHandler}>Update</div>:
            operation === 'add' ?<div className="submit" onClick={submitHandler}>Submit</div>:null}
            </div>
        </div>
    )
}

export default AddEditView