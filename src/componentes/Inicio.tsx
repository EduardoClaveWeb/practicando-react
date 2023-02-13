import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Inicio: React.FC = () => {
    const context = useContext(UserContext);

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="app">
            <div className="login-form">
                <div className="form">
                    <div style={{
                        padding: "2rem",
                        gap: "10px",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "50vh",
                        fontSize: "80px"
                    }} className="title">DON PURO</div>

                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }} className="type-container">

                        <input style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}
                            className="input"  
                            type="text"
                            name="usuario"
                            placeholder="usuario"
                            value={usuario}
                            onChange={(event) => setUsuario(event.target.value)}>
                        </input>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }} className="type-container">
                        <input style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}
                            className="input"
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={(event) => setPassword(event.target.value)}>
                        </input>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default Inicio;