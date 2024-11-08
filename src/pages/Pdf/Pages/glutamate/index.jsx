import { lazy } from "react";

const Concept = lazy(() => import('./concept'));
const Periodanalyze = lazy(() => import('./periodanalyze'));
const Merit = lazy(() => import('./merit'));

// import Concept from "./concept";
// import Merit from "./merit";
// import Periodanalyze from "./periodanalyze";

const Glutamate = () => {
    return (
        <>
            <Concept />
            <Periodanalyze />
            <Merit />
        </>
    );
}

export default Glutamate;
