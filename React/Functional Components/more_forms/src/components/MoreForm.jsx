import React, {useState} from 'react';

const MoreForm = ()=>{
    let [fName,setfName] = useState("");
    let [lName,setlName] = useState("");
    let [email,setEmail] = useState("");
    let [pwd,setPwd] = useState("");
    let [confPwd,setconfPwd] = useState("");

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange={(e)=>{setfName(e.target.value)}} type="text" className="form-control" name="" id="" />
                    {
                        fName.length < 2 && fName.length > 0 ?
                        <h6 className="text-danger">Must be at least 2 characters long</h6>:
                        ""
                    }
                    <label htmlFor="">Last Name:</label>
                    <input onChange={(e)=>{setlName(e.target.value)}} type="text" className="form-control" name="" id="" />
                    {
                        lName.length < 2 && lName.length > 0 ?
                        <h6 className="text-danger">Must be at least 2 characters long</h6>:
                        ""
                    }
                    <label htmlFor="">Email:</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" name="" id="" />
                    {
                        email.length < 5 && email.length > 0 ?
                        <h6 className="text-danger">Must be at least 5 characters long</h6>:
                        ""
                    }
                    <label htmlFor="">Password:</label>
                    <input onChange={(e)=>{setPwd(e.target.value)}} type="password" className="form-control" name="" id="" />
                    {
                        pwd.length < 8 && pwd.length > 0 ?
                        <h6 className="text-danger">Must be at least 8 characters long</h6>:
                        ""
                    }
                    <label htmlFor="">Confirm Password:</label>
                    <input onChange={(e)=>{setconfPwd(e.target.value)}} type="password" className="form-control" name="" id="" />
                    {
                        confPwd != pwd && confPwd.length > 0?
                        <h6 className="text-danger">Must match with password</h6>:
                        ""
                    }
                </div>
            </form>
            <div>
                <h6>Your Form Data</h6>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>{fName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{lName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{pwd}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default MoreForm;