import { useEffect } from "react";
import Concept from "./concept";
import Merit from "./merit";
import Periodanalyze from "./periodanalyze";
import { useDispatch, useSelector } from "react-redux";

const Catecholamine = () => {

    const mainColor = useSelector(state => state.pdfData);

    return (
        <>
            <Concept />
            <Periodanalyze />
            <Merit />
        </>
    );
}

export default Catecholamine;
