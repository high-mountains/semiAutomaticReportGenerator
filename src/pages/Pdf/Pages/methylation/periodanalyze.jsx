import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(
        useSelector((state) => state.pdfData.methylationColor)
    );

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const EnhancedPeriodanalyze = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                subtitle: "Methylation Type",
                mainTitle: "Methylation Type",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "Children with genes associated with weak methylation tend to have <span class='bold'>high sensitivity</span> to new environments or loud sounds and are <span class='bold'>prone to stress</span>. While they can focus intently on areas of interest, they may feel anxious about changes. Insufficient methylation can hinder the expression of genes related to neural development, increasing the risk of ASD, ADHD, learning disabilities, delayed language development, and emotional instability.",
                secondSenctences:
                    "During adolescence, hormonal changes amplify the effects of methylation, leading to mood swings and anxiety about self-expression, but it is also a period when <span class='bold'>creativity can flourish</span>. Insufficient methylation may inhibit estrogen metabolism, increasing the risk of dysmenorrhea and irregular menstruation. It may also delay secondary sexual characteristics and weaken the immune system, making colds more frequent.",
                thirdSenctences:
                    "As adults, individuals gain deeper self-understanding and acceptance of their sensitivity and uniqueness. However, stress in the workplace or at home can affect mental health, making <span class='bold'>stress management</span> crucial. This stage often sees people leveraging their experiences to excel in self-expression and creative activities.",
                fourthSenctences:
                    "After menopause, hormonal changes further heighten sensitivity and mood swings, but life experiences bring deep insights. However, insufficient methylation may affect <span class='blue'>serotonin</span> and dopamine metabolism, increasing risks of <span class='bold'>depression</span>, <span class='bold'>anxiety</span>, and <span class='bold'>dementia</span>. Inadequate protection and repair of nerve cells may raise the risk of neurodegenerative diseases. Decreased <span class='blue'>DNA repair functions</span> also increase the risk of <span class='bold'>cancer</span>.",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem",
                mainColor: mainColor,
                description: "Recommended Lifestyle Improvements for Methylation Type",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Consume foods rich in nutrients necessary for methylation, such as folic acid, vitamin B6, vitamin B12, and methionine (green vegetables, legumes, eggs, meat, fish, etc.).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Actively consume foods high in choline (eggs, soy products, chicken, broccoli, etc.).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Include foods high in betaine (beets, spinach, scallops, etc.).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Consider supplements like glutathione, methionine, and SAMe to support methylation.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Avoid processed foods and additives; choose fresh ingredients.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Engage in rhythmic repetitive exercises or walking to boost serotonin levels.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Consume foods with phenylalanine (meat, fish, soy products, eggs) or tyrosine (meat, fish, soy, nuts) to increase dopamine.</p>`,
                    },
                ],
                oneColumnStatus: true,
                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "6rem",
                    lineHeight: 1.25,
                    fontSize: "12rem",
                    whiteSpace: "pre-wrap",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "21",
            },
        },
    ]);

    return (
        <PageWrapper>
            <EnhancedPeriodanalyze />
        </PageWrapper>
    );
};

export default Periodanalyze;
