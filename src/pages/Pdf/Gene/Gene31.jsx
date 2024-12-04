import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "SDHB",
    datas: [
      "rs528442805", "rs202101384", "rs267607032", "rs751000085", "rs794728948", "rs794728950", "rs747518441", 
      "rs876660642", "rs876658540", "rs727504457", "rs1131691051", "rs200245469", "rs786201063", "rs786201085", 
      "rs786201095", "rs786203506", "rs794728947", "rs74315366", "rs876658451", "rs876658367", "rs121917755", 
      "rs786202100", "rs1131691058", "rs786202732", "rs876659330", "rs772551056", "rs74315367", "rs587782703", 
      "rs1131691061", "rs74315368", "rs786203251", "rs398122805", "rs398123690", "rs864321639", "rs878854576", 
      "rs786201161", "rs864321636", "rs138996609", "rs864321637", "rs864321638", "rs587782904"
    ],
    level: 0,
    description: "", // Add description if needed
  },
];

const Gene31 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+70}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene31;
