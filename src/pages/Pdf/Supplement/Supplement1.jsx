import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import PageHeader from "../../../components/Pdf/PageHeader";
// import Table from "../../../components/Pdf/Supplements/Table";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement1 = (props) => {
    const [tableData, setTableData] = useState();

    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Supplement & Lifestyle"}
                mainTitle={"あなたにおすすめのサプリメントや生活習慣一覧"}
                containerStyle={{
                    marginBottom: "0rem"
                }}
                subTitleStyle={{
                    marginBottom: "5rem",
                }}
                mainTitleStyle={{
                    fontSize: "25rem",
                    letterSpacing: "-1.75rem",
                    lineHeight: 1.6,
                }}
            />
            {/* <Table
                tHeader={{
                    headerContent: [
                        "カテゴリー",
                        "遺伝子",
                        "変異の大きさ",
                        "摂取すべきもの",
                        "避けるべきもの",
                    ],
                    headerWidth: [1, 2], //There will be default width
                }}
                tBody={[    
                    {
                        // trHeight: 40, //default is 30(rem)
                        // rowSpan: 5, //default is 1
                        thContent: {
                            main: "グルタミン酸合成",
                            content: "興奮性神経伝達物質の生成に関わる",
                            mainStyle: "", //optional
                            contentStyle: "", //optional
                        },
                        tdContent: [
                            { tag: "GLS2", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "グルタミン, Lグルタミン, NAC, ビタミンB群",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        rowSpan: 7, //default is 1
                        thContent: {
                            main: "グルタミン酸代謝",
                            content: "興奮性神経伝達物質の分解に関わる",
                            mainStyle: "", //optional
                            contentStyle: "", //optional
                        },
                        tdContent: [
                            { tag: "CBS" },
                            { tag: 0 },
                            {
                                tag: "ビタミンB6（補因子）, ヘム（補因子）, メチルビタミンB12, 5MTHF, NAC, ベタイン",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "CTH" },
                            { tag: -1 },
                            {
                                tag: "ビタミンB6（補因子）, NAC, メチルフォレート, メチルビタミンB12",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "DAO" },
                            { tag: -1 },
                            {
                                tag: "リボフラビン（補因子）, NAC, セレン, オメガ3, ビタミンB6",
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "DAOA" },
                            { tag: -2 },
                            {
                                tag: "リボフラビン（補因子）, NAC, セレン, オメガ3, ビタミンB6",
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "GAD1" },
                            { tag: -2 },
                            {
                                tag: "P5P（補因子）, L-グルタミン, GABA, L-テアニン, マグネシウム",
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "GLUD1" },
                            { tag: -2 },
                            {
                                tag: "NAD+（補因子）, L-グルタミン, NAC, ビタミンB群",
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "GAD1" },
                            { tag: -2 },
                            {
                                tag: "NAC, ビタミンB群, αリポ酸",
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        thContent: {
                            main: "グルタミン酸輸送体",
                            content: "興奮性神経伝達物質の移動に関わる",
                        },
                        tdContent: [
                            { tag: "SLC1A1", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "ナトリウム, カリウム, マグネシウム, ビタミンB群, オメガ3",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        thContent: {
                            main: "GABA代謝",
                            content: "リラックス成分の代謝に関わる",
                        },
                        tdContent: [
                            { tag: "ALDH5A1", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "銅, 鉄, L-カルニチン, ビタミンB群, NAD+, リボフラビン, αリポ酸, CoQ10",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "GABA受容体",
                            content: "リラックス成分の感度に関わる",
                        },
                        tdContent: [
                            { tag: "GABRA1", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "GABA, マグネシウム, タウリン, L-テアニン",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "GABRA2", style: {} },
                            { tag: -1, style: {} },
                            {
                                tag: "GABA, マグネシウム, タウリン, L-テアニン",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "GABRG2", style: {} },
                            { tag: -1, style: {} },
                            {
                                tag: "GABA, マグネシウム, タウリン, L-テアニン",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "カテコラミン合成",
                            content: "ストレス反応や覚醒に影響する神経伝達物質の生成に関わる",
                        },
                        tdContent: [
                            { tag: "DHFR", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "NAD+（補因子）, ビタミンB12, メチルフォレート",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "GCH1", style: {} },
                            { tag: -1, style: {} },
                            {
                                tag: "L-フェニルアラニン, L-チロシン, 5-HTP, ビタミンB群, NAC",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "TH", style: {} },
                            { tag: -1, style: {} },
                            {
                                tag: "BH4（補因子）, L-チロシン, ビタミンB群, メチルフォレート",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        rowSpan: 3,
                        thContent: {
                            main: "カテコラミン代謝",
                            content: "ストレス反応や覚醒に影響する神経伝達物質の分解に関わる",
                        },
                        tdContent: [
                            { tag: "COMT", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "マグネシウム, ビタミンB6, ビタミンB12, メチルフォレート, SAMe（補因子）, NAC",
                                style: {}
                            },
                            { tag: "便秘, ピル" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "MAOA", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "リボフラビン（補因子）, マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "MAOB", style: {} },
                            { tag: -1, style: {} },
                            {
                                tag: "マグネシウム, ビタミンB2, ビタミンB6, ビタミンB12, フォレート",
                                style: {}
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        rowSpan: 2,
                        thContent: {
                            main: "ドーパミン受容体",
                            content: "快楽や覚醒に影響する興奮性神経伝達物質の感度に関わる",
                        },
                        tdContent: [
                            { tag: "DRD1", style: {} },
                            { tag: -2, style: {} },
                            {
                                tag: "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム",
                            },
                            { tag: "-" },
                        ],
                    },
                    {
                        tdContent: [
                            { tag: "DRD2", style: {} },
                            { tag: -1, style: {} },
                            {
                                tag: "L-チロシン, ビタミンB6, オメガ3, フォスファチジルコリン, ビタミンD, マグネシウム",
                            },
                            { tag: "-" },
                        ],
                    },
                ]}
            /> */}
            <PageNumber>XXX</PageNumber>
        </PageWrapper>
    );
};

export default Supplement1;
