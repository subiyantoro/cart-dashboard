type METHOD = 'GET' | 'POST';

type ApiReturn = {
    data?: any | null,
    resCode: number,
}

const convertPayloadIntoParam = (endpoint: string, payload: any): string => {
    const params = Object.keys(payload).map(x => {
        return encodeURIComponent(x) + '=' + encodeURIComponent(payload[x])
    }).join('&');

    return `${endpoint}?${params}`;
};

const fetchApi = async (
    endpoint: string,
    method: METHOD,
    payload?: any | null,
): Promise<ApiReturn> => {
    let url: string = endpoint;
    if (method === 'GET') {
        if (payload) {
            url = convertPayloadIntoParam(endpoint, payload);
        }
    };

    const response = await fetch(url);
    const dataObj: any = await response.json();
    const resCode: number = response.status;

    return {
        data: dataObj,
        resCode
    }
}

export default fetchApi;
