import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 5,
        thContent: {
            main: "フェーズII UDP-グルクロン酸転移酵素",
            sub: "肝臓に存在し、化学物質にグルクロン酸を結合する酵素で、解毒と排出に関わる",
        },
        tdContent: {
            gen: "UGT1A1",
            danger: 0,
            description: "NAC, カルシウムDグルカル酸, グルタチオン, ビタミンD, 胆汁サプリメント",
            etc: "BPA, 環境毒"
        }
    },
    {
        tdContent: {
            gen: "UGT1A3",
            danger: 0,
            description: "NAC, オメガ3, カルシウムDグルカル酸, スルフォラファン, タンポポ茶, ミルクシスル",
        }
    },
    {
        tdContent: {
            gen: "UGT1A4",
            danger: 0,
            description: "NAC, オメガ3, カルシウムDグルカル酸, スルフォラファン, タンポポ茶, ミルクシスル",
        }
    },
    {
        tdContent: {
            gen: "UGT1A6",
            danger: 0,
            description: "NAC, ビタミンC, ミルクシスル",
        }
    },
    {
        tdContent: {
            gen: "UGT1A7",
            danger: 0,
            description: "NAC, ビタミンC, ミルクシスル",
        }
    },
    {
        rowSpan: 6,
        thContent: {
            main: "炎症/抗炎症",
            sub: "組織の損傷や感染に対する体の防御反応/体の炎症を抑えて健康を維持する",
        },
        tdContent: {
            gen: "GPX1",
            danger: 0,
            description: "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        }
    },
    {
        tdContent: {
            gen: "GPX2",
            danger: 0,
            description: "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        }
    },
    {
        tdContent: {
            gen: "GPX3",
            danger: 0,
            description: "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        }
    },
    {
        tdContent: {
            gen: "GPX4",
            danger: 0,
            description: "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        }
    },
    {
        tdContent: {
            gen: "GSTM3",
            danger: 0,
            description: "グルタチオン（基質）, NAC, クルクミン, セレン, ミルクシスル",
        }
    },
    {
        tdContent: {
            gen: "GSTP1",
            danger: 0,
            description: "NAC, クレイ, クロレラ, グルタチオン",
        }
    },
    {
        rowSpan: 5,
        thContent: {
            main: "化学物質過敏",
            sub: "化学物質に対して異常に強い反応を示す",
        },
        tdContent: {
            gen: "CAT",
            danger: 0,
            description: "NAC, SOD, グルタチオン, セレン, ビタミンC, ビタミンE, レスベラトロール",
            etc: "BPA, フリーラジカル"
        }
    },
    {
        
        tdContent: {
            gen: "CYP2C9",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, レスベラトロール",
            etc: "環境毒, 発がん物質"
        }
    },
    {
        tdContent: {
            gen: "GSTP1",
            danger: 0,
            description: "NAC, クレイ, クロレラ, グルタチオン",
        }
    },
    {
        tdContent: {
            gen: "NOS3",
            danger: 0,
            description: "BH4（補因子）, FAD（補因子）, NADPH（補因子）, L-アルギニン, NAC",
        }
    },
    {
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "マンガン（補因子）, NAC, グルタチオン, ビタミンC, ビタミンE",
            etc: "BPA, フリーラジカル"
        }
    },
    {
        rowSpan: 2,
        thContent: {
            main: "活性酸素",
            sub: "細胞に損傷を与える不安定な酸素分子で、老化や病気の原因に関わる",
        },
        tdContent: {
            gen: "G6PD",
            danger: 0,
            description: "NADPH（補因子）, NAC, ビタミンE, セレン, αリポ酸, CoQ10",
        }
    },{
        tdContent: {
            gen: "GSR",
            danger: 0,
            description: "NADPH（補因子）, NAC, αリポ酸, グルタチオン, セレン, ビタミンC, ビタミンE",
        }
    },
];

const Supplement7 = () => {
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
                33
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement7;
