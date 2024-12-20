export const updateDangerValues = (data, geneData) => {
    return data.map((item) => {
        const matchingGene = geneData.find(
            (gene) => gene.Gene === item.tdContent.gen
        );
        return matchingGene
            ? {
                  ...item,
                  tdContent: {
                      ...item.tdContent,
                      danger: Number(matchingGene.Degree),
                  },
              }
            : item;
    });
};

export const updateDangerLevel = (data, geneData) => {
    // For Gene Component
    return data.map((item) => {
        const matchingGene = geneData.find(
            (gene) => gene.Gene === item.geneName
        );
        return matchingGene
            ? {
                  ...item,
                  level: matchingGene.Degree,
              }
            : item;
    });
};

// export const processInitialData = (data) => {
//     let updatedData = [...data];
//     let i = 0;

//     while (i < updatedData.length) {
//         const item = updatedData[i];
//         if (item.rowSpan) {
//             // Handle rows with rowSpan
//             let remainingSpan = item.rowSpan;
//             let hasValidChild = false;

//             // Check and update child rows
//             for (let j = i + 1; j <= i + remainingSpan; j++) {
//                 if (updatedData[j]?.tdContent?.danger !== 0) {
//                     hasValidChild = true;
//                     break;
//                 } else {
//                     updatedData.splice(j, 1);
//                     remainingSpan--;
//                     j--;
//                 }
//             }

//             // Update rowSpan or move rowSpan/thContent to the next valid child
//             if (!hasValidChild) {
//                 updatedData.splice(i, 1);
//                 continue;
//             } else {
//                 item.rowSpan = remainingSpan;
//             }
//         } else if (item?.tdContent?.danger === 0) {
//             // Handle standalone elements with danger = 0
//             updatedData.splice(i, 1);
//             continue;
//         }

//         i++;
//     }

//     return updatedData;
// };

export const processInitialData = (data) => {
    let updatedData = data;

    let i = 0;

    while (i < updatedData.length) {
        const item = updatedData[i];
        let tempRowSpan = item.rowSpan && item.rowSpan;
        let tempThContent = item.thContent && item.thContent;

        if (item?.tdContent?.danger === 0) {
            if (item.rowSpan && item.thContent) {
                console.log("item==>", i);
            } else if (item.thContent) {
                // Reduce rowSpan and move rowSpan/thContent to the next valid element
                let remainingSpan = item.rowSpan - 1;
                let nextIndex = i + 1;

                // Find next valid element
                while (nextIndex < updatedData.length) {
                    const nextItem = updatedData[nextIndex];
                    if (nextItem.thContent || nextItem.rowSpan) {
                        break;
                    }
                    nextIndex++;
                }

                if (remainingSpan > 0) {
                    item.rowSpan = remainingSpan;
                } else {
                    updatedData.splice(i, 1); // Remove element if rowSpan reaches 0
                    continue;
                }

                // Move rowSpan/thContent if possible
                if (nextIndex < updatedData.length) {
                    console.log("nextIndex===>", nextIndex);

                    updatedData[nextIndex] = {
                        ...updatedData[nextIndex],
                        rowSpan: updatedData[nextIndex].rowSpan + 1 || 0,
                        thContent:
                            updatedData[nextIndex].thContent || item.thContent,
                    };

                    // delete item.thContent; // Clear moved thContent
                    // delete item.tdContent; // Clear moved thContent
                    // delete item.rowSpan; // Clear moved thContent
                }
            } else {
                // Handle standalone tdContent
                let prevIndex = i - 1;

                // Find closest preceding element with rowSpan
                while (prevIndex >= 0 && !updatedData[prevIndex].rowSpan) {
                    prevIndex--;
                }

                if (prevIndex >= 0) {
                    updatedData[prevIndex].rowSpan -= 1; // Reduce rowSpan of preceding element
                }
                updatedData.splice(i, 1); // Remove current element
                continue;
            }
        }
        i++;
    }

    return updatedData;
};

// export const processInitialData = (initialData) => {
//     const result = [];
//     let carryForward = null;

//     for (let i = 0; i < initialData.length; i++) {
//         const current = { ...initialData[i] };

//         if (current.tdContent && current.tdContent.danger === 0) {
//             if (carryForward) {
//                 carryForward.rowSpan--;
//             }

//             if (current.rowSpan && current.thContent) {
//                 carryForward = {
//                     rowSpan: current.rowSpan,
//                     thContent: current.thContent,
//                 };
//             }
//             continue; // Skip adding this element to the result
//         }

//         if (carryForward && !current.thContent) {
//             current.rowSpan = carryForward.rowSpan;
//             current.thContent = carryForward.thContent;
//             carryForward = null;
//         }

//         result.push(current);
//     }

//     if (carryForward) {
//         // If carryForward remains, it means there were no valid elements to transfer to.
//         result.push({
//             rowSpan: carryForward.rowSpan,
//             thContent: carryForward.thContent,
//         });
//     }

//     return result.filter((item) => !(item.rowSpan && item.rowSpan <= 0));
// }
