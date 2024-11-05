import {
  PlusIcon,
  RectangleStackIcon,
  TrashIcon,
  UserGroupIcon,
  PlusSmallIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Form, Input, Modal, notification, Checkbox, Switch } from "antd";
import axios from "axios";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import CTable from "../../../components/CTable";

const Group = () => {
  // const modal = Modal.useModal()
  const [modal, contextHolder] = Modal.useModal();
  const [form] = Form.useForm();
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(null);
  const [parent, setParent] = useState(null);
  const [item, setItem] = useState(null);
  const [confirm, setCoinfirm] = useState(false);
  const [hideDisabled, sethideDisabled] = useState(false);


  // const modal = Modal.confirm();
  useEffect(() => {
    loadGroup();
  }, []);
  const loadGroup = async () => {
    const {
      data: { result },
    } = await axios.get("/groups");
    setGroups(result);
  };
  const onSubmit = async () => {
    try {
      let sendData = await form.validateFields();
      if (current) {
        sendData.updateId = current._id;
        // sendData.parent = current.parent
      } else if (parent) {
        sendData.parent = parent._id;
      }
      await axios.post("/group", { ...sendData });
      loadGroup();
      if (current) Modal.destroyAll();
      else form.resetFields();
      setShowModal(false);
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };
  const onAction = (current, parent) => {
    setCurrent(current);
    setParent(parent);
    if (current) form.setFieldsValue(current);
    else form.resetFields();
    setShowModal(true);
    return;
  };
  const onOk = async () => {
    try {
      await axios.delete("/group/" + item._id);
      await loadGroup();
      setCoinfirm(false);
    } catch (err) {
      notification.error({
        message: err.response?.data?.message || err.message || "Error",
      });
    }
    // setLoading(false)
  };
  const onDelete = (item) => {
    setItem(item);
    setCoinfirm(true);
  };
  const groupAllow = async (sendData) => {
    try {
      await axios.post("/group-allow", sendData);
      loadGroup();
    } catch (err) {
      notification.error({
        message:
          err.response?.data?.message || err.message || "Must Input Field.",
      });
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      sorter: function (a, b) {
        return b.title.localeCompare(a.title);
      },
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      width: "18%",
      align: "center",
      render: (txt) => moment(txt).format("YYYY-MM-DD"),
      sorter: function (a, b) {
        return moment(b.createdAt).isAfter(moment(a.createdAt));
      },
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      width: "18%",
      align: "center",
      render: (txt) => moment(txt).format("YYYY-MM-DD"),
      sorter: function (a, b) {
        return moment(b.updatedAt).isAfter(moment(a.updatedAt));
      },
    },
    {
      title: "Active",
      dataIndex: "active",
      width: "5%",
      align: "center",
      render: (txt, record) => {
        return (
          <Switch
            checked={txt}
            onChange={(e) =>
              groupAllow({
                _id: record._id,
                status: record.active ? false : true,
              })
            }
          />
        );
      },
    },
    {
      title: "action",
      width: "18%",
      align: "center",
      render: (txt, record) => (
        <div className="flex gap-2 justify-center">

          <button
            className="btn px-1 btn-sm normal-case rounded-full"
            onClick={() => onAction(null, record)}
          >
            <PlusIcon className="w-5 h-5" />
          </button>
          <button
            className="btn px-1 btn-sm normal-case  rounded-full"
            onClick={() => onAction(record)}
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          {!record.children && (
            <button
              className="btn px-1 btn-sm normal-case rounded-full"
              onClick={() => onDelete(record)}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          )}
        </div>
      ),
    },
  ];
  return (
    <>
      {contextHolder}
      <TitleCard
        title={<div />}
        TopSideButtons={
          <div className="inline-block float-right">
            <Checkbox checked={hideDisabled} onChange={(e) => sethideDisabled(e.target.checked)} className="w-[150px]" >Hide Disabled</Checkbox>

            <button
              className="btn px-1 btn-sm normal-case btn-primary"
              onClick={() => onAction()}
            >
              <PlusSmallIcon className="w-5 h-5 mr-2" /> Add New Group
            </button>
          </div>
        }
        topMargin="mt-2"
      >
        <div className="w-full h-full flex">
          <CTable
            sticky
            className="h-full pr-2"
            pagination={false}
            rowKey={(row) => row._id}
            columns={columns}
            dataSource={groups.filter((aGroup) => {
              if (hideDisabled) return aGroup.active;
              return true;
            })} expandable={{ defaultExpandAllRows: true }}
            showIcon={false}
          />
        </div>
      </TitleCard>
      <Modal
        open={showModal}
        footer={null}
        title="Group management"
        onCancel={() => setShowModal(false)}
      >
        <Form form={form}>
          <Form.Item
            label="Name"
            name={"title"}
            rules={[{ required: true, message: "Must input NameField." }]}
          >
            <Input />
          </Form.Item>
          <div className="flex justify-center">
            <button
              className="btn px-6 btn-sm normal-case btn-primary"
              onClick={onSubmit}
            >
              {(current ? "Update" : "Add New") + " Group"}
            </button>
          </div>
        </Form>
      </Modal>
      <Modal open={confirm} footer="" onCancel={() => setCoinfirm(false)}>
        <div>Are you sure you want to delete {item?.title}?</div>
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

export default Group;
