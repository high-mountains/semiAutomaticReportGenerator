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
    geneName: "SULT1A1",
    datas: ["rs9282861", "rs1968752", "rs1042028", "rs1042157"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内のフェノール類やホルモンの代謝が不十分となる可能性があります。SULT1A1（Sulfotransferase Family 1A Member 1）は、フェノール性化合物やホルモン、薬物に硫酸基を転移するスルホトランスフェラーゼ酵素をコードしています。この酵素は、主に肝臓で高く発現し、化合物の水溶性を高めて体外への排出を促進する役割を担います。",
  },
  {
    geneName: "SULT1A2",
    datas: ["rs11569775", "rs10797300", "rs138147609", "rs1059491"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、特定の化学物質や薬物の代謝が減少し、解毒能力が弱まる可能性があります。SULT1A2（Sulfotransferase Family 1A Member 2）は、SULT1A1と似た機能を持ち、ホルモンや薬物、環境化合物に硫酸基を転移する役割を担う酵素です。SULT1A2も肝臓で発現が高く、化合物の無毒化と排泄に貢献しますが、基質特異性に若干の違いがあります。",
  },
  {
    geneName: "SULT1C4",
    datas: ["rs1402467"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、特定の化学物質や薬物の代謝が減少し、解毒能力が弱まる可能性があります。SULT1C4（Sulfotransferase Family 1C Member 4）は、特に胎児期や特定の組織で発現するスルホトランスフェラーゼ酵素をコードしています。この酵素は、内因性および外因性化合物に対する硫酸化を行い、化合物の水溶性を増加させて排出を助けます。",
  },
];

const Gene48 = () => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"フェーズII スルフトランスフェラーゼ"} containerStyle={{ marginBottom: "10rem" }} />

      {/* Render gene information dynamically */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      <GenePageNumber>86</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene48;
