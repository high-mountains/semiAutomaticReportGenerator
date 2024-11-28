import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 7,
        thContent: {
            main: "栄養",
            sub: "身体の機能維持と成長に必要なエネルギーや物質を供給する",
        },
        tdContent: {
            gen: "ACAT1",
            danger: 0,
            description: "コエンザイムA（補因子）, L-カルニチン, MCTオイル, αリポ酸, オメガ3",
        }
    },
    {
            tdContent: {
                gen: "ACAT2",
                danger: 0,
                description: "αリポ酸, オメガ3, ビタミンE, レスベラトロール",
            }
        },
    {
        trHeight: 28,
        tdContent: {
            gen: "BCMO1",
            danger: 0,
            description: "鉄（補因子）, ビタミンA, ビタミンC, ビタミンE, 亜鉛",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "ELOVL2",
            danger: 0,
            description: "NADPH（補因子）, コエンザイムA（補因子）, CoQ10, L-カルニチン, オメガ3, ビタミンB3, ビタミンE, 亜鉛",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "SELENOS",
            danger: 0,
            description: "セレン（補因子）, CoQ10, グルタチオン, ビタミンE",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "SLC39A14",
            danger: 0,
            description: "亜鉛（基質）, ビタミンB6, ビタミンC, マグネシウム, マンガン",
        }
    },
    {
        trHeight: 28,
        tdContent: {
            gen: "VDR",
            danger: 0,
            description: "カルシウム, ビタミンD, ビタミンK2, マグネシウム, 亜鉛",
            etc: "ビタミンD"
        }
    },
    {
        rowSpan: 6,
        thContent: {
            main: "BPA",
            sub: "プラスチック製品に含まれ、ホルモンの働きに影響を与える",
        },
        tdContent: {
            gen: "CAT",
            danger: 0,
            description: "NAC, SOD, グルタチオン, セレン, ビタミンC, ビタミンE, レスベラトロール",
            etc: "BPA, フリーラジカル"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "マンガン（補因子）, NAC, グルタチオン, ビタミンC, ビタミンE",
            etc: "BPA, フリーラジカル"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "SULT1A1",
            danger: 0,
            description: "MSM, NAC, ビタミンB6, ビタミンB12, ビタミンB群, フォレート, メチルフォレート",
            etc: "BPA, フリーラジカル"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "UGT1A1",
            danger: 0,
            description: "NAC, カルシウムDグルカル酸, グルタチオン, ビタミンD, 胆汁サプリメント",
            etc: "BPA, 環境毒"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "UGT2B15",
            danger: 0,
            description: "NAC, カルシウムDグルカル酸, グルタチオン, ビタミンD, 胆汁サプリメント",
            etc: "BPA, 環境毒"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "COX2",
            danger: 0,
            description: "EPA, NAC, αリポ酸, カテキン, クルクミン, グルタチオン",
            etc:"BPA, フリーラジカル"
        }
    },
    {
        thContent: {
            main: "NQO1",
            sub: "抗酸化作用を持つ酵素で、細胞を酸化ストレスから守る",
        },
        tdContent: {
            gen: "NQO1",
            danger: 0,
            description: "NAD+（補因子）, NAC, αリポ酸, クルクミン, グルタチオン, ケルセチン, レスベラトロール",
        }
    },
    {
        thContent: {
            main: "PON1",
            sub: "有害な酸化物質の分解に影響する酵素で、酸化ストレスの解消と心血管系に関わる",
        },
        tdContent: {
            gen: "PON1",
            danger: 0,
            description: "NAD+, オメガ3, カルシウム, ビタミンC, ビタミンD, ビタミンE",
            etc: "有機リン系農薬"
        }
    },
    {
        trHeight: 28,
        rowSpan: 4,
        thContent: {
            main: "フタル酸エステル",
            sub: "プラスチック製品に含まれる化学物質で、内分泌システムにかく乱作用に影響するホルモン調節に関わる",
        },
        tdContent: {
            gen: "CYP2B6",
            danger: 0,
            description: "NADPH（補因子）, ヘム（補因子）, EGCG, NAC, グルタチオン, スルフォラファン",
            etc: "喫煙"
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "GSTP1",
            danger: 0,
            description: "NAC, クレイ, クロレラ, グルタチオン",
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "HSPA1L",
            danger: 0,
            description: "NAC, αリポ酸, アシュワガンダ, オメガ3, レスベラトロール",
        }
    },
    {
        trHeight: 29,
        tdContent: {
            gen: "SOD2",
            danger: 0,
            description: "マンガン（補因子）, NAC, グルタチオン, ビタミンC, ビタミンE",
            etc: "BPA, フリーラジカル"
        }
    },
];

const Supplement5 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew
                tBody={updatedTableData}
            />
            <PageNumber>
                30
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement5;
