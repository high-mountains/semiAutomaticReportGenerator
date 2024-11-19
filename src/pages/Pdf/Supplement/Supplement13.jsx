import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement13 = (props) => {
    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "ビタミン&ミネラル",
                            sub: "体の機能を維持するために不可欠な栄養素の利用に関わる",
                        },
                        tdContent: {
                            gen: "PEMT",
                            danger: 0,
                            description:
                                "SAMe（補因子）, フォスファチジルコリン, ベタイン, メチルビタミンB12, メチルフォレート, ビタミンB6",
                        },
                    },
                    {
                        // trHeight: 27,
                        tdContent: {
                            gen: "SELENOS",
                            danger: 0,
                            description:
                                "セレン（補因子）, CoQ10, ビタミンE, グルタチオン",
                        },
                    },
                    {
                        rowSpan: 17,
                        thContent: {
                            main: "炎症ON",
                            sub: "炎症性疾患や免疫応答の制御に影響し、炎症反応の開始・促進に関わる",
                        },
                        tdContent: {
                            gen: "ACE",
                            danger: 0,
                            description:
                                "亜鉛（補因子）, オメガ3, クルクミン, カリウム, マグネシウム, ニンニクエキス, レスベラトロール",
                            etc: "ナトリウム",
                        },
                    },
                    {
                        tdContent: {
                            gen: "C3",
                            danger: 0,
                            description:
                                "オメガ3, ビタミンD, NAC, プロバイオティクス",
                        },
                    },
                    {
                        tdContent: {
                            gen: "CACNA1C",
                            danger: 0,
                            description:
                                "マグネシウム, オメガ3, タウリン, ビタミンD",
                            etc: "電磁波",
                        },
                    },
                    {
                        tdContent: {
                            gen: "CD14",
                            danger: 0,
                            description: "プロバイオティクス, ビタミンD",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IDO1",
                            danger: 0,
                            description:
                                "ヘム（補因子）, ビタミンD, オメガ3, EGCG, レスベラトロール, クルクミン",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL1B",
                            danger: 0,
                            description:
                                "ビタミンD, オメガ3, NAC, プロバイオティクス",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL2",
                            danger: 0,
                            description:
                                "ビタミンD, オメガ3, プロバイオティクス, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL4",
                            danger: 0,
                            description:
                                "ビタミンD, オメガ3, プロバイオティクス, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL5",
                            danger: 0,
                            description: "ビタミンD, オメガ3, プロバイオティクス, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL6",
                            danger: 0,
                            description:
                                "ビタミンD, オメガ3, プロバイオティクス, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL6R",
                            danger: 0,
                            description: "ビタミンD, オメガ3, プロバイオティクス, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL10",
                            danger: 0,
                            description:
                                "オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
                                etc: "グルテン, カゼイン"
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL13",
                            danger: 0,
                            description: "ビタミンD, プロバイオティクス, オメガ3, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "IL23R",
                            danger: 0,
                            description: "ビタミンD, オメガ3, プロバイオティクス, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "STAT4",
                            danger: 0,
                            description: "ビタミンD, オメガ3, NAC, クルクミン, レスベラトロール",
                        },
                    },
                    {
                        tdContent: {
                            gen: "TNF",
                            danger: 0,
                            description: "ビタミンD, オメガ3, NAC, クルクミン, レスベラトロール",
                        },
                    },
                    {
                        tdContent: {
                            gen: "TRAF1",
                            danger: 0,
                            description: "BH4（補因子）, 鉄（補因子）, 5-HTP, フォレート, ビタミンB6, マグネシウム, オメガ3",
                        },
                    },
                    {
                        rowSpan: 4,
                        thContent: {
                            main: "炎症OFF",
                            sub: "炎症性疾患や回復プロセスに影響し、炎症反応の抑制・終了に関わる",
                        },
                        tdContent: {
                            gen: "CTLA4",
                            danger: 0,
                            description:
                                "プロバイオティクス, ビタミンD, オメガ3",
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
                            gen: "SOCS1",
                            danger: 0,
                            description:
                                "オメガ3, ビタミンD, プロバイオティクス, NAC",
                        },
                    },
                    
                    {
                        tdContent: {
                            gen: "STAT4",
                            danger: 0,
                            description:
                                "ビタミンD, オメガ3, NAC, クルクミン, レスベラトロール",
                        },
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>38</PageNumber>
        </PageWrapper>
    );
};

export default Supplement13;
