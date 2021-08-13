import React,{useState, useContext} from 'react'
import {data} from './data'
//REDUX is for bigger applications we can use useContext for smaller applications

const PersonContext = React.createContext(); // this will return us two components Provider and Consumer


function ContextAPI() {
    const [people,setPeople]=useState(data);
    const removePerson=(id)=>{
        setPeople(people=>{
            return people.filter((person)=>person.id!==id)
        })
    }
    return (
        <>
            <section>
                <h3>Prop Drilling</h3>
                <List mypeople={people} rp={removePerson}></List>

            </section>
        </>
    )
}
const List=(props)=>{
    return <>
{
    props.mypeople.map((people)=>{
        return <SinglePerson key={people.id} per={people} remove={props.rp}/>
    })
}
    </>
}
const SinglePerson=(props)=>{

return <div className='item'>
    <h4>{props.per.name}</h4>
    <button onClick={()=>props.remove(props.per.id)}>Remove</button>
</div>
}
export default ContextAPI