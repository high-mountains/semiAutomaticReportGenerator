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
    geneName: "CETP",
    datas: ["rs5882"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、血中HDLコレステロールレベルに影響を与える可能性があります。CETPは、コレステリルエステル転送タンパク質をコードしており、リポタンパク質間でコレステロールエステルとトリグリセリドを交換する役割を持ちます。このタンパク質は、HDL（高密度リポタンパク質）とLDL（低密度リポタンパク質）の間でのコレステロールの移動を促進し、血中の脂質バランスを調節します。",
  },
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
];

const Gene81 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+120}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene81;
