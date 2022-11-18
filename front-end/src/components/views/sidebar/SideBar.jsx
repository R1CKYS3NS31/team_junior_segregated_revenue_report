import {
  ArrowBackIos,
  AssessmentOutlined,
  BarChartOutlined,
  BiotechOutlined,
  ContentCutOutlined,
  Dashboard,
  
  People,
  RememberMeOutlined,
  SavedSearch,
  ShoppingCart,
  Vaccines,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          {/* dashboard */}
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <Link to={"/"} className="link">
                <li className="sidebarListItem">
                  <ArrowBackIos className="sidebarIcon" />
                  Go Back
                </li>
              </Link>
              <Link to={"/"} className="link">
                <li className="sidebarListItem">
                  <Dashboard className="sidebarIcon" />
                  <b>Dashboard</b>
                </li>
              </Link>
              <Link to={"/workload"} className="link">
                <li className="sidebarListItem">
                  <ShoppingCart className="sidebarIcon" />
                  Work Load
                </li>
              </Link>
              <h3 className="sidebarTitle">Departments</h3>
              <Link to={"/registration"} className="link">
                <li className="sidebarListItem">
                  <People className="sidebarIcon" />
                  Registration
                </li>
              </Link>
              <Link to={"/laboratory"} className="link">
                <li className="sidebarListItem">
                  <BiotechOutlined className="sidebarIcon" />
                  Laboratory
                </li>
              </Link>
              <Link to={"/procedures"} className="link">
                <li className="sidebarListItem">
                  <ContentCutOutlined className="sidebarIcon" />
                  Procedures
                </li>
              </Link>
              <Link to={"/radiology"} className="link">
                <li className="sidebarListItem">
                  <RememberMeOutlined className="sidebarIcon" />
                  Radiology
                </li>
              </Link>
              <Link to={"/pharmacy"} className="link">
                <li className="sidebarListItem">
                  <Vaccines className="sidebarIcon" />
                  Pharmacy
                </li>
              </Link>
            </ul>
          </div>
          {/* quick menu */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Summaries</h3>
            <ul className="sidebarList">
              <Link to={"/patientsummaries"} className="link">
                <li className="sidebarListItem">
                  <SavedSearch className="sidebarIcon" />
                  Patient Summaries
                </li>
              </Link>

              {/* <Link to={"/departmentsummaries"} className="link">
                <li className="sidebarListItem">
                  <AssessmentOutlined className="sidebarIcon" />
                  Department Summaries
                </li>
              </Link>
              <Link to={"/nhifsummaries"} className="link">
                <li className="sidebarListItem">
                  <BarChartOutlined className="sidebarIcon" />
                  NHIF Summaries
                </li>
              </Link> */}

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
