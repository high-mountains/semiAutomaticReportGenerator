import React from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import PageHeader from "../../../components/Pdf/PageHeader";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement1 = (props) => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Supplement & Lifestyle"}
                mainTitle={"あなたにおすすめのサプリメントや生活習慣一覧"}
                containerStyle={{
                    marginBottom: "0rem"
                }}
                subTitleStyle={{
                    marginBottom: "5rem"
                }}
                mainTitleStyle={{
                    fontSize: "25rem",
                    letterSpacing: "-1.75rem",
                    lineHeight: 1.6
                }}
            />
            <TableNew
                tBody={[
                    {
                        thContent: {
                            main: "グルタミン酸合成",
                            sub: "興奮性神経伝達物質の生成に関わる"
                        },
                        tdContent: {
                            gen: "GLS2",
                            danger: 0, // Dynamically updated based on state
                            description:
                                "グルタミン, L-グルタミン, NAC, ビタミンB群"
                        }
                    },
                    {
                        rowSpan: 7,
                        thContent: {
                            main: "グルタミン酸代謝",
                            sub: "興奮性神経伝達物質の分解に関わる"
                        },
                        tdContent: {
                            gen: "CBS",
                            danger: 0,
                            description:
                                "ビタミンB6（補因子）, ヘム（補因子）, メチルビタミンB12, 5MTHF, NAC, ベタイン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "CTH",
                            danger: 0,
                            description:
                                "ビタミンB6（補因子）, NAC, メチルフォレート, メチルビタミンB12"
                        }
                    },
                    {
                        tdContent: {
                            gen: "DAO",
                            danger: 0,
                            description:
                                "リボフラビン（補因子）, NAC, セレン, オメガ3, ビタミンB6"
                        }
                    },
                    {
                        tdContent: {
                            gen: "DAOA",
                            danger: 0,
                            description:
                                "リボフラビン（補因子）, NAC, セレン, オメガ3, ビタミンB6"
                        }
                    },
                    {
                        tdContent: {
                            gen: "GAD1",
                            danger: 0,
                            description:
                                "P5P（補因子）, L-グルタミン, GABA, L-テアニン, マグネシウム"
                        }
                    },
                    {
                        tdContent: {
                            gen: "GLUD1",
                            danger: 0,
                            description:
                                "NAD+（補因子）, L-グルタミン, NAC, ビタミンB群"
                        }
                    },
                    {
                        tdContent: {
                            gen: "GLUL",
                            danger: 0,
                            description: "NAC, ビタミンB群, αリポ酸"
                        }
                    },
                    {
                        thContent: {
                            main: "グルタミン酸輸送体",
                            sub: "興奮性神経伝達物質の移動に関わる"
                        },
                        tdContent: {
                            gen: "SLC1A1",
                            danger: 0, // Dynamically updated based on state
                            description:
                                "ナトリウム, カリウム, マグネシウム, ビタミンB群, オメガ3"
                        }
                    },
                    {
                        thContent: {
                            main: "GABA代謝",
                            sub: "リラックス成分の代謝に関わる"
                        },
                        tdContent: {
                            gen: "ALDH5A1",
                            danger: 0, // Dynamically updated based on state
                            description:
                                "銅, 鉄, L-カルニチン, ビタミンB群, NAD+, リボフラビン, αリポ酸, CoQ10"
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "GABA受容体",
                            sub: "リラックス成分の感度に関わる"
                        },
                        tdContent: {
                            gen: "GABRA1",
                            danger: 0,
                            description:
                                "GABA, マグネシウム, タウリン, L-テアニン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "GABRA2",
                            danger: 0,
                            description:
                                "GABA, マグネシウム, タウリン, L-テアニン"
                        }
                    },
                    {
                        tdContent: {
                            gen: "GABRG2",
                            danger: 0,
                            description:
                                "GABA, マグネシウム, タウリン, L-テアニン"
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "カテコラミン合成",
                            sub: "ストレス反応や覚醒に影響する神経伝達物質の生成に関わる"
                        },
                        tdContent: {
                            gen: "DHFR",
                            danger: 0,
                            description:
                                "NAD+（補因子）, ビタミンB12, メチルフォレート"
                        }
                    },
                    {
                        tdContent: {
                            gen: "GCH1",
                            danger: 0,
                            description:
                                "L-フェニルアラニン, L-チロシン, 5-HTP, ビタミンB群, NAC"
                        }
                    },
                    {
                        tdContent: {
                            gen: "TH",
                            danger: 0,
                            description:
                                "BH4（補因子）, L-チロシン, ビタミンB群, メチルフォレート"
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "カテコラミン代謝",
                            sub: "ストレス反応や覚醒に影響する神経伝達物質の分解に関わる"
                        },
                        tdContent: {
                            gen: "COMT",
                            danger: 0,
                            description:
                                "マグネシウム, ビタミンB6, ビタミンB12, メチルフォレート, SAMe（補因子）, NAC",
                            etc: "便秘, ピル"
                        }
                    },
                    {
                        tdContent: {
                            gen: "MAOA",
                            danger: 0,
                            description:
                                "リボフラビン（補因子）, マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート"
                        }
                    },
                    {
                        tdContent: {
                            gen: "MAOB",
                            danger: 0,
                            description:
                                "マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート"
                        }
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "ドーパミン受容体",
                            sub: "快楽や覚醒に影響する興奮性神経伝達物質の感度に関わる"
                        },
                        tdContent: {
                            gen: "DRD1",
                            danger: 0,
                            description:
                                "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム"
                        }
                    },
                    {
                        tdContent: {
                            gen: "DRD2",
                            danger: 0,
                            description:
                                "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム"
                        }
                    },
                ]}
            />
            <PageNumber>26</PageNumber>
        </PageWrapper>
    );
};

export default Supplement1;
