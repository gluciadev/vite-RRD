import { useNavigate } from 'react-router-dom';

export const Team = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h3>Team contenido anidado</h3>
        <div className='buttonsScreenDisplay'>
            <button onClick={()=>navigate("/about/company")}>Company Nested Screen</button>
        </div>
    </div>
  )
}
