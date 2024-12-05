import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene14 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"CYP21A2"}
                datas={["rs1330554738", "rs72552757", "rs12530380", "rs7755898"]}
                level={-1}
                description={"Variants in this gene may affect steroid hormone metabolism, potentially disrupting histamine response regulation. CYP21A2 (Cytochrome P450 Family 21 Subfamily A Member 2) encodes the steroid 21-hydroxylase enzyme, which is crucial for synthesizing steroid hormones such as cortisol and aldosterone. This enzyme plays a vital role in the adrenal glands, contributing to hormone biosynthesis necessary for stress response and maintaining electrolyte balance."}
            />
            <GenePageNumber>53</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene14;
