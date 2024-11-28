import React from 'react';
import NavBar from '../components/NavBar/navbar';
import Table from '../components/Table/table';
import './dashboard.css';
import { newMachinery, useHardLogout } from '../utility/helpers/services';
import { useState, useEffect } from 'react';
import { getMachineryItem, getMachineryItems } from '../utility/helpers/services';


const Page2: React.FC = () => {
	  const hardLogout = useHardLogout();
	  const [stile, setStyle] = useState("hidden")
	  
	 
	 
	  const showForm = () => {
		  console.log("Click")
		  if (stile !== "hidden") setStyle("hidden")
			  else setStyle("shown")
	  }


	  const [plant_id, setPlantId] = useState('');
	  const [name, setName] = useState('');
	  const [type, setType] = useState('');
	  const [status, setStatus] = useState('');
	  const [specifications, setSpecifications] = useState<{[key: string]: string}>({});
	  const [specKey, setSpecKey] = useState('');
	  const [specValue, setSpecValue] = useState('');
	  const [MachineryErrors, setLoginErrors] = useState('');

	  const addSpec = () => {
		setSpecifications(prevSpecs => ({ ...prevSpecs, [specKey]: specValue }));
		console.log(specifications);
	  }
	  
	  const handleMachineryPost = async (form: React.FormEvent) => {
		  form.preventDefault();
		  console.log("handle machinery post called")
		 if (name && type && status && specifications && plant_id) {
			console.log(specifications)
		  try {
			  const Machinery = await newMachinery(plant_id, name, type, status, specifications)
			  console.log('log name, location, description')
	  
		  } catch (ex) {
			if (ex instanceof Error) {
			  setLoginErrors(ex.message);
			} else {
			  setLoginErrors("Unknown error")
			}
		  };
		 } else {
		  setLoginErrors('Inserire Machinery');
		 }
	  }
	  
	  
	  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			
		  const {name, value} = e.target;
	  
		  if (name === "name") { 
			  setName(value);
		  } else if (name === "type") {
			  setType(value); 
			} else if (name === "status") {
				setStatus(value); 
			} else if (name === "specifications") {
				setSpecifications(prevSpecs => ({ ...prevSpecs, [name]: value })); 
		  } else if (name === "id") {
			  setId(value);
		  } else { setPlantId(value) };
	  
		  }
	  
	  
	  const [id, setId] = useState("");
	  
	  const handleMachineryGet = async (form: React.FormEvent) => {
		  console.log("id : "+ id);
		  form.preventDefault();
		  console.log(id);
		  try {
			  const response = await getMachineryItem(id);
			  
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
				<svg onClick={handleMachineryGet} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
				<input onChange={handleInputChange} name='id' type="text" id="search"/>
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
			<h1 onClick={showForm}>Macchinari</h1>


			<div className={stile}>
		<div className="form-box">
			<form className="form">
				<span className="subtitle">Inserisci un nuovo macchinario </span>
					<span style={{color : "red"}} className="subtitle">{MachineryErrors}
				
				</span>

				
				<div className="form-container">
					<input onChange={handleInputChange} name="name" type="Nome" className="input" placeholder="Nome string" />
					<input onChange={handleInputChange} name="type" type="Type" className="input" placeholder="Type string" />
					<input onChange={handleInputChange} name="status" type="Status" className="input" placeholder="Status Enum" />
					<input onChange={handleInputChange} name="plant_id" type="Id" className="input" placeholder="Id int" />
					<span style={{display:"flex", flexDirection:"row"}}>
				
					</span>
				</div>
				<button onClick={handleMachineryPost}>Inserisci</button>
			</form>
			<form className='form'>
			<input onChange={(spec) => setSpecKey(spec.target.value)} name="specKey" type="Id" className="input" placeholder="Spec Key" />
					<input onChange={(spec) => setSpecValue(spec.target.value)} name="specValue" type="Id" className="input" placeholder="value" />
					<svg onClick={addSpec} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z"/></svg>

			</form>
		</div>
		</div>
		</header>


		
		<div className="content_dashboard">
			<section className="info-boxes">
				<div className="info-box active">
					<div className="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2-1H5V5h14v14z"/><path d="M10.381 12.309l3.172 1.586a1 1 0 0 0 1.305-.38l3-5-1.715-1.029-2.523 4.206-3.172-1.586a1.002 1.002 0 0 0-1.305.38l-3 5 1.715 1.029 2.523-4.206z"/></svg>
					</div>
					
					<div className="box-content">
						<Table/>
						<span className="big"></span>
					</div>
				</div>
				
				<div className="info-box">
					<div className="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 10H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 10H5v-8h14v8zM5 6h14v2H5zM7 2h10v2H7z"/></svg>
					</div>
					
					<div className="box-content">
						<span className="big">132</span>
				    bho 1
					</div>
				</div>
				
				<div className="info-box">
					<div className="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 10H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 10H5v-8h14v8zM5 6h14v2H5zM7 2h10v2H7z"/></svg>
					</div>
					
					<div className="box-content">
						<span className="big">18</span>
						bho 2
					</div>
				</div>
				
				<div className="info-box">
					<div className="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 10H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 10H5v-8h14v8zM5 6h14v2H5zM7 2h10v2H7z"/></svg>
					</div>
					
					<div className="box-content">
						<span className="big">24</span>
						bho 3
					</div>

          
				</div>

        <div className="info-box">
					<div className="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 10H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 10H5v-8h14v8zM5 6h14v2H5zM7 2h10v2H7z"/></svg>
					</div>
					
					<div className="box-content">
						<span className="big">24</span>
						bho 3
					</div>

          
				</div>
			</section>
		
			
		</div>
	</main>
</div>


  );
};

export default Page2;