import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene12 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Histamine Metabolism"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"ALDH2"}
                datas={["rs671"]}
                level={-1}
                description={"Variants in this gene may lead to insufficient breakdown of histamine in the body, potentially affecting allergic reactions. ALDH2 (Aldehyde Dehydrogenase 2) encodes the enzyme aldehyde dehydrogenase 2. This enzyme is primarily active in the liver and plays a role in converting acetaldehyde to acetic acid during ethanol metabolism. ALDH2 is crucial for acetaldehyde detoxification, influencing the body's response to alcohol consumption."}
            />
            <GeneInformationMiddle
                geneName={"MAOA"}
                datas={["rs6323", "rs1137070", "rs72554632", "rs796065312"]}
                level={-1}
                description={"Variants in this gene may disrupt the process of histamine metabolism. MAOA (Monoamine Oxidase A) encodes the enzyme monoamine oxidase A, which is involved in the breakdown of monoamine neurotransmitters such as serotonin, norepinephrine, and dopamine. It inactivates these neurotransmitters through oxidative deamination."}
            />
            
            <GeneInformationMiddle
                geneName={"MAOB"}
                datas={["rs179983"]}
                level={-1}
                description={"Variants in this gene may disrupt the process of histamine metabolism. MAOB (Monoamine Oxidase B) encodes the enzyme monoamine oxidase B, which plays a role in breaking down monoamine neurotransmitters like dopamine and phenylethylamine, regulating their concentration in the nervous system."}
            />
            
            <GeneInformationMiddle
                geneName={"ABP1"}
                datas={["rs1049793", "rs1049742", "rs10156191"]}
                level={-1}
                description={"Variants in this gene may disrupt the process of histamine metabolism. ABP1 encodes an enzyme that contributes to neurotransmitter regulation by degrading monoamines, including serotonin, norepinephrine, and dopamine, through oxidative deamination."}
            />

            <GenePageNumber>51</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene12;
