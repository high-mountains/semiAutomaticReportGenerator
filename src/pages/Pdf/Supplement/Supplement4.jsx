import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 18,
        thContent: {
            main: "ミトコンドリア",
            sub: "細胞内小器官で、エネルギーの生成と代謝に関わる",
        },
        tdContent: {
            gen: "NDUFA11",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFB11",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFS1",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFS2",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFS3",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFS4",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFS6",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFS7",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFS8",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFV2",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "OGDH",
            danger: 0,
            description: "NAD+（補因子）, ビタミンB1（補因子）, CoQ10, L-カルニチン, αリポ酸",
        }
    },
    {
        tdContent: {
            gen: "PANK2",
            danger: 0,
            description: "ATP（補因子）, CoQ10, パントテン酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "SDHA",
            danger: 0,
            description: "リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, αリポ酸",
        }
    },
    {
        tdContent: {
            gen: "SDHB",
            danger: 0,
            description: "リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, αリポ酸",
        }
    },
    {
        tdContent: {
            gen: "SDHC",
            danger: 0,
            description: "リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, αリポ酸",
        }
    },
    {
        tdContent: {
            gen: "SLC16A1",
            danger: 0,
            description: "CoQ10, L-カルニチン, オメガ3, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "UQCRB",
            danger: 0,
            description: "ヘム（補因子）, ユビキノール（補因子）, CoQ10, L-カルニチン, αリポ酸, ビタミンB群, ビタミンC",
        }
    },
    {
        tdContent: {
            gen: "UQCRQ",
            danger: 0,
            description: "ヘム（補因子）, ユビキノール（補因子）, CoQ10, ビタミンB群, L-カルニチン, αリポ酸, ビタミンC",
        }
    }
];

const Supplement4 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    // Memoized updated data
    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);
    
    return (
        <PageWrapper>
            <TableNew
                tBody={updatedTableData}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                29
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement4;
