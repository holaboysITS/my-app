import { UserResponse } from '../classes/user';
import { Machinery } from '../classes/machinery';
import { Plant } from '../classes/plant';

const config = {
    loginUrl: "http://127.0.0.1:8000/user",
    machineryGetUrl: "http://127.0.0.1:8000/",
    plantGetUrl: "http://127.0.0.1:8000/",
    plantPostUrl: "http://127.0.0.1:8000/",
    machineryPostUrl: "http://127.0.0.1:8000/"
  };

  export async function getMachineryItems(): Promise<Machinery[]> {
    try {
        const response = await fetch(config.machineryGetUrl);
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
        const response = await fetch(config.plantGetUrl);
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

export async function newMachinery(plant_id: number, name: string, type: string, specifications: Record<string, string>) {

    const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plant_id, name, type, specifications })
};

    try {
        const r = await fetch(config.machineryPostUrl, request);
        if (!r.ok) {
            throw new Error('response not ok');
        }
        const result = await r.json();
        return result
    } catch (e) {
        throw e;
    }

}

export async function newPlant(name: string, location: string, description: string, machineries: string[]) {

    const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, location, description, machineries })
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
            try {
                // const result = JSON.parse(t);
                // return result.token? result.token : null;
                return Promise.resolve(t)
            } catch (e) {
                console.error('Error:', e);
                return Promise.reject('Error with response format')
            }
        } else {
            return Promise.reject(r.statusText);
        };
    });
};
