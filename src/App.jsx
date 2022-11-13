import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import jsonData from './data/revenue.json'
import { useState } from "react";

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
import { TestComponent } from "./components/test/TestComponent";

function App() {


  const laboratory = jsonData["revenue"][0]["department"][0]["laboratory"]
  const registration = jsonData["revenue"][0]["department"][0]["registration"]
  const procedures = jsonData["revenue"][0]["department"][0]["procedures"]
  const radiology = jsonData["revenue"][0]["department"][0]["radiology"]
  const pharmacy = jsonData["revenue"][0]["department"][0]["pharmacy"]

  const laboratory_details = laboratory.map((data)=>{return data})
  const registration_details = registration.map((data)=>{return data})
  const procedures_details = procedures.map((data)=>{return data})
  const radiology_details = radiology.map((data)=>{return data})
  const pharmacy_details = pharmacy.map((data)=>{return data})

  let detail_total = 0;

  const [to, setTo] =useState('07-02-2022')
  const [from, setFrom] =useState('07-02-2022')


  const takeDate= (to,from)=>{
    setTo(to);
    setFrom(from);
  }


  let i=0;

  const toSplitDate = to.split('-')[0]
  const toSplitMonth = to.split('-')[1]
  const toSplitYear = to.split('-')[2]

  const fromSplitDate = from.split('-')[0]
  const fromSplitMonth = from.split('-')[1]
  const fromSplitYear = from.split('-')[2]



  function FilteredDates(details){
    for(i=0;i<details.length;i++){
      let x= details[i].date.split('-')[0]
      let y= details[i].date.split('-')[1]
      let z= details[i].date.split('-')[2]

      const d = x>=fromSplitDate && x<=toSplitDate? x: 0;
      const m = y>=fromSplitMonth && y<=toSplitMonth? y: 0; 
      const Y = z>=fromSplitYear && z<=toSplitYear? z: 0;

      return `${d}-${m}-${Y}`
    
    }
  }


  function FilterAdder(data){
    const filtered_data = data.filter(det => {
      if(fromSplitYear<toSplitYear){
        // console.log("Different Year")
        if(fromSplitMonth<toSplitMonth || fromSplitMonth>toSplitMonth){
          // console.log("Different Month")
          if(fromSplitDate<toSplitDate || fromSplitDate>toSplitDate){
            // console.log("Different Day")
    
            const newdate = FilteredDates(data)
            // console.log(newdate)
            if(newdate.split('-')[0] != 0 && newdate.split('-')[1] != 0 && newdate.split('-')[2] != 0){
              return  det.date == newdate
            }
        
          }
          else{
            // console.log("Same Day")
            const newdate = FilteredDates(data)
            // console.log(newdate)
            if(newdate.split('-')[0] != 0 && newdate.split('-')[1] != 0 && newdate.split('-')[2] != 0){
              return  det.date == newdate
            }
    
            else{console.log("Nope")}   }
        }
        else{
          // console.log("Same Month")
          if(fromSplitDate<toSplitDate || fromSplitDate>toSplitDate){
            console.log("Different Day")
            const newdate = FilteredDates(data)
            // console.log(newdate)
            if(newdate.split('-')[0] != 0 && newdate.split('-')[1] != 0 && newdate.split('-')[2] != 0){
              return  det.date == newdate
            }
      
            else{console.log("Nope")}
            
          }
          else{
            // console.log("Same Day")
            const newdate = FilteredDates(data)
            // console.log(newdate)
            if(newdate.split('-')[0] != 0 && newdate.split('-')[1] != 0 && newdate.split('-')[2] != 0){
              return  det.date == newdate
            }
              }
        }
      }
    
    
      else if(fromSplitYear==toSplitYear){
          // console.log("Same Year")
        if(fromSplitMonth<toSplitMonth || fromSplitMonth>toSplitMonth){
            // console.log("Different Month")
    
          if(fromSplitDate<toSplitDate || fromSplitDate>toSplitDate){
            const newdate = FilteredDates(data)
             console.log(newdate)
            if(newdate.split('-')[0] != 0 && newdate.split('-')[1] != 0 && newdate.split('-')[2] != 0){
              return  det.date == newdate
            }
                
          }
          else{
            // console.log("Same Day")
            const newdate = FilteredDates(data)
            // console.log(newdate)
            if(newdate.split('-')[0] != 0 && newdate.split('-')[1] != 0 && newdate.split('-')[2] != 0){
              return det.date == det.date == newdate
            }
                
    
          }
          
        }
        else{
          // console.log("Same Month")
    
          if(fromSplitDate<toSplitDate || fromSplitDate>toSplitDate){
            // console.log("Different Day")
    
            const newdate = FilteredDates()
            // console.log(newdate)
            // console.log(newdate)
            if(newdate.split('-')[0] != 0 && newdate.split('-')[1] != 0 && newdate.split('-')[2] != 0){
              return det.date == newdate
            }
                
          }
          else{
            // console.log("Same day")
            const newdate = `${fromSplitDate}-${fromSplitMonth}-${fromSplitYear}`
            // console.log(newdate)
            return det.date == newdate
          
          }
        }
    
      }
    
      else{
        console.log("Invalid Filter")
      }
    

    })

    return filtered_data;

  }


  function calcTotal(detail){
    detail_total = 0;
    for (var i=0; i < detail.length; i++) {
      const amount = detail[i]["amount_paid"]
      detail_total += amount
    }
    return detail_total;
  }


  const labTotal = calcTotal(laboratory_details)
  const regTotal = calcTotal(registration_details)
  const procTotal = calcTotal(procedures_details)
  const radTotal = calcTotal(radiology_details)
  const pharmTotal = calcTotal(pharmacy_details)


  const RegistrationFilter = FilterAdder(registration)
  const LaboratoryFilter = FilterAdder(laboratory)
  const RadiologyFilter = FilterAdder(radiology)
  const PharmacyFilter = FilterAdder(pharmacy)
  const ProcedureFilter = FilterAdder(procedures)


  const RegistrationFilterTotal = calcTotal(RegistrationFilter)
  const LaboratoryFilterTotal = calcTotal(LaboratoryFilter)
  const RadiologyFilterTotal = calcTotal(RadiologyFilter)
  const PharmacyFilterTotal = calcTotal(PharmacyFilter)
  const ProcedureFilterTotal = calcTotal(ProcedureFilter)


  const [reg, setReg] = useState(regTotal)
  const [lab, setLab] = useState(labTotal)
  const [proc, setProc] = useState(procTotal)
  const [pharm, setPharm] = useState(pharmTotal)
  const [rad, setRad] = useState(radTotal)



  const grandTotal = labTotal+regTotal+procTotal+radTotal+pharmTotal;
  console.log(grandTotal)

  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path={"/"} exact element={
                <DashboardContainer 
                  grandTotal={grandTotal}
                  takeDate={takeDate}
                  reg={reg}
                  setReg={setReg}
                  setLab={setLab}
                  lab={lab}
                  pharm={pharm}
                  setPharm={setPharm}
                  rad={rad}
                  setRad={setRad}
                  setProc={setProc}
                  proc={proc}
                  RegistrationFilterTotal={RegistrationFilterTotal} 
                  LaboratoryFilterTotal={LaboratoryFilterTotal}  
                  PharmacyFilterTotal={PharmacyFilterTotal}  
                  ProcedureFilterTotal={ProcedureFilterTotal}  
                  RadiologyFilterTotal={RadiologyFilterTotal}          
                  />
                } />
          <Route path={"/workload"} element={<Workload />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/radiology" element={<Radiology />} />
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
