import styled from "styled-components";
import data from "../data.json";
import { useState } from "react";
import { GlobalStyles } from "../styled-component/GlobacStyle";
function TodoApp() {
  const [active, setActive] = useState(data);
  const [title, setTitle] = useState("");
  const [sun, setSun] = useState(false);
  return (
    <TodoAppChild>
      <GlobalStyles sun={sun} />
      <div>
        <h1>TODO</h1>
        <button
          onClick={() => {
            if (sun === false) {
              setSun(true);
            } else {
              setSun(false);
            }
          }}
        ></button>
        {!sun ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        )}
      </div>
      <div
        className="inputDiv"
        style={
          sun === true
            ? { backgroundColor: "white" }
            : { backgroundColor: "#25273D" }
        }
      >
        <div>
          <span></span>
        </div>
        <input
          style={
            sun === true
              ? { backgroundColor: "white" }
              : { backgroundColor: "#25273D" }
          }
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Create a new todo…"
        />
      </div>
      <ul>
        {active.map((item) => {
          return (
            <ListComponent
              sun={sun}
              key={item.id}
              onClick={() => {
                const curentmassage = active.map((element) => {
                  if (item.id === element.id) {
                    return { ...element, isRead: !element.isRead };
                  }
                  return element;
                });
                setActive(curentmassage);
              }}
            >
              <div>
                <span
                  sun={sun}
                  style={
                    !item.isRead
                      ? { backgroundColor: "transperent" }
                      : {
                          background:
                            "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)",
                        }
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-width="2"
                      d="M1 4.304L3.696 7l6-6"
                    />
                  </svg>
                </span>
              </div>
              <p
                style={
                  item.isRead === true
                    ? { textDecoration: "line-through", color: "#D1D2DA" }
                    : null
                }
              >
                {item.title}
              </p>{" "}
              <svg
                onClick={() => {
                  const delate = active.findIndex(
                    (index) => index.id === item.id
                  );
                  active.splice(delate, 1);
                  setTitle([...active]);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  fill="#000000"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>{" "}
            </ListComponent>
          );
        })}
      </ul>
      <div
        className="PropAction"
        style={
          sun === true
            ? { backgroundColor: "white" }
            : { backgroundColor: "#25273D" }
        }
      >
        <p>{active.length} items left</p>
        <div>
          <p
            onClick={(event) => {
              if (title.trim() !== "") {
                setActive([...active, { title }]);
              }
            }}
          >
            add
          </p>
        </div>
        <p
          onClick={() => {
            setActive([...active.splice(0, 0)]);
          }}
        >
          Clear Completed
        </p>
      </div>
    </TodoAppChild>
  );
}

export default TodoApp;
const ListComponent = styled.li`
  background-color: ${(props) => (props.sun === true ? "white" : "#25273D")};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e4f1;
  width: 100%;
  position: relative;
  > svg {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  p {
    color: ${(props) => (props.sun === true ? "#494c6b" : "#C8CBE7")};
    font-size: 18px;
    font-weight: 400;
    width: 90%;
    cursor: pointer;
  }
`;
const TodoAppChild = styled.div`
  max-width: 540px;
  margin: 100px auto;
  > div {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    > button {
      position: absolute;
      right: 0px;
      height: 100%;
      width: 30px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    h1 {
      color: white;
      font-size: 40px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 15px;
      color: white;
    }
  }
  .inputDiv {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    background-color: white;
    overflow: hidden;
    > div {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        background-color: ${(props) =>
          props.sun === true ? "white" : "transeperent"};
      }
    }
    input {
      width: 90%;
      padding: 15px 10px;
      border: none;
      outline: none;
      font-size: 18px;
      font-weight: 400;
      color: #9495a5;
    }
  }
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #e3e4f1;
  }
  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    overflow: hidden;
  }
  .PropAction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 17px 10px;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    p {
      color: #9495a5;
      cursor: pointer;
    }
    > div {
      display: flex;
      align-items: center;
      p {
        margin: 0px 5px;
        color: #9495a5;
        &:hover {
          color: ${(props) => (props.sun === true ? "blue" : "white")};
        }
      }
    }
  }
`;
