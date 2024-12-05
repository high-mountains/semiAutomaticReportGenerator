import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 18,
        thContent: {
            main: "Mitochondria",
            sub: "Cellular organelles involved in energy production and metabolism",
        },
        tdContent: {
            gen: "NDUFA11",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFB11",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFS1",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFS2",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFS3",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFS4",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFS6",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFS7",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFS8",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFV2",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "OGDH",
            danger: 0,
            description: "NAD+ (Cofactor), Vitamin B1 (Cofactor), CoQ10, L-Carnitine, Alpha Lipoic Acid",
        }
    },
    {
        tdContent: {
            gen: "PANK2",
            danger: 0,
            description: "ATP (Cofactor), CoQ10, Pantothenic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "SDHA",
            danger: 0,
            description: "Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, Alpha Lipoic Acid",
        }
    },
    {
        tdContent: {
            gen: "SDHB",
            danger: 0,
            description: "Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, Alpha Lipoic Acid",
        }
    },
    {
        tdContent: {
            gen: "SDHC",
            danger: 0,
            description: "Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, Alpha Lipoic Acid",
        }
    },
    {
        tdContent: {
            gen: "SLC16A1",
            danger: 0,
            description: "CoQ10, L-Carnitine, Omega-3, Vitamin B complex",
        }
    },
];

const Supplement4 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);
    
    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>29</PageNumber>
        </PageWrapper>
    );
};

export default Supplement4;
