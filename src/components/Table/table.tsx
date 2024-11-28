import { useState } from 'react';
import './table.css';

function Table() {
    const [stile, setStyle] = useState("hidden")

    const showTable = () => {
        console.log("Click")
        if (stile !== "hidden") setStyle("hidden")
            else setStyle("shown")
    }
    return (
        <table onClick={showTable}>
            <tr >
                <th>IMPIANTO n.</th>
            </tr>
            <tr className={stile}>
                <td>
                    
                        <div className="box-content">
                            <span className='exploded_dash'></span>
                            <div className='api_info'>
                            <span>impianto</span>
                            <span>macchinario</span>
                            <span>data</span>
                            <span>ora</span>
                            <span>check</span>
                            </div>
                        </div>
                    
                </td>
            </tr>
        </table>
    )
}

export default Table