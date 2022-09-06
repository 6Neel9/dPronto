import  {useState}  from 'react';

function Form(){
    const [name,setName]= useState('')
    const console=(e)=>{
        setName(e.target.value)
    }
    const click = ()=>{
        console.log(name)
    }

    return(
        <>
        <form>
            <input type="text" placeholder="Enter Name" onChange={console}/>
            <button onClick={click}>click to show in console</button>
        </form>
        <p>{name}</p>
        </>
    )
}
export default Form