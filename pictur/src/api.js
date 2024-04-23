import axios from "axios";

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=Q_1c3RRuqKXa4Xy4o8yOEp7QPjWltvKmvE-kgZuQWw0'
    
    const response =  await axios.get(url,{
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response.data.results)
    return response.data.results
}

export default searchImage