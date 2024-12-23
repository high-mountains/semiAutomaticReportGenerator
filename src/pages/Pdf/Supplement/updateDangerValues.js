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
        let item = updatedData[i];
        let loopFlat = false;
        if (item?.tdContent?.danger === 0) {
            if (item.rowSpan && item.thContent) {
                let delta = 0;
                const caledTempRowSpan = i + item.rowSpan - 1;
                let flag = false;
                for (let j = i + 1; j <= caledTempRowSpan; j++) {
                    if (updatedData[j]?.tdContent?.danger === 0) {
                        delta++;
                        continue;
                    } else if(updatedData[j]?.tdContent?.danger !== 0) {
                        updatedData[j] = {
                            ...updatedData[j],
                            rowSpan: item.rowSpan - delta - 1,
                            thContent: item.thContent
                        };
                        updatedData.splice(i, (delta + 1));
                        loopFlat = true;
                        flag = true;
                        break;
                    }
                }

                if(!flag) {
                    loopFlat = true;
                    updatedData.splice(i, item?.rowSpan);
                }
            } else if (item.thContent && !item.rowSpan) {
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
                    loopFlat = true;
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
                loopFlat = true;
                updatedData.splice(i, 1); // Remove current element
                continue;
            }
        }
        if(loopFlat) {

        } else {
            i++;
        }
    }

    return updatedData;
};