import { UserResponse } from '../classes/user';
import { Machinery } from '../classes/machinery';
import { Plant, PlantOut } from '../classes/plant';
import { useNavigate } from 'react-router-dom';

const config = {
    loginUrl:           "http://127.0.0.1:8000/user",
    machineriesGetUrl:  "http://127.0.0.1:8000/machineries",
    plantsGetUrl:       "http://127.0.0.1:8000/plants",
    machineryGetUrl:    "http://127.0.0.1:8000/machinery",
    plantGetUrl:        "http://127.0.0.1:8000/plants",
    plantPostUrl:       "http://127.0.0.1:8000/plants",
    machineryPostUrl:   "http://127.0.0.1:8000/machineries",
    plantDeleteUrl:     "http://127.0.0.1:8000/plants",
    machineryDeleteUrl: "http://127.0.0.1:8000/machinery"
  };


  export async function deleteMachineryItem(id: string) {
    const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
};

    try {
        const r = await fetch(`${config.machineryDeleteUrl}/${id}`, request);
        if (!r.ok) {
            let message = await r.text()
            throw new Error(`Response not ok sadge ${r.status}: ${message}`);
        }
        return r.status;
    } catch (error) {
        console.error('errore:', error);
        throw error;
    }
    
  }

  export async function deletePlantItem(id: string) {
    const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
};

    try {
        const r = await fetch(`${config.plantDeleteUrl}/${id}`, request);
        if (!r.ok) {
        let message = await r.text()
        throw new Error(`Response not ok sadge ${r.status}: ${message}`);
    }
    } catch (error) {
            console.error('errore:', error);
            throw error;
    }
    return 200;
  }

  export async function getMachineryItem(id: string): Promise<Machinery> {

    try {
        const r = await fetch(`${config.machineryGetUrl}/${id}`);
        if (!r.ok) {
        let message = await r.text()
        throw new Error(`Response not ok sadge ${r.status}: ${message}`);
    }
        const result = await r.json(); 
        localStorage.setItem('plantByIdResult', JSON.stringify(result));
        return result
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function getPlantItem(id: string): Promise<Plant> {

    try {
        const r = await fetch(`${config.plantGetUrl}/${id}`);
        if (!r.ok) {
        let message = await r.text()
        throw new Error(`Response not ok sadge ${r.status}: ${message}`);
    }
        const result = await r.json(); 
        localStorage.setItem('plantByIdResult', JSON.stringify(result));
        return result
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

  export async function getMachineryItems(): Promise<Machinery[]> {
    try {
        const r = await fetch(config.machineriesGetUrl);
        if (!r.ok) {
        let message = await r.text()
        throw new Error(`Response not ok sadge ${r.status}: ${message}`);
    }
        const machineryItems: Machinery[] = await r.json();
        let c = 0;
        localStorage.clear();
        machineryItems.forEach((machinery) => {
            localStorage.setItem(c.toString(), JSON.stringify(machinery));
            c++
        })
        return machineryItems;
    } catch (error) {
        console.error('errore:', error);
        throw error;
    }
}

export async function getPlantItems(): Promise<PlantOut[]> {
    try {
        const r = await fetch(config.plantsGetUrl);
        if (!r.ok) {
        let message = await r.text()
        throw new Error(`Response not ok sadge ${r.status}: ${message}`);
    }
        const newPlant: PlantOut[] = await r.json();
        let c = 0;
        localStorage.clear();
        newPlant.forEach((plant) => {
            localStorage.setItem(c.toString(), JSON.stringify(plant));
            c++
        })
        return newPlant;
    } catch (error) {
        console.error('Errore:', error);
        throw error;
    }
}

export async function newMachinery(
    plant_id: string,
    name: string,
    type: string,
    status: string,
    specifications: Record<string, string>
    ): Promise<Machinery> {

    const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({plant_id, name, type, status, specifications })
};

    try {
        console.log(`${config.machineryPostUrl}`);
        const r = await fetch(`${config.machineryPostUrl}`, request);
        if (!r.ok) {
        let message = await r.text()
        throw new Error(`Response not ok sadge ${r.status}: ${message}`);
    }
        const result = await r.json();
        return result
    } catch (e) {
        throw e;
    }

}

export async function newPlant(name: string, location: string, description: string): Promise<Plant> {
    let machineries: string[] = []
    const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, location, description, machineries})
};
    console.log(request);
    try {
        const r = await fetch(config.plantPostUrl, request);
        if (!r.ok) {
        let message = await r.text()
        throw new Error(`Response not ok sadge ${r.status}: ${message}`);
    }
        const result = await r.json();
        return result
    } catch (e) {
        throw e;
    }

}

export function login(username: string, password: string): Promise<any> {

    console.log("login called")

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
};

        return fetch(config.loginUrl, request)
                .then(responseHandler)
                .then((item: UserResponse) => {
                        if (item != null) {
                            const role = item.username;
                            localStorage.setItem('user', role.toString());
                            return item.username
                        };
                }
            )
            .catch(e => {
                throw e;
            });

};

export function logout() {
    localStorage.removeItem('user');
};

function responseHandler(r: Response) {
    console.log(r)
    return r.json().then(t => {
        console.log(t)
       if (r.ok) { 
            return t;
        } else {
            return Promise.reject(r.statusText);
        };
    });
};


  export const useHardLogout = () => {
    const navigate = useNavigate();
  
    const hardLogout = () => {
      logout();
      navigate('/login');
    };
  
    return hardLogout;
  };
  