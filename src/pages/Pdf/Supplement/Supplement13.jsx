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
            main: "炎症OFF",
            sub: "炎症性疾患や回復プロセスに影響し、炎症反応の抑制・終了に関わる",
        },
        tdContent: {
            gen: "TNF",
            danger: "-",
            description:
                "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "筋肉/筋肉痛",
            sub: "運動や負荷により損傷した筋繊維の修復に関わる",
        },
        tdContent: {
            gen: "ACTN3",
            danger: "-",
            description:
                "ATP（補因子）, カルシウム（補因子）, BCAA, L-シトルリン, βアラニン, クレアチン",
        },
    },
    {
        tdContent: {
            gen: "AMPD1",
            danger: "-",
            description:
                "マグネシウム（補因子）, ATP, BCAA, CoQ10, L-カルニチン, βアラニン, クレアチン",
        },
    },
    {
        thContent: {
            main: "細胞代謝",
            sub: "細胞のエネルギーの生成や利用、栄養素の代謝に関わる",
        },
        tdContent: {
            gen: "PPARδ",
            danger: "-",
            description:
                "L-カルニチン, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
    {
        thContent: {
            main: "殺虫剤&農薬",
            sub: "神経性毒を持つ殺虫剤や農薬の代謝や解毒に関わる",
        },
        tdContent: {
            gen: "BCHE",
            danger: "-",
            description:
                "NAC, ビタミンB群, ビタミンE, ホスファチジルコリン, ミルクシスル",
        },
    },
    {
        rowSpan: 17,
        thContent: {
            main: "神経伝達物質",
            sub: "神経細胞間で情報を伝達する化学物質の生成・分解・再取り込み・感受性に関わる",
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
            gen: "DAO",
            danger: "-",
            description:
                "リボフラビン（補因子）, NAC, オメガ3, セレン, ビタミンB6",
        },
    },
    {
        tdContent: {
            gen: "DAOA",
            danger: "-",
            description:
                "リボフラビン（補因子）, NAC, オメガ3, セレン, ビタミンB6",
        },
    },
    {
        tdContent: {
            gen: "DHFR",
            danger: "-",
            description: "NAD+（補因子）, ビタミンB12, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "DRD1",
            danger: "-",
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "DRD2",
            danger: "-",
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "DRD4",
            danger: "-",
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "GAD1",
            danger: "-",
            description:
                "P5P（補因子）, GABA, L-グルタミン, L-テアニン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "GCH1",
            danger: "-",
            description:
                "5-HTP, L-チロシン, L-フェニルアラニン, NAC, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "HTR2",
            danger: "-",
            description:
                "5-HTP, L-テアニン, オメガ3, サフラン抽出物, ビタミンB6, マグネシウム",
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
            gen: "SLC6A4",
            danger: "-",
            description:
                "5-HTP, L-テアニン, オメガ3, ナトリウム, ビタミンB6, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "SPR",
            danger: "-",
            description:
                "NADPH（補因子）, BH4, NAC, ビタミンB6, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "TH",
            danger: "-",
            description:
                "BH4（補因子）, L-チロシン, ビタミンB群, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "TPH",
            danger: "-",
            description:
                "BH4（補因子）, 鉄（補因子）, 5-HTP, オメガ3, ビタミンB6, フォレート, マグネシウム",
            descriptionAddStyle: {
                letterSpacing: "-0.5rem"
            },
        },
    },
    {
        tdContent: {
            gen: "TPH2",
            danger: "-",
            description:
                "BH4（補因子）, 鉄（補因子）, 5-HTP, オメガ3, ビタミンB6, フォレート, マグネシウム",
            descriptionAddStyle: {
                letterSpacing: "-0.5rem"
            },
        },
    },
];

const Supplement13 = ({ deltaPageCount }) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>{deltaPageCount + 38}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement13;
