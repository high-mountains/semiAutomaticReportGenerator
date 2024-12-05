import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 5,
        thContent: {
            main: "Phase II UDP-Glucuronosyltransferase",
            sub: "An enzyme found in the liver that attaches glucuronic acid to chemicals, involved in detoxification and excretion",
        },
        tdContent: {
            gen: "UGT1A1",
            danger: 0,
            description: "NAC, Calcium D-Glucarate, Glutathione, Vitamin D, Bile supplements",
            etc: "BPA, Environmental toxins"
        }
    },
    {
        tdContent: {
            gen: "UGT1A3",
            danger: 0,
            description: "NAC, Omega-3, Calcium D-Glucarate, Sulforaphane, Dandelion tea, Milk Thistle",
        }
    },
    {
        tdContent: {
            gen: "UGT1A4",
            danger: 0,
            description: "NAC, Omega-3, Calcium D-Glucarate, Sulforaphane, Dandelion tea, Milk Thistle",
        }
    },
    {
        tdContent: {
            gen: "UGT1A6",
            danger: 0,
            description: "NAC, Vitamin C, Milk Thistle",
        }
    },
    {
        tdContent: {
            gen: "UGT1A7",
            danger: 0,
            description: "NAC, Vitamin C, Milk Thistle",
        }
    },
    {
        rowSpan: 6,
        thContent: {
            main: "Inflammation/Anti-inflammation",
            sub: "Body's defense response to tissue damage and infection / Suppression of body inflammation to maintain health",
        },
        tdContent: {
            gen: "GPX1",
            danger: 0,
            description: "Glutathione (Substrate), Selenium (Cofactor), NAC, Alpha Lipoic Acid, Vitamin C, Vitamin E",
        }
    },
    {
        tdContent: {
            gen: "GPX2",
            danger: 0,
            description: "Glutathione (Substrate), Selenium (Cofactor), NAC, Alpha Lipoic Acid, Vitamin C, Vitamin E",
        }
    },
    {
        tdContent: {
            gen: "GPX3",
            danger: 0,
            description: "Glutathione (Substrate), Selenium (Cofactor), NAC, Alpha Lipoic Acid, Vitamin C, Vitamin E",
        }
    },
    {
        tdContent: {
            gen: "GPX4",
            danger: 0,
            description: "Glutathione (Substrate), Selenium (Cofactor), NAC, Alpha Lipoic Acid, Vitamin C, Vitamin E",
        }
    },
    {
        tdContent: {
            gen: "GSTM3",
            danger: 0,
            description: "Glutathione (Substrate), NAC, Curcumin, Selenium, Milk Thistle",
        }
    },
    {
        tdContent: {
            gen: "GSTP1",
            danger: 0,
            description: "NAC, Clay, Chlorella, Glutathione",
        }
    },
    {
        rowSpan: 5,
        thContent: {
            main: "Chemical Sensitivity",
            sub: "Abnormally strong reactions to chemicals",
        },
        tdContent: {
            gen: "CAT",
            danger: 0,
            description: "NAC, SOD, Glutathione, Selenium, Vitamin C, Vitamin E, Resveratrol",
            etc: "BPA, Free Radicals"
        }
    },
    {
        tdContent: {
            gen: "CYP2C9",
            danger: 0,
            description: "NADPH (Cofactor), Heme (Cofactor), EGCG, NAC, Glutathione, Resveratrol",
            etc: "Environmental toxins, Carcinogens"
        }
    },
    {
        tdContent: {
            gen: "GSTP1",
            danger: 0,
            description: "NAC, Clay, Chlorella, Glutathione",
        }
    },
    {
        tdContent: {
            gen: "NOS3",
            danger: 0,
            description: "BH4 (Cofactor), FAD (Cofactor), NADPH (Cofactor), L-Arginine, NAC",
        }
    },
    {
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "Manganese (Cofactor), NAC, Glutathione, Vitamin C, Vitamin E",
            etc: "BPA, Free Radicals"
        }
    },
    {
        rowSpan: 2,
        thContent: {
            main: "Reactive Oxygen Species (ROS)",
            sub: "Unstable oxygen molecules that cause cellular damage, involved in aging and disease",
        },
        tdContent: {
            gen: "G6PD",
            danger: 0,
            description: "NADPH (Cofactor), NAC, Vitamin E, Selenium, Alpha Lipoic Acid, CoQ10",
        }
    },
    {
        tdContent: {
            gen: "GSR",
            danger: 0,
            description: "NADPH (Cofactor), NAC, Alpha Lipoic Acid, Glutathione, Selenium, Vitamin C, Vitamin E",
        }
    },
];

const Supplement7 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>32</PageNumber>
        </PageWrapper>
    );
};

export default Supplement7;
