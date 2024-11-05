const refineGroup = (group) => ({
  _id: group._id,
  title: group.title,
  del: group.del,
  parentId: group.parentId
})

const refineBiz = (biz) => ({
  _id: biz._id,
  title: biz.title,
  actions: biz.actions,
  path: biz.path,
  link: biz.link,
  del: biz.del,
  parentId: biz.parentId
})

const refineRoleBiz = (biz) => ({
  _id: biz._id,
  title: biz.title,
  actions: biz.actions,
  path: biz.path,
  link: biz.link,
  del: biz.del,
  parentId: biz.parentId
})


export const makeTree = (group, groups, refine) => {
  let nGroup = refine ? refine(group) : group
  let children = []
  groups.forEach(item => { if (item.parentId === group._id) children.push(makeTree(item, groups, refine)) })
  if (children.length)
    nGroup.children = children;
  return nGroup
}

export const makeBizTree = (biz, bizs) => {
  let nBiz = refineBiz(biz)
  let children = []
  bizs.forEach(item => { if (item.parentId === biz._id) children.push(makeBizTree(item, bizs)) })
  if (children.length)
    nBiz.children = children;
  return nBiz
}


export const makeRoleBizTree = (biz, bizs) => {
  let nBiz = refineRoleBiz(biz)
  let children = []
  bizs.forEach(item => { if (item.parentId === biz._id) children.push(makeRoleBizTree(item, bizs)) })
  if (children.length)
    nBiz.children = children;
  else
    nBiz.children = biz.actions.map(item => ({ _id: biz._id + '-' + item, title: item, isAction: true, action: { bizId: biz._id, action: item } }))
  return nBiz
}