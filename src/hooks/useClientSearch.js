import { useEffect, useState } from "react";
import useFetchAllClients from "./useFetchAllClients";

const useClientSearch = () => {
  const allClients = useFetchAllClients();
  const [search, setSearch] = useState("");
  const [foundClients, setFoundClients] = useState([]);

  useEffect(() => {
    setFoundClients(allClients);
  }, [allClients]);

  useEffect(() => {
    if (search === "") {
      setFoundClients(allClients);
    } else {
      const filteredClients = allClients.filter(client => {
        return (
          client.name.toLowerCase().includes(search.toLowerCase()) ||
          client.email.toLowerCase().includes(search.toLowerCase()) ||
          client.phoneNumber.toLowerCase().includes(search.toLowerCase())
        );
      });

      setFoundClients(filteredClients);
    }
  }, [search, allClients]);

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  return [search, foundClients, handleSearchChange];
};

export default useClientSearch;
