import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 21,
        thContent: {
            main: "Mitochondria",
            sub: "Cellular organelles involved in energy production and metabolism",
        },
        tdContent: {
            gen: "COQ4",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        }
    },
    {
        tdContent: {
            gen: "COQ6",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        }
    },
    {
        tdContent: {
            gen: "COQ7",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        }
    },
    {
        tdContent: {
            gen: "COQ8A",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        }
    },
    {
        tdContent: {
            gen: "COQ8B",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        }
    },
    {
        tdContent: {
            gen: "COQ9",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        }
    },
    {
        tdContent: {
            gen: "COQ10A",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B6, Riboflavin",
        }
    },
    {
        tdContent: {
            gen: "COX4I2",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B complex, Riboflavin, Iron, Copper",
        }
    },
    {
        tdContent: {
            gen: "COX6B1",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B complex, Riboflavin, Iron, Copper",
        }
    },
    {
        tdContent: {
            gen: "COX7B",
            danger: 0,
            description: "CoQ10, L-Carnitine, NAD+, Alpha Lipoic Acid, Vitamin B complex, Riboflavin, Iron, Copper",
        }
    },
    {
        tdContent: {
            gen: "CYC1",
            danger: 0,
            description: "Heme (Cofactor), CoQ10, L-Carnitine, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "G6PD",
            danger: 0,
            description: "NADPH (Cofactor), CoQ10, NAC, Alpha Lipoic Acid, Selenium, Vitamin E",
        }
    },
    {
        tdContent: {
            gen: "IDO2",
            danger: 0,
            description: "Heme (Cofactor), L-Tryptophan, NAC, Omega-3, Vitamin D",
        }
    },
    {
        tdContent: {
            gen: "KYNU",
            danger: 0,
            description: "Vitamin B6 (Cofactor), NAC, Probiotics",
        }
    },
    {
        tdContent: {
            gen: "MT-CO1",
            danger: 0,
            description: "Heme (Cofactor), Copper (Cofactor), CoQ10, L-Carnitine, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NADSYN1",
            danger: 0,
            description: "Magnesium (Cofactor), L-Carnitine, NAD+, NMN, NR, Vitamin B3, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFA1",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFA2",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFA6",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
    {
        tdContent: {
            gen: "NDUFA9",
            danger: 0,
            description: "NADPH (Cofactor), Riboflavin (Cofactor), Iron (Cofactor), CoQ10, L-Carnitine, NAD+, NMN, NR, Alpha Lipoic Acid, Vitamin B complex",
        }
    },
];

const Supplement3 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    // Memoized updated data
    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>28</PageNumber>
        </PageWrapper>
    );
};

export default Supplement3;
