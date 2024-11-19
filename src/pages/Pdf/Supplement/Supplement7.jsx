import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement7 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 7,
                        thContent: {
                            main: "マイコトキシン",
                            sub: "カビが産生する有害物質で、食品汚染や毒性物質の解毒や代謝に関わる",
                        },
                        tdContent: {
                            gen: "CYP1A2",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "過剰なカフェイン, 喫煙, 焦げた肉"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP3A4",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, レスベラトロール, EGCG, ヘム（補因子）, ビタミンC, クルクミン",
                            etc: "グレープフルーツ"
                        }
                    },
                    {
                        tdContent: {
                            gen: "GSTA1",
                            danger: 0,
                            description: "グルタチオン（基質）, NAC, スルフォラファン, αリポ酸, クミン",
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
                        tdContent: {
                            gen: "SLCO1B1",
                            danger: 0,
                            description: "NAC, ミルクシスル, タウリン, αリポ酸, CoQ10, ビタミンB群",
                        }
                    },
                    {   
                        tdContent: {
                            gen: "XPC",
                            danger: 0,
                            description: "NAC, メチルフォレート, メチルビタミンB12, オメガ3, レスベラトロール, ビタミンE",
                        }
                    },
                    {
                        rowSpan: 4,
                        thContent: {
                            main: "フェーズII グルタチオンペルオキシダーゼ",
                            sub: "肝臓に存在し、酸化ストレスを減少させる酵素で、細胞の保護に関わる",
                        },
                        tdContent: {
                            gen: "GPX1",
                            danger: 0,
                            description: "セレン（補因子）, グルタチオン（基質）, NAC, αリポ酸, ビタミンE, ビタミンC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "GPX2",
                            danger: 0,
                            description: "セレン（補因子）, グルタチオン（基質）, NAC, αリポ酸, ビタミンE, ビタミンC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "GPX3",
                            danger: 0,
                            description: "セレン（補因子）, グルタチオン（基質）, NAC, αリポ酸, ビタミンE, ビタミンC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "GPX4",
                            danger: 0,
                            description: "セレン（補因子）, グルタチオン（基質）, NAC, αリポ酸, ビタミンE, ビタミンC",
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "フェーズII グルタチオントランスフェラーゼ",
                            sub: "肝臓に存在し、有害物質の排出を促進する酵素で、解毒に関わる",
                        },
                        tdContent: {
                            gen: "GSTA1",
                            danger: 0,
                            description: "グルタチオン（基質）, NAC, スルフォラファン, αリポ酸, クミン",
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
                        rowSpan: 2,
                        thContent: {
                            main: "フェーズII N-アセチルトランスフェラーゼ",
                            sub: "肝臓に存在し、化学物質にアセチル基を付与する酵素で、解毒に関わる",
                        },
                        tdContent: {
                            gen: "NAT1",
                            danger: 0,
                            description: "アセチルコエンザイムA（補因子）, NAC, クミン, スルフォラファン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NAT2",
                            danger: 0,
                            description: "アセチルコエンザイムA（補因子）, NAC, クミン, スルフォラファン",
                            etc: "ヒスタミン"
                        }
                    },
                    {
                        rowSpan: 6,
                        thContent: {
                            main: "フェーズII スルフトランスフェラーゼ",
                            sub: "肝臓に存在し、化学物質に硫酸基を付与する酵素で、解毒に関わる",
                        },
                        tdContent: {
                            gen: "SULT1A1",
                            danger: 0,
                            description: "ビタミンB6, メチルフォレート, NAC, MSM, ビタミンB12, フォレート, ビタミンB群",
                            etc: "BPA, フリーラジカル"
                        }
                    },
                    {
                        tdContent: {
                            gen: "SULT1A2",
                            danger: 0,
                            description: "アデノシン, NAC, クルクミン, MSM",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SULT1C4",
                            danger: 0,
                            description: "アデノシン, NAC, クルクミン, MSM",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SULT1E1",
                            danger: 0,
                            description: "NAC, スルフォラファン, DIM（ブロッコリー）, クルクミン, MSM",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SULT2A1",
                            danger: 0,
                            description: "NAC, 亜鉛, クルクミン, MSM",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SULT2B1",
                            danger: 0,
                            description: "NAC, スルフォラファン, クルクミン, 亜鉛, ビタミンD",
                        }
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                32
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement7;
