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
        thContent: {
            main: "トラウマ",
            sub: "精神的・肉体的な傷を引き起こす強いストレス体験で、心的外傷やストレス反応に関わる",
        },
        tdContent: {
            gen: "CRHR1",
            danger: "-",
            description:
                "L-テアニン, アシュワガンダ, オメガ3, ビタミンB群, マグネシウム, ロディオラ",
        },
    },
    {
        thContent: {
            main: "夜更かし",
            sub: "遅くまで起きている習慣で、健康や生活リズムに影響を関わる",
        },
        tdContent: {
            gen: "CLOCK",
            danger: "-",
            description:
                "GABA, オメガ3, ビタミンB12, マグネシウム, メラトニン",
            etc: "過剰なカフェイン, 喫煙, 焦げた肉",
        },
    }
];

const Supplement15 = ({ deltaPageCount }) => {
    const geneData = useSelector((state) => state.pdfData.geneData);

    const updatedTableData = useMemo(() => {
        const updatedData = updateDangerValues(initialData, geneData || []);
        return processInitialData(updatedData);
    }, [geneData]);
    return (
        <PageWrapper>
            <TableNew tBody={updatedTableData} />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>{deltaPageCount + 40}</PageNumber>
        </PageWrapper>
    );
};

export default Supplement15;
