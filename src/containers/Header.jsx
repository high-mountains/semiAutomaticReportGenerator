import _ from "lodash";
import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notification } from 'antd';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon"
import { toggleOpen } from "../features/common/sidebarSlice";
import { Tooltip } from 'antd';
import { logOut } from "../features/user/userSlice";
import { csvDataUpload } from "../features/common/pdfSlice";
import UserImg from "../pages/common/userImg";
import NotifyPage from "./Notify";
import { Link, useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { NotificationManager } from "react-notifications";
import { setPdfFlag, setCurrentRunningPage, setTotalPage } from "../features/common/pdfSlice";

// import { downloadPDF } from "../tool/jspdf";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = useSelector(state => state.socket);
  const { user } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState('');
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(setTotalPage(totalElements));
    dispatch(setCurrentRunningPage(currentPage));
  }, [totalElements, currentPage])
  
  // useEffect(() => {
  //   if (user) {
  //     setAvatar(user.avatar)
  //   }
  // }, [user]);
  
  useEffect(() => {
    themeChange(false);
    // if (currentTheme === null) {
    //   if (
    //     window.matchMedia &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches
    //   ) {
    //     setCurrentTheme("dark");
    //   } else {
    //     setCurrentTheme("light");
    //   }
    // }
    // 👆 false parameter is required for react project
  }, []);

  const downloadPDF = async (title = "") => {
    const elements = document.querySelectorAll(".printUnit");

    // Set total elements count
    setTotalElements(elements.length);

    const pdf = new jsPDF({
      orientation: "p",
      unit: "px",
      format: "a4"
    });

    const processBatch = async (batch) => {
      for (let i = 0; i < batch.length; i++) {
        const element = batch[i];

        try {
          const canvas = await html2canvas(element, { scale: 1.5 });
          const imgData = canvas.toDataURL("image/jpeg", 0.8); // Use JPEG for compression

          const imgWidth = canvas.width;
          const imgHeight = canvas.height;

          const pdfPageWidth = pdf.internal.pageSize.getWidth();
          const pdfPageHeight = pdf.internal.pageSize.getHeight();

          const widthRatio = pdfPageWidth / imgWidth;
          const heightRatio = pdfPageHeight / imgHeight;

          const scaleFactor = Math.min(widthRatio, heightRatio);
          const scaledWidth = imgWidth * scaleFactor;
          const scaledHeight = imgHeight * scaleFactor;

          const xOffset = (pdfPageWidth - scaledWidth) / 2;
          const yOffset = (pdfPageHeight - scaledHeight) / 2;

          pdf.addImage(imgData, "JPEG", xOffset, yOffset, scaledWidth, scaledHeight);

          if (i < batch.length - 1 || batch.index !== elements.length - 1) {
            pdf.addPage();
          }
        } catch (error) {
          console.error(`Error processing element ${i}`, error);
        }
      }
    };

    const batchSize = 8; // Set a smaller batch size for better stability

    for (let i = 0; i < elements.length; i += batchSize) {
      const batch = Array.from(elements).slice(i, i + batchSize);

      // Update current page number
      setCurrentPage(i + 1);

      await processBatch(batch);

      // Optional: Adding a short delay to avoid freezing the browser
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log(`Processed batch ${i / batchSize + 1}`);
    }

    // Save the PDF
    pdf.save("download.pdf");

    // Reset current page after processing
    setCurrentPage(0);

  //   setTimeout(async () => {
  //     let elems = document.querySelectorAll<HTMLElement>(".printUnit")
  //     const doc = new jsPDF({
  //       orientation: "p",
  //       format: "a4",
  //     })
  //     for (let i = 0; i < elems.length; i++) {
  //       console.log("OUT export PDF");
  //         const elem = elems[i]
  //         if ($(elem).find("canvas").length == 0) continue
  //         console.log("IN export PDF", i);
          
  //         const canvas = await html2canvas(elem, { scale: 2 })
  //         const dataURI = canvas.toDataURL("image/png")
  //         doc.setPage(+i + 1)
  //         if (canvas.height / doc.internal.pageSize.height > canvas.width / doc.internal.pageSize.width) {
  //             doc.addImage(dataURI, "JPEG", (doc.internal.pageSize.width - canvas.width / (canvas.height / doc.internal.pageSize.height)) / 2, 10, 0, doc.internal.pageSize.height - 20)
  //         } else {
  //             doc.addImage(dataURI, "JPEG", 10, (doc.internal.pageSize.height - canvas.height / (canvas.width / doc.internal.pageSize.width)) / 2, doc.internal.pageSize.width - 20, 0)
  //         }
  //         if (+i < elems.length - 1) doc.addPage()
  //     }
  //     doc.save(title + ".pdf")
  // }, 1500)
  };

  // function logoutUser() {
  //   window.socket && window.socket.disconnect();
  //   dispatch(logOut());
  //   navigate("/login");
  // }
  // const onDropDownBtnClick = () => {
  //   setShowDropdown(!showDropdown)
  // }

  const handleFolderUpload = (event) => {
    const files = Array.from(event.target.files);

        // Define the specific file names we want to select
        const allowedFileNames = ["category_data.csv", "gene_data.csv", "recommend_data.csv", "not_recommend_data.csv", "rsid_data.csv", "type_data.csv"];

        // Filter for only the specific files we're interested in
        const specificCsvFiles = files.filter(file => 
            file.name.endsWith(".csv") && allowedFileNames.includes(file.name)
        );

        const allData = [];

        specificCsvFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                Papa.parse(text, {
                    header: true, // Set to true if your CSV has headers
                    complete: (results) => {
                        // Store each file's name and data in the allData array
                        allData.push({ fileName: file.name, data: results.data });
                        
                        // Once all files are processed, update the state
                        if (allData.length === specificCsvFiles.length) {
                            // setCsvData(allData);
                            dispatch(csvDataUpload(allData));
                        }
                    }
                });
            };
            reader.readAsText(file);
        });

      notification['success']({
        message: 'Success',
        description:
          'Upload is completed',
          key: new Date().getTime(), // Use a unique key each time
      });

      setTimeout(() => {notification['success']({
        message: 'Sucess',
        description:
          'Data is overwrited successfully',
          key: new Date().getTime(), // Use a unique key each time
      });}, 500)
  }

  const handleDownloadPdf = async () => {
    await dispatch(setPdfFlag(true))
    console.log("IN handleDownloadPdf===>");
    await downloadPDF();
    console.log("OUT handleDownloadPdf===>");
    await dispatch(setPdfFlag(false));
    
    notification['success']({
      message: 'Success',
      description:
        'Download is completed',
        key: new Date().getTime(), // Use a unique key each time
    });
  
  }

  return (
    <>
      <div className="z-10 flex justify-between shadow-md navbar bg-base-100 py-[4rem]">
        {/* Menu toogle for mobile view or small screen */}
        {/* <ForReportNum>
        
        </ForReportNum> */}
        
        <div className="ml-[10rem]" >
          <input
                type="file"
                id="file"
                webkitdirectory="true"
                directory=""
                multiple
                onChange={handleFolderUpload}
                className="font bg-[#00C3D0] text-[#fff] hover:bg-[#b4eeef] hover:text-[#00C3D0] w-[200rem] h-[25rem] text-[16rem]"
            />
            {/* <label htmlFor="file" className="custom-file-label ">CSVデータアップロード</label> */}
            <label htmlFor="file" className="custom-file-label ">Import CSV File</label>
        </div>

        <div className="mr-[10rem]">
          <button
              className="font bg-[#00C3D0] text-[#fff] hover:bg-[#b4eeef] hover:text-[#00C3D0] rounded-[5rem] flex flex-row items-center justify-center p-[8rem]"
              onClick={() => handleDownloadPdf()}
          >
              <ArrowDownTrayIcon className={"fill-current w-[28rem] h-[25rem]"}/><p className="ml-[3rem] text-[14rem]">PDF Download</p>
          </button>
        </div>

        {/* <div className="order-last"> */}
          
          {/* <label className="px-[10rem] swap">
            <input type="checkbox" />
            <SunIcon
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-[28rem] h-[28rem] " +
                (currentTheme === "dark" ? "swap-on" : "swap-off")
              }
            />
            <MoonIcon
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-[28rem] h-[28rem] " +
                (currentTheme === "light" ? "swap-on" : "swap-off")
              }
            />
          </label> */}

          {/* <NotifyPage /> */}

          {/* <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="pt-[0rem] btn btn-ghost btn-full avatar h-[64rem]"
              onClick={onDropDownBtnClick}
            >
              <div className="w-[36rem] h-[36rem] mr-[4rem] rounded-full">
                <UserImg src={
                  process.env.REACT_APP_FILE_URL +
                  "/download/" +
                  avatar
                } fallbackSrc='avatar.png'/>
              </div>
              <p className="text-[14rem]">
                {user?.userId || "unknown"}
              </p>
            </label>
            <ul
              tabIndex={0}
              className={showDropdown ? "menu menu-compact dropdown-content mt-[12rem] p-[8rem] shadow bg-base-100 rounded-box w-[208rem]" : 'hidden'}
            >
              <li className="justify-between" onClick={onDropDownBtnClick}>
                <Link to={`/user/${user?._id}`} className="text-[16rem]">
                  <p className="text-[14rem]">My Page</p>
                </Link>
                <Link to={"/settings/profile"} className="text-[16rem]">
                  <p className="text-[14rem]">Profile Settings</p>
                </Link>
              </li>
              <li className="justify-between" onClick={onDropDownBtnClick}>
                <Link to={"/system/my-plan"} className="text-[16rem]">
                  <p className="text-[14rem]">My Plan</p>
                </Link>
              </li>
              <div className="mt-0 mb-0 divider"></div>
              <li>
                <a onClick={logoutUser} className="text-[16rem]">
                  Logout
                  </a>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
      </div >
    </>
  );
}

export default Header;
