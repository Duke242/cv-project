import React, {Component, useState} from "react";

export default function GeneralEntryForm ({setMethod}){ 
    const [name,setName] =  useState("")
    const [email, setEmail] = useState("") 
    const [number, setNumber] = useState("") 
    const [submitted, setSubmitted] = useState(false) 
    
        return ( 
            <form>
                <legend>General Entry Form</legend>
                <input id="name" placeholder="Name" value={name} onChange={({target: {value}}) => setName(value)}></input>
                <input id="email" placeholder="Email" type='email' value = {email} onChange={({target: {value}}) => setEmail(value)}></input>
                <input id="phoneNumber" placeholder="Phone Number" value = {number} type='tel' onChange={({target: {value}}) => setNumber(value)}></input>
                <button type="submit" onClick={(evt) => { 
                  evt.preventDefault()
                  setMethod({name, email, phone: number})  
                  setSubmitted(true)
                }}>{submitted ? 'Resubmit' : 'Submit'}</button>
                <button type='button' onClick={() => {setName('');setEmail('');setNumber('');setSubmitted(false);setMethod(null)}}>Delete</button>
            </form>
        )
    
    
}