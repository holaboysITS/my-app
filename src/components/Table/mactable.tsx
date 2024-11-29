import { useState } from 'react';
import './table.css';
import { Machinery } from '../../utility/classes/machinery';
import { getMachineryItems, machineryEdit } from '../../utility/helpers/services';
import { useEffect } from 'react';
import { deleteMachineryItem } from '../../utility/helpers/services';
import { useNavigate } from 'react-router-dom';

function MacTable() {
    const [stile, setStyle] = useState("hidden")
    const [adminState, setState] = useState(false);

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
    const navigate = useNavigate()
    const handleDelete = (id: string) => {
        deleteMachineryItem(id);
        navigate(0);
        
    }
    
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user === 'admin') {
            setState(true);
        }
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



    const [specifications, setSpecifications] = useState<{[key: string]: string}>({});
    const [specKey, setSpecKey] = useState('');
    const [specValue, setSpecValue] = useState('');
    const [status, setStatus] = useState('');

    const addSpec = () => {
		setSpecifications(prevSpecs => ({ ...prevSpecs, [specKey]: specValue }));
		console.log(specifications);
	  }


    return (
        <>

            {machinery.map((machine) => (
                <div className="card" key={machine._id}>
                    <div className="card__title"></div>
                    <div className="card__data">
                        <div className="card__right">
                        <div className="item">id</div>
                            <div className="item">name</div>
                            <div className="item">location</div>
                            <div className="item">description</div>
                        </div>
                        
                        <div className="card__left">
                        <div className="item">{machine._id}</div>
                            <div className="item">{machine.name}</div>
                            <div className="item">{machine.plant_id}</div>
                            <div className="item">{machine.status}</div>
                            
                            <div className="item">
                            </div>

                        </div>
                        <div>
                        {adminState && 
                        <div>
                            <form className='form'>
                                <input onChange={(spec) => setStatus(spec.target.value)} name="status" type="Id" className="input" placeholder="Status" />
                                <input onChange={(spec) => setSpecKey(spec.target.value)} name="specKey" type="Id" className="input" placeholder="Spec Key" />
			                    <input onChange={(spec) => setSpecValue(spec.target.value)} name="specValue" type="Id" className="input" placeholder="value" />
			                    <svg onClick={addSpec} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z"/></svg>
			                    <button onClick={() => {machineryEdit(machine._id, status,specifications)}}>update</button>
                            </form>
                        </div>}
                        </div>
                    </div>
                    {adminState && <button className='buttondelete' onClick={() => {handleDelete(machine._id)}}>delete</button>}
                </div>
            ))}
        </>
    )
}

export default MacTable