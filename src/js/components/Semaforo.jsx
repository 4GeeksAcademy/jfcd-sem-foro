import React, {useState} from "react";
import "../../styles/semaforo.css";

const Semaforo = () => {
    const [color, setColor] = useState("rojo");

    const Luz = ({lightColor}) => {
        const encendidoClass = lightColor === color ? " encendido" : "";

        return (
            <div className={`luz ${lightColor}${encendidoClass}`}
            onClick={() => setColor(lightColor)}>
            </div>
        );
    };

    return (
        <div className="semaforo-container">
            <div className="semaforo-pole"></div>
            <div className="semaforo-body">
                <Luz lightColor="rojo" />
                <Luz lightColor="amarillo" />
                <Luz lightColor="verde" />
            </div>
        </div>
    );
};

export default Semaforo;