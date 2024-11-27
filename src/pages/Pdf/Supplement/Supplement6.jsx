import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 5,
        thContent: {
            main: "マイコトキシン",
            sub: "カビが産生する有害物質で、食品汚染や毒性物質の解毒や代謝に関わる",
        },
        tdContent: {
            gen: "CYP1A2",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "過剰なカフェイン, 喫煙, 焦げた肉"
        }
    },
    {
        tdContent: {
            gen: "CYP3A4",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, クルクミン, グルタチオン, ビタミンC, レスベラトロール",
            etc: "グレープフルーツ"
        }
    },
    {
        tdContent: {
            gen: "GSTA1",
            danger: 0,
            description: "NAC, クレイ, クロレラ, グルタチオン",
        }
    },
    {
        tdContent: {
            gen: "SLCO1B1",
            danger: 0,
            description: "CoQ10, NAC, αリポ酸, タウリン, ビタミンB群, ミルクシスル",
        }
    },
    {
        tdContent: {
            gen: "XPC",
            danger: 0,
            description: "NAC, オメガ3, ビタミンE, メチルビタミンB12, メチルフォレート, レスベラトロール",
        }
    },
    {
        rowSpan: 4,
        thContent: {
            main: "フェーズII グルタチオンペルオキシダーゼ",
            sub: "肝臓に存在し、酸化ストレスを減少させる酵素で、細胞の保護に関わる",
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
        thContent: {
            main: "フェーズII グルタチオントランスフェラーゼ",
            sub: "肝臓に存在し、有害物質の排出を促進する酵素で、解毒に関わる",
        },
        tdContent: {
            gen: "GSTA1",
            danger: 0,
            description: "NAC, クレイ, クロレラ, グルタチオン",
        }
    },
    {
        rowSpan: 2,
        thContent: {
            main: "フェーズII N-アセチルトランスフェラーゼ",
            sub: "肝臓に存在し、化学物質にアセチル基を付与する酵素で、解毒に関わる",
        },
        tdContent: {
            gen: "NAT1",
            danger: 0,
            description: "アセチルコエンザイムA（補因子）, NAC, クミン, スルフォラファン",
        }
    },
    {
        tdContent: {
            gen: "NAT2",
            danger: 0,
            description: "アセチルコエンザイムA（補因子）, NAC, クミン, スルフォラファン",
            etc: "ヒスタミン"
        }
    },
    {
        rowSpan: 5,
        thContent: {
            main: "フェーズII スルフトランスフェラーゼ",
            sub: "肝臓に存在し、化学物質に硫酸基を付与する酵素で、解毒に関わる",
        },
        tdContent: {
            gen: "SULT1A1",
            danger: 0,
            description: "MSM, NAC, ビタミンB6, ビタミンB12, ビタミンB群, フォレート, メチルフォレート",
            etc: "BPA, フリーラジカル"
        }
    },
    {
        tdContent: {
            gen: "SULT1A2",
            danger: 0,
            description: "MSM, NAC, アデノシン, クルクミン",
        }
    },
    {
        tdContent: {
            gen: "SULT1C4",
            danger: 0,
            description: "MSM, NAC, アデノシン, クルクミン",
        }
    },
    {
        tdContent: {
            gen: "SULT1E1",
            danger: 0,
            description: "DIM（ブロッコリー）, MSM, NAC, クルクミン, スルフォラファン",
        }
    },
    {
        tdContent: {
            gen: "SULT2B1",
            danger: 0,
            description: "NAC, クルクミン, スルフォラファン, ビタミンD, 亜鉛",
        }
    },
];

const Supplement6 = () => {
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
                31
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement6;
