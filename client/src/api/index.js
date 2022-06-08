import axios from 'axios';


const url = 'http://localhost:5000/products';

export const fetchProducts = () => axios.get(url).then((response) => {console.log("heloooooo",response.data);
    // setData(response.data);}).catch((error) => {
    // console.log(error);
    });
    // };
// axios.get(url);

export const createProducts = (newProduct) => axios.post(url, newProduct);

export const updateProducts = (id, updatedProd) => axios.patch(`${url}/${id}`, updatedProd);
export const deleteProducts = (id) => axios.delete(`${url}/${id}`);