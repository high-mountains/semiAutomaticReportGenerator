exports.makeTree = (d, pa = "parent", ref) => {
  const mt = (items, ar) =>
    items.map((item) => {
      let re = [];
      const child = ar.filter((elem) => {
        if (String(elem[pa]) === String(item._id)) return true;
        else re.push(elem);
      });
      const ni = child.length
        ? { ...(item._doc || item), children: mt(child, re) }
        : { ...(item._doc || item) };
      return ref ? ref(ni) : ni;
    });
  let r = [];
  const p = d.filter((i) => {
    if (!i[pa]) return true;
    else r.push(i);
  });
  return mt(p, r);
};
