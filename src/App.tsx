import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { history } from "./utils/history";
import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";
import Service from "./routes/Home/Service";
import SobreNos from "./routes/Home/SobreNos";

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<HomeIndex />} />
          <Route path="servico" element={<Service />} />
          <Route path="sobre-nos" element={<SobreNos />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App
