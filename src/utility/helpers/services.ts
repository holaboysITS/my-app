import { UserResponse } from '../classes/user'

const config = {
    apiUrl: "http://127.0.0.1:8000/user"
  };

export function login(username: string, password: string): Promise<any> {
        console.log("login called")
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
};

        return fetch(config.apiUrl, request)
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

    // return fetch(config.apiUrl, request)
    //             .then(responseHandler)
    //             .then(item => {
    //                     if (item != null) {
    //                         localStorage.setItem('user', item);
    //                     };
    //             }
    //         )
    //         .catch(e => {
    //             throw e;
    //         });
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
