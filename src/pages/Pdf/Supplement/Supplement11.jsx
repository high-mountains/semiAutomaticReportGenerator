import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import { updateDangerValues } from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 2,
        thContent: {
            main: "Leaky",
            sub: "腸の免疫反応やバリア機能の調整に関わる",
        },
        tdContent: {
            gen: "IL10",
            danger: 0,
            description: "オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        tdContent: {
            gen: "ZO-2(TJP2)",
            danger: 0,
            description:
                "L-グルタミン, オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        rowSpan: 4,
        thContent: {
            main: "Longevity Genes",
            sub: "長寿に影響する遺伝子群で、老化の遅延や疾病予防に関わる",
        },
        tdContent: {
            gen: "COMT",
            danger: 0,
            description:
                "SAMe（補因子）, NAC, ビタミンB6, ビタミンB12, マグネシウム, メチルフォレート",
            etc: "便秘, ピル",
        },
    },
    {
        tdContent: {
            gen: "CYP2B6",
            danger: 0,
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "喫煙",
        },
    },
    {
        tdContent: {
            gen: "IGF1R",
            danger: 0,
            description:
                "L-アルギニン, ゴロストラム（初乳）, ビタミンD, ビタミンD, 亜鉛",
        },
    },
    {
        tdContent: {
            gen: "IMPK",
            danger: 0,
            description:
                "ATP, CoQ10, Dリボース, ビタミンB6, ビタミンB12, マグネシウム",
        },
    },
    {
        thContent: {
            main: "TREM2",
            sub: "脳の免疫反応に関与し、神経変性疾患のリスクに関わる",
        },
        tdContent: {
            gen: "TREM2",
            danger: 0,
            description: "NAC, オメガ3, クルクミン, ビタミンD",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "アルコール",
            sub: "中枢神経系に作用し、アルコールの分解や代謝能力に関わる",
        },
        tdContent: {
            gen: "ADH1B",
            danger: 0,
            description: "NAC, クルクミン, ビタミンB群, ビタミンC",
            etc: "アルコール",
        },
    },
    {
        tdContent: {
            gen: "ADH1C",
            danger: 0,
            description:
                "NAD+（補因子）, NAC, クルクミン, ビタミンB群, ビタミンC",
            etc: "アルコール",
        },
    },
    {
        tdContent: {
            gen: "ALDH2",
            danger: 0,
            description:
                "NAC, クルクミン, ビタミンB群, ビタミンC, レスベラトロール",
            etc: "アルコール",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "オートファジー",
            sub: "自己浄化プロセスで、細胞内の不要な成分の分解・再利用に関わる",
        },
        tdContent: {
            gen: "ATG16L1",
            danger: 0,
            description: "EGCG, オメガ3, プロバイオティクス",
            etc: "断食",
        },
    },
    {
        tdContent: {
            gen: "ATG5",
            danger: 0,
            description: "EGCG, NAC, オメガ3, クルクミン, レスベラトロール",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "カフェイン",
            sub: "集中力や警戒心を高める覚醒効果を持つカフェインの代謝や生理的効果に関わる",
        },
        tdContent: {
            gen: "ADORA2A",
            danger: 0,
            description: "L-テアニン, ビタミンB群, マグネシウム, メラトニン",
        },
    },
    {
        tdContent: {
            gen: "CYP1A2",
            danger: 0,
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "過剰なカフェイン, 喫煙, 焦げた肉",
            etcClassName: "tracking-[-0.5rem]",
        },
    },
    {
        trHeight: 40,
        thContent: {
            main: "グリホサート",
            sub: "農業や園芸に使用されている除草剤のひとつで、代謝や解毒に関わる",
        },
        tdContent: {
            gen: "CYP1A1",
            danger: 0,
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "グルテン, カゼイン, 環境毒",
        },
    },
    {
        thContent: {
            main: "グルタチオン除去",
            sub: "体内の解毒プロセスで重要なグルタチオンの排出や減少に関わる",
        },
        tdContent: {
            gen: "GLRX",
            danger: 0,
            description:
                "グルタチオン（補因子）, NAC, αリポ酸, セレン, ビタミンC, ビタミンE",
        },
    },
    {
        thContent: {
            main: "ミルク",
            sub: "ミルクの消化や代謝に影響する遺伝子で、鉄の吸収やヘプシジンの調節に関わる",
        },
        tdContent: {
            gen: "TMPRSS6",
            danger: 0,
            description: "銅（補因子）, NAC, ビタミンB群",
        },
    },
];
const Supplement11 = (props) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>37</PageNumber>
        </PageWrapper>
    );
};

export default Supplement11;
