import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);

  const handleDelete = (id) => {
    setData((prevData) => {
      return prevData.filter((dt) => dt.id !== id);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("data").select();

      if (error) {
        setFetchError("Could not fetch data!");
        setData(null);
        console.log(error);
      } else {
        setData(data);
        setFetchError(null);
      }
    };

    fetchData();
  }, []);

  return { data, fetchError, handleDelete };
};

export default useFetchData;
