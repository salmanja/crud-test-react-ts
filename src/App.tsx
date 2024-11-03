import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { User } from "./types";

import "./App.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  //add user
  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  //update user
  const updateUser = (updateUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === updateUser.id ? updateUser : u))
    );
  };

  //delete user
  const deleteUser = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <UserForm
        onSave={addUser}
        editingUser={editingUser}
        onEditSave={updateUser}
      />
      <UserList users={users} onDelete={deleteUser} onEdit={setEditingUser} />
    </div>
  );
};
export default App;
