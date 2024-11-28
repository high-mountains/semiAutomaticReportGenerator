import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 21,
        thContent: {
            main: "ミトコンドリア",
            sub: "細胞内小器官で、エネルギーの生成と代謝に関わる",
        },
        tdContent: {
            gen: "COQ4",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        }
    },
    {
        tdContent: {
            gen: "COQ6",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        }
    },
    {
        tdContent: {
            gen: "COQ7",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        }
    },
    {
        tdContent: {
            gen: "COQ8A",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        }
    },
    {
        tdContent: {
            gen: "COQ8B",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        }
    },
    {
        tdContent: {
            gen: "COQ9",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        }
    },
    {
        tdContent: {
            gen: "COQ10A",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        }
    },
    
    {
        tdContent: {
            gen: "COX4I2",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB群, リボフラビン, 鉄, 銅",
        }
    },
    {
        tdContent: {
            gen: "COX6B1",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB群, リボフラビン, 鉄, 銅",
        }
    },
    {
        tdContent: {
            gen: "COX7B",
            danger: 0,
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB群, リボフラビン, 鉄, 銅",
        }
    },
    {
        tdContent: {
            gen: "CYC1",
            danger: 0,
            description: "ヘム（補因子）, CoQ10, L-カルニチン, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "G6PD",
            danger: 0,
            description: "NADPH（補因子）, CoQ10, NAC, αリポ酸, セレン, ビタミンE",
        }
    },
    {
        tdContent: {
            gen: "IDO2",
            danger: 0,
            description: "ヘム（補因子）, L-トリプトファン, NAC, オメガ3, ビタミンD",
        }
    },
    {
        tdContent: {
            gen: "KYNU",
            danger: 0,
            description: "ビタミンB6（補因子）, NAC, プロバイオティクス",
        }
    },
    {
        tdContent: {
            gen: "MT-CO1",
            danger: 0,
            description: "ヘム（補因子）, 銅（補因子）, CoQ10, L-カルニチン, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NADSYN1",
            danger: 0,
            description: "マグネシウム（補因子）, L-カルニチン, NAD+, NMN, NR, ビタミンB3, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFA1",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFA2",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFA6",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFA9",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
        }
    },
    {
        tdContent: {
            gen: "NDUFA10",
            danger: 0,
            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, L-カルニチン, NAD+, NMN, NR, αリポ酸, ビタミンB群",
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
            <TableNew
                tBody={updatedTableData}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                28
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement3;
