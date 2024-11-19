import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement10 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 11,
                        thContent: {
                            main: "酸化/抗酸化",
                            sub: "細胞が損傷を受けるプロセス/酸化ストレスを抑えて細胞を保護する働き",
                        },
                        tdContent: {
                            gen: "GCLC",
                            danger: 0,
                            description: "ATP（補因子）, NAC, グルタチオン, αリポ酸, セレン",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CALM",
                            danger: 0,
                            description: "ATP（補因子）, NAC, グルタチオン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "HFE",
                            danger: 0,
                            description: "フェチン酸, ポリフェノール",
                            etc: "鉄"
                        }
                    },
                    {
                        tdContent: {
                            gen: "KEAP1",
                            danger: 0,
                            description: "NAC, スルフォラファン, レスベラトロール, ビタミンC, ビタミンE",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NOX1",
                            danger: 0,
                            description: "NADPH（補因子）, FAD（補因子）, ヘム（補因子）, NAC, レスベラトロール, αリポ酸, ビタミンE, クルクミン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NOX4",
                            danger: 0,
                            description: "NADPH（補因子）, FAD（補因子）, ヘム（補因子）, NAC, ビタミンE, ビタミンC, CoQ10",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SHMT1",
                            danger: 0,
                            description: "ビタミンB6（補因子）, 5MTHF, メチルビタミンB12, ベタイン, NAC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SHMT2",
                            danger: 0,
                            description: "ビタミンB6（補因子）, 5MTHF, メチルビタミンB12, ベタイン, NAC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SLC40A1",
                            danger: 0,
                            description: "銅, ビタミンC, ポリフェノール",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SOD2",
                            danger: 0,
                            description: "マンガン（補因子）, グルタチオン, NAC, ビタミンC, ビタミンE",
                            etc:"BPA, フリーラジカル"
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
                            main: "葉酸",
                            sub: "ビタミンB群のひとつで、DNA合成や赤血球の生成に関わる",
                        },
                        tdContent: {
                            gen: "DHFR",
                            danger: 0,
                            description: "NAD+（補因子）, ビタミンB12, メチルフォレート",
                        }
                    },
                    {
                        tdContent: {
                            gen: "FOLR1",
                            danger: 0,
                            description: "5MTHF, メチルビタミンB12, ビタミンB6, NAC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "FOLR2",
                            danger: 0,
                            description: "5MTHF, メチルビタミンB12, ビタミンB6, NAC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SLC19A1",
                            danger: 0,
                            description: "オメガ3, L-カルニチン, CoQ10, ビタミンB群",
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "ビタミンB12",
                            sub: "ビタミンB群のひとつで、神経系の健康と赤血球生成に関わる",
                        },
                        tdContent: {
                            gen: "AMTRAK",
                            danger: 0,
                            description: "リボフラビン（補因子）, ビタミンB12, メチルフォレート, ビタミンB6, SAMe, ベタイン",
                        }
                    },
                    {
                        
                        tdContent: {
                            gen: "TCN1",
                            danger: 0,
                            description: "ビタミンB12, フォレート, 亜鉛",
                            etc: "ビタミンB12"
                        }
                    },
                    {
                        
                        tdContent: {
                            gen: "TCN2",
                            danger: 0,
                            description: "ビタミンB12, フォレート, 亜鉛",
                            etc: "ビタミンB12"
                        }
                    },
                    {
                        thContent: {
                            main: "APOE",
                            sub: "脂質代謝に影響する遺伝子で、アルツハイマー病や心血管疾患のリスクに関わる",
                        },
                        tdContent: {
                            gen: "APOE",
                            danger: 0,
                            description: "オメガ3, DHA, フォスファチジルコリン, フォレート, ビタミンB12, クルクミン, レスベラトロール",
                        }
                    },
                    
                    {
                        thContent: {
                            main: "BDNF",
                            sub: "タンパク質の合成に影響する遺伝子で、神経細胞の成長や維持に関わる/酸化ストレスを抑えて細胞を保護する働き",
                        },
                        tdContent: {
                            gen: "BDNF",
                            danger: 0,
                            description: "オメガ3, DHA, ビタミンD, EGCG, マグネシウムスレオネート",
                        }
                    }
                    
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                35
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement10;
