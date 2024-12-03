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
    geneName: "COMT",
    datas: ["rs4680", "rs4633"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ドーパミンやノルアドレナリンの代謝が阻害される可能性があります。COMT（Catechol-O-Methyltransferase）は、カテコール-O-メチルトランスフェラーゼという酵素をコードしています。この酵素は、カテコール基を持つ神経伝達物質（ドーパミン、ノルアドレナリン、アドレナリンなど）の代謝に関与し、これらの神経伝達物質を不活性化するためにメチル基を付加する反応を触媒します。",
  },
  {
    geneName: "CYP2B6",
    datas: [
      "rs3745274",
      "rs139801276",
      "rs2279343",
      "rs34097093",
      "rs36079186",
      "rs28399499",
      "rs373489637",
      "rs4803419",
      "rs186335453",
      "rs281864907",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、特定の薬物や化学物質の代謝が不十分となる可能性があります。\nCYP2B6（Cytochrome P450 Family 2 Subfamily B Member 6）は、シトクロムP450酵素ファミリーの一員で、薬物や環境毒素、内因性物質の代謝に関与しています。CYP2B6は、肝臓で発現が高く、特定の薬物を水溶性に変換して排泄を促進する役割を果たしています。",
  },
  {
    geneName: "IGF1R",
    datas: ["rs2229765"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞の成長や代謝調整が影響を受ける可能性があります。IGF1Rは、インスリン様成長因子1（IGF0）受容体をコードしており、成長、発達、細胞増殖、代謝に重要な役割を果たします。この受容体はIGF0と結合して細胞増殖シグナルを活性化し、骨や筋肉の成長、組織の修復を促進します。",
  },
];

const Gene81 = () => {
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
        textContent={"Longevity Genes"}
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

      <GenePageNumber>116</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene81;
