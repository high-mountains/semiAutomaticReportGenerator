import { lazy } from "react";
import "./style.css";

const Page1 = lazy(() => import('./Page1'))
const Page2 = lazy(() => import('./Page2'))
const Page3 = lazy(() => import('./Page3'))
const Page4 = lazy(() => import('./Page4'))

import TypeByType from './TypeByType';

import AuthLayout from "../../layout/AuthLayout";
const GenCategory = lazy(() => import('./GenCategory'));
const Supplement = lazy(() => import('./Supplement'));
const SupplementNot = lazy(() => import('./SupplementNot'));
const SupplementTable = lazy(() => import('./SupplementTable'));
const References = lazy(() => import('./References'));

import { downloadPDF } from "../../tool/jspdf";

const Pdf = () => {
    return (
        <AuthLayout>
            <div className="pdfcontainer">
                <div className="pdfwrapper" id="downloadTest">
                    {/* <Page1/>
                    <Page2/>
                    <Page3/>
                    <Page4/>
                    <TypeByType/>
                    <GenCategory/> */}
                    <Supplement/>
                    <SupplementNot/>
                    <SupplementTable/>
                    {/* <References/> */}
                </div>
                <button
                    className="font bg-red-600 w-[200rem] h-[60rem]"
                    onClick={() => downloadPDF()}
                >
                    Download PDF
                </button>
            </div>
            
        </AuthLayout>
    )
  }

export default Pdf