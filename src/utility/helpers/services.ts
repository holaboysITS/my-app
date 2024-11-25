import authHelper from "./authHelper";

const config = {
    apiUrl: "whatever the fuck my api is going to be"
  };
  

export  const services = {
    login,
    logout,
};

function login(username: string, password: string) {

    const request = { //this thing is the content of the request that im about to send i guess
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
};

    return fetch(config.apiUrl, request).then(responseHandler) //later

};

function logout() {
    localStorage.removeItem('user'); //didnt even have to create this but ok
};

function responseHandler(r: Response) {
    // later
}