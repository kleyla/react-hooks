import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    // console.log(id);
    const arrayFiltrado = users.filter((user) => user.id !== id);
    setUsers(arrayFiltrado);
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  // useEffect con saneamiento y sin saneamiento
  // Sanear: limpiar para q la memoria no se sature, El efecto retornara una funcion de limpieza
  useEffect(() => {
    const timedID = setInterval(() => {
      console.log("UseEffect");
      setIsLoading(!isLoading);
    }, 2000);
    return () => {
      clearInterval(timedID);
    };
  });
  // Si useEffect no retorna nada, solo se ejcuta una vez
  useEffect(() => {
    console.log("Only one time!");
  }, []);
  // Si useEffect tiene parametro este efecto se realizara cada vez que el parametro cambie
  useEffect(() => {
    console.log("Only one time!");
  }, [isLoading]);
  return (
    <div className="container">
      <h1>CRUD WITH HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View user</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            setEditing={setEditing}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
