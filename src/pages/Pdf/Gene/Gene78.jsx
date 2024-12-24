import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "FN1",
    datas: ["rs1250229", "rs116558455", "rs140926439"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、組織の修復や細胞の移動、血管の形成などに影響を与える可能性があります。FN1（Fibronectin 1）は、細胞外マトリックスの主要構成要素であるフィブロネクチンをコードしており、細胞接着、成長、移動、組織の修復などにおいて中心的な役割を果たします。FN1は、細胞外マトリックスの形成とリモデリングに関わり、組織の再生や創傷治癒に寄与しています。",
  },
];

const Gene78 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text
        sidebar={1}
        textContent={"FN1"}
        containerStyle={{ marginBottom: "10rem" }}
      />

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

      <GenePageNumber>{deltaPageCount+117}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene78;
