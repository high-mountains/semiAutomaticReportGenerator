import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import InputText from "../../../components/Input/InputText";
import UserImg from "../../common/userImg"
import { setUserInfo } from "../../../features/user/userSlice";
import { NotificationManager } from 'react-notifications';


import {
  Modal,
  Upload,
  Form,
  Input,
  Select,
  DatePicker,
  TreeSelect,
} from "antd";
import {
  KeyIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import axios from "axios";
const today = dayjs();
function Profile() {
  const [form] = Form.useForm();
  const [avatarFile, setAvatarFile] = useState({ file: null, url: "" });
  const [updatePassword, setUpdatePassword] = useState({
    password: "",
    newPassword: "",
    confirm: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [visible, setVisible] = useState(false);
  const [preAvatar, setPreAvatar] = useState([
    "user",
    "user1",
    "user2",
    "user3",
  ]);
  const [uploadAvatar, setUploadAvatar] = useState();
  const updateProfile = async () => {
    const formData = new FormData();
    let userInfo = form.getFieldsValue();
    if (userInfo.realName === "") {
      return;
    }
    if (avatarFile.file) {
      formData.append("file", avatarFile.file);
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_FILE_URL + "/upload",
          formData
        );
        console.log(data);
        if (data?.uploaded?.length) userInfo.avatar = data.uploaded[0]._id;
      } catch (e) {
        NotificationManager.warning('File server is not running.', 'Warning',)
      }
    }

    userInfo = {
      ...user,
      ...userInfo,
      newPassword: "",
    };
    dispatch(setUserInfo(userInfo));
  };

  const handleConfirm = async () => {
    if (updatePassword.password === "") {
      
      return;
    }
    if (updatePassword.newPassword === "") {
      return;
    }
    const isConfirmed = updatePassword.newPassword === updatePassword.confirm;
    if (isConfirmed) {
      const res = await dispatch(setUserInfo({ ...user, ...updatePassword }));
      if (res.payload) {
        setVisible(false);
      } else
        dispatch(
        );
    } else
      dispatch(
        
      );
  };

  const updateFormValue = ({ updateType, value }) => {
    setUpdatePassword({ ...updatePassword, [updateType]: value });
  };
  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        ...user,
        birthday: user.birthday ? dayjs(user.birthday) : null,
      });
      if (user.avatar !== "user") {
        setAvatarFile({
          url: process.env.REACT_APP_FILE_URL + "/download/" + user.avatar,
        });
      } else {
        setAvatarFile({
          url: "/avatar.png",
        });
      }
    }
  }, [user]);
  useEffect(() => {
    if (uploadAvatar) {
      setPreAvatar([...preAvatar, uploadAvatar]);
    } else {
      if (!user.avatar.match(/user/g)) {
        preAvatar.push(user.avatar);
      }
    }
  }, [uploadAvatar]);
  useEffect(() => {
    
  }, []);
  const loadGroups = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/groups");
      setGroups(result);
    } catch (err) {
      if (err.response?.data?.message) {
        dispatch(
        );
      }
    }
  };
  const loadTeams = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/teams");
      setTeams(result);
    } catch (err) {
      if (err.response?.data?.message) {
        dispatch(
        );
      }
    }
  };
  const loadRoles = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/roles");
      setRoles(result);
    } catch (err) {
      if (err.response?.data?.message) {
        dispatch(
        );
      }
    }
  };
  return (
    <>
      <TitleCard topMargin="mt-0 ml-0" title={<div />}>
        <Form form={form} labelWrap size="large" className="w-[90%]">
          <div className="flex justify-center">
            <Upload
              action={process.env.REACT_APP_FILE_URL + "/upload"}
              showUploadList={false}
              beforeUpload={(e) => {
                setAvatarFile({ file: e, url: URL.createObjectURL(e) });
                return false;
              }}
              onChange={async (e) => {
                if (e.file.response) {
                  setUploadAvatar(await e.file.response.uploaded[0]._id);
                }
              }}
            >
              <div className="relative w-[95px] h-[95px] flex items-center justify-around rounded-full  shadow-2xl">
                <UserImg
                  src={avatarFile.url}
                  className="w-24 h-24  rounded-full"
                // onClick={() => setUser({ ...user, avatar: "user" })}
                />
              </div>
            </Upload>
          </div>
          <div className="flex w-full">
            <div className="w-full pr-2">
              <div className="w-full">
                <label>Name</label>
                <Form.Item
                  name={"realName"}
                  rules={[{ required: true, message: "Name is required." }]}
                >
                  <Input className="w-full" />
                </Form.Item>
              </div>
              <div className="w-full">
                <label>Gender</label>
                <Form.Item name={"gender"}>
                  <Select
                    options={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="w-full pl-2">
              <label>Status</label>
              <Form.Item name={"status"}>
                <Select
                  options={[
                    { label: "Idle", value: "Idle" },
                    { label: "Busy", value: "Busy" },
                    { label: "Do not disturb", value: "Do not disturb" },
                    { label: "Available", value: "Available" },
                    { label: "Offline", value: "Offline" },
                  ]}
                />
              </Form.Item>
              <label>BirthDay</label>
              <Form.Item name={"birthday"} valuePropName="value">
                <DatePicker format={"YYYY-MM-DD"} className="w-full" />
              </Form.Item>
            </div>
          </div>
          <div className="text-xl font-semibold pb-2">Other Info</div>
          <div className="flex w-full">
            <div className="w-full pr-2">
              <label>Group</label>
              <Form.Item name={"group"}>
                <TreeSelect
                  treeData={groups}
                  fieldNames={{ label: "title", value: "_id" }}
                  treeDefaultExpandAll
                />
              </Form.Item>
            </div>
            <div className="w-full pl-2">
              <label>Team</label>
              <Form.Item name={"team"}>
                <TreeSelect
                  fieldNames={{ label: "title", value: "_id" }}
                  treeDefaultExpandAll
                />
              </Form.Item>
            </div>
          </div>
          <div className="flex w-full">
            
            
          </div>

          <label>Note</label>
          <Form.Item name={"note"}>
            <Input.TextArea />
          </Form.Item>
          
          <div className="text-center w-full">
            <button className="btn btn-success text-white" onClick={() => updateProfile()}>
              <PencilSquareIcon className="w-6 h-6 mr-2" />
              Update
            </button>
            <button
              className="btn btn-primary m-1"
              onClick={() => setVisible(true)}
            >
              <KeyIcon className="w-6 h-6 mr-2" />
              Change Password
            </button>
          </div>
        </Form>
      </TitleCard>

      <Modal
        width={800}
        open={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        destroyOnClose
      >
        <InputText
          type="password"
          updateType="password"
          containerStyle="mt-4"
          labelTitle="Password"
          updateFormValue={updateFormValue}
        />
        <InputText
          type="password"
          updateType="newPassword"
          containerStyle="mt-4"
          labelTitle="New Password"
          updateFormValue={updateFormValue}
        />
        <InputText
          type="password"
          updateType="confirm"
          containerStyle="mt-4"
          labelTitle="Confirm"
          updateFormValue={updateFormValue}
        />
        <div className="flex justify-center mt-2">
          <button className="btn btn-primary  mr-2" onClick={handleConfirm}>
            Change
          </button>
          <button className="btn btn-danger" onClick={() => setVisible(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Profile;
