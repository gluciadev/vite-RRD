import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=>navigate("/about/Juan/12/Lucas")}>About Screen with all params</button>
        <br></br>
        <br></br>
        <button onClick={()=>navigate("/about/Juan/Martín")}>About Screen without all params</button>
    </div>
  )
}
