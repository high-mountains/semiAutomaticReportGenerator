// import { lazy } from "react";

// const Glutamate = lazy(() => import('./Pages/glutamate'));
// const Catecholamine = lazy(() => import('./Pages/catecholamine'));
// const Histamine = lazy(() => import('./Pages/histamine'));
// const Mitochondrial = lazy(() => import('./Pages/mitochondrial'));
// const Detox = lazy(() => import('./Pages/detox'));
// const Methylation = lazy(() => import('./Pages/methylation'));

import Glutamate from "./Pages/glutamate";

const TypeByType = () => {
    return(
        <>
            <Glutamate/>
            {/* <Catecholamine/>
            <Histamine/>
            <Mitochondrial/>
            <Detox/>
            <Methylation/> */}
        </>
    )
}

export default TypeByType;
