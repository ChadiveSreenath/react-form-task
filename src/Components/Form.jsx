import React, { useEffect, useRef, useState } from 'react'

const AirTableForm = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [gender, setGender] = useState('')

    const apiKey = 'keyhhA02pYgsuS00t'
    // TaskTable
    // https://api.airtable.com/v0/{baseId}/{tableIdOrName}
    // patic68uHmCo4HxM5.bee9829b807d2f2f25808fcf8014190b442a9a808a1d1c5b6636d1d4d37cde61

    const baseId = "app7p1MFqcBHtIwfh"

    // https://api.airtable.com/v0/{baseId}/{tableIdOrName}

    // const based = require('airtable').base('app7p1MFqcBHtIwfh');


    // var Airtable = require('airtable');
    // Airtable.configure({
    //     endpointUrl: 'https://api.airtable.com',
    //     apiKey: 'keyhhA02pYgsuS00t'
    // });
    // var base = Airtable.base('app7p1MFqcBHtIwfh');

    const dataObj = {
        name: name,
        email: email,
        number: number,
        gender: gender
    }
    const addData = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || number === '' || gender === '') {
            alert('please fill all the input fields')
            return
        }

        else {
            alert('thanks for filling the form')
            e.target.reset()
        }
        console.log(dataObj)
    }

    // async function fetchData() {
    //     await fetch(`https://api.airtable.com/v0/app7p1MFqcBHtIwfh/TaskTable/Authorization:keyhhA02pYgsuS00t`, {
    //         method: 'POST',
    //         method: 'POST',
    //         body: JSON.stringify(dataObj),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((err) => console.log(err))
    // }





    // 

    return (
        <div className='form'>
            <form onSubmit={addData} >
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder='Enter Mobile Number' onChange={(e) => setNumber(e.target.value)} />
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option disabled>select option</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="others">others</option>
                </select>
                <button type="submit" >Add Data</button>
            </form>
        </div>
    )
}

export default AirTableForm