/** Icons are imported separatly to reduce build time */
import {
  DocumentDuplicateIcon,
  DocumentChartBarIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  ViewColumnsIcon,
  CpuChipIcon,
  BanknotesIcon,
  ComputerDesktopIcon,
  DocumentMagnifyingGlassIcon,
  NewspaperIcon,
  BugAntIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  QueueListIcon,
  RectangleGroupIcon,
  TrophyIcon,
  KeyIcon,
  UserGroupIcon,
  BellAlertIcon,
  UsersIcon,
  InboxArrowDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BoltIcon,
  Cog6ToothIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  DocumentIcon,
  DocumentTextIcon,
  CodeBracketSquareIcon,
  BellIcon,
  Squares2X2Icon,
  TableCellsIcon,
  WalletIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "", //no url needed as this has submenu
    icon: <CpuChipIcon className={`${iconClasses} inline`} />, // icon component
    name: "System", // name that appear in Sidebar
    submenu: [
      {
        path: "/interchange/server-data", // url
        icon: <BugAntIcon className={iconClasses} />, // icon component
        name: "Server Data", // name that appear in Sidebar
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/settings/profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar

      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    icon: <AcademicCapIcon className={`${iconClasses} inline`} />, // icon component
    name: "Admin Manager", // name that appear in Sidebar
    submenu: [
      
      {
        path: "/admin/bussiness",
        icon: <RectangleGroupIcon className={submenuIconClasses} />,
        name: "Bussiness",
      },
      
      {
        path: "/admin/users",
        icon: <UsersIcon className={submenuIconClasses} />,
        name: "Users",
      },
    ],
  },
];

export default routes;
