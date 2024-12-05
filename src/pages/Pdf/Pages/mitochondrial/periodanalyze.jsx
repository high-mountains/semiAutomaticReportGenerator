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
        useSelector((state) => state.pdfData.mitochodrialColor)
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
                // subtitle: "Mitochondrial Type",
                mainTitle: "Mitochondrial Type",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "This is a time of rapid growth and development, and the energy needs of cells are high. While active movement consumes energy, insufficient metabolism can affect growth and learning, and may increase the risk of developmental and learning disabilities. Lack of energy can lead to more frequent colds and slower recovery, and children may prefer a more sedate lifestyle than active play.",
                secondSenctences:
                    "During this time of intense hormonal changes, without proper nutritional management and mental care, increased energy consumption can lead to emotional instability, fatigue, and decreased concentration, which can easily affect academics and sports. As they tend to be indoor types who tend to become absorbed in reading and games and tend to live a nocturnal lifestyle, it is difficult for them to recover from colds and they tend to miss school, so it is important to take care of both their mind and body.",
                thirdSenctences:
                    "As we grow older, our energy metabolism becomes more stable, but it is still easily affected by lifestyle habits and stress. With more responsibilities at work and at home, lack of energy can lead to chronic fatigue and mental health issues, and tiredness can lead to more irritability and procrastination. Lack of sleep can slow down brain function, catching a cold can lead to poor memory, and fatigue can often lead to a need for long periods of sleep.",
                fourthSenctences:
                    "As you enter menopause, your hormone balance changes, causing a decline in your energy and metabolism, and you may be concerned about bone density, muscle strength, and weight gain. Your mitochondrial function may decline, causing cognitive and motor skills to decline, making you more susceptible to infections and making it more difficult to go outside. You may also experience physical changes such as hair loss, brittle nails, muscle pain, and leg cramps.",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "535rem",
                mainColor: mainColor,
                description: "Recommended lifestyle improvements for mitochondrial types",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "6"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Eat foods rich in antioxidants (berries, green and yellow vegetables, green tea, etc.).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "6"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Eat foods that contain omega-3 fatty acids (such as fish, flaxseed oil, and chia seeds) to reduce inflammation.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "6"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Take in nutrients that support mitochondrial function, such as coenzyme Q10, carnitine, and B vitamins.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "6"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Increase your intake of foods that contain L-carnitine (such as red meat, beef, and lamb).</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "6"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Consume foods rich in polyphenols (dark chocolate, apples, tomatoes, onions, cinnamon, oregano, etc.).</p>`,
                    },
                    // {
                    //     content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                    //         renderedPdfFlag ? "12" : "6"
                    //     }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Once you feel better and want to exercise, start doing aerobic exercise and strength training. You will feel more energetic, but be careful not to over-exercise.</p>`,
                    // },
                    // {
                    //     content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                    //         renderedPdfFlag ? "12" : "6"
                    //     }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Make sure you get enough sleep, as lack of sleep can lead to impaired mitochondrial function.</p>`,
                    // },
                ],
                oneColumnStatus: true,
                liStyle: { lineHeight: 1.25, fontSize: "12rem" },
                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem",
                    fontSize: "12rem",
                    whiteSpace: "pre-wrap",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "15",
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
