import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement15 = (props) => {
    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "女性ホルモン",
                            sub: "女性の生殖機能やホルモン調節に関わる",
                        },
                        tdContent: {
                            gen: "COMT",
                            danger: 0,
                            description:
                                "マグネシウム, ビタミンB6, ビタミンB12, メチルフォレート, SAMe（補因子）, NAC",
                                etc: "便秘, ピル"
                        },
                    },
                    {
                        tdContent: {
                            gen: "ESR1",
                            danger: 0,
                            description:
                            "イソフラボン, ビタミンD, カルシウム, ブラックコホシュ, レスベラトロール",
                        },
                    },
                    {
                        rowSpan: 11,
                        thContent: {
                            main: "腸内フローラ",
                            sub: "腸内の微生物環境や免疫応答、栄養素の代謝（消化）に関わる",
                        },
                        tdContent: {
                            gen: "FLG",
                            danger: 0,
                            description:
                            "オメガ3, ビタミンD, プロバイオティクス, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "TPH2",
                            danger: 0,
                            description:
                            "BH4（補因子）, 鉄（補因子）, 5-HTP, フォレート, ビタミンB6, マグネシウム, オメガ3",
                        },
                    },
                    {
                        tdContent: {
                            gen: "FUT2",
                            danger: 0,
                            description:
                            "プロバイオティクス, プレバイオティクス, ビタミンD, 亜鉛",
                        },
                    },
                    {
                        tdContent: {
                            gen: "HLA-DQ2.2",
                            danger: 0,
                            description:
                            "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                            etc: "グルテン, カゼイン"
                        },
                    },
                    {
                        tdContent: {
                            gen: "HLA-DQ8",
                            danger: 0,
                            description:
                            "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                            etc: "グルテン, カゼイン"
                        },
                    },
                    {
                        tdContent: {
                            gen: "HLA-DQA1",
                            danger: 0,
                            description:
                            "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                            etc: "グルテン, カゼイン"
                        },
                    },
                    {
                        tdContent: {
                            gen: "HLA-DQA2",
                            danger: 0,
                            description:
                            "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                            etc: "グルテン, カゼイン"
                        },
                    },
                    {
                        tdContent: {
                            gen: "HLA-DRA",
                            danger: 0,
                            description:
                            "オメガ3, プロバイオティクス, DAO酵素, ビタミンD, 亜鉛, L-グルタミン",
                            etc: "グルテン, カゼイン"
                        },
                    },
                    {
                        tdContent: {
                            gen: "MCM6",
                            danger: 0,
                            description:
                            "ATP（補因子）, ラクターゼ酵素, プロバイオティクス, カルシウム, ビタミンD",
                            etc: "乳製品"
                        },
                    },
                    {
                        tdContent: {
                            gen: "NOS2",
                            danger: 0,
                            description:
                            "BH4（補因子）, NADPH（補因子）, FAD（補因子）, L-アルギニン, NAC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "NOS3",
                            danger: 0,
                            description:
                            "BH4（補因子）, NADPH（補因子）, FAD（補因子）, L-アルギニン, NAC",
                        },
                    },
                    {
                        rowSpan: 6,
                        thContent: {
                            main: "鉛",
                            sub: "体内に蓄積された有害な鉛の解毒に関わる",
                        },
                        tdContent: {
                            gen: "ALAD",
                            danger: 0,
                            description:
                                "亜鉛（補因子）, ビタミンC, グルタチオン, ビタミンB6",
                                etc: "鉛"
                        },
                    },
                    {
                        tdContent: {
                            gen: "GPX1",
                            danger: 0,
                            description:
                                "セレン（補因子）, グルタチオン（基質）, NAC, αリポ酸, ビタミンE, ビタミンC",
                        },
                    },
                    {
                        tdContent: {
                            gen: "GSTM1",
                            danger: 0,
                            description:
                                "グルタチオン（基質）, NAC, スルフォラファン, αリポ酸, クミン",
                        },
                    },
                    {
                        tdContent: {
                            gen: "HFE",
                            danger: 0,
                            description: "フェチン酸, ポリフェノール",
                            etc: "鉄"
                        },
                    },
                    {
                        tdContent: {
                            gen: "SLC11A2",
                            danger: 0,
                            description:
                                "鉄, 銅, 亜鉛, ビタミンB12, プロバイオティクス",
                                etc: "鉛"
                        },
                    },
                    {
                        tdContent: {
                            gen: "TNF",
                            danger: 0,
                            description:
                                "ビタミンD, オメガ3, NAC, クルクミン, レスベラトロール",
                        },
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "ADHD",
                            sub: "注意欠陥や多動性障害といった神経発達障害のひとつで、集中力や衝動制御に関わる",
                        },
                        tdContent: {
                            gen: "HTR1B",
                            danger: 0,
                            description:
                                "5-HTP, ビタミンB6",
                        },
                    },
                    {
                        tdContent: {
                            gen: "SLC6A3",
                            danger: 0,
                            description:
                                "チロシン, ビタミンB6",
                        },
                    },
                    {
                        tdContent: {
                            gen: "SNAP25",
                            danger: 0,
                            description:
                                "オメガ3, ATP, フォスファチジルコリン",
                        },
                    },
                    {
                        thContent: {
                            main: "BMI",
                            sub: "体重と身長から算出される体格指数で、体脂肪やエネルギー代謝に関わる",
                        },
                        tdContent: {
                            gen: "UCP2",
                            danger: 0,
                            description:
                                "オメガ3, CoQ10, αリポ酸, アセチルL-カルニチン",
                                etc: "高炭水化物, 高脂肪食, トランス脂肪酸, ジャンクフード"
                        },
                    },
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>40</PageNumber>
        </PageWrapper>
    );
};

export default Supplement15;
