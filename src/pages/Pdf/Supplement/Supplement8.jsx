import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

// Initial data for the table (in English)
const initialData = [
    {
        rowSpan: 3,
        thContent: {
            main: "Reactive Oxygen Species (ROS)",
            sub: "Unstable oxygen molecules that cause cellular damage, involved in aging and disease",
        },
        tdContent: {
            gen: "SOD1",
            danger: 0,
            description:
                "Zinc (Cofactor), Copper (Cofactor), NAC, Alpha Lipoic Acid, Glutathione, Selenium, Vitamin C, Vitamin E",
        },
    },
    {
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description:
                "Manganese (Cofactor), NAC, Glutathione, Vitamin C, Vitamin E",
            etc: "BPA, Free Radicals",
        },
    },
    {
        tdContent: {
            gen: "SOD3",
            danger: 0,
            description:
                "Zinc (Cofactor), Copper (Cofactor), NAC, Alpha Lipoic Acid, Glutathione, Selenium, Vitamin C, Vitamin E",
        },
    },

    {
        rowSpan: 2,
        thContent: {
            main: "Mercury",
            sub: "Toxic heavy metals accumulated in the body, involved in detoxification",
        },
        tdContent: {
            gen: "CPOX4",
            danger: 0,
            description:
                "Vitamin B6, Vitamin C, Methyl Vitamin B12, Methyl Folate, Iron, Copper",
        },
    },
    {
        tdContent: {
            gen: "GSTP1",
            danger: 0,
            description: "NAC, Clay, Chlorella, Glutathione",
        },
    },

    {
        rowSpan: 3,
        thContent: {
            main: "Organophosphates",
            sub: "Chemical substances with neurotoxicity found in pesticides and insecticides, involved in detoxification",
        },
        tdContent: {
            gen: "BCHE",
            danger: 0,
            description:
                "NAC, Vitamin B Complex, Vitamin E, Phosphatidylcholine, Milk Thistle",
        },
    },
    {
        tdContent: {
            gen: "CYP2B6",
            danger: 0,
            description:
                "NADPH (Cofactor), Heme (Cofactor), EGCG, NAC, Glutathione, Sulforaphane",
            etc: "Smoking",
        },
    },
    {
        tdContent: {
            gen: "PON1",
            danger: 0,
            description:
                "NAD+, Omega-3, Calcium, Vitamin C, Vitamin D, Vitamin E",
            etc: "Organophosphate pesticides",
        },
    },

    {
        rowSpan: 8,
        thContent: {
            main: "Methionine Cycle",
            sub: "Amino acid metabolism pathway in the liver, involved in cellular metabolism and detoxification",
        },
        tdContent: {
            gen: "ACHY",
            danger: 0,
            description:
                "NAD+ (Cofactor), Vitamin B6, Vitamin B12, Betaine, Methyl Folate",
        },
    },
    {
        tdContent: {
            gen: "BHMT",
            danger: 0,
            description:
                "Betaine (Cofactor), Vitamin B6, Methyl Vitamin B12, Methyl Folate",
        },
    },
    {
        tdContent: {
            gen: "CTH",
            danger: 0,
            description:
                "Vitamin B6 (Cofactor), NAC, Methyl Vitamin B12, Methyl Folate",
        },
    },
    {
        tdContent: {
            gen: "MTHFD1",
            danger: 0,
            description:
                "NAD+ (Cofactor), NADPH (Cofactor), 5MTHF, Vitamin B6, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "MTHFR A1298C",
            danger: 0,
            description:
                "NAD+ (Cofactor), NADPH (Cofactor), 5MTHF, Vitamin B6, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "MTHFR C677T",
            danger: 0,
            description:
                "NAD+ (Cofactor), NADPH (Cofactor), 5MTHF, Vitamin B6, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "MTR",
            danger: 0,
            description: "Methyl Vitamin B12 (Cofactor), 5MTHF, SAMe, Vitamin B6",
        },
    },
    {
        tdContent: {
            gen: "MTRR",
            danger: 0,
            description:
                "Riboflavin (Cofactor), SAMe, Vitamin B6, Vitamin B12, Betaine, Methyl Folate",
        },
    },

    {
        rowSpan: 4,
        thContent: {
            main: "Oxidation/Antioxidation",
            sub: "Process by which cells get damaged / Function of protecting cells from oxidative stress",
        },
        tdContent: {
            gen: "CAT",
            danger: 0,
            description:
                "NAC, SOD, Glutathione, Selenium, Vitamin C, Vitamin E, Resveratrol",
            etc: "BPA, Free Radicals",
        },
    },
    {
        tdContent: {
            gen: "CBS",
            danger: 0,
            description:
                "Vitamin B6 (Cofactor), Heme (Cofactor), 5MTHF, NAC, Betaine, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "CTH",
            danger: 0,
            description:
                "Vitamin B6 (Cofactor), NAC, Methyl Vitamin B12, Methyl Folate",
        },
    },
    {
        tdContent: {
            gen: "DUOX1",
            danger: 0,
            description: "NADPH (Cofactor), NAC, Selenium, Vitamin C, Vitamin E",
        },
    },
];

const Supplement8 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>33</PageNumber>
        </PageWrapper>
    );
};

export default Supplement8;
