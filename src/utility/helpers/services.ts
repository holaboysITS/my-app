import { UserResponse } from '../classes/user';
import { Machinery } from '../classes/machinery';
import { Plant } from '../classes/plant';
import { useNavigate } from 'react-router-dom';

const config = {
    loginUrl:           "http://192.168.99.108:8000/login",
    machineriesGetUrl:  "http://192.168.99.108:8000/machinery",
    plantsGetUrl:       "http://192.168.99.108:8000/plants",
    machineryGetUrl:    "http://192.168.99.108:8000/machinery",
    plantGetUrl:        "http://192.168.99.108:8000/plants",
    plantPostUrl:       "http://192.168.99.108:8000/plants",
    machineryPostUrl:   "http://192.168.99.108:8000/plants",
    plantDeleteUrl:     "http://192.168.99.108:8000/plants",
    machineryDeleteUrl: "http://192.168.99.108:8000/machinery"
  };

  export async function deleteMachineryItem(id: string) {
    const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
};

    try {
        const r = await fetch(`${config.machineryDeleteUrl}/${id}`, request);
        if (!r.ok) {
            throw new Error('response not ok');
        }
    } catch (error) {
            console.error('errore:', error);
            throw error;
    }
    return 200;
  }

  export async function deletePlantItem(id: string) {
    const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
};

    try {
        const r = await fetch(`${config.plantDeleteUrl}/${id}`, request);
        if (!r.ok) {
            throw new Error('response not ok');
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
            throw new Error('response not ok');
        }
        return await r.json(); 
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function getPlantItem(id: string): Promise<Plant> {

    try {
        const r = await fetch(`${config.plantGetUrl}/${id}`);
        if (!r.ok) {
            throw new Error('response not ok');
        }
        return await r.json(); 
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

  export async function getMachineryItems(): Promise<Machinery[]> {
    try {
        const response = await fetch(config.machineriesGetUrl);
        if (!response.ok) {
            throw new Error('response not ok');
        }
        const machineryItems: Machinery[] = await response.json();
        return machineryItems;
    } catch (error) {
        console.error('errore:', error);
        throw error;
    }
}

export async function getPlantItems(): Promise<Plant[]> {
    try {
        const response = await fetch(config.plantsGetUrl);
        if (!response.ok) {
            throw new Error('response not ok');
        }
        const newPlant: Plant[] = await response.json();
        return newPlant;
    } catch (error) {
        console.error('Errore:', error);
        throw error;
    }
}

export async function newMachinery(plant_id: number, name: string, type: string, status: string, specifications: Record<string, string>) {

    const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, type, status, specifications })
};

    try {
        const r = await fetch(`${config.machineryGetUrl}/${plant_id}/machinery`, request);
        if (!r.ok) {
            throw new Error('response not ok');
        }
        const result = await r.json();
        return result
    } catch (e) {
        throw e;
    }

}

export async function newPlant(name: string, location: string, description: string) {

    const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, location, description})
};

    try {
        const r = await fetch(config.plantPostUrl, request);
        if (!r.ok) {
            throw new Error('response not ok');
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
  