import "./style.css"
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import TypeByType from './TypeByType';
import { downloadPDF } from "../../tool/jspdf";

const Pdf = () => {
    return (
        <>
            <div className="pdfcontainer">
                <div className="pdfwrapper" id="downloadTest">
                    {/*<Page1/>
                    <Page2/>
                    <Page3/>
                    <Page4/>*/}
                    <TypeByType/>
                </div>
                <button
                    className="font bg-red-600 w-[200rem] h-[60rem]"
                    onClick={() => downloadPDF()}
                >
                    Download PDF
                </button>
            </div>
            
        </>
    )
  }

export default Pdf