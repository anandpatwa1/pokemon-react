import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";

import { Provider } from "react-redux";
import { store } from "./store/store";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MyPokemons from './pages/MyPokemons';
import AddPokemon from './pages/AddPokemon';
import DetailPage from './pages/DetailPage';
import EditPokemon from './pages/EditPokemon';
import MyFavorite from './pages/MyFavorite';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/myPokemon" element={<MyPokemons />} />
          <Route path="/add-pokemon" element={<AddPokemon />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
          <Route path="/edit/:id" element={<EditPokemon />} />
          <Route path="/favorite" element={<MyFavorite />} />
         
        </Routes>
      </Router>
    </Provider>
  );
}


export default App;
