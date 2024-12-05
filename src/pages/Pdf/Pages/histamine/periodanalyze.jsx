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
        useSelector((state) => state.pdfData.histamineColor)
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
                // subtitle: "Histamine Type",
                mainTitle: "Histamine Type",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "Histamine-type children are highly sensitive, reacting sensitively to the environment and the emotions of others, and may also be hypersensitive to sound, light, and food. They are prone to developing allergic symptoms from an early age, and are prone to food allergies, atopy, and asthma. Histamine excess can make them feel anxious and shy around strangers, and because they have a sensitive personality, it is important for them to receive appropriate support from adults.",
                secondSenctences:
                    "The effects of histamine can make emotions fluctuate, making you more anxious and irritable, and making it difficult to maintain concentration. In addition, allergies such as hay fever and rhinitis can easily worsen, so stress management is important. Women may experience more severe menstrual pain and PMS after their first period. On the other hand, they are good at memory and schedule management, and their habit of taking notes allows them to get things done efficiently.",
                thirdSenctences:
                    "Histamine-related genetic abnormalities can lead to digestive problems such as hyperacidity, gastritis, and stomach ulcers. Excessive stress at work or at home can lead to frequent anxiety and headaches, and sensitivity to histamine in food can lead to sensory hypersensitivity and sensitivity to smells and chemicals.",
                fourthSenctences:
                    "Changes in hormone balance affect histamine metabolism, making allergies and digestive symptoms more likely to fluctuate. Women are more likely to experience hot flashes and insomnia due to a drop in estrogen, while men are more likely to experience sleep disorders and gastrointestinal problems. During this time, it is important to manage stress as well as take care of allergies and digestive issues. Children may also become more sensitive to the environment and sounds, and may have hypersensitive reactions to chemicals. They may also be very particular about rules, so you may need to be considerate in your daily life.",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem",
                mainColor: mainColor,
                description: "Recommended lifestyle improvements for histamine types",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Avoid foods high in histamine (such as aged cheeses, processed meats, fermented foods, alcohol, and certain fish).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Avoid drinking alcohol as much as possible</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Actively consume fresh ingredients, foods with few preservatives and additives, and foods with antihistamine properties (radish, turmeric, carrots, etc.).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Aim for a gluten-free and casein-free diet to help regulate your intestinal flora.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>By cleaning frequently and using air purifiers, you can reduce allergens in the environment and prevent allergic reactions.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p><span class='blue'>Avoid contaminated grains, housing, air conditioning, etc. that may cause mycotoxins.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Do not bring your smartphone into the bedroom, and keep it in airplane mode. Keep the bedroom away from the Wi-Fi router.</p>`,
                    },
                ],
                oneColumnStatus: true,
                liStyle: { lineHeight: 1.083 },
                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    lineHeight: 1.2,
                    fontSize: "12rem",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "12",
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
