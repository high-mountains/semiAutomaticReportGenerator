import React, { useEffect, useState } from "react";
import { TreeSelect, message } from "antd";
import { useSelector } from "react-redux";
import { makeTree } from "./makeTree";
import { UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const SelectUser = ({
  multiple = false,
  onChange,
  bordered = true,
  titleRef,
  value,
  userFilterOption = 0,
}) => {
  const teams = useSelector((state) => state.common.teams);
  const users = useSelector((state) => state.common.users);
  const roles = useSelector((state) => state.common.roles);
  const [sortedUsers, setSortedUsers] = useState([]);

  const getRoles = (user) => {
    var leader_role = roles.filter((role) => role.title == "Leader");
    var vice_leader_role = roles.filter((role) => role.title == "Vice Leader");

    var result = { isLeader: false, isViceLeader: false };

    user.roles.map((user_role) => {
      if (leader_role.length == 1 && leader_role[0]._id == user_role) {
        result.isLeader = true;
      }
      if (
        vice_leader_role.length == 1 &&
        vice_leader_role[0]._id == user_role
      ) {
        result.isViceLeader = true;
      }
    });

    return result;
  };

  useEffect(() => {
    let newUsers = users.filter((user) => user?.allow);

    if (!userFilterOption) newUsers = newUsers.filter((user) => !user?.isAway);
    newUsers.sort((a, b) => {
      let a_role = getRoles(a);
      let b_role = getRoles(b);

      if (a_role.isLeader != b_role.isLeader) {
        if (a_role.isLeader) return -1;
        else return 1;
      }
      if (a_role.isViceLeader != b_role.isViceLeader) {
        if (a_role.isViceLeader) return -1;
        else return 1;
      }
      if (a.realName > b.realName) return 1;
      else return -1;
    });
    setSortedUsers(newUsers);
  }, [users]);

  const [userTree, setUserTree] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const warning = (content) => {
    messageApi.warning(content, 2);
  };

  const handleSelect = (value, node) => {
    if (node?.children?.length === undefined || multiple) {
      onChange(value);
    } else {
      warning("You are not allowed to select team!");
      return;
    }
  };

  useEffect(() => {
    LoadingTreeData();
  }, []);

  const addUserToGroup = (treeData, user) => {
    let TreeData = treeData || [];
    _.map(TreeData, (treeNode) => {
      if (treeNode._id == user?.team) {
        if (!treeNode.children) treeNode.children = [];
        treeNode.children.push(user);
      }
      addUserToGroup(treeNode.children, user);
    });
  };

  const LoadingTreeData = async (open) => {
    if (open) {
      const userGroupsData = makeTree(teams);
      await _.map(sortedUsers, (user) => {
        addUserToGroup(userGroupsData, {
          _id: user._id,
          title: user.realName,
          team: user.team,
        });
      });
      const Data = [
        {
          _id: "all",
          title: "All",
          children: userGroupsData.map((item) => {
            return {
              title: item.title,
              team: "all",
              _id: item._id,
              children: item.children,
            };
          }),
        },
      ];
      setUserTree(Data);
    }
  };

  return (
    <>
      {contextHolder}

      <TreeSelect
        onSelect={!multiple ? handleSelect : undefined} // Conditionally set the onSelect method based on the selectedMethod value
        onChange={multiple ? handleSelect : undefined}
        ref={titleRef}
        treeCheckable={multiple}
        bordered={bordered}
        value={value}
        className="w-full"
        fieldNames={{ label: "title", value: "_id" }}
        treeData={userTree}
        showSearch={true}
        tagRender={(node) => {
          return (
            <div>
              {
                <Tooltip title={node.label}>
                  <div className="text-gray m-1 bg-[#b6b6b6] px-2 rounded-lg">
                    <UserOutlined />
                  </div>
                </Tooltip>
              }
            </div>
          );
        }}
        filterTreeNode={(inputValue, treeNode) => {
          return treeNode.title
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase());
        }}
        onDropdownVisibleChange={(e) => LoadingTreeData(e)}
        placeholder="Please select users.."
      />
    </>
  );
};

export default SelectUser;
