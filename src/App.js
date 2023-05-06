import { useState } from 'react';
import '../src/App.css';


function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [gender, setGender] = useState('')

  const apiKey = 'keyhhA02pYgsuS00t'
  const apiToken = 'patic68uHmCo4HxM5.03ae8ae480e6c7f44c1ec5b7465cfc3a0338862528aa0aff82bd86adc5931264'
  const baseId = 'app7p1MFqcBHtIwfh'
  const tableIdOrName = 'tableTask"'

  const PostReq = () => {
    fetch(` https://api.airtable.com/v0/app7p1MFqcBHtIwfh/tableTask`, {
      method: 'POST',
      body: JSON.stringify({
        "records": [
          {
            "fields": {
              'name': name,
              'email': email,
              'number': number,
              'gender': gender
            }
          }
        ]
      }),
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json"
      }
    }).then((response) => console.log(response))
      .catch((error) => console.log(error))
  }


  const addData = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || number === '' || gender === '') {
      alert('please fill all the input fields')
      return
    }

    else {
      alert('Thanks for filling form data is added to airtable ')
      e.target.reset()
      PostReq()

    }
  }


  return (
    <div className='form'>
      <form onSubmit={addData} >
        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Choose Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="number" placeholder='Enter Mobile Number' onChange={(e) => setNumber(e.target.value)} />
        <button type="submit" >Add Data</button>
      </form>
    </div >
  );
}

export default App;
