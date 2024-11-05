import { useState } from 'react';
import { Switch, Modal } from 'antd'

const ServiceManage = () => {
    const [modal, contextHolder] = Modal.useModal();
    const [frontendToggle, setFrontendToggle] = useState(true);
    const [mainToggle, setMainToggle] = useState(true);
    const [socketToggle, setSocketToggle] = useState(true);
    const [fileToggle, setFileToggle] = useState(true);


    const handleInfoView = () => {
        modal.info({
            title: 'Status',
            maskClosable: true,
            mask: false,
            content: (
                <>localhost:3000 port is running now</>
            )
        })
    }

    return (
        <div className="serviceManage ">
            {contextHolder}
            <div className=" justify-center pt-10 flex">
                <img src="./ElevatedAppBlue.png" alt="logo" className="w-20 ml-10 h-20 rounded-full" />
                <span className="font-sans text-5xl text-gray-100 text-center py-5 ">Server Manage</span>
            </div>
            <div className='flex justify-center w-full'>
                <div className='py-8 px-8  w-[600px] rounded-lg border bg-base-300 bg-opacity-60 shadow-2xl border-blue-400 shadow-blue-900 mt-5'>
                    <div className="items-center pl-6 flex grid-cols-4  gap-24">
                        <span className="  text-xl font-mono">Frontend: 3000</span>
                        <button onClick={handleInfoView}>
                            <span className="  text-xl font-mono">Status</span>
                        </button>
                        <Switch checked={frontendToggle} onClick={(e) => setFrontendToggle(e)} />
                    </div>
                    <div className="items-center pl-6 flex mt-16 grid-cols-4 gap-24">
                        <span className="  text-xl font-mono">Main: 6001</span>
                        <button onClick={handleInfoView}>
                            <span className="  pl-11 text-xl font-mono">Status</span>
                        </button>
                        <Switch checked={mainToggle} onClick={(e) => setMainToggle(e)} />
                    </div>
                    <div className="items-center pl-6 flex mt-16 grid-cols-4 gap-24">
                        <span className="  text-xl font-mono">Socket: 6003</span>
                        <button onClick={handleInfoView}>
                            <span className="  text-xl pl-5 font-mono">Status</span>
                        </button>
                        <Switch checked={socketToggle} onClick={(e) => setSocketToggle(e)} />
                    </div>
                    <div className="items-center pl-6 flex mt-16 grid-cols-4 gap-24">
                        <span className="  text-xl font-mono">File: 6004</span>
                        <button onClick={handleInfoView}>
                            <span className="  text-xl pl-11 font-mono">Status</span>
                        </button>
                        <Switch checked={fileToggle} onClick={(e) => setFileToggle(e)} />
                    </div></div></div>
        </div>
    )
}

export default ServiceManage