import { DatePicker, Form, Input, Modal, Select } from "antd";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import dayjs from "dayjs";
import moment from "moment";
import { useState } from "react";
import { NotificationManager } from "react-notifications";
import SelectUser from "../../pages/common/SelectUser";

const curMoment = moment();
const today = curMoment.format("YYYY-MM-DD");

const AddFormComponent = ({
  transaction,
  setTransaction,
  addFormVisible,
  setAddFormVisible,
  payTypes,
  setMessage,
  editFlag,
  setEditFlag,
  id,
  titles,
}) => {
  const [isAssign, setIsAssign] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationTransaction = (transaction) => {
      if (transaction.date === "Invalid date") {
        NotificationManager.error("Must Input Date", "Validation");
        return false;
      }
      if (!transaction.userId.length) {
        NotificationManager.error("Must Input User Name", "Validation");
        return false;
      }
      if (transaction.income === 0 && transaction.expense === 0) {
        NotificationManager.error("Must Input income or expense", "Validation");
        return false;
      }
      if (!transaction.inPayType && !transaction.exPayType) {
        NotificationManager.error("Must Input PayType", "Validation");
        return false;
      }
      return true;
    };
    try {
      if (validationTransaction(transaction))
        if (editFlag) {
          const res = await axios.put("/score/transaction/" + id, transaction);
          setAddFormVisible(!addFormVisible);
          setMessage(res?.data?.message);
          NotificationManager.success(res?.data?.message, "SUCCESS");
          setTransaction({
            date: today,
            userId: "",
            income: 0,
            inPayType: "",
            expense: 0,
            exPayType: "",
            note: "",
          });
          setEditFlag(false);
        } else {
          const res = await axios.post(
            "/score/transaction/create",
            transaction
          );
          setAddFormVisible(!addFormVisible);
          NotificationManager.success(res?.data?.message, "SUCCESS");
          setTransaction({
            date: today,
            userId: "",
            income: 0,
            inPayType: "",
            expense: 0,
            exPayType: "",
            note: "",
          });
          setMessage(res?.data?.message);
        }
    } catch (error) {
      NotificationManager.error(error?.message, error?.type);
    }
  };
  return (
    <Modal
      title={titles}
      open={addFormVisible}
      onCancel={() => setAddFormVisible(!addFormVisible)}
      className="py-5"
      styles={{ "padding-bottom": "20px" }}
      footer=""
    >
      <Form
        className="pb-5 pt-5"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="gap-6 pb-5 items-center flex flex-col ">
          <div className="items-center w-full flex justify-end gap-[10px]">
            {<span className="text-red-700 text-lg">*</span>}Date:
            <DatePicker
              className="w-[75%] rounded-lg bg-base-100"
              defaultValue={dayjs(today, "YYYY-MM-DD")}
              value={dayjs(transaction.date, "YYYY-MM-DD")}
              onChange={(dates, dateStrings) => {
                setTransaction({
                  ...transaction,
                  date: moment(dateStrings).format("YYYY-MM-DD"),
                });
              }}
            />
          </div>
          <div className="items-center w-full flex justify-end gap-[10px]">
            {<span className="text-red-700 text-lg">*</span>}Members:
            <div className="w-[75%]">
              <SelectUser
                value={transaction.userId}
                isopen={isAssign}
                userFilterOption={1}
                onChange={(val) => {
                  setTransaction({ ...transaction, userId: val });
                }}
                onCancel={() => {
                  setIsAssign(false);
                }}
              />
            </div>
          </div>
          <div className="items-center w-full flex justify-end gap-[10px]">
            {<span className="text-red-700 text-lg">*</span>}Income:
            <Input
              type="number"
              className="w-[75%] rounded-lg bg-base-100"
              placeholder="Input Income"
              value={transaction.income}
              onChange={(e) =>
                setTransaction({
                  ...transaction,
                  income: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="items-center w-full flex justify-end gap-[10px]">
            {<span className="text-red-700 text-lg">*</span>}Paytype:
            <Select
              defaultValue={payTypes[0]?.title}
              className="w-[75%]"
              placeholder="Choose the income pay type"
              value={transaction.inPayType}
              onChange={(val) => {
                setTransaction({ ...transaction, inPayType: val });
              }}
              listItemHeight={50}
              listHeight={200}
            >
              {payTypes?.map((item) => {
                return (
                  <Select.Option
                    key={item._id}
                    className="option"
                    value={item.title}
                  >
                    {item.title}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          <div className="items-center w-full flex justify-end gap-[10px]">
            {<span className="text-red-700 text-lg">*</span>}Expense
            <Input
              type="number"
              className="w-[75%] rounded-lg bg-base-100"
              placeholder="Input Expense"
              value={transaction.expense}
              onChange={(e) =>
                setTransaction({
                  ...transaction,
                  expense: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="items-center w-full flex justify-end gap-[10px]">
            {<span className="text-red-700 text-lg">*</span>}Paytype
            <Select
              defaultValue={payTypes[0]?.title}
              placeholder="Choose the expense pay type"
              className="w-[75%]"
              fieldNames={"Choose the pay type name"}
              value={transaction.exPayType}
              onChange={(val) => {
                setTransaction({ ...transaction, exPayType: val });
              }}
              listItemHeight={50}
              listHeight={200}
            >
              {payTypes?.map((item) => {
                return (
                  <Select.Option
                    key={item._id}
                    className="option"
                    value={item.title}
                  >
                    {item.title}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          <div className="items-center w-full flex justify-end gap-[10px]">
            Note:
            <Input
              className="w-[75%] rounded-lg bg-base-100"
              placeholder="Description"
              value={transaction.note}
              onChange={(e) =>
                setTransaction({ ...transaction, note: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex float-right gap-2">
          <button
            className="btn px-1 btn-sm normal-case btn-danger ml-2 pr-2"
            onClick={() => setAddFormVisible(!addFormVisible)}
          >
            <TrashIcon className="w-5 h-5 mr-2" />
            Cancel
          </button>
          <button
            className="btn px-1 btn-sm normal-case btn-primary pr-6"
            onClick={(e) => handleSubmit(e)}
          >
            <PencilSquareIcon className="w-5 h-5 mr-2" />
            OK
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddFormComponent;
