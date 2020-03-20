import axios from 'axios';

/**
 *
 * @param {String} url
 * @return {JSON}
 */
export async function getData(url){
    return await axios.get(url)
        .then(response =>{
            return response.data;
        });
}
