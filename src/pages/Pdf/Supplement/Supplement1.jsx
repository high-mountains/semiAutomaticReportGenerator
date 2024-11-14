import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import PageHeader from "../../../components/Pdf/PageHeader";
import Table from "../../../components/Pdf/Supplements/Table";

const Supplement1 = (props) => {

    const [tableData, setTableData] = useState();
    
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Supplement & Lifestyle"}
                mainTitle={"あなたにおすすめのサプリメントや生活習慣一覧"}
                subTitleStyle={{
                    marginBottom: "5rem",
                }}
                mainTitleStyle={{
                    fontSize: "25rem",
                    letterSpacing: "-1.75rem",
                    lineHeight: 1.6,
                }}
            />
            <Table
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
                tBody={[{
                    trHeight: 40,  //default is 30(rem)
                    rowSpan: 5, //default is 1
                    thContent: {
                        main: "グルタミン酸合成",
                        content: "興奮性神経伝達物質の生成に関わる",
                        mainStyle: "", //optional
                        contentStyle: "", //optional
                    },
                    tdContent: [{tag:"GLS2", style:{}}, {tag:"-2", style:{}}, {tag:"グルタミン, Lグルタミン, NAC, ビタミンB群"}, {tag:"-"}]
                }]}
            />
            <PageNumber>XXX</PageNumber>
        </PageWrapper>
    );
};

export default Supplement1;
