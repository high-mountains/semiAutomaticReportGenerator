import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene17 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Mitochondria"} containerStyle={{ marginBottom: "10rem" }} />

            <GeneInformationMiddle
                geneName={"ACAT2"}
                datas={["rs41258114", "rs3465", "rs25683", "rs146437481", "rs202015012", "rs192445956"]}
                level={-1}
                description={
                    "Variants in this gene may impair the metabolism of fatty acids and cholesterol. ACAT2 (Acetyl-CoA Acetyltransferase 2) encodes acetyl-CoA acetyltransferase 2, which is primarily involved in the synthesis of cholesterol esters in the liver. This enzyme uses acetyl-CoA and fatty acids as substrates to generate cholesterol esters, playing a crucial role in the transport and storage of cholesterol."
                }
            />

            <GeneInformationMiddle
                geneName={"ATP5F1A"}
                datas={["rs587776960", "rs587777788"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency, leading to insufficient cellular energy supply. ATP5F1A (ATP Synthase F1 Subunit Alpha) encodes the alpha subunit of the F1 part of ATP synthase. ATP synthase is a complex located in the mitochondrial inner membrane that generates ATP by utilizing the proton gradient. The alpha subunit is a key component directly involved in ATP production, playing an essential role in energy generation."
                }
            />

            <GeneInformationMiddle
                geneName={"ATP5F1E"}
                datas={["rs387906929"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency, leading to insufficient cellular energy supply. ATP5F1E (ATP Synthase F1 Subunit Epsilon) encodes the epsilon subunit of the F1 part of ATP synthase. This subunit contributes to the structural stability of ATP synthase and is essential for maintaining the efficiency of ATP production."
                }
            />

            <GenePageNumber>56</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene17;
