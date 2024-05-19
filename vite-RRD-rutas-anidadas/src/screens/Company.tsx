import { useNavigate } from 'react-router-dom';

export const Company = () => {
    const navigate = useNavigate();
    return (
      <div>
          <h3>Company contenido anidado</h3>
          <div className='buttonsScreenDisplay'>
            <button onClick={()=>navigate("/about/team")}>Team Nested Screen</button>
          </div>
          
      </div>
    )
}