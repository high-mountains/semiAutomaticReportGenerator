import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

const initialData = [
    {
        thContent: {
            main: "Dopamine Receptor",
            sub: "Involved in sensitivity to excitatory neurotransmitters that affect pleasure and arousal",
        },
        tdContent: {
            gen: "DRD4",
            danger: 0,
            description:
                "L-Tyrosine, Omega-3, Vitamin B6, Vitamin D, Phosphatidylcholine, Magnesium",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "Serotonin",
            sub: "Involved in the regulation of neurotransmitters that affect emotional regulation and happiness",
        },
        tdContent: {
            gen: "HTR2A",
            danger: 0,
            description: "5-HTP, Omega-3",
        },
    },
    {
        tdContent: {
            gen: "MAOA",
            danger: 0,
            description:
                "Riboflavin (Cofactor), Vitamin B2, Vitamin B6, Vitamin B12, Folate, Magnesium",
        },
    },
    {
        thContent: {
            main: "Histamine Synthesis",
            sub: "Involved in the generation of substances that affect allergic reactions and arousal",
        },
        tdContent: {
            gen: "HDC",
            danger: 0,
            description: "P5P (Cofactor), NAC, Quercetin",
        },
    },
    {
        rowSpan: 8,
        thContent: {
            main: "Histamine Metabolism",
            sub: "Involved in the breakdown of substances that affect allergic reactions and arousal",
        },
        tdContent: {
            gen: "ALDH2",
            danger: 0,
            description:
                "NAC, Curcumin, Vitamin B complex, Vitamin C, Resveratrol",
            etc: "Alcohol",
        },
    },
    {
        tdContent: {
            gen: "MAOA",
            danger: 0,
            description:
                "Riboflavin (Cofactor), Vitamin B2, Vitamin B6, Vitamin B12, Folate, Magnesium",
        },
    },
    {
        tdContent: {
            gen: "MAOB",
            danger: 0,
            description:
                "Vitamin B2, Vitamin B6, Vitamin B12, Folate, Magnesium",
        },
    },
    {
        tdContent: {
            gen: "ABP1",
            danger: 0,
            description:
                "Vitamin B6 (Cofactor), Copper (Cofactor), DAO Enzyme, Quercetin, Vitamin D",
            etc: "Histamine",
        },
    },
    {
        tdContent: {
            gen: "HNMT",
            danger: 0,
            description:
                "SAMe (Cofactor), Quercetin, Vitamin B6, Magnesium, Methylated Vitamin B12, Methyl Folate",
            etc: "Histamine",
        },
    },
    {
        tdContent: {
            gen: "NAT2",
            danger: 0,
            description:
                "Acetyl-CoA (Cofactor), NAC, Cumin, Sulforaphane",
            etc: "Histamine",
        },
    },
    {
        tdContent: {
            gen: "ADH1B",
            danger: 0,
            description: "NAC, Curcumin, Vitamin B complex, Vitamin C",
            etc: "Alcohol",
        },
    },
    {
        tdContent: {
            gen: "CYP21A2",
            danger: 0,
            description:
                "NAD+ (Cofactor), Heme (Cofactor), Magnesium (Cofactor), Alpha Lipoic Acid, Ashwagandha, Vitamin B complex, Zinc",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "Histamine Receptor",
            sub: "Involved in sensitivity to substances that affect allergic reactions and arousal",
        },
        tdContent: {
            gen: "HRH1",
            danger: 0,
            description: "NAC, Omega-3, Quercetin, Magnesium",
            etc: "Histamine",
        },
    },
    {
        tdContent: {
            gen: "HRH3",
            danger: 0,
            description:
                "L-Theanine, Omega-3, Vitamin B complex, Phosphatidylserine, Rhodiola",
            etc: "Histamine",
        },
    },
    {
        tdContent: {
            gen: "HRH4",
            danger: 0,
            description:
                "Omega-3, Curcumin, Quercetin, Vitamin D, Magnesium",
            etc: "Histamine",
        },
    },
    {
        rowSpan: 6,
        thContent: {
            main: "Mitochondria",
            sub: "Cellular organelle involved in energy production and metabolism",
        },
        tdContent: {
            gen: "ACAT1",
            danger: 0,
            description:
                "Coenzyme A (Cofactor), L-Carnitine, MCT Oil, Alpha Lipoic Acid, Omega-3",
        },
    },
    {
        tdContent: {
            gen: "ACAT2",
            danger: 0,
            description: "Alpha Lipoic Acid, Omega-3, Vitamin E, Resveratrol",
        },
    },
    {
        tdContent: {
            gen: "ATP5F1A",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B complex",
        },
    },
    {
        tdContent: {
            gen: "ATP5F1E",
            danger: 0,
            description: "CoQ10, NAD+, Vitamin B complex, Riboflavin",
        },
    },
    {
        tdContent: {
            gen: "COQ2",
            danger: 0,
            description:
                "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        },
    },
    // {
    //     tdContent: {
    //         gen: "COQ3",
    //         danger: 0,
    //         description:
    //             "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
    //     },
    // },
];

const Supplement2 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    // Memoized updated data
    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>27</PageNumber>
        </PageWrapper>
    );
};

export default Supplement2;
