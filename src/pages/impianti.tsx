import React from 'react';
import NavBar from '../components/NavBar/navbar';
import Table from '../components/Table/table';
import './impianti.css';
import { getPlantItem, getPlantItems, newPlant, useHardLogout } from '../utility/helpers/services';
import { useState, useEffect } from 'react';
import { Plant } from '../utility/classes/plant'; // Ensure you have a Plant type defined in your types file



const Page2: React.FC = () => {
	  const hardLogout = useHardLogout();

    const [stile, setStyle] = useState("hidden")

    const showForm = () => {
        console.log("Click")
        if (stile !== "hidden") setStyle("hidden")
            else setStyle("shown")
    }

const [name, setName] = useState('');
const [location, setLocation] = useState('');
const [description, setDescription] = useState('');
const [plantErrors, setLoginErrors] = useState('');


const handlePlantPost = async (form: React.FormEvent) => {
    form.preventDefault();
    console.log("handle called")
   if (name && location && description) {

    try {
        const Plant = await newPlant(name, location, description)
        console.log('log name, location, description')

    } catch (ex) {
      if (ex instanceof Error) {
        setLoginErrors(ex.message);
      } else {
        setLoginErrors("Unknown error")
      }
    };
   } else {
    setLoginErrors('Inserire Plant');
   }
}


const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
	const {name, value} = e.target;

	if (name === "name") { 
		setName(value);
	} else if (name === "location") {
		setLocation(value); 
	} else if (name === "id") {
		setId(value);
	} else { setDescription(value) };

	}




const [id, setId] = useState("");

const handlePlantGet = async (form: React.FormEvent) => {
	console.log("id : "+ id);
	form.preventDefault();
	try {
		const response = await getPlantItem(id);
		
		return response;
	}catch (e) {
		throw e;
	}
}







  return (
        <div className="dashboard">
          <div className='NAVBAR'>
          <NavBar/>
          </div>
         
	<aside className="search-wrap">
		<div className="search">
			<label className='labelsearch' htmlFor="search">
				<svg onClick={handlePlantGet} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
				<input onChange={handleInputChange} type="text" name='id' id="search"/>
			</label>
		</div>
		
		<div className="user-actions">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z"/></svg>
			</button>
			<button onClick={hardLogout}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"/><path d="M11 2h2v10h-2z"/></svg>
			</button>
		</div>
	</aside>
	

	
	<main className="content-wrap">
		<header className="content-head">
			<h1 onClick={showForm}>Impianti</h1>



      
      <div className={stile}>
		<div className="form-box">
			<form className="form">
				<span className="subtitle">Inserisci un nuovo Impianto</span>
				<span className='subtitle' style={{color : "red"}}>{plantErrors}</span>
				<div className="form-container">
					<input name="name" onChange={handleInputChange} type="Nomei" className="input" placeholder="Nome string" />
					<input name="location" onChange={handleInputChange} type="Location" className="input" placeholder="Location String" />
					<input name="description" onChange={handleInputChange} type="Description" className="input" placeholder="Description" />
				</div>
				<button onClick={handlePlantPost}>Inserisci</button>
			</form>
		</div>
		</div>
		</header>
		




		<div className="content_dashboard">
			<section className="info-boxes">
				<Table />
			</section>
		</div>
	</main>
	
</div>


  );
};

export default Page2;


