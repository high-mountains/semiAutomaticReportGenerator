import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData =[
    {
        rowSpan: 3,
        thContent: {
            main: "活性酸素",
            sub: "細胞に損傷を与える不安定な酸素分子で、老化や病気の原因に関わる",
        },
        tdContent: {
            gen: "SOD1",
            danger: 0,
            description: "亜鉛（補因子）, 銅（補因子）, NAC, αリポ酸, グルタチオン, セレン, ビタミンC, ビタミンE",
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
        tdContent: {
            gen: "SOD3",
            danger: 0,
            description: "亜鉛（補因子）, 銅（補因子）, NAC, αリポ酸, グルタチオン, セレン, ビタミンC, ビタミンE",
        }
    },
    {
        rowSpan: 2,
        thContent: {
            main: "水銀",
            sub: "体内に蓄積された有害な重金属の排出に関わる",
        },
        tdContent: {
            gen: "CPOX4",
            danger: 0,
            description: "ビタミンB6, ビタミンC, メチルビタミンB12, メチルフォレート, 鉄, 銅",
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
            gen: "GSTM1",
            danger: 0,
            description: "グルタチオン（基質）, NAC, スルフォラファン, αリポ酸, クミン",
        }
    },
    {
        rowSpan: 3,
        thContent: {
            main: "有機リン系",
            sub: "農薬や殺虫剤に含まれる神経毒性を持つ化学物質で、解毒に関わる",
        },
        tdContent: {
            gen: "BCHE",
            danger: 0,
            description: "NAC, ビタミンB群, ビタミンE, ホスファチジルコリン, ミルクシスル",
        }
    },
    {
        
        tdContent: {
            gen: "CYP2B6",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン）",
            etc: "喫煙"
        }
    },
    {
        tdContent: {
            gen: "PON1",
            danger: 0,
            description: "NAD+, オメガ3, カルシウム, ビタミンC, ビタミンD, ビタミンE",
            etc: "有機リン系農薬"
        }
    },
    {
        rowSpan: 8,
        thContent: {
            main: "メチオニンサイクル",
            sub: "肝臓で働くアミノ酸代謝経路で、細胞の代謝と解毒に関わる",
        },
        tdContent: {
            gen: "ACHY",
            danger: 0,
            description: "NAD+（補因子）, ビタミンB6, ビタミンB12, ベタイン, メチルフォレート",
        }
    },
    {
        tdContent: {
            gen: "BHMT",
            danger: 0,
            description: "ベタイン（補因子）, ビタミンB6, メチルビタミンB12, メチルフォレート",
        }
    },
    {
        tdContent: {
            gen: "CTH",
            danger: 0,
            description: "ビタミンB6（補因子）, NAC, メチルビタミンB12, メチルフォレート",
        }
    },
    {
        tdContent: {
            gen: "MTHFD1",
            danger: 0,
            description: "NAD+（補因子）, NADPH（補因子）, 5MTHF, ビタミンB6, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "MTHFR\nA1298C",
            danger: 0,
            description: "NAD+（補因子）, NADPH（補因子）, 5MTHF, ビタミンB6, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "MTHFR\nC677T",
            danger: 0,
            description: "NAD+（補因子）, NADPH（補因子）, 5MTHF, ビタミンB6, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "MTR",
            danger: 0,
            description: "メチルビタミンB12（補因子）, 5MTHF, SAMe, ビタミンB6",
        }
    },
    {
        tdContent: {
            gen: "MTRR",
            danger: 0,
            description: "リボフラビン（補因子）, SAMe, ビタミンB6, ビタミンB12, ベタイン, メチルフォレート",
        }
    },
    {
        rowSpan: 4,
        thContent: {
            main: "酸化/抗酸化",
            sub: "細胞が損傷を受けるプロセス/酸化ストレスを抑えて細胞を保護する働き",
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
            gen: "CBS",
            danger: 0,
            description: "ビタミンB6（補因子）, ヘム（補因子）, 5MTHF, NAC, ベタイン, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "CTH",
            danger: 0,
            description: "ビタミンB6（補因子）, NAC, メチルビタミンB12, メチルフォレート",
        }
    },
    {
        tdContent: {
            gen: "DUOX1",
            danger: 0,
            description: "NADPH（補因子）, NAC, セレン, ビタミンC, ビタミンE",
        }
    },
];

const Supplement9 = () => {
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
                34
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement9;
