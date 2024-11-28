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
        <div className="table">
            <button onClick={showTable}>Show Machines</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Description</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {plants.map((plant) => (
                        <tr key={plant.id}>
                            <td>{plant.id}</td>
                            <td>{plant.name}</td>
                            <td>{plant.location}</td>
                            <td>{plant.description}</td>
                            <td className={stile}>{plant.machineries}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table