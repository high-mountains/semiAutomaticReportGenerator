import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement12 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
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
                            etc: "グルテン, カゼイン"
                        }
                    },
                    {
                        // trHeight: 27,
                        tdContent: {
                            gen: "ZO-2(TJP2)",
                            danger: 0,
                            description: "ビタミンD, オメガ3, L-グルタミン, プロバイオティクス, 亜鉛",
                            etc: "グルテン, カゼイン"
                        }
                    },
                    {
                        rowSpan: 8,
                        thContent: {
                            main: "Longevity Genes",
                            sub: "長寿に影響する遺伝子群で、老化の遅延や疾病予防に関わる",
                        },
                        tdContent: {
                            gen: "CETP",
                            danger: 0,
                            description: "EPA, ビタミンB3",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COMT",
                            danger: 0,
                            description: "マグネシウム, ビタミンB6, ビタミンB12, メチルフォレート, SAMe（補因子）, NAC",
                            etc: "便秘, ピル"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP2B6",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "喫煙"
                        }
                    },
                    {
                        tdContent: {
                            gen: "FOXO3A",
                            danger: 0,
                            description: "グルタチオン, NAC, ビタミンC, メラトニン, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "IGF1R",
                            danger: 0,
                            description: "亜鉛, ビタミンD, L-アルギニン, ビタミンD, ゴロストラム（初乳）",
                        }
                    },
                    {
                        tdContent: {
                            gen: "IL-6",
                            danger: 0,
                            description: "ビタミンD, 亜鉛, EPA, クルクミン, レスベラトロール, EGCG",
                        }
                    },
                    {
                        tdContent: {
                            gen: "IMPK",
                            danger: 0,
                            description: "マグネシウム, ビタミンB6, ビタミンB12, Dリボース, CoQ10, ATP",
                        }
                    },
                    {
                        tdContent: {
                            gen: "TP53",
                            danger: 0,
                            description: "グルタチオン, NAC, ビタミンC, メラトニン, NAD+, セレン",
                        }
                    },
                    {
                        thContent: {
                            main: "TREM2",
                            sub: "脳の免疫反応に関与し、神経変性疾患のリスクに関わる",
                        },
                        tdContent: {
                            gen: "TREM2",
                            danger: 0,
                            description: "オメガ3, NAC, ビタミンD, クルクミン",
                        }
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
                            description: "NAC, ビタミンB群, ビタミンC, クルクミン",
                            etc: "アルコール"
                        }
                    },
                    {
                        tdContent: {
                            gen: "ADH1C",
                            danger: 0,
                            description: "NAD+（補因子）, NAC, ビタミンB群, ビタミンC, クルクミン",
                            etc : "アルコール"
                        }
                    },
                    {
                        tdContent: {
                            gen: "ALDH2",
                            danger: 0,
                            description: "NAC, ビタミンB群, ビタミンC, クルクミン, レスベラトロール",
                            etc : "アルコール"
                        }
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
                            description: "プロバイオティクス, EGCG, オメガ3",
                            etc: "断食"
                        }
                    },
                    {   
                        tdContent: {
                            gen: "ATG5",
                            danger: 0,
                            description: "オメガ3, EGCG, レスベラトロール, クルクミン, NAC",
                        }
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
                            description: "L-テアニン, マグネシウム, ビタミンB群, メラトニン",
                        }
                    },
                    {   
                        tdContent: {
                            gen: "CYP1A2",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "過剰なカフェイン, 喫煙, 焦げた肉",
                            etcClassName: "tracking-[-0.5rem]"
                        }
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
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "グルテン, カゼイン, 環境毒"
                        }
                    },
                    {
                        thContent: {
                            main: "グルタチオン除去",
                            sub: "体内の解毒プロセスで重要なグルタチオンの排出や減少に関わる",
                        },
                        tdContent: {
                            gen: "GLRX",
                            danger: 0,
                            description: "グルタチオン（補因子）, NAC, αリポ酸, ビタミンC, ビタミンE, セレン",
                        }
                    },
                    {
                        thContent: {
                            main: "ミルク",
                            sub: "ミルクの消化や代謝に影響する遺伝子で、鉄の吸収やヘプシジンの調節に関わる",
                        },
                        tdContent: {
                            gen: "TMPRSS6",
                            danger: 0,
                            description: "銅（補因子）, ビタミンB群, NAC",
                        }
                    },
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "メラトニン",
                            sub: "睡眠と覚醒リズムを調整する",
                        },
                        tdContent: {
                            gen: "MTNR1A",
                            danger: 0,
                            description: "メラトニン, 5-HTP, ビタミンB6, L-トリプトファン, バレリアンルート",
                            etc: "過剰なカフェイン, 喫煙, 焦げた肉",
                            etcClassName: "tracking-[-0.5rem]"
                        }
                    },
                    {tdContent: {
                        gen: "HLA-DQA1",
                        danger: 0,
                        description: "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                    }
                }
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                37
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement12;
