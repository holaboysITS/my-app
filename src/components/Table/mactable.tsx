import { useState } from 'react';
import './table.css';
import { Machinery } from '../../utility/classes/machinery';
import { getMachineryItems } from '../../utility/helpers/services';
import { useEffect } from 'react';

function MacTable() {
    const [stile, setStyle] = useState("hidden")

    const showTable = () => {
        console.log("Click")
        if (stile !== "hidden") setStyle("hidden")
            else setStyle("shown")
    }


    const [machinery, setMachineryState] = useState<Machinery[]>([]);

    function setMachinery(response: Machinery[]) {
        setMachineryState(response);
        console.log(response)
    }
    
    useEffect(() => {
        const fetchMachinery = async () => {
            try {
                const response = await getMachineryItems();
                setMachinery
    (response);
            } catch (error) {
                console.error("Error fetching Machinery:", error);
            }
        };
    
        fetchMachinery();
    }, []);


    return (
        <>

            {machinery.map((machine) => (
                <div className="card" key={machine._id}>
                    <div className="card__title"></div>
                    <div className="card__data">
                        <div className="card__right">
                            <div className="item">name</div>
                            <div className="item">location</div>
                            <div className="item">description</div>
                            <div className="item">machineries</div>
                        </div>
                        
                        <div className="card__left">
                            <div className="item">{machine.name}</div>
                            <div className="item">{machine.plant_id}</div>
                            <div className="item">{machine.status}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MacTable