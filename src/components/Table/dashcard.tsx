import { useState } from 'react';

import { Plant, PlantOut } from '../../utility/classes/plant';
import { getPlantItems } from '../../utility/helpers/services';
import { useEffect } from 'react';

function Dashcard() {
    const [stile, setStyle] = useState("hidden")

    const showTable = () => {
        console.log("Click")
        if (stile !== "hidden") setStyle("hidden")
            else setStyle("shown")
    }


    const [plants, setPlantsState] = useState<PlantOut[]>([]);

    function setPlants(response: PlantOut[]) {
        setPlantsState(response);
        console.log(response)
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
<>
        {plants.map((plant) => (
        <div>
			<div  key={plant.id}>
				<h2 >{plant.name}</h2>
				<p  >{plant.location}</p>
                <p  >{plant.description}</p>
			</div>
        {plant.machineries.map((machine) => (
			
            <div style={{color: 'red'
           }} key={machine.plant_id}>
                <p >{machine.plant_id}</p>
                <p  >{machine.name}</p>
                <p  >{machine.status}</p>
                <p  >{machine.type}</p>
                        

			</div>))}
		</div> ))}
</>
       
    )
}

export default Dashcard