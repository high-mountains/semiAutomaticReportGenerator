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
    geneName: "SLC11A2",
    datas: ["rs224589"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内での鉛の蓄積のリスクが高まる可能性があります。SLC11A2は、二価金属イオン輸送タンパク質DMT1（Divalent Metal Transporter 1）をコードしており、特に腸管細胞での鉄の吸収や細胞内での鉄の輸送に関与しています。この輸送タンパク質は、鉄イオンを細胞内に取り込み、体内での鉄の利用を促進します。",
  },
  {
    geneName: "TNF",
    datas: ["rs1800629", "rs361525", "rs1799964"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、腫瘍壊死因子の産生が変動し、炎症反応が影響を受ける可能性があります。TNFは、主にマクロファージやT細胞から分泌される炎症性サイトカインで、免疫応答や炎症の誘導に重要な役割を持っています。TNFは、感染や損傷に応じて細胞死（アポトーシス）や炎症反応を促進し、病原体への防御や組織の修復に関与します。",
  },
];

const Gene113 = ({deltaPageCount}) => {
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
        textContent={"腸内フローラ"}
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

      <GenePageNumber>{deltaPageCount+152}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene113;
