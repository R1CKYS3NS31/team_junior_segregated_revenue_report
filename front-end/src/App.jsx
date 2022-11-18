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
import  PatientSummaries  from "./pages/patientSummaries/PatientSummaries";
import { DepartmentSummaries } from "./pages/departmentSummaries/DepartmentSummaries";
import { NHIFSummaries } from "./pages/nhifSummaries/NHIFSummaries";
import TestComponent from "./components/test/TestComponent";
import { Pharmacy } from "./pages/pharmacy/Pharmacy";

function App() {
  const [departments, setDepartments] = useState([]);
  // departments
  const [registration, setRegistration] = useState([]);
  const [laboratory, setLaboratory] = useState([]);
  const [procedures, setProcedures] = useState([]);
  const [radiology, setRadiology] = useState([]);
  const [pharmacy, setPharmacy] = useState([]);
  // dept revenue
  const [registrationRevenue, setRegistrationRevenue] = useState(0);
  const [laboratoryRevenue, setLaboratoryRevenue] = useState(0);
  const [procedureRevenue, setProcedureRevenue] = useState(0);
  const [radiologyRevenue, setRadiologyRevenue] = useState(0);
  const [pharmacyRevenue, setPharmacyRevenue] = useState(0);
  const [totalDeptRevenue, setTotalDeptRevenue] = useState(0);
  // patients
  const [patients, setPatients] = useState([]);

  // get departments
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const res = await fetch("http://localhost:9000/department");
        const jsonDepartment = await res.json();
        // console.log(jsonDepartment);
        setDepartments(jsonDepartment);

        setRegistration(jsonDepartment.registration);
        setLaboratory(jsonDepartment.laboratory);
        setProcedures(jsonDepartment.procedures);
        setRadiology(jsonDepartment.radiology);
        setPharmacy(jsonDepartment.pharmacy);
      } catch (err) {
        console.error(err);
      }
    };
    getDepartments();
  }, []);

  useEffect(() => {
    // revenue calculator
    const deptRevenue = (department) =>
      department?.reduce((amount, patient) => patient.amount_paid + amount, 0);

    setRegistrationRevenue(deptRevenue(registration));
    setLaboratoryRevenue(deptRevenue(laboratory));
    setProcedureRevenue(deptRevenue(procedures));
    setRadiologyRevenue(deptRevenue(radiology));
    setPharmacyRevenue(deptRevenue(pharmacy));

    const totalRev =
      registrationRevenue +
      laboratoryRevenue +
      procedureRevenue +
      radiologyRevenue +
      pharmacyRevenue;
    setTotalDeptRevenue(totalRev);

    // filtering revenue by date
    const date = "07/2/2022";
    departments?.registration
      ?.filter((reg) => reg.date === date)
      .map((reg) => console.log({ date: date, reg:reg })); //create for each and develope revenue for that data

    setPatients([
      ...laboratory,
      ...registration,
      ...procedures,
      ...radiology,
      ...pharmacy,
    ]);
    
  }, [
    departments,
    laboratory,
    laboratoryRevenue,
    pharmacy,
    pharmacyRevenue,
    procedureRevenue,
    procedures,
    radiology,
    radiologyRevenue,
    registration,
    registrationRevenue,
  ]);

  console.log(totalDeptRevenue);
  console.log(patients);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route
            path={"/"}
            exact
            element={
              <DashboardContainer
                reg={registrationRevenue}
                lab={laboratoryRevenue}
                proc={procedureRevenue}
                rad={radiologyRevenue}
                pharm={pharmacyRevenue}
                totalRevenue={totalDeptRevenue}
                patients={patients}
              />
            }
          />
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
