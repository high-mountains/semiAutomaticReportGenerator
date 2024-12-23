import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {
    updateDangerValues,
    processInitialData,
} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 7,
        thContent: {
            main: "マイコトキシン",
            sub: "カビが産生する有害物質で、食品汚染や毒性物質の解毒や代謝に関わる",
        },
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
            gen: "CYP3A4",
            danger: "-",
            description:
                "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, クルクミン, グルタチオン, ビタミンC, レスベラトロール",
            etc: "グレープフルーツ",
        },
    },
    {
        tdContent: {
            gen: "GSTA1",
            danger: "-",
            description: "グルタチオン（基質）, NAC, αリポ酸, クミン, スルフォラファン",
        },
    },
    {
        tdContent: {
            gen: "GSTM1",
            danger: "-",
            description: "グルタチオン（基質）, NAC, αリポ酸, クミン, スルフォラファン",
        },
    },
    {
        tdContent: {
            gen: "GSTP1",
            danger: "-",
            description: "NAC, クレイ, クロレラ, グルタチオン",
        },
    },
    {
        tdContent: {
            gen: "SLCO1B1",
            danger: "-",
            description:
                "CoQ10, NAC, αリポ酸, タウリン, ビタミンB群, ミルクシスル",
        },
    },
    {
        tdContent: {
            gen: "XPC",
            danger: "-",
            description:
                "NAC, オメガ3, ビタミンE, メチルビタミンB12, メチルフォレート, レスベラトロール",
        },
    },
    {
        rowSpan: 4,
        thContent: {
            main: "フェーズII グルタチオンペルオキシダーゼ",
            sub: "肝臓に存在し、酸化ストレスを減少させる酵素で、細胞の保護に関わる",
        },
        tdContent: {
            gen: "GPX1",
            danger: "-",
            description:
                "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        },
    },
    {
        tdContent: {
            gen: "GPX2",
            danger: "-",
            description:
                "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        },
    },
    {
        tdContent: {
            gen: "GPX3",
            danger: "-",
            description:
                "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        },
    },
    {
        tdContent: {
            gen: "GPX4",
            danger: "-",
            description:
                "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "フェーズII グルタチオントランスフェラーゼ",
            sub: "肝臓に存在し、有害物質の排出を促進する酵素で、解毒に関わる",
        },
        tdContent: {
            gen: "GSTA1",
            danger: "-",
            description: "NAC, クレイ, クロレラ, グルタチオン",
        },
    },
    {
        tdContent: {
            gen: "GSTM1",
            danger: "-",
            description:
                "グルタチオン（基質）, セレン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE",
        },
    },
    {
        tdContent: {
            gen: "GSTP1",
            danger: "-",
            description:
                "NAC, クレイ, クロレラ, グルタチオン",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "フェーズII N-アセチルトランスフェラーゼ",
            sub: "肝臓に存在し、化学物質にアセチル基を付与する酵素で、解毒に関わる",
        },
        tdContent: {
            gen: "NAT1",
            danger: "-",
            description:
                "アセチルコエンザイムA（補因子）, NAC, クミン, スルフォラファン",
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
        rowSpan: 6,
        thContent: {
            main: "フェーズII スルフトランスフェラーゼ",
            sub: "肝臓に存在し、化学物質に硫酸基を付与する酵素で、解毒に関わる",
        },
        tdContent: {
            gen: "SULT1A1",
            danger: "-",
            description:
                "MSM, NAC, ビタミンB6, ビタミンB12, ビタミンB群, フォレート, メチルフォレート",
            etc: "BPA, フリーラジカル",
        },
    },
    {
        tdContent: {
            gen: "SULT1A2",
            danger: "-",
            description: "MSM, NAC, アデノシン, クルクミン",
        },
    },
    {
        tdContent: {
            gen: "SULT1C4",
            danger: "-",
            description: "MSM, NAC, アデノシン, クルクミン",
        },
    },
    {
        tdContent: {
            gen: "SULT1E1",
            danger: "-",
            description:
                "DIM（ブロッコリー）, MSM, NAC, クルクミン, スルフォラファン",
        },
    },
    {
        tdContent: {
            gen: "SULT2A1",
            danger: "-",
            description: "MSM, NAC, クルクミン, 亜鉛",
        },
    },
    {
        tdContent: {
            gen: "SULT2B1",
            danger: "-",
            description: "NAC, クルクミン, スルフォラファン, ビタミンD, 亜鉛",
        },
    },
];

const Supplement6 = ({ deltaPageCount }) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            <PageNumber>{deltaPageCount + 31}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement6;
