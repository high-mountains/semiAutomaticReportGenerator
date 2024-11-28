import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageNumber from "../../../components/Pdf/PageNumber.jsx";
import TableNew from "../../../components/Pdf/Supplements/TableNew.jsx";
import { useSelector } from "react-redux";
import {updateDangerValues} from "./updateDangerValues.js";

const initialData = [
    {
        thContent: {
            main: "ビタミン&ミネラル",
            sub: "体の機能を維持するために不可欠な栄養素の利用に関わる",
        },
        tdContent: {
            gen: "SELENOS",
            danger: 0,
            description:
                "セレン（補因子）, CoQ10, グルタチオン, ビタミンE",
        },
    },
    {
        rowSpan: 9,
        thContent: {
            main: "炎症ON",
            sub: "炎症性疾患や免疫応答の制御に影響し、炎症反応の開始・促進に関わる",
        },
        tdContent: {
            gen: "IL1B",
            danger: 0,
            description:
                "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL2",
            danger: 0,
            description:
                "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL4",
            danger: 0,
            description:
                "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL5",
            danger: 0,
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL6R",
            danger: 0,
            description:
                "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "IL10",
            danger: 0,
            description: "オメガ3, ビタミンD, プロバイオティクス, 亜鉛",
            etc: "グルテン, カゼイン"
        },
    },
    {
        tdContent: {
            gen: "IL13",
            danger: 0,
            description:
                "NAC, オメガ3, ビタミンD, プロバイオティクス"
        },
    },
    {
        tdContent: {
            gen: "IL23R",
            danger: 0,
            description: "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "TNF",
            danger: 0,
            description: "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
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
                "オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "DRD2",
            danger: 0,
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "SOCS1",
            danger: 0,
            description:
                "NAC, オメガ3, ビタミンD, プロバイオティクス",
        },
    },
    {
        tdContent: {
            gen: "TNF",
            danger: 0,
            description:
                "NAC, オメガ3, クルクミン, ビタミンD, レスベラトロール",
        },
    },
];

const Supplement12 = () => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        return updateDangerValues(initialData, geneData || []);
    }, [geneData]);

    return (
        <PageWrapper>
            <TableNew
                tBody={updatedTableData}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>37</PageNumber>
        </PageWrapper>
    );
};

export default Supplement12;
