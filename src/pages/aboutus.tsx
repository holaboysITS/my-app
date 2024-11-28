import './aboutus.css';
import NavBar from '../components/NavBar/navbar';
import vibecat from '../utility/vibecat.gif';
import maxwell from '../utility/maxwell.gif';
import miaocute from '../utility/miaocute.gif';


function Aboutus() {
    return (





        <div className="dashboard">
          <div className='NAVBARab'>
          <NavBar/>
          </div>
         
	<aside className="search-wrapab">
		<div className="search">
			<label htmlFor="search">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
				<input type="text" id="search"/>
			</label>
		</div>
		
		<div className="user-actions">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z"/></svg>
			</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"/><path d="M11 2h2v10h-2z"/></svg>
			</button>
		</div>
	</aside>

	<main className="content-wrap">
		<header className="content-head">
			<h1>ABOUT US</h1>
		</header>
		
		<div className="content">
			
		
			<section className="person-boxes">

				
				<div className="person-box">
					<div className="box-avatar">
						<img src={maxwell} alt=""/>
					</div>
					
					<div className="box-bio">
						<h2 className="bio-name">Stefano Birillo</h2>
						<p className="bio-position">Project Manager</p>
                        <p className="bio-position">.TSX GOD</p>
                        <p className="bio-position">Full-Stack</p>

					</div>
					
					<div className="box-actions">
                        <p className='gh'>github stefano</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 18H6V6h7V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7z"/><path d="M17.465 5.121l-6.172 6.172 1.414 1.414 6.172-6.172 2.12 2.121L21 3h-5.657z"/></svg>
						</button>

					</div>
				</div>
				
				<div className="person-box">
					<div className="box-avatar">
          <img src={vibecat} alt="vibecat" />
          <span className="no-name">VD</span>
        </div>
					
					<div className="box-bio">
						<h2 className="bio-name">Andrea Russolillo</h2>
						<p className="bio-position">.CSS GOD</p>
                        <p className="bio-position">Designer</p>
                        <p className="bio-position">Front-End</p>


					</div>
					
					<div className="box-actions">
						<p className='gh'>@Aan.Ruu</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 18H6V6h7V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7z"/><path d="M17.465 5.121l-6.172 6.172 1.414 1.414 6.172-6.172 2.12 2.121L21 3h-5.657z"/></svg>
						</button>
					
					</div>
				</div>
				
				<div className="person-box">
					<div className="box-avatar">
						<img src="" alt="Head of Digital"/>
					</div>
					
					<div className="box-bio">
						<h2 className="bio-name">Matteo Panepucci</h2>
                        <p className="bio-position">Python Team</p>
                        <p className="bio-position">Api's</p>
						<p className="bio-position">Back-End</p>
					</div>
					
					<div className="box-actions">
                    <p className='gh'>github Matteo</p>

						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 18H6V6h7V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7z"/><path d="M17.465 5.121l-6.172 6.172 1.414 1.414 6.172-6.172 2.12 2.121L21 3h-5.657z"/></svg>
						</button>
						

					</div>
				</div>
				
				
				
				<div className="person-box">
					<div className="box-avatar">
						<img src={miaocute} alt="Devorah Moretti, Head of Trading"/>
					</div>
					
					<div className="box-bio">
						<h2 className="bio-name">Devorah Moretti</h2>
						<p className="bio-position">Python Team</p>
                        <p className="bio-position">Api's</p>
						<p className="bio-position">Back-End</p>

					</div>
					
					<div className="box-actions">

                    <p className='gh'>@DevoMore</p>

						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 18H6V6h7V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7z"/><path d="M17.465 5.121l-6.172 6.172 1.414 1.414 6.172-6.172 2.12 2.121L21 3h-5.657z"/></svg>
						</button>
						

					</div>
				</div>
				
				<div className="person-box">
					<div className="box-avatar">
						<img src="" alt="Francesco Berardino, Head of Human Resources"/>
					</div>
					
					<div className="box-bio">
						<h2 className="bio-name">Francesco Berardino</h2>
						<p className="bio-position">Python Team</p>
                        <p className="bio-position">Back-End</p>
						<p className="bio-position">Weird IntelliJ</p>

					</div>
					
					<div className="box-actions">
                    <p className='gh'>github Bales</p>

						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 18H6V6h7V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7z"/><path d="M17.465 5.121l-6.172 6.172 1.414 1.414 6.172-6.172 2.12 2.121L21 3h-5.657z"/></svg>
						</button>

					</div>
				</div>
				
				<div className="person-box">
					<div className="box-avatar">
						<img src="" alt="Giuseppe Giuffreda, Head of International"/>
					</div>
					
					<div className="box-bio">
						<h2 className="bio-name">Giuseppe Giuffreda</h2>
                        <p className="bio-position">Python Team</p>
						<p className="bio-position">PM Assistant</p>
                        <p className="bio-position">Public Relations</p>

					</div>
					
					<div className="box-actions">
                    <p className='gh'>github Giuseppe</p>

						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 18H6V6h7V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7z"/><path d="M17.465 5.121l-6.172 6.172 1.414 1.414 6.172-6.172 2.12 2.121L21 3h-5.657z"/></svg>
						</button>
						

					</div>
				</div>
			</section>
		</div>
	</main>
</div>



        
    );
};

export default Aboutus