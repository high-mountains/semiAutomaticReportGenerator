import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/Pdf/PageWrapper";
import PageNumber from "../../components/Pdf/PageNumber";
import PageHeader from "../../components/Pdf/PageHeader";
import Text from "../../components/Pdf/Text";
import CategoryRow from "../../components/Pdf/GenCategory/CategoryRow";
import CategoryRow1 from "../../components/Pdf/GenCategory/CategoryRow1";
import { useSelector } from "react-redux";

const GenCategory = () => {
    const categoryData = useSelector((state) => state.pdfData.categoryData);

    const initialGlutamateData = [
        { borderstatus: 0, subContent1: "Glutamate\nType" },
        { text: "Glutamate\nSynthesis", tag: "Glutamate Metabolism" },
        { text: "Glutamate Metabolism", tag: "Glutamate Metabolism" },
        { text: "Glutamate Transporter", tag: "Glutamate Transporter" },
        { text: "GABA Metabolism", tag: "GABA Metabolism" },
        { text: "GABA Receptor", tag: "GABA Receptor" },
    ];

    const initialCatecholamineData = [
        { borderstatus: 0, subContent1: "Catecholamine\nType" },
        { text: "Catecholamine\nSynthesis", tag: "Catecholamine Synthesis" },
        { text: "Catecholamine Metabolism", tag: "Catecholamine Metabolism" },
        { text: "Dopamine\nReceptor", tag: "Dopamine Receptor" },
        { text: "Serotonin", tag: "Serotonin" },
    ];

    const initialHistamineData = [
        { borderstatus: 0, subContent1: "Histamine\nType" },
        { text: "Histamine\nProduction", tag: "Histamine Production" },
        { text: "Histamine\nMetabolism", tag: "Histamine Metabolism" },
        { text: "Histamine\nReceptor", tag: "Histamine Receptor" },
    ];

    const initialMitochondriaData = [
        { borderstatus: 0, subContent1: "Mitochondria\nType" },
        { text: "Mitochondria", tag: "Mitochondria" },
        { text: "Nutrition", tag: "Nutrition" },
    ];

    const initialDetoxData1 = [
        { borderstatus: 0, subContent1: "" },
        { text: "BPA", tag: "BPA" },
        { text: "NQO1", tag: "NQO1" },
        { text: "PON1", tag: "PON1" },
        { text: "Phthalates", tag: "Phthalates" },
        { text: "Mycotoxins", tag: "Mycotoxins" },
    ];

    const initialDetoxData2 = [
        { borderstatus: 0, subContent1: "Detox", subContent2: "Type" },
        { text: "Phase II", subContent1: "Glutathione", subContent2: "Peroxidase", tag: "Phase II Glutathione Peroxidase" },
        { text: "Phase II", subContent1: "N-Acetyltransferase", subContent2: "", tag: "Phase II N-Acetyltransferase" },
        { text: "Phase II", subContent1: "Sulfotransferase", subContent2: "", tag: "Phase II Sulfotransferase" },
        { text: "Phase II", subContent1: "UDP-Glucuronosyl", subContent2: "Transferase", tag: "Phase II UDP-Glucuronosyl Transferase" },
    ];

    const initialDetoxData3 = [
        { borderstatus: 0, text: "" },
        { text: "Inflammation/Anti-Inflammation", tag: "Inflammation/Anti-Inflammation" },
        { text: "Chemical Sensitivity", tag: "Chemical Sensitivity" },
        { text: "Reactive Oxygen Species", tag: "Reactive Oxygen Species" },
        { text: "Mercury", tag: "Mercury" },
        { text: "Organophosphates", tag: "Organophosphates" },
    ];

    const initialMethylationData = [
        { borderstatus: 0, subContent1: "Methylation\nType" },
        { text: "Methionine\nCycle", tag: "Methionine Cycle" },
        { text: "Oxidation/Antioxidation", tag: "Oxidation/Antioxidation" },
        { text: "Folate", tag: "Folate" },
        { text: "Vitamin B12", tag: "Vitamin B12" },
    ];

    const initialEtcData = [
        { text: "APOE", tag: "APOE" },
        { text: "BDNF", tag: "BDNF" },
        { text: "CYP450", tag: "CYP450" },
        { text: "Dyslexia", tag: "Dyslexia" },
        { text: "FN1", tag: "FN1" },
        { text: "Leaky Gut", tag: "Leaky Gut" },
        { text: "Longevity\nGenes", tag: "Longevity Genes" },
        { text: "TREM2", tag: "TREM2" },
        { text: "Alcohol", tag: "Alcohol" },
        { text: "Autophagy", tag: "Autophagy" },
        { text: "Caffeine", tag: "Caffeine" },
        { text: "Glyphosate", tag: "Glyphosate" },
        { text: "Glutathione\nDepletion", tag: "Glutathione Depletion" },
        { text: "Milk", tag: "Milk" },
        { text: "Melatonin", tag: "Melatonin" },
        { text: "Vitamins &\nMinerals", tag: "Vitamins & Minerals" },
        { text: "Inflammation ON", tag: "Inflammation ON" },
        { text: "Inflammation OFF", tag: "Inflammation OFF" },
        { text: "Muscle/Pain", tag: "Muscle/Pain" },
        { text: "Cell Metabolism", tag: "Cell Metabolism" },
        { text: "Pesticides", tag: "Pesticides" },
        { text: "Neurotransmitters", tag: "Neurotransmitters" },
        { text: "Female Hormones", tag: "Female Hormones" },
        { text: "Gut Microbiota", tag: "Gut Microbiota" },
        { text: "Lead", tag: "Lead" },
    ];

    const [glutamateData, setGlutamateData] = useState(initialGlutamateData);
    const [catecholamineData, setCatecholamineData] = useState(initialCatecholamineData);
    const [histamineData, setHistamineData] = useState(initialHistamineData);
    const [mitochondriaData, setMitochondriaData] = useState(initialMitochondriaData);
    const [detoxData1, setDetoxData1] = useState(initialDetoxData1);
    const [detoxData2, setDetoxData2] = useState(initialDetoxData2);
    const [detoxData3, setDetoxData3] = useState(initialDetoxData3);
    const [methylationData, setMethylationData] = useState(initialMethylationData);
    const [etcData, setEtcData] = useState(initialEtcData);

    useEffect(() => {
        const redValues = new Set(categoryData.map((item) => item.Red));

        const updateBorderStatus = (data) => 
            data.map((item) => 
                redValues.has(item.tag) ? { ...item, borderstatus: 2 } : item
            );

        setGlutamateData(updateBorderStatus(initialGlutamateData));
        setCatecholamineData(updateBorderStatus(initialCatecholamineData));                         
        setHistamineData(updateBorderStatus(initialHistamineData));
        setMitochondriaData(updateBorderStatus(initialMitochondriaData));
        setDetoxData1(updateBorderStatus(initialDetoxData1));
        setDetoxData2(updateBorderStatus(initialDetoxData2));
        setDetoxData3(updateBorderStatus(initialDetoxData3));
        setMethylationData(updateBorderStatus(initialMethylationData));
        setEtcData(updateBorderStatus(initialEtcData));
    }, [categoryData]);

    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Gene Category"}
                mainTitle={"Gene Categories"}
            />
            <Text
                textContent={
                    "Based on the SNPs test, there may be mutations in genes related to categories highlighted in red.\nGene mutations are common to everyone, but their content varies by individual. Let's aim for health management tailored to your genes and characteristics."
                }
                fontSize={12}
                className={"whitespace-pre-wrap my-[18rem]"}
            />
            <div className="w-[525rem] whitespace-pre-wrap">
                <CategoryRow bgColor="#FFFDF1" data={glutamateData} />
                <CategoryRow bgColor="#fff5e9" data={catecholamineData} />
                <CategoryRow bgColor="#FFEEEE" data={histamineData} />
                <CategoryRow bgColor="#E3FFE8" data={mitochondriaData} />
                <CategoryRow bgColor="#FBF5FF" data={detoxData1} />
                <CategoryRow1 bgColor="#FBF5FF" data={detoxData2} />
                <CategoryRow bgColor="#FBF5FF" data={detoxData3} />
                <CategoryRow bgColor="#F0FEFF" data={methylationData} />
                <CategoryRow bgColor="#FFF" data={etcData} />
            </div>
            <PageNumber>23</PageNumber>
        </PageWrapper>
    );
};

export default GenCategory;
