import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAlertMsg, setShowAlertMsg] = useState(false);

  const handleShowLoggedInSession = () => {
    const color = loggedIn ? "green" : "red";
    const mssg = loggedIn ? "INICIADA" : "SIN INICIAR";
    return <span style={{ color }}>{mssg}</span>;
  };

  const handleLogInOut = () => {
    setLoggedIn(!loggedIn);
    setShowAlertMsg(false);
  };

  const handleNavigate = () => {
    if (loggedIn) {
      navigate("/about");
    } else {
      setShowAlertMsg(true);
    }
  };

  return (
    <div>
      <h1>Home </h1>
      <h2>Estado de la sesion: {handleShowLoggedInSession()} </h2>
      <button onClick={() => handleLogInOut()}>
        {" "}
        {loggedIn ? "Cerrar sesion" : "Iniciar sesion"}
      </button>
      <hr></hr>
      <button style={{ marginTop: "30px" }} onClick={handleNavigate}>
        <span style={{ color: loggedIn ? "green" : "red" }}>About Screen</span>
      </button>
      {showAlertMsg && (
        <h4>
          Debes iniciar sesion para acceder a la pantalla About (ruta protegida)
        </h4>
      )}
    </div>
  );
};
