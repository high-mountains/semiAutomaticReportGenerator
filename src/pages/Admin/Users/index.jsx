import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Switch,
  TreeSelect,
  Modal,
  Select,
  Input,
  DatePicker,
  Form,
  notification,
  Checkbox
} from "antd";
import { useState, useEffect } from "react";
import { NotificationManager } from 'react-notifications';
import TitleCard from "../../../components/Cards/TitleCard";
import dayjs from "dayjs";
import axios from "axios";
import CTable from "../../../components/CTable";

const colorPerStatus = {
  Idle: "blue-400",
  Available: "green-400",
  Busy: "red-400",
  Offline: "gray-400",
  ask: "yellow-400",
};
const Users = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [teams, setTeams] = useState([]);
  const [roles, setRoles] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(null);
  const [item, setItem] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [toFirstPane, setToFirstPane] = useState(false);

  const [searchTeam, setSearchTeam] = useState("");
  const [searchGroup, setSearchGroup] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isAway, setIsAway] = useState(false);

  const allTeam = [{ _id: "", title: "All", children: teams }];
  const allGroup = [{ _id: "", title: "All", children: groups }];

  useEffect(() => {
    loadUsers();
    if (!groups.length) loadGroups();
    if (!roles.length) loadRoles();
    if (!teams.length) loadTeams();
  }, []);

  const loadUsers = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/user-manage");
      result.sort((a, b) => {
        let isAscending = a.team?.title.localeCompare(b.team?.title);
        if (a.team?.title === b.team?.title) {
          let roleOrder = 1
          let aRole = a.roles?.some((a) => a.title === 'Leader') ? 'Leader' : a.roles?.some((a) => a.title === 'Vice Leader') ? 'Vice Leader' : 'other'
          let bRole = b.roles?.some((a) => a.title === 'Leader') ? 'Leader' : b.roles?.some((a) => a.title === 'Vice Leader') ? 'Vice Leader' : 'other'
          if (aRole === 'Leader') roleOrder = -1
          if (aRole === 'Vice Leader' && bRole !== 'Leader') roleOrder = -1
          isAscending = roleOrder
        }
        return isAscending
      })
      setUsers(result);
    } catch (err) {
      notification.error({
        message: err.response?.data?.message || err.message || "",
      });
    }
  };
  const loadGroups = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/groups");
      setGroups(result);
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };
  const loadTeams = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/teams");
      setTeams(result);
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };
  const loadRoles = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/roles");
      setRoles(result);
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };

  const userAllow = async (sendData) => {
    try {
      await axios.post("/user-allow", sendData);
      loadUsers();
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };
  const handleAwayChange = async (sendData) => {
    try {
      await axios.post("/user-away", sendData);
      loadUsers();
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };
  const onSubmit = async () => {
    try {
      let sendData = await form.validateFields();
      if (current) {
        sendData.updateId = current._id;
      }
      await axios.post("/user-manage", { ...sendData });
      loadUsers();
      if (current) Modal.destroyAll();
      else form.resetFields();
      setShowModal(false);
      NotificationManager.success('User Updated successfully!', 'Success');
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };
  const onAction = (current) => {
    setCurrent(current);
    setShowModal(true);
    if (current) {
      form.setFieldsValue({
        ...current,
        birthday: current.birthday ? dayjs(current.birthday) : null,
        netStarted: current.netStarted ? dayjs(current.netStarted) : null,
        team: current?.team?._id,
        group: current?.group?._id,
        roles: current.roles.map((item) => item._id),
      });
    }

    else form.resetFields();
  };
  const onOk = async () => {
    try {
      // setLoading(true)
      await axios.delete("/user/" + item._id);
      await loadUsers();
      setConfirm(false);
    } catch (err) {
      notification.error({
        message: err.response?.data?.message || err.message || "Error",
      });
    }
  };
  const onDelete = (item) => {
    setItem(item);
    setConfirm(true);
    setToFirstPane(false);
  };
  const handleDisabledCheckBoxChange = (e) => {
    setDisabled(e.target.checked);
  }
  const handleIsAwayCheckBoxChange = (e) => {
    setIsAway(e.target.checked);
  }
  const columns = [
    {
      title: "No",
      width: "4%",
      align: "center",
      render: (text, record, key) => {
        return <span>{key + 1}</span>;
      },
    },
    {
      title: "Name",
      dataIndex: "realName",
      width: "10%",
      sorter: function (a, b) {
        return b.realName.localeCompare(a.realName);
      },
    },
    {
      title: "UserId",
      dataIndex: "userId",
      width: "10%",
      sorter: function (a, b) {
        return b.userId.localeCompare(a.realName);
      },
    },
    {
      title: "Team",
      dataIndex: "team",
      width: "10%",
      align: "center",
      render: (text) => text?.title,
      sorter: function (a, b) {
        let a1 = a.team?.title ?? '';
        let b1 = b.team?.title ?? '';
        return b1.localeCompare(a1);
      },
    },
    {
      title: "Group",
      dataIndex: "group",
      width: "18%",
      align: "center",
      render: (text) => text?.title,
      sorter: function (a, b) {
        let a1 = a.group?.title ?? '';
        let b1 = b.group?.title ?? '';
        return b1.localeCompare(a1);
      },
    },
    {
      title: "Roles",
      dataIndex: "roles",
      align: "center",
      render: (text) => {
        return (
          <div className="flex gap-1 flex-wrap">
            {text.map((item) => (
              <span
                key={item._id}
                className="bg-base-300 text-sm p-1 rounded-md"
              >
                {item.title}
              </span>
            ))}
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text, idx) => (
        <div
          className={`bg-${colorPerStatus[text] ? colorPerStatus[text] : "red-600"
            } text-white rounded-lg p-1`}
        >
          {text}
        </div>
      ),
    },

    {
      title: "Allow",
      dataIndex: "allow",
      width: "5%",
      align: "center",
      render: (txt, record) => {
        return (
          <Switch
            checked={txt}
            onChange={(e) =>
              userAllow({
                _id: record._id,
                status: record.allow ? false : true,
              })
            }
          />
        );
      },
    },
    {
      title: "Is Away",
      dataIndex: "isAway",
      width: "5%",
      align: "center",
      render: (txt, record) => {
        return (
          <Switch
            checked={txt}
            onChange={(e) =>
              handleAwayChange({
                _id: record._id,
                status: record.isAway ? false : true,
              })
            }
          />
        );
      },
    },
    {
      title: "action",
      width: "8%",
      align: "center",
      render: (txt, record) => (
        <div className="flex gap-2 justify-center">
          <button
            className="btn px-1 btn-sm normal-case rounded-full"
            onClick={() => onAction(record)}
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            className="btn px-1 btn-sm normal-case rounded-full"
            onClick={() => onDelete(record)}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  const handleResetPassword = async (id) => {
    const result = await axios.put("/resetPassword", { userId: id })
    if (result.data) {
      NotificationManager.success('Password reseted successfully!', 'Success');
      setShowModal(false);

    }
  }
  return (
    <>
      <TitleCard
        title={<div />}
        topMargin="mt-2"
        TopSideButtons={
          <div className="relative flex gap-3 items-center w-full ">
            <Checkbox className="w-[150px]" checked={disabled} onChange={handleDisabledCheckBoxChange}>Show Disabled</Checkbox>
            <Checkbox className="w-[100px]" checked={isAway} onChange={handleIsAwayCheckBoxChange}>Is Away</Checkbox>
            <TreeSelect
              theme={"light"}
              className="w-[200px]"
              treeData={allTeam}
              treeLine={true}
              placeholder="Select Team"
              onChange={(e, title) => {
                setSearchTeam(title[0]);
              }}
              fieldNames={{
                value: "_id",
                label: "title",
                children: "children",
              }}
              size="middle"
              treeDefaultExpandAll
            />
            <TreeSelect
              theme={"light"}
              className=" text-white w-[200px] "
              placeholder="Select Group"
              treeData={allGroup}
              treeLine={true}
              size="middle"
              onChange={(e, title) => {
                setSearchGroup(title[0]);
              }}
              fieldNames={{
                value: "_id",
                label: "title",
                children: "children",
              }}
              treeDefaultExpandAll
            />
            <input
              autoFocus
              type="search"
              value={searchWord}
              placeholder={"Search"}
              onChange={(e) => {
                setSearchWord(e.target.value);
                setToFirstPane(true);
              }}
              className="input min-h-full p-1 h-full input-bordered w-full max-w-xs"
            />
          </div>
        }
      >
        <div className="w-full h-full">
          <CTable
            toFirstPane={toFirstPane}
            sticky
            className="h-full pr-2"
            pagination={false}
            rowKey={(row) => row._id}
            columns={columns}
            dataSource={users.filter((aUser) => {
              const searchWordLower = searchWord.toLowerCase();

              const matchesSearchWord = (text) => {
                return text?.toLowerCase().includes(searchWordLower);
              };

              const team = (aUser.team?.title || "").toLowerCase();
              const group = (aUser.group?.title || "").toLowerCase();

              let isMatch =
                matchesSearchWord(aUser.userId) ||
                matchesSearchWord(aUser.realName) ||
                matchesSearchWord(aUser.status) ||
                matchesSearchWord(team) ||
                matchesSearchWord(group) ||
                aUser.roles.some((aRole) => matchesSearchWord(aRole.title));

              if (searchGroup !== "All" && searchGroup !== "") {
                isMatch &&= group === searchGroup.toLowerCase();
              }

              if (searchTeam !== "All" && searchTeam !== "") {
                isMatch &&= team === searchTeam.toLowerCase();
              }

              if (!disabled && isMatch) {
                isMatch &&= aUser.allow === true;
              }

              if (isAway && isMatch) {
                isMatch &&= aUser.isAway === true;
              }

              return isMatch;
            })}
            expandable={{ defaultExpandAllRows: true }}
            showIcon={false}
          />
          {/* Leads List in table format loaded from slice after api call */}
        </div>
      </TitleCard>
      <Modal
        width={"40%"}
        footer=""
        open={showModal}
        onCancel={() => {
          setShowModal(false);
          form.resetFields();
        }}
      >
        <Form form={form} labelCol={{ span: 8 }} size="large">
          <div className="text-xl font-semibold pb-2 flex justify-between">
            <div>Personal Info</div>
          </div>
          <div className="flex w-full">
            <div className="w-full pr-2">
              <Form.Item
                label="Name"
                name={"realName"}
                rules={[{ required: true, message: "Must input NameField." }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Gender"
                name={"gender"}
                rules={[{ required: true, message: "Must input NameField." }]}
              >
                <Select
                  options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ]}
                />
              </Form.Item>
            </div>
            <div className="w-full pl-2">
              <Form.Item
                label="UserId"
                name={"userId"}
                rules={[{ required: true, message: "Must input NameField." }]}
              >
                <Input />
              </Form.Item>
              {/* <Form.Item label="UserId" name={'userId'} rules={[{ required: true, message: 'Must input NameField.' }]}><Input /> </Form.Item> */}
              <Form.Item
                label="Brithday"
                name={"birthday"}
                valuePropName="value"
                rules={[{ required: true, message: "Must input NameField." }]}
              >
                <DatePicker format={"YYYY-MM-DD"} className="w-full" />
              </Form.Item>
            </div>
          </div>
          <div className="text-xl font-semibold pb-2">Other Info</div>
          <Form.Item label="Group" labelCol={{ span: 4 }} name={"group"}>
            <TreeSelect
              treeData={groups}
              fieldNames={{ label: "title", value: "_id" }}
              treeDefaultExpandAll
            />
          </Form.Item>
          <Form.Item label="Team" labelCol={{ span: 4 }} name={"team"}>
            <TreeSelect
              treeData={teams}
              fieldNames={{ label: "title", value: "_id" }}
              treeDefaultExpandAll
            />
          </Form.Item>
          <div className="flex w-full">
            <div className="w-full pr-2">
              <Form.Item label="IPMsgID" name={"ipMsgId"}>
                <Input />
              </Form.Item>
              <Form.Item label="NetKeyID" name={"netKeyId"}>
                <Input />
              </Form.Item>
            </div>
            <div className="w-full pl-2">
              <Form.Item label="GameID" name={"gameId"}>
                <Input />
              </Form.Item>
              <Form.Item label="Room" name={"roomNo"}>
                <Input />
              </Form.Item>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full pr-2">
              <Form.Item label="Role" name={"roles"}>
                <Select
                  options={roles}
                  mode="multiple"
                  fieldNames={{ label: "title", value: "_id" }}
                />
              </Form.Item>
            </div>
            <div className="w-full pl-2">
              <Form.Item label="Term" name={"term"}>
                <Input />
              </Form.Item>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full pr-2">
              <Form.Item label="DevRoom" name={"devRoomNo"}>
                <Input />
              </Form.Item>
            </div>
            <div className="w-full pl-2">
              <Form.Item label="Ip address" name={"ip"}>
                <Input />
              </Form.Item>
            </div>
          </div>
          <Form.Item label="Note" labelCol={{ span: 4 }} name={"note"}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Stack" labelCol={{ span: 4 }} name={"stack"}>
            <Input.TextArea />
          </Form.Item>
          <div className="text-xl font-semibold pb-2 flex justify-between">
            <div>Admin settings</div>
          </div>
          <div className="flex w-full">
            <div className="w-full pl-2">
              <Form.Item
                label="Net Started"
                name={"netStarted"}
                valuePropName="value"
              >
                <DatePicker format={"YYYY-MM-DD"} className="w-full" />
              </Form.Item>
            </div>
            <div className="w-full text-left pl-[20px] mt-[5px]">
              <button
                className="btn px-6 btn-sm normal-case btn-success"
                onClick={() => handleResetPassword(current._id)}
              >
                Reset Password
              </button>
            </div>

          </div>
          <div className="w-full">
            <Form.Item label="Sticky" labelCol={{ span: 4 }} name={"sticky"}>
              <Input.TextArea />
            </Form.Item>
          </div>
          <div className="flex justify-center">
            <button
              className="btn px-6 btn-sm normal-case btn-primary"
              onClick={onSubmit}
            >
              Update User
            </button>
          </div>
        </Form>
      </Modal >
      <Modal open={confirm} footer="" onCancel={() => { setConfirm(false) }}>
        <div>Are you sure you want to delete {item?.realName}?</div>
        <div className="text-right mt-3">
          <button
            className="btn px-1 btn-sm normal-case btn-danger"
            onClick={onOk}
          >
            <TrashIcon className="w-5 h-5 mr-2" /> Delete
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Users;
