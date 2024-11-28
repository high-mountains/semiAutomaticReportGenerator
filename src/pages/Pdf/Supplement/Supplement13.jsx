import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";


const initialData = [
    {
        rowSpan: 2,
        thContent: {
            main: "筋肉/筋肉痛",
            sub: "運動や負荷により損傷した筋繊維の修復に関わる",
        },
        tdContent: {
            gen: "ACTN3",
            danger: 0,
            description:
            "ATP（補因子）, カルシウム（補因子）, BCAA, L-シトルリン, βアラニン, クレアチン",
        },
    },
    {
        tdContent: {
            gen: "AMPD1",
            danger: 0,
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
            danger: 0,
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
            danger: 0,
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
            danger: 0,
            description:
                "SAMe（補因子）, NAC, ビタミンB6, ビタミンB12, マグネシウム, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "DAO",
            danger: 0,
            description:
                "リボフラビン（補因子）, NAC, オメガ3, セレン, ビタミンB6",
        },
    },
    {
        tdContent: {
            gen: "DAOA",
            danger: 0,
            description:
                "リボフラビン（補因子）, NAC, オメガ3, セレン, ビタミンB6",
        },
    },
    {
        tdContent: {
            gen: "DHFR",
            danger: 0,
            description: "NAD+（補因子）, ビタミンB12, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "DRD1",
            danger: 0,
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "DRD2",
            danger: 0,
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "DRD4",
            danger: 0,
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "GAD1",
            danger: 0,
            description:
                "P5P（補因子）, GABA, L-グルタミン, L-テアニン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "GCH1",
            danger: 0,
            description: "5-HTP, L-チロシン, L-フェニルアラニン, NAC, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "HTR2",
            danger: 0,
            description:
                "5-HTP, L-テアニン, オメガ3, サフラン抽出物, ビタミンB6, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "MAOA",
            danger: 0,
            description: "リボフラビン（補因子）, ビタミンB2, ビタミンB6, ビタミンB12, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "MAOB",
            danger: 0,
            description:
                "ビタミンB2, ビタミンB6, ビタミンB12, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "SLC6A4",
            danger: 0,
            description: "5-HTP, L-テアニン, オメガ3, ナトリウム, ビタミンB6, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "SPR",
            danger: 0,
            description: "NADPH（補因子）, BH4, NAC, ビタミンB6, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "TH",
            danger: 0,
            description: "BH4（補因子）, L-チロシン, ビタミンB群, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "TPH",
            danger: 0,
            description: "BH4（補因子）, 鉄（補因子）, 5-HTP, オメガ3, ビタミンB6, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "TPH2",
            danger: 0,
            description: "BH4（補因子）, 鉄（補因子）, 5-HTP, オメガ3, ビタミンB6, フォレート, マグネシウム",
        },
    },
]

const Supplement13 = () => {
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
            <PageNumber>39</PageNumber>
        </PageWrapper>
    );
};

export default Supplement13;
