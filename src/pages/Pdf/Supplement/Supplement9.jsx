import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement9 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 4,
                        thContent: {
                            main: "活性酸素",
                            sub: "細胞に損傷を与える不安定な酸素分子で、老化や病気の原因に関わる",
                        },
                        tdContent: {
                            gen: "NOX1",
                            danger: 0,
                            description: "NADPH（補因子）, FAD（補因子）, ヘム（補因子）, NAC, レスベラトロール, αリポ酸, ビタミンE, クルクミン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SOD1",
                            danger: 0,
                            description: "銅（補因子）, 亜鉛（補因子）, NAC, αリポ酸, グルタチオン, セレン, ビタミンE, ビタミンC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SOD2",
                            danger: 0,
                            description: "マンガン（補因子）, グルタチオン, NAC, ビタミンC, ビタミンE",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                    {
                        tdContent: {
                            gen: "SOD3",
                            danger: 0,
                            description: "銅（補因子）, 亜鉛（補因子）, NAC, αリポ酸, グルタチオン, セレン, ビタミンE, ビタミンC",
                        }
                    },
                    {
                        rowSpan: 4,
                        thContent: {
                            main: "水銀",
                            sub: "体内に蓄積された有害な重金属の排出に関わる",
                        },
                        tdContent: {
                            gen: "CPOX4",
                            danger: 0,
                            description: "鉄, ビタミンB6, メチルビタミンB12, メチルフォレート, 銅, ビタミンC",
                        }
                    },
                    {   
                        tdContent: {
                            gen: "GCLM",
                            danger: 0,
                            description: "ATP（補因子）, NAC, グルタチオン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "GSTM1",
                            danger: 0,
                            description: "グルタチオン（基質）, NAC, スルフォラファン, αリポ酸, クミン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "GSTP1",
                            danger: 0,
                            description: "グルタチオン, NAC, クレイ, クロレラ",
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "有機リン系",
                            sub: "農薬や殺虫剤に含まれる神経毒性を持つ化学物質で、解毒に関わる",
                        },
                        tdContent: {
                            gen: "BCHE",
                            danger: 0,
                            description: "ホスファチジルコリン, NAC, ビタミンE, ミルクシスル, ビタミンB群",
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
                            gen: "PON1",
                            danger: 0,
                            description: "カルシウム, ビタミンD, オメガ3, ビタミンC, ビタミンE, NAD+",
                            etc: "有機リン系農薬"   //fdsdfsdf
                        }
                    },
                    {
                        rowSpan: 8,
                        thContent: {
                            main: "メチオニンサイクル",
                            sub: "肝臓で働くアミノ酸代謝経路で、細胞の代謝と解毒に関わる",
                        },
                        tdContent: {
                            gen: "ACHY",
                            danger: 0,
                            description: "NAD+（補因子）, ビタミンB12, ビタミンB6, メチルフォレート, ベタイン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "BHMT",
                            danger: 0,
                            description: "ベタイン（補因子）, メチルビタミンB12, ビタミンB6, メチルフォレート",
                        }
                    },
                    {
                        tdContent: {
                            gen: "CTH",
                            danger: 0,
                            description: "ビタミンB6（補因子）, NAC, メチルフォレート, メチルビタミンB12",
                        }
                    },
                    {
                        tdContent: {
                            gen: "MTHFD1",
                            danger: 0,
                            description: "NADPH（補因子）, NAD+（補因子）, 5MTHF, メチルビタミンB12, ビタミンB6",
                        }
                    },
                    {
                        tdContent: {
                            gen: "MTHFR\nA1298C",
                            danger: 0,
                            description: "NADPH（補因子）, NAD+（補因子）, 5MTHF, メチルビタミンB12, ビタミンB6",
                        }
                    },
                    {
                        tdContent: {
                            gen: "MTHFR\nC677T",
                            danger: 0,
                            description: "NADPH（補因子）, NAD+（補因子）, 5MTHF, メチルビタミンB12, ビタミンB6",
                        }
                    },
                    {
                        tdContent: {
                            gen: "MTR",
                            danger: 0,
                            description: "メチルビタミンB12（補因子）, SAMe, 5MTHF, ビタミンB6",
                        }
                    },
                    {
                        tdContent: {
                            gen: "MTRR",
                            danger: 0,
                            description: "リボフラビン（補因子）, ビタミンB12, メチルフォレート, ビタミンB6, SAMe, ベタイン",
                        }
                    },
                    {
                        rowSpan: 4,
                        thContent: {
                            main: "酸化/抗酸化",
                            sub: "細胞が損傷を受けるプロセス/酸化ストレスを抑えて細胞を保護する働き",
                        },
                        tdContent: {
                            gen: "CAT",
                            danger: 0,
                            description: "グルタチオン, NAC, SOD, セレン, レスベラトロール, ビタミンC, ビタミンE",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CBS",
                            danger: 0,
                            description: "ビタミンB6（補因子）, ヘム（補因子）, メチルビタミンB12, 5MTHF, NAC, ベタイン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "CTH",
                            danger: 0,
                            description: "ビタミンB6（補因子）, NAC, メチルフォレート, メチルビタミンB12",
                        }
                    },
                    {
                        tdContent: {
                            gen: "DUOX1",
                            danger: 0,
                            description: "NADPH（補因子）, NAC, ビタミンE, ビタミンC, セレン",
                        }
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                34
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement9;
