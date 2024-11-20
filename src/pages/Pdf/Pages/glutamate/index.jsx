import { lazy } from "react";

const Concept = lazy(() => import('./concept'));
const Periodanalyze = lazy(() => import('./periodanalyze'));
const Merit = lazy(() => import('./merit'));

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
