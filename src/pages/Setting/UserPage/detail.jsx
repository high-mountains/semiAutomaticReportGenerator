import { EyeIcon, HandThumbDownIcon, HandThumbUpIcon, ClockIcon,KeyIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const ArticleDetail = (props) => {
  const { item } = props
  const { user } = useSelector((state) => state.user)
  return (
      <Link to={`/interchange/article/view/${item._id}?KD=${user._id}`}>
      <div className="relative bg-base-200  w-full rounded-lg flex shadow-md p-1 mb-2 transition-all duration-100 hover:shadow-lg hover:bg-base-100">
        <div className="pt-2 w-32 flex items-center flex-col">
          <div className="w-12 h-12 rounded-full justify-center items-center flex">
            <img 
            src={process.env.REACT_APP_FILE_URL + `/download/${item?.user?.avatar}`} 
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="/avatar.png";
            }}
            alt="profile" 
            className="w-12 h-12 rounded-full" 
            />
          </div>
          <div className="text-center text-sm pt-1 line-clamp-1">{item?.user?.realName}</div>
        </div>
        <div className="w-[calc(100%-60px)] flex flex-col pl-2">
          <div className="flex items-center justify-between">
            {
              (item?.user?._id !== user._id && !item?.browse.filter(item => item?._id === user._id).length) && <span className='absolute top-2 rounded-md -left-1 -rotate-45 z-index-1 text-xs items-center text-white bg-red-600 px-1'>NEW</span>
            }
            <div className="pt-1 text-xl line-clamp-1 w-[calc(100%-450px)] break-all font-semibold">{item?.title}</div>
            <div className='flex justify-end'>
              <span className='text-md bg-base-300 px-2 items-center rounded-full flex mr-auto'>
              {item?.category?.title}
              </span>
            </div>
          </div>
          <div className='flex justify-between pr-1'>
            <span className="pt-1 line-clamp-1 h-[25px] overflow-hidden hyphens-manual w-[calc(100%-400px)] break-all" dangerouslySetInnerHTML={{ __html: item?.content}} />
            {
              item?.type !== 'undefined' &&
              <span className={`text-md ${item?.type == 'help' ? 'bg-red-500' : (item?.type == 'contribution' ? 'bg-blue-500' : 'bg-green-500')} px-2 flex rounded-full h-[20px] items-center`}>{item?.type}</span>
            }
          </div>
          <div className="w-full flex justify-between pt-1 pr-2 items-center">
            <div className='flex gap-x-1 w-[calc(100%-350px)]'>
              {
                    item?.summary.map((item, key) => (key < 3 &&<div key={key} className='flex items-center gap-x-2 bg-base-100 rounded-full break-all'><span className='line-clamp-1 max-w-[100px] text-sm px-1'>{item}</span></div>))
                  }
              {
                    item?.summary.length > 3 && <div className='flex items-center gap-x-2 bg-base-100 rounded-full break-all'><span className='w-[30px] text-sm text-center'>.  .  .  .</span></div>
                  }
            </div>
            <div className='flex gap-x-1 items-center w-[330px]'>
                  <div className="px-2 rounded-full flex basis-1/6 justify-start items-center" ><EyeIcon className="w-5 h-5 mr-2" /> {item?.browse?.length}</div>
                  <div className="px-2 rounded-full flex basis-1/6 justify-start items-center" ><HandThumbUpIcon className="w-5 h-5 mr-2" /> {item?.like?.length}</div>
                  <div className="px-2 rounded-full flex basis-1/6 justify-start items-center" ><HandThumbDownIcon className="w-5 h-5 mr-2" /> {item?.unlike?.length}</div>
                  <span className='text-sm font-bold py-1 pl-2 pr-3 items-center rounded-full flex basis-1/2 justify-start items-center'><ClockIcon className="w-5 h-5 mr-2" />
                        {moment(item?.createdAt).fromNow(false)}
                  </span>  
            </div>
          </div>
        </div>
      </div>
      </Link>
  );
};

export default ArticleDetail;
