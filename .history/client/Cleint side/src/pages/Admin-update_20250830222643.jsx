import React from 'react'

const Adminupdate = () => {
    return (
        <div>
            <div className="ContactUs"><h1>Contact Us</h1></div>
            <div className="home-parent Contact-Page">
                <div className="home img-contact"></div>
                <div className="home-img content-Contact">

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder='Username'
                        name='username'
                        id='username'
                        required
                        autoComplete='off'
                        value={data.username}
                        onChange={handleInput}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder='Email'
                        name='email'
                        id='email'
                        required
                        autoComplete='off'
                        value={data.email}
                        onChange={handleInput}
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" placeholder='phone Number' name='phoneNumber' id='phoneNumber' required autoComplete='off' value={user.phoneNumber} onChange={handleInput} />

                    <div>
                        <button className="btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminupdate
