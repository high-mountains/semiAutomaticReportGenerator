import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "G6PD",
    datas: [
      "rs1050828", "rs1050829", "rs137852327", "rs137852329", "rs137852346", "rs137852349", "rs267606836",
      "rs137852320", "rs137852316", "rs137852317", "rs76723693", "rs78365220", "rs137852314", "rs387906468",
      "rs137852343", "rs137852326", "rs137852325", "rs72554665", "rs782090947", "rs137852336", "rs5030868",
      "rs137852322", "rs72554664", "rs137852330", "rs137852331", "rs137852335", "rs137852334", "rs5030869",
      "rs76645461", "rs5030872", "rs137852328", "rs137852347", "rs398123546", "rs137852345", "rs398123552",
      "rs137852338", "rs587776730", "rs782322505", "rs137852315"
    ],
    level: 0,
    description: "",
  },
];

const Gene21 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      {/* Render each gene information dynamically */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      <GenePageNumber>{deltaPageCount+60}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene21;
