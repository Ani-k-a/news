import axios from "axios";

axios.defaults.baseURL = 'https://api.nytimes.com';

export const fetchGlobalSearch = async (q) => {

    const params = new URLSearchParams(
        {
            ['api-key']: 'swFn2cAEJLdctFKO9AiuLZ3wmFGnxUrh',
            q
        }
    )

    const response = await axios.get(`/svc/search/v2/articlesearch.json?${params}`);
    const dates = await response.data;
    console.log(dates);
    const docs = await dates.response;
    return docs.docs;
};