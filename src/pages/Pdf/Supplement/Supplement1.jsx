import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import PageHeader from "../../../components/Pdf/PageHeader";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

// Constants
const initialData = [
    {
        thContent: {
            main: "Glutamate Synthesis",
            sub: "Involved in the generation of excitatory neurotransmitters",
        },
        tdContent: {
            gen: "GLS2",
            danger: 0, // Dynamically updated based on state
            description: "L-Glutamine, NAC, Glutamine, Vitamin B complex",
        },
    },
    {
        rowSpan: 7,
        thContent: {
            main: "Glutamate Metabolism",
            sub: "Involved in the breakdown of excitatory neurotransmitters",
        },
        tdContent: {
            gen: "CBS",
            danger: 0,
            description:
                "Vitamin B6 (Cofactor), Heme (Cofactor), 5MTHF, NAC, Betaine, Methylated Vitamin B12",
        },
    },
    {
        tdContent: {
            gen: "CTH",
            danger: 0,
            description:
                "Vitamin B6 (Cofactor), NAC, Methylated Vitamin B12, Methyl Folate",
        },
    },
    {
        tdContent: {
            gen: "DAO",
            danger: 0,
            description:
                "Riboflavin (Cofactor), NAC, Omega-3, Selenium, Vitamin B6",
        },
    },
    {
        tdContent: {
            gen: "DAOA",
            danger: 0,
            description:
                "Riboflavin (Cofactor), NAC, Omega-3, Selenium, Vitamin B6",
        },
    },
    {
        tdContent: {
            gen: "GAD1",
            danger: 0,
            description:
                "P5P (Cofactor), GABA, L-Glutamine, L-Theanine, Magnesium",
        },
    },
    {
        tdContent: {
            gen: "GLUD1",
            danger: 0,
            description: "NAD+ (Cofactor), L-Glutamine, NAC, Vitamin B complex",
        },
    },
    {
        tdContent: {
            gen: "GLUL",
            danger: 0,
            description: "NAC, Alpha Lipoic Acid, Vitamin B complex",
        },
    },
    {
        thContent: {
            main: "Glutamate Transporter",
            sub: "Involved in the movement of excitatory neurotransmitters",
        },
        tdContent: {
            gen: "SLC1A1",
            danger: 0,
            description:
                "Omega-3, Potassium, Sodium, Vitamin B complex, Magnesium",
        },
    },
    {
        thContent: {
            main: "GABA Metabolism",
            sub: "Involved in the metabolism of relaxation components",
        },
        tdContent: {
            gen: "ALDH5A1",
            danger: 0, // Dynamically updated based on state
            description:
                "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B complex, Riboflavin, Iron, Copper",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "GABA Receptor",
            sub: "Involved in sensitivity to relaxation components",
        },
        tdContent: {
            gen: "GABRA1",
            danger: 0,
            description: "GABA, L-Theanine, Taurine, Magnesium",
        },
    },
    {
        tdContent: {
            gen: "GABRA2",
            danger: 0,
            description: "GABA, L-Theanine, Taurine, Magnesium",
        },
    },
    {
        tdContent: {
            gen: "GABRG2",
            danger: 0,
            description: "GABA, L-Theanine, Taurine, Magnesium",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "Catecholamine Synthesis",
            sub: "Involved in the production of neurotransmitters influencing stress response and arousal",
        },
        tdContent: {
            gen: "DHFR",
            danger: 0,
            description: "NAD+ (Cofactor), Vitamin B12, Methyl Folate",
        },
    },
    {
        tdContent: {
            gen: "GCH1",
            danger: 0,
            description:
                "5-HTP, L-Tyrosine, L-Phenylalanine, NAC, Vitamin B complex",
        },
    },
    {
        tdContent: {
            gen: "TH",
            danger: 0,
            description:
                "BH4 (Cofactor), L-Tyrosine, Vitamin B complex, Methyl Folate",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "Catecholamine Metabolism",
            sub: "Involved in the breakdown of neurotransmitters influencing stress response and arousal",
        },
        tdContent: {
            gen: "COMT",
            danger: 0,
            description:
                "SAMe (Cofactor), NAC, Vitamin B6, Vitamin B12, Magnesium, Methyl Folate",
            etc: "Constipation, Birth Control Pills",
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
        rowSpan: 2,
        thContent: {
            main: "Dopamine Receptor",
            sub: "Involved in sensitivity to excitatory neurotransmitters influencing pleasure and arousal",
        },
        tdContent: {
            gen: "DRD1",
            danger: 0,
            description:
                "L-Tyrosine, Omega-3, Vitamin B6, Vitamin D, Phosphatidylcholine, Magnesium",
        },
    },
    {
        tdContent: {
            gen: "DRD2",
            danger: 0,
            description:
                "L-Tyrosine, Omega-3, Vitamin B6, Vitamin D, Phosphatidylcholine, Magnesium",
        },
    },
];

const Supplement1 = () => {
  const geneData = useSelector((state) => state.pdfData.geneData);

  // Memoized updated data
  const updatedTableData = useMemo(() => {
    return updateDangerValues(initialData, geneData || []);
  }, [geneData]);

  // Styles
  const headerStyles = {
    containerStyle: { marginBottom: "0rem" },
    subTitleStyle: { marginBottom: "5rem" },
    mainTitleStyle: {
      fontSize: "25rem",
      letterSpacing: "-1.75rem",
      lineHeight: 1.6,
    },
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <PageHeader
        subtitle="Supplement & Lifestyle"
        mainTitle="Recommended Supplements and Lifestyles"
        containerStyle={headerStyles.containerStyle}
        subTitleStyle={headerStyles.subTitleStyle}
        mainTitleStyle={headerStyles.mainTitleStyle}
      />

      {/* Table */}
      <TableNew tBody={updatedTableData} />

      {/* Page Number */}
      <PageNumber>26</PageNumber>
    </PageWrapper>
  );
};

export default Supplement1;
