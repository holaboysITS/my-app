import { useState } from 'react';
import './table.css';
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


    const [plants, setPlantsState] = useState<Plant[]>([]);

    function setPlants(response: Plant[]) {
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
        <div className='dashakards' style={{color:"black"}}>
			<div  key={plant._id}>
				<h2 >{plant.name}</h2>
				<p  >location: {plant.location}</p>
                <p  style={{borderBottom: "1px solid black"}}>description: <br />{plant.description}</p>
			</div>
        {plant.machineries.map((machine) => (
			
            <div style={{color: 'grey'
           }} key={machine}>
                <p >id: {machine}</p>

			</div>))}
		</div> ))}
</>
       
    )
}

export default Dashcard