import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:7000";
export const imageUrl =  () => {
  return "http://localhost:7000/images/";
};
// const storedUser = JSON.parse(localStorage.getItem("user"));

// export const review = async (data) => {
//   try {
//     const res = await axios.post(`${API_URL}/givereviewandrating`, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(res.data);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching restaurants:", error);
//     throw error;
//   }
// };
export const signUpUser = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/api/user/create`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const signInUser = async (data) => {
  console.log("data", data);
  
  try {
    const res = await axios.post(`${API_URL}/api/user/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
export const logoutUser = async (token) => {
  console.log("data", token);
  
  try {
    const res = await axios.post(`${API_URL}/api/user/logout`, {}, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
export const logoutAllUser = async (token) => {
  console.log("data", token);
  
  try {
    const res = await axios.post(`${API_URL}/api/user/logout-all`, {}, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
export const getUserApi = async (token) => {
    try {
      const res = await axios.get(`${API_URL}/getuser`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Include token in the Authorization header
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
};

export const updateUserApi = async (data) => {
    try {
      const token = localStorage.getItem("token")

      const res = await axios.put(`${API_URL}/update`, data,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Include token in the Authorization header
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
};
// ____________________________________________
export const getAllData = async () => {
    try {

      const res = await axios.get(`${API_URL}/api/item/all`,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
};
export const getOnePokemon = async (id) => {
    try {

      const res = await axios.get(`${API_URL}/api/item/get-one/${id}`,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
};
export const getMyData = async () => {
    try {
      const token = localStorage.getItem("PokemonToken")

      const res = await axios.get(`${API_URL}/api/item/my`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
};
export const DeleteMyData = async (id) => {
    try {
      const token = localStorage.getItem("PokemonToken")

      const res = await axios.delete(`${API_URL}/api/item/delete/${id}`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
};
export const addData = async (formData) => {
  try {
    const token = localStorage.getItem("PokemonToken");
    
    const res = await axios.post(`${API_URL}/api/item/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`, 
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error;
  }
};
export const updatePokemon = async (id, formData) => {
  try {
    const token = localStorage.getItem("PokemonToken");
    
    const res = await axios.put(`${API_URL}/api/item/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`, 
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error;
  }
};

