import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl, callback) => {
  const [infoApi, setInfoApi] = useState();
  //get
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`;
    axios
      .get(url)
      .then((resp) => {
        setInfoApi(resp.data);
      })
      .catch((error) => console.error(error));
    
  };
  //post
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`;
    axios
      .post(url, data)
      .then((resp) => {
        console.log(resp.data);
        setInfoApi([...infoApi, resp.data]);
        callback(true);
      })
      .catch((error) => console.error(error));
  };
  //delete
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .delete(url)
      .then((resp) => {
        console.log(resp.data);
        const infoApiFiltered = infoApi.filter((e) => e.id !== id);
        setInfoApi(infoApiFiltered);
      })

      .catch((error) => console.log(error));
  };
  //update
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .patch(url, data)
      .then((resp) => {
        console.log(resp.data);
        const infoApiMapped = infoApi.map((e) => (e.id === id ? resp.data : e));
        setInfoApi(infoApiMapped);
        callback(true);
      })
      .catch((error) => console.log(error));
  };
  return [infoApi, getApi, postApi, deleteApi, updateApi];
};
export default useFetch;
