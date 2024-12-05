import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 5,
        thContent: {
            main: "Mycotoxins",
            sub: "Toxic substances produced by mold, involved in food contamination and detoxification/metabolism of toxic substances",
        },
        tdContent: {
            gen: "CYP1A2",
            danger: 0,
            description: "NADPH (Cofactor), Heme (Cofactor), EGCG, NAC, Glutathione, Sulforaphane",
            etc: "Excessive caffeine, smoking, charred meat"
        }
    },
    {
        tdContent: {
            gen: "CYP3A4",
            danger: 0,
            description: "NADPH (Cofactor), Heme (Cofactor), EGCG, NAC, Curcumin, Glutathione, Vitamin C, Resveratrol",
            etc: "Grapefruit"
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
            gen: "SLCO1B1",
            danger: 0,
            description: "CoQ10, NAC, Alpha Lipoic Acid, Taurine, Vitamin B complex, Milk Thistle",
        }
    },
    {
        tdContent: {
            gen: "XPC",
            danger: 0,
            description: "NAC, Omega-3, Vitamin E, Methyl Vitamin B12, Methyl Folate, Resveratrol",
        }
    },
    {
        rowSpan: 4,
        thContent: {
            main: "Phase II Glutathione Peroxidase",
            sub: "Enzyme found in the liver that reduces oxidative stress and is involved in cellular protection",
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
        thContent: {
            main: "Phase II Glutathione Transferase",
            sub: "Enzyme found in the liver that promotes the excretion of harmful substances, involved in detoxification",
        },
        tdContent: {
            gen: "GSTA1",
            danger: 0,
            description: "NAC, Clay, Chlorella, Glutathione",
        }
    },
    {
        rowSpan: 2,
        thContent: {
            main: "Phase II N-Acetyltransferase",
            sub: "Enzyme found in the liver that adds acetyl groups to chemicals, involved in detoxification",
        },
        tdContent: {
            gen: "NAT1",
            danger: 0,
            description: "Acetyl-Coenzyme A (Cofactor), NAC, Cumin, Sulforaphane",
        }
    },
    {
        tdContent: {
            gen: "NAT2",
            danger: 0,
            description: "Acetyl-Coenzyme A (Cofactor), NAC, Cumin, Sulforaphane",
            etc: "Histamine"
        }
    },
    {
        rowSpan: 5,
        thContent: {
            main: "Phase II Sulfotransferase",
            sub: "Enzyme found in the liver that adds sulfate groups to chemicals, involved in detoxification",
        },
        tdContent: {
            gen: "SULT1A1",
            danger: 0,
            description: "MSM, NAC, Vitamin B6, Vitamin B12, Vitamin B complex, Folate, Methyl Folate",
            etc: "BPA, Free Radicals"
        }
    },
    {
        tdContent: {
            gen: "SULT1A2",
            danger: 0,
            description: "MSM, NAC, Adenosine, Curcumin",
        }
    },
    {
        tdContent: {
            gen: "SULT1C4",
            danger: 0,
            description: "MSM, NAC, Adenosine, Curcumin",
        }
    },
    {
        tdContent: {
            gen: "SULT1E1",
            danger: 0,
            description: "DIM (Broccoli), MSM, NAC, Curcumin, Sulforaphane",
        }
    },
    {
        tdContent: {
            gen: "SULT2B1",
            danger: 0,
            description: "NAC, Curcumin, Sulforaphane, Vitamin D, Zinc",
        }
    },
];

const Supplement6 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>31</PageNumber>
        </PageWrapper>
    );
};

export default Supplement6;
