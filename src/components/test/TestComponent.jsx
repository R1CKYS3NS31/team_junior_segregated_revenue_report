import { Button } from "@mui/material";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  PDFViewer,
} from "@react-pdf/renderer";

const MyDoc = () => (
  <>
    <Document>
      <Page>
           <View>
          <Text>
            <h1>hello</h1>
          </Text>
        </View>
      </Page>
    </Document>
  </>
);

export const TestComponent = () => (
  <>
    {/* <h1>Hello</h1> */}
    <PDFViewer>
      <MyDoc/>
    </PDFViewer>
    
    <div className="">
         <PDFDownloadLink document={<MyDoc />} fileName="revenue_report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
   
    
  </>
);
