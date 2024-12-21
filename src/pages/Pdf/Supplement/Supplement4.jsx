import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {
    updateDangerValues,
    processInitialData,
} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 18,
        thContent: {
            main: "ミトコンドリア",
            sub: "細胞内小器官で、エネルギーの生成と代謝に関わる",
        },
        tdContent: {
            gen: "NDUFA11",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFB11",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFS1",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFS2",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFS3",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFS4",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFS6",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFS7",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFS8",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "NDUFV2",
            danger: "-",
            description:
                "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "OGDH",
            danger: "-",
            description:
                "NAD+（補因子）, ビタミンB1（補因子）, CoQ10, L-カルニチン, αリポ酸",
        },
    },
    {
        tdContent: {
            gen: "PANK2",
            danger: "-",
            description: "ATP（補因子）, CoQ10, パントテン酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "SDHA",
            danger: "-",
            description:
                "リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, αリポ酸",
        },
    },
    {
        tdContent: {
            gen: "SDHB",
            danger: "-",
            description:
                "リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, αリポ酸",
        },
    },
    {
        tdContent: {
            gen: "SDHC",
            danger: "-",
            description:
                "リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, αリポ酸",
        },
    },
    {
        tdContent: {
            gen: "SLC16A1",
            danger: "-",
            description: "CoQ10, L-カルニチン, オメガ3, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "UQCRB",
            danger: "-",
            description:
                "ヘム（補因子）, ユビキノール（補因子）, CoQ10, L-カルニチン, αリポ酸, ビタミンB群, ビタミンC",
        },
    },
    {
        tdContent: {
            gen: "UQCRQ",
            danger: "-",
            description:
                "ヘム（補因子）, ユビキノール（補因子）, CoQ10, L-カルニチン, αリポ酸, ビタミンB群, ビタミンC",
        },
    },
];

const Supplement4 = ({ deltaPageCount }) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>{deltaPageCount + 29}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement4;
