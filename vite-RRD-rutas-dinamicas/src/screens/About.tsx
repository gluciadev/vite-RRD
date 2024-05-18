import { useNavigate, useParams } from 'react-router-dom';

export const About = () => {
    const navigate = useNavigate();

    //URL params
    const { name , age, lastname } = useParams();

    //Query params
    const queryParams = new URLSearchParams(location.search);
    const petName = queryParams.get("petName");
    const color = queryParams.get("color");

    return (
      <div>
          <h1>About {name} {lastname} {age}</h1>
          <h2>{petName} {color}</h2>
          <button onClick={()=>navigate("/")}>Home Screen</button>
      </div>
    )
}
