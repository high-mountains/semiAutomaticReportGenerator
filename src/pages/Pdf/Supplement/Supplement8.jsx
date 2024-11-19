import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement8 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 5,
                        thContent: {
                            main: "フェーズII UDP-グルクロン酸転移酵素",
                            sub: "肝臓に存在し、化学物質にグルクロン酸を結合する酵素で、解毒と排出に関わる",
                        },
                        tdContent: {
                            gen: "UGT1A1",
                            danger: 0,
                            description: "ビタミンD, グルタチオン, NAC, 胆汁サプリメント, カルシウムDグルカル酸",
                            etc: "BPA, 環境毒"
                        }
                    },
                    {
                        tdContent: {
                            gen: "UGT1A3",
                            danger: 0,
                            description: "カルシウムDグルカル酸, タンポポ茶, ミルクシスル, NAC, スルフォラファン, オメガ3",
                        }
                    },
                    {
                        tdContent: {
                            gen: "UGT1A4",
                            danger: 0,
                            description: "カルシウムDグルカル酸, タンポポ茶, ミルクシスル, NAC, スルフォラファン, オメガ3",
                        }
                    },
                    {
                        tdContent: {
                            gen: "UGT1A6",
                            danger: 0,
                            description: "NAC, ミルクシスル, ビタミンC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "UGT1A7",
                            danger: 0,
                            description: "NAC, ミルクシスル, ビタミンC",
                        }
                    },
                    {
                        rowSpan: 9,
                        thContent: {
                            main: "炎症/抗炎症",
                            sub: "組織の損傷や感染に対する体の防御反応/体の炎症を抑えて健康を維持する",
                        },
                        tdContent: {
                            gen: "BDKRB2",
                            danger: 0,
                            description: "オメガ3, アルギニン, ビタミンD, レスベラトロール, マグネシウム",
                        }
                    },
                    {   
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
                            gen: "GSTM3",
                            danger: 0,
                            description: "グルタチオン（基質）, NAC, セレン, クルクミン, ミルクシスル",
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
                        rowSpan: 6,
                        thContent: {
                            main: "化学物質過敏",
                            sub: "化学物質に対して異常に強い反応を示す",
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
                            gen: "CYP2C9",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, レスベラトロール, EGCG, ヘム（補因子）",
                            etc: "環境毒, 発がん物質"
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
                            gen: "NOS3",
                            danger: 0,
                            description: "BH4（補因子）, NADPH（補因子）, FAD（補因子）, L-アルギニン, NAC",
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
                        rowSpan: 4,
                        thContent: {
                            main: "活性酸素",
                            sub: "細胞に損傷を与える不安定な酸素分子で、老化や病気の原因に関わる",
                        },
                        tdContent: {
                            gen: "G6PD",
                            danger: 0,
                            description: "NADPH（補因子）, NAC, ビタミンE, セレン, αリポ酸, CoQ10",
                        }
                    },{
                        tdContent: {
                            gen: "GCLC",
                            danger: 0,
                            description: "ATP（補因子）, NAC, グルタチオン, αリポ酸, セレン",
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
                            gen: "GSR",
                            danger: 0,
                            description: "NADPH（補因子）, NAC, αリポ酸, セレン, グルタチオン, ビタミンE, ビタミンC",
                        }
                    }
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                33
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement8;
