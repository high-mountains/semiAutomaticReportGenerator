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
    geneName: "HRH1",
    datas: ["rs901865"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、アレルギー反応や炎症反応の調整に影響を与える可能性があります。HRH1（Histamine Receptor H1）は、ヒスタミンH1受容体をコードしています。この受容体は、Gタンパク質共役型受容体で、ヒスタミンが結合すると細胞内でカルシウム濃度が上昇し、アレルギー反応や炎症応答、血管拡張に関与します。",
  },
  {
    geneName: "HRH3",
    datas: ["rs1009505922"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、アレルギー反応や炎症反応の調整に影響を与える可能性があります。HRH3（Histamine Receptor H3）は、ヒスタミンH3受容体をコードしており、主に中枢神経系で発現しています。この受容体は、ヒスタミンや他の神経伝達物質の放出を調整し、神経伝達のフィードバック制御に関与します。",
  },
  {
    geneName: "HRH4",
    datas: ["rs11662595"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、アレルギー反応や炎症反応の調整に影響を与える可能性があります。HRH4（Histamine Receptor H4）は、ヒスタミンH4受容体をコードしています。この受容体は、主に免疫細胞で発現しており、好酸球やマスト細胞などでのヒスタミンの応答に関与します。",
  },
];

const Gene15 = ({deltaPageCount}) => {
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
        textContent={"ヒスタミン受容体"}
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

      <GenePageNumber>{deltaPageCount+54}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene15;
