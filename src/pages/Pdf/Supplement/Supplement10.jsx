import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import {
    updateDangerValues,
    processInitialData,
} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 12,
        thContent: {
            main: "CYP450",
            sub: "肝臓に存在する酵素群で、薬物や毒素の代謝に関わる",
        },
        tdContent: {
            gen: "CYP1A1",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "グルテン, カゼイン, 環境毒",
        },
    },
    {
        tdContent: {
            gen: "CYP1A2",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "過剰なカフェイン, 喫煙, 焦げた肉",
        },
    },
    {
        tdContent: {
            gen: "CYP1B1",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン, ビタミンC",
            etc: "乳製品, ピル, 焦げた肉",
        },
    },
    {
        tdContent: {
            gen: "CYP2A6",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン, ビタミンC",
            etc: "喫煙",
        },
    },
    {
        tdContent: {
            gen: "CYP2B6",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "喫煙",
        },
    },
    {
        tdContent: {
            gen: "CYP2C9",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, レスベラトロール",
            etc: "環境毒, 発がん物質",
        },
    },
    {
        tdContent: {
            gen: "CYP2C19",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, レスベラトロール",
            etc: "環境毒, 発がん物質",
        },
    },
    {
        tdContent: {
            gen: "CYP2D6",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, ビタミンB6, ビタミンB12, レスベラトロール",
        },
    },
    {
        tdContent: {
            gen: "CYP2E1",
            danger: "-",
            description:
                "NAC, クルクミン, グルタチオン, ビタミンE, ミルクシスル, レスベラトロール",
            etc: "アルコール, 塩化ビニル, ベンゼン",
        },
    },
    {
        tdContent: {
            gen: "CYP2R1",
            danger: "-",
            description: "ビタミンD3, ビタミンK2, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "CYP3A4",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, クルクミン, グルタチオン, ビタミンC, レスベラトロール",
            etc: "グレープフルーツ",
        },
    },
    {
        tdContent: {
            gen: "CYP3A5",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, クルクミン, グルタチオン, ビタミンC, レスベラトロール",
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
            danger: "-",
            description:
                "DHA, ビタミンB6, ビタミンB12, フォスファチジルコリン, フォスファチジルセリン, マグネシウム, 葉酸",
        },
    },
    {
        tdContent: {
            gen: "KIAA0319",
            danger: "-",
            description:
                "DHA, ビタミンB6, ビタミンB12, フォスファチジルコリン, フォスファチジルセリン, マグネシウム, 葉酸",
        },
    },

    {
        thContent: {
            main: "FN1",
            sub: "細胞接着や組織の構造維持に影響するタンパク質で、傷の治癒に関わる",
        },
        tdContent: {
            gen: "FN1",
            danger: "-",
            description: "アルギニン, ビタミンC, 亜鉛",
        },
    },
];

const Supplement10 = ({ deltaPageCount }) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>{deltaPageCount + 35}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement10;
