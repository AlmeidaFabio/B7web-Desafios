import axios from 'axios'

export async function getPhrasesFromApi() {
    const response = await axios.get('https://allugofrases.herokuapp.com/frases/random')

    return response.data;
}