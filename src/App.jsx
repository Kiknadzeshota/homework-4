import "./App.css";
import TodoApp from "./components/Todo-app";
import MainSection from "./styled-component/MainSection";
import BgImage from "./styled-component/BgImage";
function App() {
  return (
    <>
      <MainSection>
        <BgImage />
        <TodoApp></TodoApp>
      </MainSection>
    </>
  );
}

export default App;
