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
}

export const updateDangerLevel = (data, geneData) => { // For Gene Component
    return data.map((item) => {
        const matchingGene = geneData.find(
            (gene) => gene.Gene === item.geneName
        );
        return matchingGene
            ? {
                  ...item,
                //   tdContent: {
                //       ...item.tdContent,
                //       danger: Number(matchingGene.Degree),
                //   },
                  level: matchingGene.Degree
              }
            : item;
    });
}