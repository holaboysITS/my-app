const config = {
    apiUrl: "whatever the fuck my api is going to be"
  };

export function login(username: string, password: string) {

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
};

    return fetch(config.apiUrl, request)
                .then(responseHandler)
                .then(item => { //crazy ass
                        if (item != null) {
                            localStorage.setItem('user', item); //i still have no clue what i'm doing but i can't test it unless we set up a shitty back end
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
    return r.text().then(t => {
       if (r.ok) { 
            try {
                const result = JSON.parse(t);
                return result.token? result.token : null;
            } catch (e) {
                console.error('Error:', e);
                return null;
            }
        } else {
            return Promise.reject(r.statusText);
        };
    });
};