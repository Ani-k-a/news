import axios from "axios";

axios.defaults.baseURL = 'https://api.nytimes.com';

export const fetchMostPopular = async () => {

    const params = new URLSearchParams(
        {
            ['api-key']: 'swFn2cAEJLdctFKO9AiuLZ3wmFGnxUrh',
        }
    )

    const response = await axios.get(`/svc/mostpopular/v2/viewed/1.json?${params}`);
    const dates = await response.data;
    console.log(dates);
    const docs = await dates.results;
    return docs
};