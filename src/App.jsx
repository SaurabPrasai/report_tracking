import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Details from "./pages/Details";
import ReportEntry from "./pages/ReportEntry";


export default function App() {
  return (
    <BrowserRouter className="text-3xl font-bold underline">
     
    <Routes>
      <Route path="/" element={<RootLayout><Home/></RootLayout>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/patient/:id" element={ <RootLayout><Patient/></RootLayout>}/>
      <Route path="/report-entry" element={<RootLayout><ReportEntry/></RootLayout>}/>
    </Routes>
    </BrowserRouter>
  )
}