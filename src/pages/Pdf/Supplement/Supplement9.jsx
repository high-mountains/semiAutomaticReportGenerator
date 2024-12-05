import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

// Initial data for the table
const initialData = [
    {
        rowSpan: 8,
        thContent: {
            main: "Oxidation/Antioxidation",
            sub: "Cellular damage process / Works to protect cells by suppressing oxidative stress",
        },
        tdContent: {
            gen: "HFE",
            danger: 0,
            description: "Phytic acid, Polyphenols",
            etc: "Iron",
        },
    },
    {
        tdContent: {
            gen: "KEAP1",
            danger: 0,
            description: "NAC, Sulforaphane, Vitamin C, Vitamin E, Resveratrol",
        },
    },
    {
        tdContent: {
            gen: "NOX4",
            danger: 0,
            description: "FAD (Cofactor), NADPH (Cofactor), Heme (Cofactor), CoQ10, NAC, Vitamin C, Vitamin E",
        },
    },
    {
        tdContent: {
            gen: "SHMT1",
            danger: 0,
            description: "Vitamin B6 (Cofactor), 5MTHF, NAC, Betaine, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "SHMT2",
            danger: 0,
            description: "Vitamin B6 (Cofactor), 5MTHF, NAC, Betaine, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "SLC40A1",
            danger: 0,
            description: "Vitamin C, Polyphenols, Copper",
        },
    },
    {
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "Manganese (Cofactor), NAC, Glutathione, Vitamin C, Vitamin E",
            etc: "BPA, Free radicals",
        },
    },
    {
        tdContent: {
            gen: "SOD3",
            danger: 0,
            description: "Zinc (Cofactor), Copper (Cofactor), NAC, Alpha Lipoic Acid, Glutathione, Selenium, Vitamin C, Vitamin E",
        },
    },
    {
        rowSpan: 4,
        thContent: {
            main: "Folic Acid",
            sub: "One of the B vitamins, involved in DNA synthesis and red blood cell production",
        },
        tdContent: {
            gen: "DHFR",
            danger: 0,
            description: "NAD+ (Cofactor), Vitamin B12, Methylfolate",
        },
    },
    {
        tdContent: {
            gen: "FOLR1",
            danger: 0,
            description: "5MTHF, NAC, Vitamin B6, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "FOLR2",
            danger: 0,
            description: "5MTHF, NAC, Vitamin B6, Methyl Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "SLC19A1",
            danger: 0,
            description: "CoQ10, L-Carnitine, Omega-3, Vitamin B group",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "Vitamin B12",
            sub: "One of the B vitamins, involved in nervous system health and red blood cell production",
        },
        tdContent: {
            gen: "AMTRAK",
            danger: 0,
            description: "Riboflavin (Cofactor), SAMe, Vitamin B6, Vitamin B12, Betaine, Methylfolate",
        },
    },
    {
        tdContent: {
            gen: "TCN1",
            danger: 0,
            description: "Vitamin B12, Folate, Zinc",
            etc: "Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "TCN2",
            danger: 0,
            description: "Vitamin B12, Folate, Zinc",
            etc: "Vitamin B12",
        },
    },
    {
        thContent: {
            main: "APOE",
            sub: "A gene affecting lipid metabolism, related to the risk of Alzheimer's disease and cardiovascular diseases",
        },
        tdContent: {
            gen: "APOE",
            danger: 0,
            description: "DHA, Omega-3, Curcumin, Vitamin B12, Phosphatidylcholine, Folate, Resveratrol",
        },
    },
    {
        thContent: {
            main: "BDNF",
            sub: "A gene that affects protein synthesis, related to the growth and maintenance of nerve cells",
        },
        tdContent: {
            gen: "BDNF",
            danger: 0,
            description: "DHA, EGCG, Omega-3, Vitamin D, Magnesium",
        },
    },
];

const Supplement9 = (props) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>34</PageNumber>
        </PageWrapper>
    );
};

export default Supplement9;
