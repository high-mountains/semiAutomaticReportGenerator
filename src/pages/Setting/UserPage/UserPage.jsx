import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleCard from "../../../components/Cards/TitleCard";
import { Card } from "antd";

import UserImg from "../../common/userImg"
import {
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

import Detail from  './detail';
import { Link } from 'react-router-dom';


import axios from "axios";
function UserPage() {
  const params = useParams();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await axios.get(`/userinfo/${params?._id}`);
      if (userInfo.data) {
        setUserInfo(userInfo.data);
      }
    }
    getUserInfo();

    loadNewArticles();
  }, [params])

  const [ ownArticles, setOwnArticles ] = useState([]);
  const [ articleCount, setArticleCount ] = useState(0);
  const loadNewArticles = async () => {
        try {
              const res = await axios.get(`/forUserboard/${params?._id}`);
              setOwnArticles(res.data.articles);
              setArticleCount(res.data.articlesCount);

        } catch (error) {
              console.log(error);
        }
  }

  return (
    <>
      <TitleCard topMargin="mt-0 ml-0" title={<div />}>
        <Card
          className="w-full border-0 m-[30px]  overflow-y-auto"
        >
          <div className="flex gap-x-7">
            <div className="w-[35%] pb-[30px] border-[1px] shadow-lg">
              <div className="rounded-2xl ">
                <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[15px]">
                  <div className="mx-[auto] bg-[#eeeeee] w-[120px] h-[120px] flex items-center my-[10px] justify-around rounded-full  shadow-2xl">
                    <UserImg
                      src={
                        process.env.REACT_APP_FILE_URL + "/download/" + userInfo?.avatar
                      }
                      className="w-[115px] h-[115px]  rounded-full"
                    />
                  </div>
                </div>

                <div className="my-[10px] px-[50px] text-center text-[15px]">
                  <div className={(userInfo?.note === '' || !userInfo?.note) ? 'py-[15px]' : ''}>
                    {userInfo?.note}
                  </div>
                </div>
                <div className="mx-[20px]">
                  <div className="w-full px-[10px] flex flex-wrap justify-between">
                    <div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><UserIcon className={'h-5 w-5 mr-[5px]'} /> UserID  </span>
                        <span className="text-[17px] font-bold">{userInfo?.userId}
                        </span>
                      </div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><PencilIcon className={'h-5 w-5 mr-[5px]'} /> Name  </span>
                        <span className="text-[17px] font-bold">{userInfo?.realName}
                        </span>
                      </div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><UsersIcon className={'h-5 w-5 mr-[5px]'} /> Team  </span>
                        <span className="text-[17px] font-bold">{userInfo?.team.title}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="w-[100px] flex mr-[10px]"><UserGroupIcon className={'h-5 w-5 mr-[5px]'} /> Group  </span>
                        <span className="text-[17px] font-bold">{userInfo?.group.title}
                        </span>
                      </div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><SignalIcon className={'h-5 w-5 mr-[5px]'} /> Status  </span>
                        <span className="text-[17px] font-bold">{userInfo?.status}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><CalendarDaysIcon className={'h-5 w-5 mr-[5px]'} /> Birthday  </span>
                        <span className="text-[17px] font-bold">{userInfo?.birthday?.substring(0, 10)}
                        </span>
                      </div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><PaperAirplaneIcon className={'h-5 w-5 mr-[5px]'} /> IpMsg ID  </span>
                        <span className="text-[17px] font-bold">{userInfo?.ipMsgId}
                        </span>
                      </div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><CursorArrowRaysIcon className={'h-5 w-5 mr-[5px]'} /> GameId </span>
                        <span className="text-[17px] font-bold">{userInfo?.gameId}
                        </span>
                      </div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><BuildingOffice2Icon className={'h-5 w-5 mr-[5px]'} /> Room </span>
                        <span className="text-[17px] font-bold">{userInfo?.roomNo}
                        </span>
                      </div>
                      <div className="flex items-center my-[10px]">
                        <span className="w-[100px] flex mr-[10px]"><ComputerDesktopIcon className={'h-5 w-5 mr-[5px]'} /> Dev Room  </span>
                        <span className="text-[17px] font-bold">{userInfo?.devRoomNo}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" my-[20px] pt-[20px] border-t-[1px] flex text-[17px] items-center font-bold"><TrophyIcon className="mr-[5px] h-5 w-5 " />Technical Stacks</div>
                  <div>{userInfo?.stack?.trim()}</div>
                </div>
              </div>
            </div>
            <div className="w-[65%] border-[1px]">
                <TitleCard
                    title={"Articles"}
                    TopSideButtons={
                          <div className='flex'>
                                Total Articles:{" "}<span className='text-red-600 ml-2 font-bold'>{articleCount}</span>
                                <div className="border rounded px-1 ml-3">
                                      <Link to={`/interchange/article?KD=${params?._id}`}>
                                            View All
                                      </Link>
                                </div>
                          </div>
              }>
                    <div className='w-full h-full overflow-auto'>
                          {ownArticles.length ?
                          ownArticles.map((item, index) => {
                                return <Detail key = {index} item={item}/>
                          }) : <div className='w-full h-full flex font-extrabold justify-center text-2xl'>No Article.</div>
                          }
                    </div>
              </TitleCard>
            </div>
          </div>

        </Card>
      </TitleCard>
    </>
  );
}

export default UserPage;
