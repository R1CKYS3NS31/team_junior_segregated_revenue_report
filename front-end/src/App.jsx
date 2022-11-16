import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import SideBar from "./components/views/sidebar/SideBar";
import Topbar from "./components/views/topbar/Topbar";
import { DashboardContainer } from "./pages/dashboard/DashboardContainer";
import { Workload } from "./pages/workload/Workload";
import { Registration } from "./pages/registration/Registration";
import { Laboratory } from "./pages/laboratory/Laboratory";
import { Procedures } from "./pages/procedures/Procedures";
import { Radiology } from "./pages/radiology/Radiology";
import { PatientSummaries } from "./pages/patientSummaries/PatientSummaries";
import { DepartmentSummaries } from "./pages/departmentSummaries/DepartmentSummaries";
import { NHIFSummaries } from "./pages/nhifSummaries/NHIFSummaries";
import TestComponent from "./components/test/TestComponent";
import { ConstructionOutlined } from "@mui/icons-material";
import { Pharmacy } from "./pages/pharmacy/Pharmacy";

function App() {
  const [departments, setDepartments] = useState([]);

  // // get departments
  // useEffect(() => {
  //   const getDepartments = async () => {
  //     try {
  //       const res = await fetch("http://localhost:9000/department");
  //       const jsonDepartment = await res.json();
  //       // console.log(jsonDepartment);
  //       setDepartments(jsonDepartment);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getDepartments();
  // }, []);

  const deptRevenue = (department) =>
    department?.reduce((amount, patient) => patient.amount_paid + amount, 0);

  const registrationRevenue = deptRevenue(departments.registration);
  const laoboratoryRevenue = deptRevenue(departments.laboratory);
  const proceduresRevenue = deptRevenue(departments.procedures);
  const radiologyRevenue = deptRevenue(departments.radiology);
  const pharmacyRevenue = deptRevenue(departments.pharmacy);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path={"/"} exact element={<DashboardContainer />} />
          <Route path={"/workload"} element={<Workload />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/radiology" element={<Radiology />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/patientsummaries" element={<PatientSummaries />} />
          <Route
            path="/departmentsummaries"
            element={<DepartmentSummaries />}
          />
          <Route path="/nhifsummaries" element={<NHIFSummaries />} />
          <Route path="/test" element={<TestComponent />} />

          {/* none existing routes */}
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h1>There's nothing here!</h1>
                <Link to={"/"}>
                  <button
                    style={{
                      textDecoration: "none",
                      border: "none",
                      width: 120,
                      borderRadius: 5,
                      padding: "20px",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Go Back Home
                  </button>
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
