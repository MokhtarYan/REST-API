import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { fetchData } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./component/UserCard";
import AddUser from "./component/AddUser";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { data, loading } = useSelector((state) => state);
  return (
    <div className="App">
      <AddUser />
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <div className="list">
          {data.map((el) => (
            <div>
              <UserCard user={el} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
