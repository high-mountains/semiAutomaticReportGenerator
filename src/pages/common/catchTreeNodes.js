exports.catchTreeNodes = (tree, val) => {
  let findFlag = false;
  let rootID = val;
  let temp = [];
  const searchNodes = (tree) => {
    if (findFlag === false) {
      tree?.map((node) => {
        if (node?._id === rootID) {
          findFlag = true;
          temp.push(node?._id);
          if (node?.children) {
            searchNodes(node.children);
          }
        } else {
          node?.children && searchNodes(node?.children);
        }
      });
    } else {
      tree?.map((node) => {
        temp.push(node?._id);
        searchNodes(node?.children);
      });
    }
  };
  searchNodes(getTeam);
  setSearchIncludedtree(temp);
};
