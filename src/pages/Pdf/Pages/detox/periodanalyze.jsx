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
        useSelector((state) => state.pdfData.detoxColor)
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
                subtitle: "Detoxification Type",
                mainTitle: "Detox Type",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "Children with a detox type tend to have a sensitive digestive system and may overreact to <span class='bold'>food</span> and <span class='bold'>environmental changes</span>. Due to underdeveloped detoxification functions, they are sensitive to environmental toxins, which may impact development and behavior, and increase the risk of <span class='bold'>allergies</span> and <span class='bold'>atopy</span>. They may also be sensitive to specific toxins like chemicals or mold, avoiding such places, which could be misunderstood as shyness by others.",
                secondSenctences:
                    "During hormonal changes, skin issues and allergies may worsen, and mental instability may increase. Hormonal fluctuations affect detoxification ability, making individuals more susceptible to <span class='bold'>diet</span> and <span class='bold'>environmental influences</span>. This may lead to unstable mental states and skin problems. During adolescence, <span class='blue'>hormonal metabolites</span> tend to accumulate, and environmental hormones from <span class='bold'>plastic products</span> add to the detoxification burden. Prolonged late-night lifestyles can impair <span class='bold'>liver detoxification</span>, requiring caution.",
                thirdSenctences:
                    "At this stage, stress and lifestyle habits significantly influence detoxification ability. Stress from work or home can reduce liver detoxification, leading to <span class='bold'>chronic fatigue and digestive issues</span>. Drinking, smoking, and drug use increase liver burden, potentially causing the 'Liver Stress' condition, characterized by early morning awakenings or blurred vision.",
                fourthSenctences:
                    "Post-menopause, metabolic and detoxification processes decline, and hormonal changes may cause <span class='bold'>mood swings</span> and <span class='bold'>cognitive decline</span>. Increased oxidative stress impairs liver and kidney detoxification, leading to chronic detox issues. However, maintaining a detox-focused diet, adequate intake of minerals and water, regular sweating, and sufficient sleep can help sustain a healthy and active lifestyle.",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem",
                mainColor: mainColor,
                description: "Recommended Lifestyle Improvements for Detox Type",
                gap: 10,
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "7"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Select fresh and organic foods, avoiding processed foods, preservatives, and additives.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Consume foods rich in antioxidants (e.g., berries, green and yellow vegetables).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Ensure sufficient intake of water and minerals to facilitate toxin elimination.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Follow a gluten-free and casein-free diet to promote gut health.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Reduce environmental toxins by frequent cleaning and using air purifiers.</p>`,
                    },
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Choose household products and cosmetics with minimal chemical content.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Use water filters and avoid bottled water when possible.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Sweat actively through exercise or sauna use.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Take baths instead of showers whenever possible.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Opt for natural pesticides and repellents.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Ensure sufficient sleep.</p>`,
                    },
                ],
                oneColumnStatus: false,
                inContainerGap: 15,
                eachUlWidth: 255,

                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "5rem",
                    lineHeight: 1.083,
                    fontSize: "12rem",
                    whiteSpace: "pre-wrap",
                },
                ulStyle2: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "5rem",
                    lineHeight: 1.083,
                    fontSize: "12rem",
                    whiteSpace: "pre-wrap",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "18",
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
