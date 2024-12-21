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
        rowSpan: 4,
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
        rowSpan: 5,
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
