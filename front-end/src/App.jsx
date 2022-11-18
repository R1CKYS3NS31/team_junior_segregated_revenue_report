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
import { Pharmacy } from "./pages/pharmacy/Pharmacy";

function App() {
  const [registrationRevenue, setRegistrationRevenue] = useState(0);
  const [laboratoryRevenue, setLaboratoryRevenue] = useState(0);
  const [procedureRevenue, setProcedureRevenue] = useState(0);
  const [radiologyRevenue, setRadiologyRevenue] = useState(0);
  const [pharmacyRevenue, setPharmacyRevenue] = useState(0);
  const [totalDeptRevenue, setTotalDeptRevenue] = useState(0);

  const [dateFrom, setdateFrom] = useState(0)
  const [dateTo, setdateTo] = useState(0)



  const labUrl = "http://127.0.0.1:8000/api/revenue/department/laboratory/"
  const regUrl = "http://127.0.0.1:8000/api/revenue/department/registration/"
  const pharmUrl = "http://127.0.0.1:8000/api/revenue/department/pharmacy/"
  const procUrl = "http://127.0.0.1:8000/api/revenue/department/procedure/"
  const radUrl = "http://127.0.0.1:8000/api/revenue/department/radiology/"

  const paymentUrl = "http://127.0.0.1:8000/api/revenue/payment/mpesa/"



  function takeDate(dateFrom, dateTo){
    setdateFrom(dateFrom)
    setdateTo(dateTo)
  
  }

  const filterUrl = `http://127.0.0.1:8000/api/revenue/datefilter/${dateFrom}/${dateTo}/`

  let filter_total = 0;
  const getFilter = async (department) => {
    filter_total = 0;

    const response = await fetch(filterUrl)
    const jsonData = await response.json()

    for (let x = 0; x < jsonData.length; x++) {
      filter_total += jsonData[x][department]
    }

    return filter_total
  };
  
  const Datefilter = async () =>{
    const FilterlabRevenue = await getFilter("laboratory");
    const FilterregRevenue = await getFilter("registration");
    const FilterpharmRevenue = await getFilter("pharmacy");
    const FilterradRevenue = await getFilter("radiology");
    const FilterprocRevenue = await getFilter("procedure");
    const grandTotal = FilterlabRevenue + FilterregRevenue + FilterpharmRevenue + FilterradRevenue + FilterprocRevenue
   
    setLaboratoryRevenue(FilterlabRevenue)
    setRegistrationRevenue(FilterregRevenue)
    setPharmacyRevenue(FilterpharmRevenue)
    setRadiologyRevenue(FilterradRevenue)
    setProcedureRevenue(FilterprocRevenue)
    setTotalDeptRevenue(grandTotal)
  

  }






  //Totals 
  let total = 0;
  const getDepartments = async (url, department) => {
   
    const response = await fetch(labUrl)
    const jsonData = await response.json()

    for (let x = 0; x < jsonData.length; x++) {
      total += jsonData[x][department]
    }

    return total
  };

  const call = async () => {
    const labRevenue = await getDepartments(labUrl, "laboratory");
    const regRevenue = await getDepartments(regUrl, "registration");
    const pharmRevenue = await getDepartments(pharmUrl, "pharmacy");
    const radRevenue = await getDepartments(radUrl, "radiology");
    const procRevenue = await getDepartments(procUrl, "procedure");
    const grandTotal = labRevenue + regRevenue + pharmRevenue + radRevenue + procRevenue;

    setLaboratoryRevenue(labRevenue)
    setRegistrationRevenue(regRevenue)
    setPharmacyRevenue(pharmRevenue)
    setRadiologyRevenue(radRevenue)
    setProcedureRevenue(procRevenue)
    setTotalDeptRevenue(grandTotal)

  }




call()




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

                setReg = {setRegistrationRevenue}
                setRad = {setRadiologyRevenue}
                setPharm = {setPharmacyRevenue}
                setProc = {setProcedureRevenue}
                setLab ={setLaboratoryRevenue}
                takeDate = {takeDate}
                Datefilter ={Datefilter}

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
