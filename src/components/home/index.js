import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './index.css'

function Home() {

  const [data,setData]=useState([])
  const navigation=useNavigate()
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res=>{
            const userDetails=res.data.filter(user=>user.id<=40)
            setData(userDetails)
          }
            
            
          
          )
        
  },[])

  console.log(data)

  return (
    <div>
        <h1>user Details data table</h1>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>City</th>
          </tr>
          </thead>
          <tbody>
        {data.map(person=> <tr key={person.id}>
            <td>{person.id}</td>
            <td className='title' onClick={()=> navigation(`/${person.id}`)}  > {person.username}</td>
            <td>{person.name}</td>
            <td>{person.address.city}</td>
          </tr>)}
        </tbody>
        </table>
    </div>
  )
}
export default Home