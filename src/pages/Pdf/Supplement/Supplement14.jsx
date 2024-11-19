import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement14 = (props) => {
    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        thContent: {
                            main: "炎症OFF",
                            sub: "炎症性疾患や回復プロセスに影響し、炎症反応の抑制・終了に関わる",
                        },
                        tdContent: {
                            gen: "TNF",
                            danger: 0,
                            description:
                                "ビタミンD, オメガ3, NAC, クルクミン, レスベラトロール",
                        },
                    },
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "筋肉/筋肉痛",
                            sub: "運動や負荷により損傷した筋繊維の修復に関わる",
                        },
                        tdContent: {
                            gen: "ACTN3",
                            danger: 0,
                            description:
                            "ATP（補因子）, カルシウム（補因子）, クレアチン, βアラニン, BCAA, L-シトルリン",
                        },
                    },
                    {
                        tdContent: {
                            gen: "AMPD1",
                            danger: 0,
                            description:
                            "ATP, マグネシウム（補因子）, クレアチン, βアラニン, CoQ10, L-カルニチン, BCAA",
                        },
                    },
                    {
                        thContent: {
                            main: "細胞代謝",
                            sub: "細胞のエネルギーの生成や利用、栄養素の代謝に関わる",
                        },
                        tdContent: {
                            gen: "PPARδ",
                            danger: 0,
                            description:
                                "オメガ3, L-カルニチン, ビタミンD, クルクミン, レスベラトロール",
                        },
                    },
                    {
                        thContent: {
                            main: "殺虫剤&農薬",
                            sub: "神経性毒を持つ殺虫剤や農薬の代謝や解毒に関わる",
                        },
                        tdContent: {
                            gen: "BCHE",
                            danger: 0,
                            description:
                                "ホスファチジルコリン, NAC, ビタミンE, ミルクシスル, ビタミンB群",
                        },
                    },
                    {
                        rowSpan: 17,
                        thContent: {
                            main: "神経伝達物質",
                            sub: "神経細胞間で情報を伝達する化学物質の生成・分解・再取り込み・感受性に関わる",
                        },
                        tdContent: {
                            gen: "COMT",
                            danger: 0,
                            description:
                                "マグネシウム, ビタミンB6, ビタミンB12, メチルフォレート, SAMe（補因子）, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "DAO",
                            danger: 0,
                            description:
                                "リボフラビン（補因子）, NAC, セレン, オメガ3, ビタミンB6",
                        },
                    },
                    {
                        tdContent: {
                            gen: "DAOA",
                            danger: 0,
                            description:
                                "リボフラビン（補因子）, NAC, セレン, オメガ3, ビタミンB6",
                        },
                    },
                    {
                        tdContent: {
                            gen: "DHFR",
                            danger: 0,
                            description: "NAD+（補因子）, ビタミンB12, メチルフォレート",
                        },
                    },
                    {
                        tdContent: {
                            gen: "DRD1",
                            danger: 0,
                            description:
                                "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム",
                        },
                    },
                    {
                        tdContent: {
                            gen: "DRD2",
                            danger: 0,
                            description:
                                "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム",
                        },
                    },
                    {
                        tdContent: {
                            gen: "DRD4",
                            danger: 0,
                            description:
                                "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム",
                        },
                    },
                    {
                        tdContent: {
                            gen: "GAD1",
                            danger: 0,
                            description:
                                "P5P（補因子）, L-グルタミン, GABA, L-テアニン, マグネシウム",
                        },
                    },
                    {
                        tdContent: {
                            gen: "GCH1",
                            danger: 0,
                            description: "L-フェニルアラニン, L-チロシン, 5-HTP, ビタミンB群, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "HTR2",
                            danger: 0,
                            description:
                                "5-HTP, オメガ3, マグネシウム, ビタミンB6, L-テアニン, サフラン抽出物",
                        },
                    },
                    {
                        tdContent: {
                            gen: "MAOA",
                            danger: 0,
                            description: "リボフラビン（補因子）, マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート",
                        },
                    },
                    {
                        tdContent: {
                            gen: "MAOB",
                            danger: 0,
                            description:
                                "マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート",
                        },
                    },
                    {
                        tdContent: {
                            gen: "SLC6A4",
                            danger: 0,
                            description: "ナトリウム, ビタミンB6, マグネシウム, 5-HTP, L-テアニン, オメガ3",
                        },
                    },
                    {
                        tdContent: {
                            gen: "SPR",
                            danger: 0,
                            description: "NADPH（補因子）, BH4, ビタミンB6, NAC, フォレート, マグネシウム",
                        },
                    },
                    {
                        tdContent: {
                            gen: "TH",
                            danger: 0,
                            description: "BH4（補因子）, L-チロシン, ビタミンB群, メチルフォレート",
                        },
                    },
                    {
                        tdContent: {
                            gen: "TPH",
                            danger: 0,
                            description: "BH4（補因子）, 鉄（補因子）, 5-HTP, フォレート, ビタミンB6, マグネシウム, オメガ3",
                        },
                    },
                    {
                        tdContent: {
                            gen: "TPH2",
                            danger: 0,
                            description: "BH4（補因子）, 鉄（補因子）, 5-HTP, フォレート, ビタミンB6, マグネシウム, オメガ3",
                        },
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>39</PageNumber>
        </PageWrapper>
    );
};

export default Supplement14;
