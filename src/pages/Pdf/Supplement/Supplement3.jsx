import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement3 = () => {

    return (
        <PageWrapper>
            <TableNew
                
                tBody={[
                    {
                        rowSpan: 22,
                        thContent: {
                            main: "ミトコンドリア",
                            sub: "細胞内小器官で、エネルギーの生成と代謝に関わる",
                        },
                        tdContent: {
                            gen: "COQ4",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ6",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ7",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ8A",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ8B",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ9",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ10A",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COQ10B",
                            danger: 0,
                            description: "CoQ10, リボフラビン, L-カルニチン, ビタミンB6, αリポ酸, NAD+",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COX4I2",
                            danger: 0,
                            description: "銅, 鉄, L-カルニチン, ビタミンB群, NAD+, リボフラビン, αリポ酸, CoQ10",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COX6B1",
                            danger: 0,
                            description: "銅, 鉄, L-カルニチン, ビタミンB群, NAD+, リボフラビン, αリポ酸, CoQ10",
                        }
                    },
                    {
                        tdContent: {
                            gen: "COX7B",
                            danger: 0,
                            description: "銅, 鉄, L-カルニチン, ビタミンB群, NAD+, リボフラビン, αリポ酸, CoQ10",
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
                            gen: "CYC1",
                            danger: 0,
                            description: "ヘム（補因子）, CoQ10, L-カルニチン, ビタミンB群, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "G6PD",
                            danger: 0,
                            description: "NADPH（補因子）, NAC, ビタミンE, セレン, αリポ酸, CoQ10",
                        }
                    },
                    {
                        tdContent: {
                            gen: "IDO2",
                            danger: 0,
                            description: "ヘム（補因子）, NAC, ビタミンD, L-トリプトファン, オメガ3",
                        }
                    },
                    {
                        tdContent: {
                            gen: "KYNU",
                            danger: 0,
                            description: "ビタミンB6（補因子）, NAC, プロバイオティクス",
                        }
                    },
                    {
                        tdContent: {
                            gen: "MT-CO1",
                            danger: 0,
                            description: "ヘム（補因子）, 銅（補因子）, CoQ10, L-カルニチン, αリポ酸, ビタミンB群",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NADSYN1",
                            danger: 0,
                            description: "マグネシウム（補因子）, NR, NAD+, NMN, ビタミンB3, L-カルニチン, ビタミンB群",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFA2",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFA6",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFA9",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    {
                        tdContent: {
                            gen: "NDUFA10",
                            danger: 0,
                            description: "NADPH（補因子）, リボフラビン（補因子）, 鉄（補因子）, CoQ10, NAD+, NMN, NR, ビタミンB群, L-カルニチン, αリポ酸",
                        }
                    },
                    
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>
                28
            </PageNumber>
        </PageWrapper>
    );
};

export default Supplement3;
