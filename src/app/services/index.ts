import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

const getInvoices = (clientId: string) => {
  const urlAddress = BASE_URL + (clientId ? `invoices?clientNumber=${clientId}` : 'invoices');

  return axios.get(urlAddress)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response; 
    });
};

export default getInvoices;
