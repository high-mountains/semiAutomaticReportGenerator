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

export const processInitialData = (data) => {
    let updatedData = data;

    let i = 0;

    while (i < updatedData.length) {
        const item = updatedData[i];

        if (item?.tdContent?.danger === 0) {
            if (item.rowSpan && item.thContent) {
                let originalSpan = item.rowSpan;
                let calculatedOriginalSpan = originalSpan - 1;

                let j = 1; // To keep track of the next index within the rowSpan bounds
                while (j <= calculatedOriginalSpan) {
                    const nextIndex = i + j;
                    if (nextIndex >= updatedData.length) break; // Stop if out of bounds

                    const nextItem = updatedData[nextIndex];
                    console.log("nextIndex-->", nextIndex);
                    console.log("nextItem-->", nextItem);

                    if (!nextItem || nextItem?.tdContent?.danger === 0) {
                        // Keep transferring rowSpan and thContent to the next valid item
                        if (nextItem) {
                            nextItem.rowSpan = (nextItem.rowSpan || 0) + item.rowSpan - 1;
                            nextItem.thContent = item.thContent;
                        }
                        updatedData.splice(i, 1); // Remove current item
                        break; // Exit the loop to avoid redundant processing
                        // j++;
                        // continue;
                    } else if(nextItem && nextItem?.tdContent?.danger !== 0) {
                        
                    }

                    // Move rowSpan and thContent to the next valid item
                    if (nextItem) {
                        nextItem.rowSpan = (nextItem.rowSpan || 0) + calculatedOriginalSpan;
                        nextItem.thContent = item.thContent;
                    }

                    updatedData.splice(i, 1);
                    break;
                }
            } else if (item.thContent) {
                // Reduce rowSpan and move rowSpan/thContent to the next valid element
                let remainingSpan = item.rowSpan - 1;
                let nextIndex = i + 1;

                // Find next valid element
                while (nextIndex < updatedData.length) {
                    const nextItem = updatedData[nextIndex];
                    if (nextItem?.thContent || nextItem?.rowSpan) {
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
                    updatedData[nextIndex] = {
                        ...updatedData[nextIndex],
                        rowSpan: (updatedData[nextIndex].rowSpan || 0) + 1,
                        thContent: updatedData[nextIndex].thContent || item.thContent,
                    };
                }
            } else {
                // Handle standalone tdContent
                let prevIndex = i - 1;

                // Find closest preceding element with rowSpan
                while (prevIndex >= 0 && !updatedData[prevIndex]?.rowSpan) {
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