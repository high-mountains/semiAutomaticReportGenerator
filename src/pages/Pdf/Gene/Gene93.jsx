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
    geneName: "ACE",
    datas: ["rs4311"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、血圧調節や炎症反応が影響を受ける可能性があります。ACEは、アンジオテンシン変換酵素をコードしており、血圧の調節と電解質バランスの維持に関与しています。この酵素は、アンジオテンシンIをアンジオテンシンIIに変換し、血管の収縮を促進することで血圧を上昇させます。",
  },
  {
    geneName: "IL1B",
    datas: ["rs16944"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL1Bは、炎症性サイトカインであるインターロイキン1βをコードしており、特に感染や組織損傷に応じてマクロファージから分泌されます。IL1Bは、免疫細胞の活性化や炎症反応を促進し、体内の防御メカニズムを誘導する働きを持っています。",
  },
  {
    geneName: "IL4",
    datas: ["rs2243250"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL4は、主にヘルパーT細胞（Th2）やマスト細胞によって分泌されるサイトカインで、B細胞の活性化と抗体産生の誘導に関与しています。IL4は、IgE抗体の生成を促進し、アレルギー反応や寄生虫感染に対する免疫応答を調整します。",
  },
  {
    geneName: "IL5",
    datas: ["rs2069812"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL5は、主にヘルパーT細胞（Th2）や好酸球によって分泌され、好酸球の成長、分化、および活性化を促進する役割を担います。IL5は、寄生虫感染やアレルギー反応において重要で、特に好酸球が関与する免疫応答の調整に寄与します。",
  },
];

const Gene93 = ({deltaPageCount}) => {
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
        textContent={"炎症ON"}
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

      <GenePageNumber>{deltaPageCount+125}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene93;
