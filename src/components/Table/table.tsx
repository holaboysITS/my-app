import { useState } from 'react';
import './table.css';
import { Plant, PlantOut } from '../../utility/classes/plant';
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
                <div className="card" key={plant._id}>
                    <div className="card__title"></div>
                    <div className="card__data">
                        <div className="card__right">
                        <div className="item">id</div>

                            <div className="item">name</div>
                            <div className="item">location</div>
                            <div className="item">description</div>
                            <div className="item">machineries</div>
                        </div>
                        
                        <div className="card__left">
                        <div className="item">{plant._id}</div>

                            <div className="item">{plant.name}</div>
                            <div className="item">{plant.location}</div>
                            <div className="item">{plant.description}</div>
                            {plant.machineries.map((machinery) => (
                            <div className="item" >
                                
                                   {machinery}
                               
                            </div>
                         ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Table