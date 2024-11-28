import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 8,
        thContent: {
            main: "酸化/抗酸化",
            sub: "細胞が損傷を受けるプロセス/酸化ストレスを抑えて細胞を保護する働き",
        },
        tdContent: {
            gen: "HFE",
            danger: 0,
            description: "フェチン酸, ポリフェノール",
            etc: "鉄"
        }
    },
    {
        tdContent: {
            gen: "KEAP1",
            danger: 0,
            description: "NAC, スルフォラファン, ビタミンC, ビタミンE, レスベラトロール",
        }
    },
    {
        tdContent: {
            gen: "NOX4",
            danger: 0,
            description: "FAD（補因子）, NADPH（補因子）, ヘム（補因子）, CoQ10, NAC, ビタミンC, ビタミンE",
        }
    },
    {
        tdContent: {
            gen: "SHMT1",
            danger: 0,
            description: "ビタミンB6（補因子）, 5MTHF, NAC, ベタイン, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "SHMT2",
            danger: 0,
            description: "ビタミンB6（補因子）, 5MTHF, NAC, ベタイン, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "SLC40A1",
            danger: 0,
            description: "ビタミンC, ポリフェノール, 銅",
        }
    },
    {
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "マンガン（補因子）, NAC, グルタチオン, ビタミンC, ビタミンE",
            etc:"BPA, フリーラジカル"
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
        rowSpan: 4,
        thContent: {
            main: "葉酸",
            sub: "ビタミンB群のひとつで、DNA合成や赤血球の生成に関わる",
        },
        tdContent: {
            gen: "DHFR",
            danger: 0,
            description: "NAD+（補因子）, ビタミンB12, メチルフォレート",
        }
    },
    {
        tdContent: {
            gen: "FOLR1",
            danger: 0,
            description: "5MTHF, NAC, ビタミンB6, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "FOLR2",
            danger: 0,
            description: "5MTHF, NAC, ビタミンB6, メチルビタミンB12",
        }
    },
    {
        tdContent: {
            gen: "SLC19A1",
            danger: 0,
            description: "CoQ10, L-カルニチン, オメガ3, ビタミンB群",
        }
    },
    {
        rowSpan: 3,
        thContent: {
            main: "ビタミンB12",
            sub: "ビタミンB群のひとつで、神経系の健康と赤血球生成に関わる",
        },
        tdContent: {
            gen: "AMTRAK",
            danger: 0,
            description: "リボフラビン（補因子）, SAMe, ビタミンB6, ビタミンB12, ベタイン, メチルフォレート",
        }
    },
    {
        
        tdContent: {
            gen: "TCN1",
            danger: 0,
            description: "ビタミンB12, フォレート, 亜鉛",
            etc: "ビタミンB12"
        }
    },
    {
        
        tdContent: {
            gen: "TCN2",
            danger: 0,
            description: "ビタミンB12, フォレート, 亜鉛",
            etc: "ビタミンB12"
        }
    },
    {
        thContent: {
            main: "APOE",
            sub: "脂質代謝に影響する遺伝子で、アルツハイマー病や心血管疾患のリスクに関わる",
        },
        tdContent: {
            gen: "APOE",
            danger: 0,
            description: "DHA, オメガ3, クルクミン, ビタミンB12, フォスファチジルコリン, フォレート, レスベラトロール",
        }
    },
    
    {
        thContent: {
            main: "BDNF",
            sub: "タンパク質の合成に影響する遺伝子で、神経細胞の成長や維持に関わる",
        },
        tdContent: {
            gen: "BDNF",
            danger: 0,
            description: "DHA, EGCG, オメガ3, ビタミンD, マグネシウムスレオネート",
        }
    }
    
]
const Supplement9 = (props) => {
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
                35
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement9;
