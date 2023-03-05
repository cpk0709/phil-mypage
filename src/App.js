// import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./page/Home";
import Cat from "./page/Cat";
import Dog from "./page/Dog";
import Resume from "./page/resume";

function App() {
  const navigate = useNavigate();
  const moveToPage = (path, param) => {
    if (param) {
      navigate(`/${path}/${param}`);
      return;
    }
    navigate(`/${path}`);
  };
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link style={{ marginLeft: 10 }} to="/cat/navi link">
          Cat으로 가기
        </Link>
        <Link style={{ marginLeft: 10 }} to="/dog">
          Dog으로 가기
        </Link>
        <Link style={{ marginLeft: 10 }} to="/resume">
          Resume로 가기
        </Link>
      </div>
      <div>
        <h2>버튼으로 이동</h2>
        <button onClick={() => moveToPage("cat", "nabi")}>Cat 이동</button>
        <button onClick={() => moveToPage("dog")}>Dog 이동</button>
      </div>
      <Routes>
        <Route path="/" element={<Home text={"안녕하세요"} />} />
        <Route
          path="/cat/:cat_name"
          element={
            <Cat
              textValue={"안녕하세요"}
              test={"hello"}
              test2={{ name: "kim", age: 22 }}
            />
          }
        />
        <Route path="/dog" element={<Dog />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
