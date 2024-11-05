import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import CTable from "../../components/CTable";
import TitleCard from "../../components/Cards/TitleCard";
import axios from "axios";
import moment from "moment";
import UserImg from "../common/userImg";
import { TreeSelect, Modal, Card } from "antd";
import { Link } from "react-router-dom";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
  UserGroupIcon,
  PencilIcon,
  SignalIcon,
  CalendarDaysIcon,
  PaperAirplaneIcon,
  ComputerDesktopIcon,
  UsersIcon,
  BuildingOffice2Icon,
  CursorArrowRaysIcon,
  UserIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'
const colorPerStatus = {
  Idle: "blue-400",
  Available: "green-400",
  Busy: "red-400",
  Offline: "gray-400",
  IsAway: "red-400",
};
const UsersInfo = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([])
  const [searchWord, setSearchWord] = useState("");
  const [proviousSearchWord, setPreviousSearchWord] = useState("");
  const [toFirstPane, setToFirstPane] = useState(false);
  const [groups, setGroups] = useState([]);
  const [teams, setTeams] = useState([]);
  const [searchTeam, setSearchTeam] = useState("");
  const [searchGroup, setSearchGroup] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [defaultOrder, setDefaultOrder] = useState(false);
  const [resetSearch, setResetSearch] = useState(false);
  const [sorter, setSorter] = useState(null);

  const allTeam = [{ _id: "", title: "All", children: teams }];
  const allGroup = [{ _id: "", title: "All", children: groups }];
  const getgroups = useSelector((state) => state.common.groups);
  const getTeams = useSelector((state) => state.common.teams);

  const modalRef = useRef();
  useEffect(() => {
    loadUsers();
    getTeamGroup();
  }, []);
  useEffect(() => {
    if (searchWord === proviousSearchWord && searchWord !== '') return;
    const visible = users.filter((aUser) => {
      const searchWordLower = searchWord.toLowerCase();
      const userIdLower = aUser.userId?.toLowerCase() ?? '';
      const realNameLower = aUser.realName?.toLowerCase() ?? '';
      const statusLower = aUser.status?.toLowerCase() ?? '';
      const stackLower = (aUser.stack ?? '').toLowerCase();
      const noteLower = (aUser.note ?? '').toLowerCase();
      const teamTitle = aUser.team?.title ?? '';
      const groupTitle = aUser.group?.title ?? '';

      let isMatch =
        userIdLower.includes(searchWordLower) ||
        realNameLower.includes(searchWordLower) ||
        statusLower.includes(searchWordLower) ||
        stackLower.includes(searchWordLower) ||
        noteLower.includes(searchWordLower);

      if (searchGroup !== "All" && searchGroup !== "") {
        isMatch = isMatch && groupTitle === searchGroup;
      }

      if (searchTeam !== "All" && searchTeam !== "") {
        isMatch = isMatch && teamTitle === searchTeam;
      }

      return isMatch;
    });
    setVisibleUsers(visible)
    reorderTable(visible, sorter)
    setPreviousSearchWord(searchWord);
  }, [users, resetSearch, searchGroup, searchTeam, defaultOrder])
  useEffect(() => {
    let currentSearchWord = searchWord;
    setTimeout(() => {
      let laterSearchWord = searchWord;
      if (currentSearchWord === laterSearchWord) {
        setResetSearch(!resetSearch);
      }
    }, 1000);
  }, [searchWord])
  const getTeamGroup = () => {
    setGroups(getgroups);
    setTeams(getTeams);
  };
  const loadUsers = async () => {
    try {
      const {
        data: { result },
      } = await axios.get("/user-info");
      result.sort((a, b) => {
        let isAscending = a.team?.title.localeCompare(b.team?.title);
        if (a.team.title === b.team.title) {
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
      Notification.error({
        message: err.response?.data?.message || err.message || "",
      });
    }
  };
  const reorderTable = (visible, sorter) => {
    if (!sorter?.column) return
    if (sorter.column?.dataIndex === 'userId') {
      if (sorter.order === 'ascend') {
        setVisibleUsers(visible.sort((a, b) =>
          b.userId.localeCompare(a.userId)
        ))
      }
      else {
        setVisibleUsers(visible.sort((a, b) =>
          -1 * b.userId.localeCompare(a.userId)
        ))
      }
    }
    if (sorter.column?.dataIndex === 'realName') {
      if (sorter.order === 'ascend') {
        setVisibleUsers(visible.sort((a, b) =>
          b.realName.localeCompare(a.realName)
        ))
      }
      else {
        setVisibleUsers(visible.sort((a, b) =>
          -1 * b.realName.localeCompare(a.realName)
        ))
      }
    }
    if (sorter.column?.dataIndex === 'team') {
      if (sorter.order === 'ascend') {
        setVisibleUsers(visible.sort((a, b) => {
          let a1 = a.team?.title ?? '';
          let b1 = b.team?.title ?? '';
          return b1.localeCompare(a1);
        }
        ))
      }
      else {
        setVisibleUsers(visible.sort((a, b) => {
          let a1 = a.team?.title ?? '';
          let b1 = b.team?.title ?? '';
          return -1 * b1.localeCompare(a1);
        }
        ))
      }
    }
    if (sorter.column?.dataIndex === 'group') {
      if (sorter.order === 'ascend') {
        setVisibleUsers(visible.sort((a, b) => {
          let a1 = a.group?.title ?? '';
          let b1 = b.group?.title ?? '';
          return b1.localeCompare(a1);
        }
        ))
      }
      else {
        setVisibleUsers(visible.sort((a, b) => {
          let a1 = a.group?.title ?? '';
          let b1 = b.group?.title ?? '';
          return -1 * b1.localeCompare(a1);
        }
        ))
      }
    }

  }
  const handleTableChange = (pagination, filters, sorter) => {
    setSorter(sorter)
    if (!sorter?.order) {
      setDefaultOrder(!defaultOrder)
      return
    }
    reorderTable(visibleUsers, sorter);
  };
  const columns = [
    {
      title: "No",
      width: "4%",
      align: "center",
      render: (text, record, key) => {
        return <span>{key + 1}</span>
      }
    },
    {
      title: "Name",
      dataIndex: "realName",
      align: "center",
      render: (txt, record) => {
        return (
          <span className="flex items-center my-[3px]">
            <UserImg
              className="w-[25px] h-[25px] rounded-full"
              src={
                record.avatar === 'user' ? 'avatar.png' :
                  process.env.REACT_APP_FILE_URL + "/download/" + record.avatar
              }
              fallbackSrc='avatar.png'
            />
            <span className="ml-[3px]">{txt}</span>
          </span>
        );
      },
      sorter: function (a, b) {
        return b.realName.localeCompare(a.realName);
      },
    },
    {
      title: "UserId",
      dataIndex: "userId",
      align: "center",
      sorter: function (a, b) {
        return b.userId.localeCompare(a.userId);
      },
    },
    {
      title: "Team",
      dataIndex: "team",
      align: "center",
      render: (text, record) => text?.title,
      sorter: function (a, b) {
        let a1 = a.team?.title;
        if (a1 === undefined) a1 = "";
        let b1 = b.team?.title;
        if (b1 === undefined) b1 = "";
        return b1.localeCompare(a1);
      },
    },
    {
      title: "Group",
      dataIndex: "group",
      align: "center",
      render: (text, record) => text?.title,
      sorter: function (a, b) {
        let a1 = a.group?.title;
        if (a1 === undefined) a1 = "";
        let b1 = b.group?.title;
        if (b1 === undefined) b1 = "";
        return b1.localeCompare(a1);
      },
    },
    {
      title: "BirthDay",
      dataIndex: "birthday",
      align: "center",
      render: (txt) => moment(txt).format("YYYY/MM/DD"),
    },
    { title: "GameID", dataIndex: "gameId", align: "center" },
    { title: "IPMsgID", dataIndex: "ipMsgId", align: "center" },
    { title: "Stacks", dataIndex: "stack", align: "center" },
    { title: "Note", dataIndex: "note", align: "center" },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text) => (
        <div
          className={`bg-${colorPerStatus[text] ? colorPerStatus[text] : "red-600"
            } text-white rounded-lg p-1`}
        >
          {text}
        </div>
      ),
    },
  ];
  let DS = [];
  for (let i = 0; i < 1000; i++) {
    DS.push({ _id: i, userId: "user " + i, realName: "name " + i });
  }
  return (
    <div className="flex-wrap w-full">
      <TitleCard
        title={<div />}
        TopSideButtons={
          <div className="relative flex gap-3 items-center w-full ">
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
        topMargin="mt-2"
      >
        <div className="w-full h-full flex">
          <CTable
            onChange={handleTableChange}
            rowClassName={'cursor-pointer'}
            onRow={(record, index) => {
              return {
                onClick: (e) => {
                  setSelectedIndex(index + 1);
                  setShowDetail(true)
                }
              }
            }}
            toFirstPane={toFirstPane}
            rowKey={(row) => row._id}
            dataSource={visibleUsers}
            columns={columns}
            bordered
          />
        </div>
      </TitleCard>
      <Modal
        destroyOnClose
        width="800px"
        footer={null}
        centered
        closable={false}
        className="relative modalStyle"
        style={{ overflow: 'auto' }}
        open={showDetail}
        onCancel={() => setShowDetail(false)}
        afterOpenChange={(openState) => {
          if (openState) {
            modalRef.current.focus()
          }
        }}
      >
        <span className={"absolute bottom-[300px]  left-0 cursor-pointer " + (selectedIndex === 1 ? 'hidden' : 'block')} onClick={(e) => { setSelectedIndex(selectedIndex - 1) }}><ArrowLeftCircleIcon className="w-10 text-blue-500" /></span>
        <div ref={modalRef} className="px-10 outline-none" tabIndex={0} onKeyUp={(e) => {
          if (e.key === 'ArrowLeft' && selectedIndex !== 1) {
            setSelectedIndex(selectedIndex - 1);
          }
          if (e.key === 'ArrowRight' && selectedIndex !== visibleUsers.length) {
            setSelectedIndex(selectedIndex + 1);
          }
        }}>
        </div>
        <Card
          className="border-0 m-[30px] h-[580px] overflow-y-auto"
        >
          <div className="rounded-2xl ">
            <div className="mx-[auto] w-[120px] h-[120px] flex items-center my-[3px] justify-around rounded-full  shadow-2xl">
              <UserImg
                src={
                  process.env.REACT_APP_FILE_URL + "/download/" + visibleUsers[selectedIndex - 1]?.avatar
                }
                className="w-[110px] h-[110px]  rounded-full"
              />
            </div>
            <div className="my-[30px] px-[50px] text-center text-[15px]">
              <div className={(visibleUsers[selectedIndex - 1]?.note === '' || !visibleUsers[selectedIndex - 1]?.note) ? 'py-[15px]' : ''}>
                {visibleUsers[selectedIndex - 1]?.note}
              </div>
            </div>
            <div className="flex mx-[20px]">
              <div className="w-[60%]">
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><UserIcon className={'h-5 w-5 mr-[5px]'} /> UserID  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.userId}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><PencilIcon className={'h-5 w-5 mr-[5px]'} /> Name  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.realName}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><UsersIcon className={'h-5 w-5 mr-[5px]'} /> Team  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.team.title}
                  </span>
                </div>
                <div className="flex">
                  <span className="w-[110px] flex mr-[10px]"><UserGroupIcon className={'h-5 w-5 mr-[5px]'} /> Group  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.group.title}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><SignalIcon className={'h-5 w-5 mr-[5px]'} /> Status  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.status}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><CalendarDaysIcon className={'h-5 w-5 mr-[5px]'} /> Birthday  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.birthday?.substring(0, 10)}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><PaperAirplaneIcon className={'h-5 w-5 mr-[5px]'} /> IpMsg ID  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.ipMsgId}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><CursorArrowRaysIcon className={'h-5 w-5 mr-[5px]'} /> GameId </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.gameId}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><BuildingOffice2Icon className={'h-5 w-5 mr-[5px]'} /> Room </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.roomNo}
                  </span>
                </div>
                <div className="flex items-center my-[3px]">
                  <span className="w-[110px] flex mr-[10px]"><ComputerDesktopIcon className={'h-5 w-5 mr-[5px]'} /> Dev Room  </span>
                  <span className="text-[17px] font-bold">{visibleUsers[selectedIndex - 1]?.devRoomNo}
                  </span>
                </div>
              </div>
              <div className="w-[40%] mx-[20px] flex flex-col">
                <div className=" mb-[20px] flex text-[17px] items-center font-bold"><TrophyIcon className="mr-[5px] h-5 w-5 " />Technical Stacks</div>
                <div className="grow">{visibleUsers[selectedIndex - 1]?.stack?.trim()}</div>
                <Link to={`/user/${visibleUsers[selectedIndex - 1]?._id}`}>
                  <div className="text-right italic">View more info...</div>
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <span className={"absolute bottom-[300px] right-0 cursor-pointer " + (selectedIndex === visibleUsers.length ? "hidden" : 'block')} onClick={(e) => setSelectedIndex(selectedIndex + 1)}><ArrowRightCircleIcon className="w-10 text-blue-500" /></span>
      </Modal>
    </div >
  );
};

export default UsersInfo;
