import axios from 'axios';

export const getListings = () => axios.get('http://localhost:3001/');

// export const getListings = () => {
//     fetch('http://localhost:3001/')
//     .then(responce => responce.json())
//     .then(data => console.log(data));
//   }
