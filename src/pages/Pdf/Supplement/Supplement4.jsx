import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement4 = (props) => {

    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 17,
                        thContent: {
                            main: "ミトコンドリア",
                            sub: "細胞内小器官で、エネルギーの生成と代謝に関わる",
                        },
                        tdContent: {
                            gen: "NDUFA11",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFS1",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFS2",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFS3",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFS4",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFS6",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFS7",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFS8",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFV2",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "OGDH",
                            danger: 0,
                            description: "ビタミンB1（補因子）, NAD+（補因子）, αリポ酸, L-カルニチン, CoQ10",
                        }
                    },
                    {
                        tdContent: {
                            gen: "PANK2",
                            danger: 0,
                            description: "ATP（補因子）, パントテン酸, ビタミンB群, CoQ10",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SDHA",
                            danger: 0,
                            description: "鉄（補因子）, リボフラビン（補因子）, αリポ酸, CoQ10, L-カルニチン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SDHB",
                            danger: 0,
                            description: "鉄（補因子）, リボフラビン（補因子）, αリポ酸, CoQ10, L-カルニチン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SDHC",
                            danger: 0,
                            description: "鉄（補因子）, リボフラビン（補因子）, αリポ酸, CoQ10, L-カルニチン",
                        }
                    },
                    {
                        tdContent: {
                            gen: "SLC16A1",
                            danger: 0,
                            description: "オメガ3, L-カルニチン, CoQ10, ビタミンB群",
                        }
                    },
                    {
                        tdContent: {
                            gen: "UQCRB",
                            danger: 0,
                            description: "ヘム（補因子）, ユビキノール（補因子）, CoQ10, ビタミンB群, L-カルニチン, αリポ酸, ビタミンC",
                        }
                    },
                    {
                        tdContent: {
                            gen: "UQCRQ",
                            danger: 0,
                            description: "ヘム（補因子）, ユビキノール（補因子）, CoQ10, ビタミンB群, L-カルニチン, αリポ酸, ビタミンC",
                        }
                    },
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "栄養",
                            sub: "身体の機能維持と成長に必要なエネルギーや物質を供給する",
                        },
                        tdContent: {
                            gen: "ACAT1",
                            danger: 0,
                            description: "コエンザイムA（補因子）, MCTオイル, L-カルニチン, オメガ3, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "ACAT2",
                            danger: 0,
                            description: "オメガ3, ビタミンE, レスベラトロール, αリポ酸",
                        }
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                29
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement4;
