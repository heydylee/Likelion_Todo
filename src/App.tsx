import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout"
import Main from "./pages/Main"
import TodoDetail from "./pages/TodoDetail";
import TodoPatch from "./pages/TodoPatch";
import './styles/index.css';
import TodoAdd from "./pages/TodoAdd";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<TodoDetail/>}/>
          <Route path="/add" element={<TodoAdd/>} />
          <Route path="/:id/patch" element={<TodoPatch/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}


export default App
