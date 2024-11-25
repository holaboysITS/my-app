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
        <table>
            <tr onClick={showTable}>
                <th>Nomino del Impianto</th>
            </tr>
            <tr className={stile}>
                <td>1</td>
                <td>
                    <ul>
                        <li>Macchinarino</li>
                    </ul>
                </td>
            </tr>
        </table>
    )
}

export default Table