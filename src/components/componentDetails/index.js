import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { inputValue } from "../redux/actions"
import { useDispatch } from "react-redux"
import { VideoHTMLAttributes } from "react"


function Album() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const input=useSelector(state=>state.value)
    const [data,setData]=useState([])
    const [error,setError]=useState('')
    const [product,setProduct]=useState([])
    useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
                .then(res=>setData(res.data))
                .catch(err=>setError(err))
    },[])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums/${input}`)
            .then(res=>setProduct(res.data),setError(''),dispatch(inputValue('')))
            .catch(err=>setError('err.message'))
},[input])
    console.log(id,product)
  return (
    <div>
        <h1>{data.title}</h1>
        <img src={data.thumbnailUrl} alt='thumbnail'/>
        <p>{product.title}</p>
      
        <p>{error}</p>

    </div>
  )
}
export default Album