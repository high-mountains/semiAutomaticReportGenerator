import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "CYP3A4",
    datas: [
      "rs55785340",
      "rs4986910",
      "rs12721627",
      "rs4987161",
      "rs4986909",
      "rs4986907",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、薬物やホルモンの代謝が低下する可能性があります。CYP3A4（Cytochrome P450 Family 3 Subfamily A Member 4）は、肝臓と小腸で広く発現するシトクロムP450酵素で、多くの薬物やステロイドホルモンの代謝に関与しています。CYP3A4は、化合物を酸化し、水溶性を高めて排泄を促進することで解毒に寄与します。",
  },
  {
    geneName: "CYP3A5",
    datas: ["rs776746"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、様々な薬物の代謝が低下する可能性があります。CYP3A5（Cytochrome P450 Family 3 Subfamily A Member 5）は、CYP3Aファミリーの一員で、主に肝臓や腎臓で発現し、薬物やステロイドホルモンの代謝に関与します。CYP3A5はCYP3A4と協力し、薬物の酸化を通じて解毒と排泄を促進します。",
  },
  {
    geneName: "CYP3A7",
    datas: ["rs45446698"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、新生児や胎児期におけるステロイドホルモンの代謝が影響を受ける可能性があります。CYP3A7（Cytochrome P450 Family 3 Subfamily A Member 7）は、主に胎児期の肝臓で発現し、成長とともにその発現が減少します。CYP3A7は、ステロイドホルモンや内因性物質の代謝に関与し、胎児の発達と代謝において重要な役割を果たしています。",
  },
];

const Gene76 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+112}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene76;
