import React,{useState} from 'react';

const Form = (props)=>{
    const [itemVal, setItemVal] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const item = {
            name: itemVal,
            complete:false,
        };
        
        props.onNewSubmit(item);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" onChange={(e)=> setItemVal(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default Form;