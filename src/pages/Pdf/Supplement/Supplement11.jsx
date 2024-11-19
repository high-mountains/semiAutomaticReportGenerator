import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement11 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 14,
                        thContent: {
                            main: "CYP450",
                            sub: "肝臓に存在する酵素群で、薬物や毒素の代謝に関わる",
                        },
                        tdContent: {
                            gen: "CYP1A1",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "グルテン, カゼイン, 環境毒"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP1A2",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "過剰なカフェイン, 喫煙, 焦げた肉"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP1B1",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）, ビタミンC",
                            etc: "乳製品, ピル, 焦げた肉"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP2A6",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）, ビタミンC",
                            etc: "喫煙"
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
                            gen: "CYP2C9",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "環境毒, 発がん物質"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP2C19",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, スルフォラファン, EGCG, ヘム（補因子）",
                            etc: "環境毒, 発がん物質"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP2D6",
                            danger: 0,
                            description: "ビタミンB6, ビタミンB12, グルタチオン, NAC, NADPH（補因子）, レスベラトロール, EGCG, ヘム（補因子）",
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP2E1",
                            danger: 0,
                            description: "グルタチオン, NAC, ミルクシスル, クルクミン, レスベラトロール, ビタミンE",
                            etc: "アルコール, 塩化ビニル, ベンゼン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP2R1",
                            danger: 0,
                            description: "ビタミンD3, ビタミンK2, マグネシウム",
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
                            gen: "CYP3A5",
                            danger: 0,
                            description: "グルタチオン, NAC, NADPH（補因子）, レスベラトロール, EGCG, ヘム（補因子）, ビタミンC, クルクミン",
                        }
                    },
                    {  
                        trHeight: 40,
                        tdContent: {
                            gen: "CYP3A7",
                            danger: 0,
                            description: "グルタチオン, NAC, ビタミンE, ビタミンK2, NADPH（補因子）, レスベラトロール, EGCG, ヘム（補因子）",
                            etc : "胎児期の解毒"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP4F2",
                            danger: 0,
                            description: "グルタチオン, NAC, ビタミンE, ビタミンK2, NADPH（補因子）, レスベラトロール, EGCG, ヘム（補因子）",
                        }
                    },
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "Dyslexia",
                            sub: "文字の読み書きに困難を伴う学習障害に関わる",
                        },
                        tdContent: {
                            gen: "DCDC2",
                            danger: 0,
                            description: "DHA, 葉酸, ビタミンB6, ビタミンB12, フォスファチジルコリン, フォスファチジルセリン, マグネシウム",
                        }
                    },
                    {   
                        tdContent: {
                            gen: "KIAA0319",
                            danger: 0,
                            description: "DHA, 葉酸, ビタミンB6, ビタミンB12, フォスファチジルコリン, フォスファチジルセリン, マグネシウム",
                        }
                    },
                    {
                        thContent: {
                            main: "FN1",
                            sub: "細胞接着や組織の構造維持に影響するタンパク質で、傷の治癒に関わる",
                        },
                        tdContent: {
                            gen: "FN1",
                            danger: 0,
                            description: "亜鉛, ビタミンC, アルギニン",
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "Leaky",
                            sub: "腸の免疫反応やバリア機能の調整に関わる",
                        },
                        tdContent: {
                            gen: "HLA-DQ2.2",
                            danger: 0,
                            description: "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                            etc: "グルテン, カゼイン"
                        }
                    },
                    {tdContent: {
                        gen: "HLA-DQ8",
                        danger: 0,
                        description: "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                        etc: "グルテン, カゼイン"
                    }},
                    {tdContent: {
                        gen: "HLA-DQA1",
                        danger: 0,
                        description: "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                        etc: "グルテン, カゼイン"
                    }},
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                36
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement11;
