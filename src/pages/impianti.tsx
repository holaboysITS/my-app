import React, { useContext } from "react";
import { Impianto } from "../utility/classes/impianto";
import { Contesto, TContesto } from "../utility/classes/context_imp";

const Page3: React.FC = () => {
  const { data, setData } = useContext(Contesto) as TContesto;
  return (
    <div className="contenuto">
        {data && data.slice().reverse().map((elemento: Impianto) => (
            <div className="impianto">
              <b className="name"> {elemento.nome} </b> 
              <p className="text">Posizione:{elemento.posizione} </p>
              <p>Desrizione dell'impianto:</p> <br />
              <p className="text">Desrizione dell'impianto: {elemento.descrizione}</p>
              <p className="text">Numero Macchinari: {elemento.num_macchinari}</p>
            </div>
          ))}
      </div>
  );
};


export default Page3;