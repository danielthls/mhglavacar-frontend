import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from "react-router-dom";
import { history } from "./utils/history";
import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<HomeIndex />} />
        </Route>
      </Routes>
    </HistoryRouter>
  )
}

export default App
