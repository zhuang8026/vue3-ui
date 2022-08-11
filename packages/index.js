//导入组件
import atdButton from './button/index';
import atdInput from './input/index';
import mTable from './table/index';
import atdSelect from './select/index';
import mDropdown from './dropDown/index';
import mRadio from './radio/index';
import mCheckbox from './checkbox/index';
import Message from './message/index';
import Confirm from './confirm/index';
import mModal from './modal/index';
import mDrawer from './drawer/index';
import Loading from './loading/index';
import mSwitch from './switch/index';
import mTree from './tree/index';
import mOptfile from './optfile/index';
import atdTextarea from './textarea/index';
import mRow from './mrow/index';
import mCol from './mcol/index';
import mPagination from './pagination/index';
import $mzl from './function/index';
import mDate from './date/index';
import mBacktop from './backtop/index';
import mCollapse from './collapse/index';
import mCollapseItem from './collapse/item/index';
import mMenu from './menu/index';
import mTabs from './tabs/index';
import mSpace from './Space/index';
import mPopover from './popover/index';
import mProgress from './progress/index';
import mColorPicker from './colorPicker/index';
import mBreadcrumb from './breadcrumb/index';
import mBadge from './badge/index';
import mDivider from './divider/index';

//存在所有元件
const components = [
  atdButton,
  atdInput,
  mTable,
  atdSelect,
  mDropdown,
  mRadio,
  mCheckbox,
  mModal,
  mDrawer,
  mSwitch,
  mTree,
  mOptfile,
  atdTextarea,
  mRow,
  mCol,
  mPagination,
  mDate,
  mBacktop,
  mCollapse,
  mCollapseItem,
  mMenu,
  mTabs,
  mSpace,
  mPopover,
  mProgress,
  mColorPicker,
  mBreadcrumb,
  mBadge,
  mDivider
];

const install = app => {
  components.forEach(i => {
    app.use(i);
  });
  app.config.globalProperties.$message = Message;
  app.config.globalProperties.$Confirm = Confirm;
  app.config.globalProperties.$Loading = Loading;
  app.config.globalProperties.$mzl = $mzl;
};
const ATDUEUI = {
  version: '0.0.8',
  install
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 导出的对象
export {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  // 以下是具体的组件列表
  atdButton,
  atdInput,
  mTable,
  atdSelect,
  mDropdown,
  mRadio,
  mCheckbox,
  Message,
  Confirm,
  mModal,
  mDrawer,
  Loading,
  mSwitch,
  mTree,
  mOptfile,
  atdTextarea,
  mRow,
  mCol,
  mPagination,
  $mzl,
  mDate,
  mBacktop,
  mCollapse,
  mCollapseItem,
  mMenu,
  mTabs,
  mPopover,
  mSpace,
  mProgress,
  mColorPicker,
  mBreadcrumb,
  mBadge,
  mDivider
};
export default ATDUEUI;
