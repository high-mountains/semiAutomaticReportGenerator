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

        if (item?.tdContent?.danger === 0) {
            if (item.rowSpan && item.thContent) {
                let originalSpan = item.rowSpan;
                let calculatedOriginalSpan = originalSpan - 1;
                let moved = false;

                for (let j = 1; j <= calculatedOriginalSpan ; j++) {
                    const nextIndex = i + j;
                    if (nextIndex >= updatedData.length) break; // Stop if out of bounds

                    const nextItem = updatedData[nextIndex];
                    if (!nextItem || nextItem?.tdContent?.danger === 0) {
                        // Skip elements with danger 0
                        // if(nextItem?.tdContent?.danger === 0) {
                        //     nextItem.rowSpan = (nextItem.rowSpan || 0) + item.rowSpan - 1;
                        // }
                        nextItem.rowSpan = (nextItem.rowSpan || 0) + item.rowSpan - 1;
                        nextItem.thContent = item.thContent;
                        updatedData.splice(i, 1);
                        continue;
                    }

                    // Move thContent and rowSpan to the next valid item
                    
                    nextItem.rowSpan = (nextItem.rowSpan || 0) + item.rowSpan - 1;
                    console.log("item.rowSpan==>", nextItem.rowSpan);
                    
                    nextItem.thContent = item.thContent;
 
                    // Remove the current item
                    updatedData.splice(i, 1);
                    moved = true;
                    break;
                }

                // If no valid element found within rowSpan bounds, discard the element
                if (!moved) {
                    updatedData.splice(i, 1);
                    continue;
                }
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