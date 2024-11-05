import {
  PlusIcon,
  TrashIcon,
  UserGroupIcon,
  PlusSmallIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Icons from "../../../components/Icons";
import pages from "../../../routes/pages";
import { CheckOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Modal,
  Checkbox,
  notification,
  Table,
  Select,
  Popover,
} from "antd";
import axios from "axios";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";

const Bussiness = () => {
  const [modal, contextHolder] = Modal.useModal();
  const [form] = Form.useForm();
  const [bussinesss, setBussinesss] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(null);
  const [parent, setParent] = useState(null);
  const [item, setItem] = useState(null);
  const [confirm, setCoinfirm] = useState(false);

  useEffect(() => {
    loadBussiness();
  }, []);
  const loadBussiness = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/bussiness");
      setBussinesss(result);
    } catch (err) {}
  };
  const onSubmit = async () => {
    try {
      let sendData = await form.validateFields();
      if (current) {
        sendData.updateId = current._id;
      } else if (parent) {
        sendData.parent = parent._id;
      }
      await axios.post("/bussiness", { ...sendData });
      loadBussiness();
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
  };
  const onOk = async () => {
    try {
      await axios.delete("/bussiness/" + item._id);
      await loadBussiness();
      setCoinfirm(false);
    } catch (err) {
      notification.error({
        message: err.response?.data?.message || err.message || "Error",
      });
    }
  };
  const onDelete = (item) => {
    setItem(item);
    setCoinfirm(true);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      render: (text, record) => {
        const BussinessIcon = Icons[record.icon || "Squares2X2Icon"];
        return (
          <div>
            <BussinessIcon className="w-6 h-6 inline mr-4" /> {text}
          </div>
        );
      },
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      width: "18%",
      align: "center",
      render: (txt) => moment(txt).format("YYYY/MM/DD"),
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      width: "18%",
      align: "center",
      render: (txt) => moment(txt).format("YYYY/MM/DD"),
    },
    {
      title: "action",
      width: "18%",
      align: "right",
      render: (txt, record) => (
        <div className="flex gap-2 justify-end">
          {!record.parent && (
            <button
              className="btn px-1 btn-sm normal-case rounded-full"
              onClick={() => onAction(null, record)}
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          )}
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
            <button
              className="btn px-1 btn-sm normal-case btn-primary"
              onClick={() => onAction()}
            >
              <PlusSmallIcon className="w-5 h-5 mr-2" /> Add New Page
            </button>
          </div>
        }
        topMargin="mt-2"
      >
        <div className="w-full h-full flex">
          {bussinesss.length ? (
            <Table
              sticky
              className="h-full pr-2"
              pagination={false}
              rowKey={(row) => row._id}
              columns={columns}
              dataSource={bussinesss}
              expandable={{ defaultExpandAllRows: true }}
              showIcon={false}
            />
          ) : (
            <div className="w-full h-full items-center flex justify-center rounded-md">
              <h1 className="text-xl">NO Display Data.</h1>
            </div>
          )}
        </div>
      </TitleCard>
      <Modal
        open={showModal}
        footer={null}
        title="Page management"
        onCancel={() => setShowModal(false)}
      >
        <Form form={form} size="large" labelCol={{ span: 6 }}>
          <Form.Item
            label="Title"
            name={"title"}
            rules={[{ required: true, message: "Must input NameField." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Name" name={"name"}>
            <Select
              menuItemSelectedIcon={<CheckOutlined />}
              showSearch
              options={Object.keys(pages)
                .sort()
                .map((item) => ({
                  label: item,
                  value: item,
                }))}
            />
          </Form.Item>
          <Form.Item label="Url" name={"path"}>
            <Input />
          </Form.Item>
          <Form.Item label="Icon" name={"icon"}>
            <Select
              menuItemSelectedIcon={<CheckOutlined />}
              showSearch
              options={Object.keys(Icons)
                .sort()
                .map((item) => {
                  const LabelIcon = Icons[item];
                  return {
                    label: (
                      <div>
                        <LabelIcon className="w-5 h-5 inline" /> {item}
                      </div>
                    ),
                    value: item,
                  };
                })}
            />
          </Form.Item>
          <Form.Item label="Actions" name={"actions"}>
            <Select notFoundContent={""} mode="tags" />
          </Form.Item>
          <Form.Item label="Theme" name={"theme"}>
            <Select
              menuItemSelectedIcon={<CheckOutlined />}
              defaultActiveFirstOption
              options={[
                { label: "Dark", value: "Dark" },
                { label: "Light", value: "Light" },
              ]}
            />
          </Form.Item>
          <div className="flex pl-8">
            <Form.Item
              label="Menu"
              className="w-full"
              labelCol={12}
              name={"menu"}
              valuePropName="checked"
            >
              <Checkbox checked />
            </Form.Item>
            <Form.Item
              label="FullScreen"
              className="w-full"
              labelCol={4}
              name={"fullScreen"}
              valuePropName="checked"
            >
              <Checkbox checked />
            </Form.Item>
            <Form.Item
              label="SideBar"
              className="w-full"
              labelCol={10}
              name={"sideBar"}
              valuePropName="checked"
            >
              <Checkbox checked />
            </Form.Item>
          </div>
          <div className="flex justify-center">
            <button
              className="btn px-6 btn-sm normal-case btn-primary"
              onClick={onSubmit}
            >
              {(current ? "Update" : "Add") + " Page"}
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

export default Bussiness;
