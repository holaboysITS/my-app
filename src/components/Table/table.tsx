import { useState } from 'react';
import './table.css';
import { Plant } from '../../utility/classes/plant';
import { getPlantItems } from '../../utility/helpers/services';
import { useEffect } from 'react';

function Table() {
    const [stile, setStyle] = useState("hidden")

    const showTable = () => {
        console.log("Click")
        if (stile !== "hidden") setStyle("hidden")
            else setStyle("shown")
    }


    const [plants, setPlantsState] = useState<Plant[]>([]);

    function setPlants(response: Plant[]) {
        setPlantsState(response);
    }
    
    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await getPlantItems();
                setPlants(response);
            } catch (error) {
                console.error("Error fetching plants:", error);
            }
        };
    
        fetchPlants();
    }, []);


    return (

<table className="card">
{plants.map((plant) => (
    <div>
<p className="Heading" key={plant.id}>{plant.name}</p>
  <p className="Description">{plant.description}</p>
  {Object.entries(plant.machineries).map(([key, value]) => (
  <p className="Mach" key={key}>{key}, {value}</p>))}
  <div className="buttonContainer">
    <button className="mod">Modifica</button>
  <button className="del">Elimina</button>
  </div>
  </div> ))}

</table>


        




    )
}

export default Table