import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 7,
        thContent: {
            main: "Nutrient",
            sub: "Supplies energy and substances necessary for maintaining bodily functions and growth",
        },
        tdContent: {
            gen: "ACAT1",
            danger: 0,
            description: "Coenzyme A (Cofactor), L-Carnitine, MCT Oil, Alpha Lipoic Acid, Omega-3",
        }
    },
    {
        tdContent: {
            gen: "ACAT2",
            danger: 0,
            description: "Alpha Lipoic Acid, Omega-3, Vitamin E, Resveratrol",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "BCMO1",
            danger: 0,
            description: "Iron (Cofactor), Vitamin A, Vitamin C, Vitamin E, Zinc",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "ELOVL2",
            danger: 0,
            description: "NADPH (Cofactor), Coenzyme A (Cofactor), CoQ10, L-Carnitine, Omega-3, Vitamin B3, Vitamin E, Zinc",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "SELENOS",
            danger: 0,
            description: "Selenium (Cofactor), CoQ10, Glutathione, Vitamin E",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "SLC39A14",
            danger: 0,
            description: "Zinc (Substrate), Vitamin B6, Vitamin C, Magnesium, Manganese",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "VDR",
            danger: 0,
            description: "Calcium, Vitamin D, Vitamin K2, Magnesium, Zinc",
            etc: "Vitamin D"
        }
    },
    {
        rowSpan: 6,
        thContent: {
            main: "BPA",
            sub: "Found in plastic products and affects hormone functions",
        },
        tdContent: {
            gen: "CAT",
            danger: 0,
            description: "NAC, SOD, Glutathione, Selenium, Vitamin C, Vitamin E, Resveratrol",
            etc: "BPA, Free Radicals"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "Manganese (Cofactor), NAC, Glutathione, Vitamin C, Vitamin E",
            etc: "BPA, Free Radicals"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "SULT1A1",
            danger: 0,
            description: "MSM, NAC, Vitamin B6, Vitamin B12, Vitamin B complex, Folate, Methyl Folate",
            etc: "BPA, Free Radicals"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "UGT1A1",
            danger: 0,
            description: "NAC, Calcium D-Glucarate, Glutathione, Vitamin D, Bile Supplements",
            etc: "BPA, Environmental Toxins"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "UGT2B15",
            danger: 0,
            description: "NAC, Calcium D-Glucarate, Glutathione, Vitamin D, Bile Supplements",
            etc: "BPA, Environmental Toxins"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "COX2",
            danger: 0,
            description: "EPA, NAC, Alpha Lipoic Acid, Catechins, Curcumin, Glutathione",
            etc: "BPA, Free Radicals"
        }
    },
    {
        thContent: {
            main: "NQO1",
            sub: "An enzyme with antioxidant properties that protects cells from oxidative stress",
        },
        tdContent: {
            gen: "NQO1",
            danger: 0,
            description: "NAD+ (Cofactor), NAC, Alpha Lipoic Acid, Curcumin, Glutathione, Quercetin, Resveratrol",
        }
    },
    {
        thContent: {
            main: "PON1",
            sub: "An enzyme that affects the breakdown of harmful oxidative substances and is related to oxidative stress and cardiovascular health",
        },
        tdContent: {
            gen: "PON1",
            danger: 0,
            description: "NAD+, Omega-3, Calcium, Vitamin C, Vitamin D, Vitamin E",
            etc: "Organophosphates"
        }
    },
    {
        trHeight: 28,
        rowSpan: 4,
        thContent: {
            main: "Phthalates",
            sub: "Chemicals found in plastic products that affect hormone regulation and disrupt the endocrine system",
        },
        tdContent: {
            gen: "CYP2B6",
            danger: 0,
            description: "NADPH (Cofactor), Heme (Cofactor), EGCG, NAC, Glutathione, Sulforaphane",
            etc: "Smoking"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "GSTP1",
            danger: 0,
            description: "NAC, Clay, Chlorella, Glutathione",
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "HSPA1L",
            danger: 0,
            description: "NAC, Alpha Lipoic Acid, Ashwagandha, Omega-3, Resveratrol",
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "Manganese (Cofactor), NAC, Glutathione, Vitamin C, Vitamin E",
            etc: "BPA, Free Radicals"
        }
    },
];

const Supplement5 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>30</PageNumber>
        </PageWrapper>
    );
};

export default Supplement5;
