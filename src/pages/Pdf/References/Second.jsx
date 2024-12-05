import React from 'react';
import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';
import Text from '../../../components/Pdf/Text';

const Second = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Glossary"}
                mainTitle={"Glossary"}
                subTitleStyle={{
                    marginBottom:"5rem",
                    fontSize: "14rem"
                }}
                mainTitleStyle={{
                    fontSize:"32rem",
                    marginTop: "5rem",
                    marginBottom: "0rem"
                }}
                containerStyle={{
                    marginBottom: '25rem'
                }}
            />
            <Text
                textContent={'Neurons: Brain and nerve cells that transmit commands to the body. <br/><br/>Noradrenaline: A substance similar to adrenaline that is involved in stress and arousal. <br/><br/>Hot flashes: Menopausal symptoms such as sudden heat and sweating. <br/><br/>Homocysteine: An amino acid produced in the body that is involved in the health of blood vessels and the heart. <br/><br/>Hormonal balance: The state in which the amount and balance of hormones is maintained in the body. <br/><br/>Hormonal metabolites: Substances that are produced after hormones are used. <br/><br/>Mycotoxins: Toxins produced by mold that can have adverse effects on health. <br/><br/>Methylation process: The process by which cells modify DNA and proteins to regulate their function. <br/><br/>Toxic heavy metals: Heavy metals that are harmful to the body, including lead and mercury. <br/><br/>Sulfur-containing amino acids: Amino acids that contain sulfur and are important for the body"ss detoxification and metabolism. <br/><br/>Neurotransmission: The process of sending commands to the brain and body via nerves. <br/><br/>Neurodegenerative disease: A disease in which nerve cells are slowly lost. <br/><br/>Cytoplasm: The liquid part of a cell that is outside the nucleus. <br/><br/>Gut flora: A collection of bacteria that live in the intestines and are important for digestion and health. <br/><br/>Enzymes: Proteins that help with chemical reactions in the body and are involved in digestion and energy production.'}
                fontSize={12}
            />
            <PageNumber>
                152
            </PageNumber>
        </PageWrapper>
    );
};

export default Second;