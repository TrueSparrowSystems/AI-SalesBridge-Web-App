import axios from "axios";

class AxiosService {
  constructor() {
    if (!AxiosService.instance) {
      this.axiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
        timeout: 10000, // Set a timeout for requests
      });

      // Request interceptor
      this.axiosInstance.interceptors.request.use(
        (request) => {
          // Set credential option to true for all api calls. -- This is needed for feature branches only as the api & web are on different domains
          request.withCredentials =
            process.env.NEXT_PUBLIC_ENVIRONMENT !== "production";

          return request;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      // Response interceptor
      this.axiosInstance.interceptors.response.use(
        (response) => {
          // You can customize the response here (e.g., handling errors)
          return response;
        },
        (error) => {
          if (error?.response?.status === 401) {
            // refresh Token logic goes here

            window.location.reload();
          }

          if (error) return Promise.reject(error);
        }
      );

      AxiosService.instance = this;
    }

    return AxiosService.instance;
  }

  // GET request method
  async get(url, config = {}) {
    try {
      const response = await this.axiosInstance.get(url, config);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // POST request method
  async post(url, data, config = {}) {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // PUT request method
  async put(url, data, config = {}) {
    try {
      const response = await this.axiosInstance.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // DELETE request method
  async delete(url, config = {}) {
    try {
      const response = await this.axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const instance = new AxiosService();
Object.freeze(instance);

export default instance;

/* 

if we need to ignoere the axios interceptors then we can create new axios instance 
```
  const instance = axios.create()
  const response = await instance.get(url);
```

If we want to override the default axios headers/add new ones, then we can pass header object to axios
```
  axios.get(
    url, 
    {
      transformRequest: [(data, headers) => {
        headers["Authorization"] = "XXXXXX";
        return data;
      }],
    }
  );
```

If we want to eject any request/response interceptors from axios, we can call to ejectRequestInterceptor before making an ajax call, and add it again
```
  ejectRequestInterceptor()
  ajax.get()
  setUpRequestInterceptor(store, axiosInstance);
```
*/
