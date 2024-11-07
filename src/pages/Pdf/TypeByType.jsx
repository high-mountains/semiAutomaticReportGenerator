import { lazy } from "react";
const Glutamate = lazy(() => import('./Pages/glutamate'));
const Catecholamine = lazy(() => import('./Pages/catecholamine'));
const Histamine = lazy(() => import('./Pages/histamine'));
const Mitochondrial = lazy(() => import('./Pages/mitochondrial'));
const Detox = lazy(() => import('./Pages/detox'));
const Methylation = lazy(() => import('./Pages/methylation'));

// import Glutamate from "./Pages/glutamate";
// import Catecholamine from "./Pages/catecholamine";
// import Histamine from "./Pages/histamine";
// import Mitochondrial from "./Pages/mitochondrial"
// import Detox from "./Pages/detox"
// import Methylation from "./Pages/methylation"

const TypeByType = () => {
    return(
        <>
            <Glutamate/>
            <Catecholamine/>
            <Histamine/>
            <Mitochondrial/>
            <Detox/>
            <Methylation/>
        </>
    )
}

export default TypeByType;
