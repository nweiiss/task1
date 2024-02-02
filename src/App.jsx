import "./App.css"
import { useState, useEffect } from "react";
import Select from "react-select";
import data from "./assets/data.json";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setUsers(data);
  }, []);

  const options = users.map((user) => ({
    value: user.fullName,
    label: user.fullName,
  }));

  const handleChange = (selectedOption) => {
    setSelectedUser(selectedOption);
  };

  return (
      <Select
        className="select"
        value={selectedUser}
        onChange={handleChange}
        options={options}
        isSearchable
        placeholder=""
      />
  );
};

export default App;

