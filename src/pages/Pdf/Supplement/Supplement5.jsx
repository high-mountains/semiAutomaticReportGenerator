import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement5 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 9,
                        thContent: {
                            main: "栄養",
                            sub: "身体の機能維持と成長に必要なエネルギーや物質を供給する",
                        },
                        tdContent: {
                            gen: "ADRA2A",
                            danger: 0,
                            description: "L-チロシン, マグネシウム, GABA, アシュワガンダ, ビタミンB群",
                        }
                    },
                    {
                        trHeight: 28,
                        tdContent: {
                            gen: "BCMO1",
                            danger: 0,
                            description: "鉄（補因子）, ビタミンA, ビタミンC, 亜鉛, ビタミンE",
                        }
                    },
                    {
                        trHeight: 28,
                        tdContent: {
                            gen: "CHKA",
                            danger: 0,
                            description: "ATP（補因子）, ホスファチジルコリン, ベタイン, ビタミンB群, オメガ3",
                        }
                    },
                    {
                        trHeight: 28,
                        tdContent: {
                            gen: "ELOVL2",
                            danger: 0,
                            description: "NADPH（補因子）, コエンザイムA（補因子）, オメガ3, ビタミンB3, L-カルニチン, CoQ10, 亜鉛, ビタミンE",
                        }
                    },
                    {
                        trHeight: 28,
                        tdContent: {
                            gen: "PEMT",
                            danger: 0,
                            description: "SAMe（補因子）, フォスファチジルコリン, ベタイン, メチルビタミンB12, メチルフォレート, ビタミンB6",
                        }
                    },
                    {
                        trHeight: 28,
                        tdContent: {
                            gen: "SELENOS",
                            danger: 0,
                            description: "セレン（補因子）, CoQ10, ビタミンE, グルタチオン",
                        }
                    },
                    {   
                        trHeight: 28,
                        tdContent: {
                            gen: "SLC30A3",
                            danger: 0,
                            description: "亜鉛（補因子）, ビタミンB6, マグネシウム, ビタミンC, ビタミンE",
                        }
                    },
                    {
                        trHeight: 28,
                        tdContent: {
                            gen: "SLC39A14",
                            danger: 0,
                            description: "亜鉛（基質）, ビタミンC, ビタミンB6, マグネシウム, マンガン",
                        }
                    },
                    {
                        trHeight: 28,
                        tdContent: {
                            gen: "VDR",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    // {
                    //     tdContent: {
                    //         gen: "OGDH",
                    //         danger: 0,
                    //         description: "ビタミンD, ビタミンK2, カルシウム, マグネシウム, 亜鉛",
                    //         etc: "ビタミンD"
                    //     }
                    // },
                    {
                        rowSpan: 6,
                        thContent: {
                            main: "BPA",
                            sub: "プラスチック製品に含まれ、ホルモンの働きに影響を与える",
                        },
                        tdContent: {
                            gen: "CAT",
                            danger: 0,
                            description: "グルタチオン, NAC, SOD, セレン, レスベラトロール, ビタミンC, ビタミンE",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "SOD2",
                            danger: 0,
                            description: "マンガン（補因子）, グルタチオン, NAC, ビタミンC, ビタミンE",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "SULT1A1",
                            danger: 0,
                            description: "ビタミンB6, メチルフォレート, NAC, MSM, ビタミンB12, フォレート, ビタミンB群",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "UGT1A1",
                            danger: 0,
                            description: "ビタミンD, グルタチオン, NAC, 胆汁サプリメント, カルシウムDグルカル酸",
                            etc: "BPA, 環境毒"
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "UGT2B15",
                            danger: 0,
                            description: "ビタミンD, グルタチオン, NAC, 胆汁サプリメント, カルシウムDグルカル酸",
                            etc: "BPA, 環境毒"
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "COX2",
                            danger: 0,
                            description: "グルタチオン, NAC, クルクミン, αリポ酸, EPA, カテキン",
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
                            description: "NAD+（補因子）, αリポ酸, クルクミン, ケルセチン, レスベラトロール, グルタチオン, NAC",
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
                            description: "カルシウム, ビタミンD, オメガ3, ビタミンC, ビタミンE, NAD+",
                            etc: "有機リン系農薬"
                        }
                    },
                    {
                        trHeight: 28,
                        rowSpan: 5,
                        thContent: {
                            main: "フタル酸エステル",
                            sub: "プラスチック製品に含まれる化学物質で、内分泌システムにかく乱作用に影響するホルモン調節に関わる",
                        },
                        tdContent: {
                            gen: "CYP2B6",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "喫煙"
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "GSTM1",
                            danger: 0,
                            description: "グルタチオン（基質）, NAC, スルフォラファン, αリポ酸, クミン",
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "GSTP1",
                            danger: 0,
                            description: "グルタチオン, NAC, クレイ, クロレラ",
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "HSPA1L",
                            danger: 0,
                            description: "NAC, レスベラトロール, オメガ3, αリポ酸, アシュワガンダ",
                        }
                    },
                    {
                        trHeight: 29,
                        tdContent: {
                            gen: "SOD2",
                            danger: 0,
                            description: "マンガン（補因子）, グルタチオン, NAC, ビタミンC, ビタミンE",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                30
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement5;
