import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Adminupdate = () => {
    const [data, setdata] = useState({
        username: "",
        email: "",
        phoneNumber: ""
    });


    const params = useParams();
    const {Authorization_Token} = useAuth();

const GetSingleUser = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/users/${params.id}`, {
            method: "GET",
            headers: {
                Authorization: Authorization_Token
            }
        });
        const result = await response.json();
        console.log("Single user data:", result);

        // ✅ Check whether your API sends { user: {...} } or direct fields
        if (result.user) {
            setdata({
                username: result.user.username || "",
                email: result.user.email || "",
                phoneNumber: result.user.phoneNumber || ""
            });
        } else {
            setdata({
                username: result.username || "",
                email: result.email || "",
                phoneNumber: result.phoneNumber || ""
            });
        }
    } catch (error) {
        console.log(error);
    }
};


    useEffect(() => {
        GetSingleUser();
    }, [params.id]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated data:", data);

    };

    return (
        <div>
            <div className="ContactUs"><h1>Edit User</h1></div>
            <div className="home-parent Contact-Page">
                <div className="home-img content-Contact">

                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        value={data.username}
                        onChange={handleInput}
                    />



                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        value={data.email}
                        onChange={handleInput}
                    />

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        name="phoneNumber"
                        id='phoneNumberupdate'
                        value={data.phoneNumber}
                        onChange={handleInput}
                    />
                    <div>
                        <button className="btn" onClick={handleSubmit}>UPDATE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adminupdate;
