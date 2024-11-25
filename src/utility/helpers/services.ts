import authHelper from "./authHelper";

const config = {
    apiUrl: "whatever the fuck my api is going to be"
  };
  

export const services = {
    login,
    logout,
};

function login(username: string, password: string) {

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
};

    return fetch(config.apiUrl, request)
                .then(responseHandler)
                .then(item => { //crazy ass
                        if (item != null) {
                            item.authdata = window.btoa(username + ': ' + password);
                            localStorage.setItem('user', JSON.stringify(item));
                        };
                }
            );
};

function logout() {
    localStorage.removeItem('user');
};

function responseHandler(r: Response) {
    return r.text().then(t => {
       if (!t) return JSON.parse(t);
    });
};