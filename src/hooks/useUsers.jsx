import axios from "axios";
import { useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [counter, setCounter] = useState(1);

  const headers = {
    "x-api-key": "reqres-free-v1",
  };

  const getListUsers = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${counter}`,
        {
          headers: headers,
        }
      );
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    users,
    totalPages,
    getListUsers,
    counter,
    setCounter,
  };
};
