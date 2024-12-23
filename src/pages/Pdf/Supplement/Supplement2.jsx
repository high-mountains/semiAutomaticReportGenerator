import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues, processInitialData} from "./updateDangerValues.js";

const initialData = [
    {
        thContent: {
            main: "ドーパミン受容体",
            sub: "快楽や覚醒に影響する興奮性神経伝達物質の感度に関わる",
        },
        tdContent: {
            gen: "DRD4",
            danger: "-",
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "セロトニン",
            sub: "感情調整や幸福感に影響する神経伝達物質の調節に関わる",
        },
        tdContent: {
            gen: "HTR2A",
            danger: "-",
            description: "5-HTP, オメガ3",
        },
    },
    {
        tdContent: {
            gen: "MAOA",
            danger: "-",
            description:
                "リボフラビン（補因子）, ビタミンB2, ビタミンB6, ビタミンB12, フォレート, マグネシウム",
        },
    },
    {
        thContent: {
            main: "ヒスタミン生成",
            sub: "アレルギー反応や覚醒に影響する物質の生成に関わる",
        },
        tdContent: {
            gen: "HDC",
            danger: "-",
            description: "P5P（補因子）, NAC, ケルセチン",
        },
    },
    {
        rowSpan: 8,
        thContent: {
            main: "ヒスタミン代謝",
            sub: "アレルギー反応や覚醒に影響する物質の分解に関わる",
        },
        tdContent: {
            gen: "ALDH2",
            danger: "-",
            description:
                "NAC, クルクミン, ビタミンB群, ビタミンC, レスベラトロール",
            etc: "アルコール",
        },
    },
    {
        tdContent: {
            gen: "MAOA",
            danger: "-",
            description:
                "リボフラビン（補因子）, ビタミンB2, ビタミンB6, ビタミンB12, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "MAOB",
            danger: "-",
            description:
                "ビタミンB2, ビタミンB6, ビタミンB12, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "ABP1",
            danger: "-",
            description:
                "ビタミンB6（補因子）, 銅（補因子）, DAO酵素, ケルセチン, ビタミンD",
            etc: "ヒスタミン",
        },
    },
    {
        tdContent: {
            gen: "HNMT",
            danger: "-",
            description:
                "SAMe（補因子）, ケルセチン, ビタミンB6, マグネシウム, メチルビタミンB12, メチルフォレート",
            etc: "ヒスタミン",
        },
    },
    {
        tdContent: {
            gen: "NAT2",
            danger: "-",
            description:
                "アセチルコエンザイムA（補因子）, NAC, クミン, スルフォラファン",
            etc: "ヒスタミン",
        },
    },
    {
        tdContent: {
            gen: "ADH1B",
            danger: "-",
            description: "NAC, クルクミン, ビタミンB群, ビタミンC",
            etc: "アルコール",
        },
    },
    {
        tdContent: {
            gen: "CYP21A2",
            danger: "-",
            description:
                "NAD+（補因子）, ヘム（補因子）, マグネシウム（補因子）, αリポ酸, アシュワガンダ, ビタミンB群, 亜鉛",
        },
    },
    {
        rowSpan: 4,
        thContent: {
            main: "ヒスタミン受容体",
            sub: "アレルギー反応や覚醒に影響する物質の感度に関わる",
        },
        tdContent: {
            gen: "HRH1",
            danger: "-",
            description: "NAC, オメガ3, ケルセチン, マグネシウム",
            etc: "ヒスタミン",
        },
    },
    {
        tdContent: {
            gen: "HRH2",
            danger: "-",
            description:
                "オメガ3, プロバイオティクス, マグネシウム, 亜鉛, 甘草",
            etc: "ヒスタミン",
        },
    },
    {
        tdContent: {
            gen: "HRH3",
            danger: "-",
            description:
                "L-テアニン, オメガ3, ビタミンB群, フォスファチジルセリン, ロディオラ",
            etc: "ヒスタミン",
        },
    },
    {
        tdContent: {
            gen: "HRH4",
            danger: "-",
            description:
                "オメガ3, クルクミン, ケルセチン, ビタミンD, マグネシウム",
            etc: "ヒスタミン",
        },
    },
    {
        rowSpan: 6,
        thContent: {
            main: "ミトコンドリア",
            sub: "細胞内小器官で、エネルギーの生成と代謝に関わる",
        },
        tdContent: {
            gen: "ACAT1",
            danger: "-",
            description:
                "コエンザイムA（補因子）, L-カルニチン, MCTオイル, αリポ酸, オメガ3",
        },
    },
    {
        tdContent: {
            gen: "ACAT2",
            danger: "-",
            description: "αリポ酸, オメガ3, ビタミンE, レスベラトロール",
        },
    },
    {
        tdContent: {
            gen: "ATP5F1A",
            danger: "-",
            description: "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "ATP5F1E",
            danger: "-",
            description: "CoQ10, NAD+, ビタミンB群, リボフラビン",
        },
    },
    {
        tdContent: {
            gen: "COQ2",
            danger: "-",
            description:
                "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        },
    },
    {
        tdContent: {
            gen: "COQ3",
            danger: "-",
            description:
                "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB6, リボフラビン",
        },
    },
];

const Supplement2 = ({deltaPageCount}) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    // Memoized updated data
    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
      }, [geneData]);
    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>{ deltaPageCount +27}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement2;
