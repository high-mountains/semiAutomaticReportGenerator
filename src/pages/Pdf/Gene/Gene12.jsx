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
    geneName: "ALDH2",
    datas: ["rs671"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内でのヒスタミンの分解が不十分となり、アレルギー反応に影響を与える可能性があります。ALDH2（Aldehyde Dehydrogenase 2）は、アルデヒドデヒドロゲナーゼ2という酵素をコードしています。この酵素は、主に肝臓で活性を持ち、エタノール代謝においてアセトアルデヒドを酢酸に変換する役割を果たします。ALDH2は、アセトアルデヒドの解毒に重要で、これによりアルコール摂取後の身体反応に影響を与えます",
  },
  {
    geneName: "MAOA",
    datas: ["rs6323", "rs1137070", "rs72554632", "rs796065312"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ヒスタミンを代謝するプロセスが阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。",
  },
  {
    geneName: "MAOB",
    datas: ["rs179983"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ヒスタミンを代謝するプロセスが阻害される可能性があります。MAOB（Monoamine Oxidase B）は、モノアミンオキシダーゼBという酵素をコードしています。この酵素は、ドーパミンやフェネチルアミンなどのモノアミン神経伝達物質を分解する役割を持ち、神経伝達物質の濃度を調節します。",
  },
  {
    geneName: "ABP1",
    datas: ["rs1049793", "rs1049742", "rs10156191"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ヒスタミンを代謝するプロセスが阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。",
  },
];

const Gene12 = () => {
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
        textContent={"ヒスタミン代謝"}
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

      <GenePageNumber>51</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene12;
