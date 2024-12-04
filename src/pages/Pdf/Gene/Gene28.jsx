import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "OGDH",
    datas: [
      "rs7805156", "rs3735474", "rs2268308", "rs12155014", "rs17133537", "rs757702", "rs142839706", "rs710887", 
      "rs2070606", "rs74673950", "rs17133935", "rs78889688", "rs6971483", "rs2070607", "rs77887092", "rs117706902", 
      "rs117387922", "rs76446485", "rs73109436", "rs73109403", "rs62460464"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、クエン酸回路が阻害され、エネルギー産生が減少する可能性があります。OGDH（Oxoglutarate Dehydrogenase）は、オキソグルタル酸デヒドロゲナーゼという酵素をコードしており、TCA回路（クエン酸回路）の中で2-オキソグルタル酸をスクシニルCoAと二酸化炭素に変換する役割を持っています。",
  },
];

const Gene28 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
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

      <GenePageNumber>{deltaPageCount+67}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene28;
