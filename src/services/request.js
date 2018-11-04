import axios from "axios";

let postData = data => {
   let url;
   let params = data["params"];
   let baseURL = "http://localhost:8000/api/";
   if (data["type"]) url = baseURL + type;

   return new Promise((resolve, reject) => {
      axios({ method: "post", url: baseURL + type, data: params })
         .then(responseJson => {
            resolve(responseJson);
         })
         .catch(error => {
            reject(error);
         });
   });
};

let getData = data => {
   let url;
   let params = data["params"];
   let baseURL = "http://localhost:8000/api/";
   if (data["type"]) url = baseURL + type;
   else url = data["full"];

   return new Promise((resolve, reject) => {
      axios({ method: "get", url: url, params: params })
         .then(responseJson => {
            resolve(responseJson);
         })
         .catch(error => {
            reject(error);
         });
   });
};

export { PostData, GetData };
