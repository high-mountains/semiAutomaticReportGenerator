import React from 'react';
import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';
import Text from '../../../components/Pdf/Text';

const First = () => {
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
                textContent={'ATP (adenosine triphosphate) - A molecule that is the energy source for cells, and the "fuel" that moves the body. <br/><br/>COMT activity - COMT is an enzyme that breaks down some chemicals in the body, and its activity affects mood and reaction speed. <br/><br/>>DNA regulation - A mechanism that adjusts certain genes to work at the necessary timing. It acts as a switch to ensure that the body"s functions work properly. <br/><br/>DNA repair function - A function to repair damaged DNA and maintain a normal state. <br/><br/>GABA - A substance that calms and relaxes the nerves in the brain. <br/><br/>SNP (single nucleotide polymorphism) - A type of genetic polymorphism that causes individual differences in appearance and constitution. Typical examples include "whether or not you are prone to gain weight" and "whether or not you can tolerate alcohol." <br/><br/>Adrenaline - A hormone that causes tension and excitement, supporting the "fight or flight" response. <br/><br/>Estrogen - A hormone that mainly helps the development and function of the female body. <br/><br/>Casein-free: Does not contain casein, a dairy protein. <br/><br/>Citric acid cycle: Part of the cycle that produces energy in cells. <br/><br/>Glutamate: A neurotransmitter in the brain that plays an important role in transmitting nerve signals in the brain. <br/><br/>Gluten-free: Foods and meals that avoid gluten, found in wheat and other foods. <br/><br/>Cytokines: Molecules that regulate the body"s immune system and are involved in responses to infection and inflammation. <br/><br/>Synaptic plasticity: A phenomenon in which connections between nerve cells in the brain change, helping with memory and learning.'}
                fontSize={12}
            />
            <PageNumber>
                151
            </PageNumber>
        </PageWrapper>
    );
};

export default First;