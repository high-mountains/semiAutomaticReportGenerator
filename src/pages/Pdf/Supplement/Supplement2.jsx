import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import PageHeader from "../../../components/Pdf/PageHeader";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement2 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                
                tBody={[
                    {
                        thContent: {
                            main: "ドーパミン受容体",
                            sub: "快楽や覚醒に影響する興奮性神経伝達物質の感度に関わる"
                        },
                        tdContent: {
                            gen: "DRD4",
                            danger: 0,  // Dynamically updated based on state
                            description: "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム"
                        }
                    },
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "セロトニン",
                            sub: "感情調整や幸福感に影響する神経伝達物質の調節に関わる"
                        },
                        tdContent: {
                            gen: "HTR2A",
                            danger: 0,
                            description: "5-HTP, オメガ3"
                        }
                    },
                    {
                        tdContent: {
                            gen: "MAOA",
                            danger: 0,
                            description: "リボフラビン（補因子）, マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート"
                        }
                    },
                    {
                        thContent: {
                            main: "ヒスタミン生成",
                            sub: "アレルギー反応や覚醒に影響する物質の生成に関わる"
                        },
                        tdContent: {
                            gen: "HDC",
                            danger: 0,
                            description: "P5P（補因子）, ケルセチン, NAC"
                        }
                    },
                    {
                        rowSpan: 8,
                        thContent: {
                            main: "ヒスタミン代謝",
                            sub: "アレルギー反応や覚醒に影響する物質の分解に関わる"
                        },
                        tdContent: {
                            gen: "ALDH2",
                            danger: 0,
                            description: "NAC, ビタミンB群, ビタミンC, クルクミン, レスベラトロール",
                            etc: "アルコール"
                        }
                    },
                    {
                        tdContent: {
                            gen: "MAOA",
                            danger: 0,
                            description: "リボフラビン（補因子）, マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート"
                        }
                    },
                    {
                        tdContent: {
                            gen: "MAOB",
                            danger: 0,
                            description: "マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート"
                        }
                    },
                    {
                        tdContent: {
                            gen: "ABP1",
                            danger: 0,
                            description: "銅（補因子）, ビタミンB6（補因子）, ケルセチン, DAO酵素, ビタミンD",
                            etc: "ヒスタミン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "HNMT",
                            danger: 0,
                            description: "SAMe（補因子）, マグネシウム, メチルビタミンB12, メチルフォレート, ビタミンB6, ケルセチン",
                            etc: "ヒスタミン"
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
                        tdContent: {
                            gen: "ADH1B",
                            danger: 0,
                            description: "NAC, ビタミンB群, ビタミンC, クルクミン",
                            etc: "アルコール"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CYP21A2",
                            danger: 0,
                            description: "NAD+（補因子）, ヘム（補因子）, ビタミンB群, αリポ酸, マグネシウム（補因子）, 亜鉛, アシュワガンダ"
                        }
                    },
                    {
                        rowSpan: 4,
                        thContent: {
                            main: "ヒスタミン受容体",
                            sub: "アレルギー反応や覚醒に影響する物質の感度に関わる"
                        },
                        tdContent: {
                            gen: "HRH1",
                            danger: 0,
                            description: "ケルセチン, NAC, マグネシウム, オメガ3",
                            etc: "ヒスタミン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "HRH2",
                            danger: 0,
                            description: "甘草, プロバイオティクス, 亜鉛, マグネシウム, オメガ3",
                            etc: "ヒスタミン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "HRH3",
                            danger: 0,
                            description: "ロディオラ, フォスファチジルセリン, オメガ3, ビタミンB群, L-テアニン",
                            etc: "ヒスタミン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "HRH4",
                            danger: 0,
                            description: "ケルセチン, ビタミンD, クルクミン, マグネシウム, オメガ3",
                            etc: "ヒスタミン"
                        }
                    },
                    {
                        rowSpan: 6,
                        thContent: {
                            main: "ミトコンドリア",
                            sub: "細胞内小器官で、エネルギーの生成と代謝に関わる"
                        },
                        tdContent: {
                            gen: "ACAT1",
                            danger: 0,
                            description: "コエンザイムA（補因子）, MCTオイル, L-カルニチン, オメガ3, αリポ酸"
                        }
                    },
                    {
                        tdContent: {
                            gen: "ACAT2",
                            danger: 0,
                            description: "オメガ3, ビタミンE, レスベラトロール, αリポ酸"
                        }
                    },
                    {
                        tdContent: {
                            gen: "ATP5F1A",
                            danger: 0,
                            description: "CoQ10, L-カルニチン, NAD+, ビタミンB群, αリポ酸"
                        }
                    },
                    {
                        tdContent: {
                            gen: "ATP5F1E",
                            danger: 0,
                            description: "CoQ10, NAD+, リボフラビン, ビタミンB群"
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ2",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+"
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ3",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+"
                        }
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                27
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement2;
