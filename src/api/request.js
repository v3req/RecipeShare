export const restUrl = 'https://kxivikepqevqgxaxmtjn.supabase.co/rest/v1';
export const authUrl = 'https://kxivikepqevqgxaxmtjn.supabase.co/auth/v1';
export const apiKey = 'sb_publishable__tXct0qMN2nj84pwjpATSA_O_B_2WOZ'


async function baseRequest (url, path='/', method='GET', data=null, opts={}) {
    const options = {
        headers: {
            ...opts.headers,
            apikey: apiKey,
            Prefer: "return=representation",
            ...getAuthHeader()
        },
    }

    if(method !== 'GET') {
           options.method = method;
    };

    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    const response = await fetch(url + path, options);

    if (!response.ok) {
        return response.status;
    }

    if (response.status === 204) {
        return null; 
    }

    return response.json();

}

export default async function request(path = "/", method = "GET", data = null, opts = {}){
    return baseRequest(restUrl, path, method, data, opts);
}

export const authRequest = async (path = "/", method = "GET", data = null, opts = {}) => {
    return baseRequest(authUrl, path, method, data, opts);
};

function getAuthHeader() {
    
  const auth = JSON.parse(localStorage.getItem("auth") || "null");
  const accessToken = auth?.access_token;

  return {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
  };
}