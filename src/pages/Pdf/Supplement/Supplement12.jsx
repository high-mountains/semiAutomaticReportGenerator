import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import {
    updateDangerValues,
    processInitialData,
} from "./updateDangerValues.js";

const initialData = [
    {
        rowSpan: 2,
        thContent: {
            main: "ビタミン&ミネラル",
            sub: "体の機能を維持するために不可欠な栄養素の利用に関わる",
        },
        tdContent: {
            gen: "PEMT",
            danger: "-",
            description: "SAMe（補因子）, ビタミンB6, フォスファチジルコリン, ベタイン, メチルビタミンB12, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "SELENOS",
            danger: "-",
            description: "セレン（補因子）, CoQ10, グルタチオン, ビタミンE",
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
            danger: "-",
            description: "亜鉛（補因子）, オメガ3, カリウム, クルクミン, ニンニクエキス, マグネシウム, レスベラトロール",
            etc: "ナトリウム"
        },
    },
    {
        tdContent: {
            gen: "C3",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "CACNA1C",
            danger: "-",
            description: "オメガ3, タウリン, ビタミンD, マグネシウム",
            etc: "電磁波"
        },
    },
    {
        tdContent: {
            gen: "CD14",
            danger: "-",
            description: "ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IDO1",
            danger: "-",
            description: "ヘム（補因子）, EGCG, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
    {
        tdContent: {
            gen: "IL1B",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL2",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL4",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL5",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL6",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL6R",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL10",
            danger: "-",
            description: "オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン",
        },
    },
    {
        tdContent: {
            gen: "IL13",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL23R",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "STAT4",
            danger: "-",
            description: "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
    {
        tdContent: {
            gen: "TNF",
            danger: "-",
            description:
                "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
    {
        tdContent: {
            gen: "TRAF1",
            danger: "-",
            description:
                "BH4（補因子）, 鉄（補因子）, 5-HTP, オメガ3, ビタミンB6, フォレート, マグネシウム",
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
            danger: "-",
            description: "オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "DRD2",
            danger: "-",
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "SOCS1",
            danger: "-",
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "TNF",
            danger: "-",
            description:
                "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
];

const Supplement12 = ({ deltaPageCount }) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>{deltaPageCount + 37}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement12;
