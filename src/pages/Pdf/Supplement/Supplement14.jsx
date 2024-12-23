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
        rowSpan: 2,
        thContent: {
            main: "女性ホルモン",
            sub: "女性の生殖機能やホルモン調節に関わる",
        },
        tdContent: {
            gen: "COMT",
            danger: "-",
            description:
                "SAMe（補因子）, NAC, ビタミンB6, ビタミンB12, マグネシウム, メチルフォレート",
            etc: "便秘, ピル",
        },
    },
    {
        tdContent: {
            gen: "ESR1",
            danger: "-",
            description:
                "イソフラボン, カルシウム, ビタミンD, ブラックコホシュ, レスベラトロール",
        },
    },
    {
        rowSpan: 10,
        thContent: {
            main: "腸内フローラ",
            sub: "腸内の微生物環境や免疫応答、栄養素の代謝（消化）に関わる",
        },
        tdContent: {
            gen: "FLG",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "FUT2",
            danger: "-",
            description:
                "ビタミンD, プレバイオティクス, プロバイオティクス, 亜鉛",
        },
    },
    {
        tdContent: {
            gen: "HLA-DQ2.2",
            danger: "-",
            description:
                "DAO酵素, L-グルタミン, オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        tdContent: {
            gen: "HLA-DQ8",
            danger: "-",
            description:
                "DAO酵素, L-グルタミン, オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        tdContent: {
            gen: "HLA-DQA1",
            danger: "-",
            description:
                "DAO酵素, L-グルタミン, オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        tdContent: {
            gen: "HLA-DQA2",
            danger: "-",
            description:
                "DAO酵素, L-グルタミン, オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        tdContent: {
            gen: "HLA-DRA",
            danger: "-",
            description:
                "DAO酵素, L-グルタミン, オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        tdContent: {
            gen: "MCM6",
            danger: "-",
            description:
                "ATP（補因子）, カルシウム, ビタミンD, プロバイオティクス, ラクターゼ酵素",
            etc: "乳製品",
        },
    },
    {
        tdContent: {
            gen: "NOS2",
            danger: "-",
            description:
                "BH4（補因子）, FAD（補因子）, NADPH（補因子）, L-アルギニン, NAC",
        },
    },
    {
        tdContent: {
            gen: "NOS3",
            danger: "-",
            description:
                "BH4（補因子）, FAD（補因子）, NADPH（補因子）, L-アルギニン, NAC",
        },
    },
    {
        rowSpan: 6,
        thContent: {
            main: "鉛",
            sub: "体内に蓄積された有害な鉛の解毒に関わる",
        },
        tdContent: {
            gen: "ALAD",
            danger: "-",
            description: "亜鉛（補因子）, グルタチオン, ビタミンB6, ビタミンC",
            etc: "鉛",
        },
    },
    {
        tdContent: {
            gen: "GPX1",
            danger: "-",
            description:
                "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        },
    },
    {
        tdContent: {
            gen: "GSTM1",
            danger: "-",
            description:
                "グルタチオン（基質）, NAC, αリポ酸, クミン, スルフォラファン",
        },
    },
    {
        tdContent: {
            gen: "HFE",
            danger: "-",
            description: "フェチン酸, ポリフェノール",
            etc: "鉄",
        },
    },
    {
        tdContent: {
            gen: "SLC11A2",
            danger: "-",
            description: "ビタミンB12, プロバイオティクス, 亜鉛, 鉄, 銅",
            etc: "鉛",
        },
    },
    {
        tdContent: {
            gen: "TNF",
            danger: "-",
            description:
                "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "ADHD",
            sub: "注意欠陥や多動性障害といった神経発達障害のひとつで、集中力や衝動制御に関わる",
        },
        tdContent: {
            gen: "HTR1B",
            danger: "-",
            description: "5-HTP, ビタミンB6"
        }
    },
    {
        tdContent: {
            gen: "SLC6A3",
            danger: "-",
            description: "チロシン, ビタミンB6"
        }
    },
    {
        tdContent: {
            gen: "SNAP25",
            danger: "-",
            description: "ATP, オメガ3, フォスファチジルコリン"
        }
    },
    {
        thContent:{
            main: "BMI",
            sub: "体重と身長から算出される体格指数で、体脂肪やエネルギー代謝に関わる"
        },
        tdContent: {
            gen: "UCP2",
            description: "CoQ10, αリポ酸, アセチルL-カルニチン, オメガ3",
            etc: "高炭水化物, 高脂肪食, トランス脂肪酸, ジャンクフード"
        }
    }
];

const Supplement14 = ({ deltaPageCount }) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
    }, [geneData]);
    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>{deltaPageCount + 39}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement14;
