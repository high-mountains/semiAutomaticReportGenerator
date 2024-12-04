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
    geneName: "IL23R",
    datas: ["rs11209026"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL23Rは、インターロイキン23受容体をコードしており、主にT細胞やナチュラルキラー細胞で発現しています。IL23と結合することでTh17細胞の活性化や増殖を促進し、炎症反応や免疫防御に寄与します。",
  },
  {
    geneName: "STAT4",
    datas: ["rs10181656"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞のシグナル伝達や炎症応答が影響を受ける可能性があります。\nSTAT4は、サイトカインシグナルを細胞内で伝達する転写因子で、特にIL12やIL23シグナルを介してT細胞の分化を促進します。STAT4の活性化は、Th1型免疫応答の誘導や炎症性サイトカインの発現を調節し、細胞性免疫の応答に重要な役割を果たします。",
  },
  {
    geneName: "TNF",
    datas: ["rs1800629", "rs361525", "rs1799964"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、腫瘍壊死因子の産生が変動し、炎症反応が影響を受ける可能性があります。TNFは、主にマクロファージやT細胞から分泌される炎症性サイトカインで、免疫応答や炎症の誘導に重要な役割を持っています。TNFは、感染や損傷に応じて細胞死（アポトーシス）や炎症反応を促進し、病原体への防御や組織の修復に関与します。",
  },
  {
    geneName: "TRAF1",
    datas: ["rs3761847"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、炎症シグナル伝達の調整が不十分となる可能性があります。TRAF1は、TNF受容体関連因子であり、TNFシグナル伝達の調節を行うタンパク質です。TRAF1は、主に細胞の生存や炎症反応のシグナル伝達に関わり、細胞がストレスや免疫刺激に応答する際に必要な役割を果たします。",
  },
];

const Gene96 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+127}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene96;
