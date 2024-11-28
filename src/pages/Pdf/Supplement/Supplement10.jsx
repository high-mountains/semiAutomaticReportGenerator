import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 12,
        thContent: {
            main: "CYP450",
            sub: "肝臓に存在する酵素群で、薬物や毒素の代謝に関わる",
        },
        tdContent: {
            gen: "CYP1A1",
            danger: 0, // Dynamically updated based on state
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
                etc: 'グルテン, カゼイン, 環境毒'
        },
    },
    {
        tdContent: {
            gen: "CYP1A2",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc:"過剰なカフェイン, 喫煙, 焦げた肉"
        },
    },
    {
        tdContent: {
            gen: "CYP1B1",
            danger: 0,
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン, ビタミンC",
                etc: '乳製品, ピル, 焦げた肉'
        },
    },
    {
        tdContent: {
            gen: "CYP2A6",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン, ビタミンC",
            etc:"喫煙"
        },
    },
    {
        tdContent: {
            gen: "CYP2B6",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc:"喫煙"
        },
    },
    {
        tdContent: {
            gen: "CYP2C9",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, レスベラトロール",
            etc:"環境毒, 発がん物質"
        },
    },
    {
        tdContent: {
            gen: "CYP2C19",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, レスベラトロール",
            etc:"環境毒, 発がん物質"
        },
    },
    {
        tdContent: {
            gen: "CYP2D6",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, ビタミンB6, ビタミンB12, レスベラトロール",
        },
    },
    {
        tdContent: {
            gen: "CYP2E1",
            danger: 0,
            description: "NAC, クルクミン, グルタチオン, ビタミンE, ミルクシスル, レスベラトロール",
            etc:"アルコール, 塩化ビニル, ベンゼン"
        },
    },
    {
        tdContent: {
            gen: "CYP2R1",
            danger: 0,
            description: "ビタミンD3, ビタミンK2, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "CYP3A4",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, クルクミン, グルタチオン, ビタミンC, レスベラトロール",
            etc: "グレープフルーツ"
        },
    },
    {
        tdContent: {
            gen: "CYP3A5",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, クルクミン, グルタチオン, ビタミンC, レスベラトロール",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "Dyslexia",
            sub: "文字の読み書きに困難を伴う学習障害に関わる",
        },
        tdContent: {
            gen: "DCDC2",
            danger: 0,
            description:
                "DHA, ビタミンB6, ビタミンB12, フォスファチジルコリン, フォスファチジルセリン, マグネシウム, 葉酸",
        },
    },
    {
        tdContent: {
            gen: "KIAA0319",
            danger: 0,
            description:
                "DHA, ビタミンB6, ビタミンB12, フォスファチジルコリン, フォスファチジルセリン, マグネシウム, 葉酸"
        }
    },
    
    {
        thContent: {
            main: "FN1",
            sub: "細胞接着や組織の構造維持に影響するタンパク質で、傷の治癒に関わる"
        },
        tdContent: {
            gen: "FN1",
            danger: 0,
            description: "細胞接着や組織の構造維持に影響するタンパク質で、傷の治癒に関わる"
        },
    },
];

const Supplement10 = (props) => {
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
                36
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement10;
