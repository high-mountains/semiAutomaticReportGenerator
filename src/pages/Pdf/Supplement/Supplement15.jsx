import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        thContent: {
            main: "女性ホルモン",
            sub: "女性の生殖機能やホルモン調節に関わる",
        },
        tdContent: {
            gen: "COMT",
            danger: 0,
            description:
                "SAMe（補因子）, NAC, ビタミンB6, ビタミンB12, マグネシウム, メチルフォレート",
                etc: "便秘, ピル"
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
            danger: 0,
            description:
            "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "FUT2",
            danger: 0,
            description:
            "ビタミンD, プレバイオティクス, プロバイオティクス, 亜鉛",
        },
    },
    {
        tdContent: {
            gen: "HLA-DRA",
            danger: 0,
            description:
            "DAO酵素, L-グルタミン, オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン"
        },
    },
    {
        tdContent: {
            gen: "MCM6",
            danger: 0,
            description:
            "ATP（補因子）, カルシウム, ビタミンD, プロバイオティクス, ラクターゼ酵素",
            etc: "乳製品"
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
            danger: 0,
            description:
            "亜鉛（補因子）, グルタチオン, ビタミンB6, ビタミンC",
            etc: "鉛"
        },
    },
    {
        tdContent: {
            gen: "GPX1",
            danger: 0,
            description:
            "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE"
        },
    },
    {
        tdContent: {
            gen: "HFE",
            danger: 0,
            description:
            "フェチン酸, ポリフェノール",
            etc: "鉄"
        },
    },
    {
        tdContent: {
            gen: "SLC11A2",
            danger: 0,
            description:
                "ビタミンB12, プロバイオティクス, 亜鉛, 鉄, 銅",
                etc: "鉛"
        },
    },
    {
        tdContent: {
            gen: "TNF",
            danger: 0,
            description:
                "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
];

const Supplement15 = () => {
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
            <PageNumber>40</PageNumber>
        </PageWrapper>
    );
};

export default Supplement15;
