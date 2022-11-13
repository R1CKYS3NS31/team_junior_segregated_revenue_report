
import { Button } from "@mui/material";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import Chart from "../charts/Chart";

const MyDoc = () => (
  <>
    <Document>
      <Page size="A4">
        <View>
          <Text>
            Hello
          </Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
        <Image  src={'/pl.png'}/>
      </Page>
    </Document>
  </>
);

export const TestComponent = () => (
  <>
    {/* <h1>Hello</h1> */}
    
      <MyDoc />
    

    <div className="">
      <PDFDownloadLink document={<MyDoc />} fileName="revenue_report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  </>
);
