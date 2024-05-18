import { useNavigate, useParams } from 'react-router-dom';

export const About = () => {
    const navigate = useNavigate();
    const { name , age, lastname } = useParams();
    return (
      <div>
          <h1>About {name} {lastname} {age}</h1>
          <button onClick={()=>navigate("/")}>Home Screen</button>
      </div>
    )
}
