export const restUrl = 'https://kxivikepqevqgxaxmtjn.supabase.co/rest/v1/';
export const authUrl = 'https://kxivikepqevqgxaxmtjn.supabase.co/auth/v1/';
export const apiKey = 'sb_publishable__tXct0qMN2nj84pwjpATSA_O_B_2WOZ'


async function baserequest (url, path='/', method='GET', data=null, opts={}) {
    const options = {
        headers: {
            ...opts.headers,
            apikey: apiKey,
            Prefer: "return=representation",
        },
    }

    if(method !== 'GET') {
           options.method = method;
    };

    if(data){
        options.body = JSON.stringify(data);
    };

    const response = await fetch(url + path, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();

}

export default async function request(path = "/", method = "GET", data = null, opts = {}){
    return baserequest(restUrl, path, method, data, opts);
}

export const authRequest = async (path = "/", method = "GET", data = null, opts = {}) => {
    return baseRequest(authUrl, path, method, data, opts);
};