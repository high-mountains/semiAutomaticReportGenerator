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
    geneName: "BCHE",
    datas: [
      "rs1803274",
      "rs1799807",
      "rs28933389",
      "rs28933390",
      "rs1126680",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、血圧調節や炎症反応が影響を受ける可能性があります。ACEは、アンジオテンシン変換酵素をコードしており、血圧の調節と電解質バランスの維持に関与しています。この酵素は、アンジオテンシンIをアンジオテンシンIIに変換し、血管の収縮を促進することで血圧を上昇させます。",
  },
];

const Gene102 = ({deltaPageCount}) => {
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
        textContent={"殺虫剤&農薬"}
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

      <GenePageNumber>{deltaPageCount+132}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene102;
