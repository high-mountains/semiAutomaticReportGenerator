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
    geneName: "HTR2A",
    datas: ["rs6314"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、気分や行動、認知機能に変化を引き起こす可能性があります。HTR2A（5-Hydroxytryptamine Receptor 2A）は、セロトニン2A受容体をコードしています。この受容体は、中枢神経系のGタンパク質共役型受容体で、セロトニンが結合すると、細胞内のシグナル伝達経路を活性化します。",
  },
  {
    geneName: "MAOA",
    datas: ["rs6323", "rs1137070", "rs72554632", "rs796065312"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ドーパミンやセロトニン、ノルアドレナリンの代謝が阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。",
  },
];

// Gene10 component
const Gene10 = () => {
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
        textContent={"セロトニン"}
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

      <GenePageNumber>49</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene10;
