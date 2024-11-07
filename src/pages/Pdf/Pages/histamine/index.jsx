import { useEffect } from "react";
import Concept from "./concept";
import Merit from "./merit";
import Periodanalyze from "./periodanalyze";
import { useDispatch, useSelector } from "react-redux";

const Histamine = () => {
    return (
        <>
            <Concept />
            <Periodanalyze />
            <Merit />
        </>
    );
}

export default Histamine;
