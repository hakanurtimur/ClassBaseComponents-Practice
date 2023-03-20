import UserFinder from './components/UserFinder';
import UsersContext from './Store/user-context';


const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];



function App() {

  const users = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={users}>
      
      <UserFinder></UserFinder>
    </UsersContext.Provider>
  );
}

export default App;
