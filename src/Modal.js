
import React,{useState} from 'react';
import './Modal.css';


const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let Modal = ()=>{
    const [isOpen,setIsOpen] = useState(false);


    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        if (e.target.phoneNo.value.toString().length !== 10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
          } else if (new Date(e.target.dob.value).getTime() > Date.now()) {
            alert("Invalid date of birth. Date of birth cannot be in the future.");
          } else if (regex.test(e.target.email.value)==false) {
            alert("Invalid email. Please check your email address.");
          } else {
            e.target.username.value = "";
            e.target.email.value = "";
            e.target.phoneNo.value = "";
            e.target.dob.value = "";
          }
        setIsOpen(false);
    }


    return(<div>
        <h1>User Details Modal</h1>
        <button onClick={()=>{setIsOpen(true);}}>Open Form</button>
        {isOpen && <div className='modal' >
            <div className='modal-content' onClick={() => setIsOpen(false)}>
                <form onSubmit={handleSubmit} className="form" onClick={(e)=>{
                        e.stopPropagation();
                    }}>
                    <div className="input-group" >
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" required/>
                    </div>
                    <div className="input-group" >
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phoneNo">Phone Number:</label>
                        <input type="number" name="phoneNo" id="phone" required />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" name="dob" id="dob" />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>}
    </div>);
};

export default Modal;
