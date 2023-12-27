import axios from "axios"

export const getSearchVideo = async (search: any) =>{
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: search,
      part: 'snippet,id',
      regionCode: 'NG',
      maxResults: '12',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '55937f67eamsh16cb5506a296d2fp1a5a6djsn8b7f7bd3e1b0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    localStorage.setItem("Youtube", JSON.stringify(response.data))
    return response.data
  } catch (error) {
    console.error(error);
  }
}