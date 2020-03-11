import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-bf3f8.firebaseio.com/'
  });

  export default instance;


