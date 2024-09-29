export const Competence = [
  {
    children: [
      {
        always_show: null,
        component: () => import("/src/views/system/menu/index.vue"),
        hidden: false,
        icon: "document",
        id: 1,
        igrade: 1,
        keep_alive: true,
        meta: {
          title: "权限管理",
          icon: "document",
          hidden: false,
          roles: [],
        },
        name: "权限管理",
        parent_id: 1,
        path: "menu",
        title: "权限管理",
      },
      {
        always_show: null,
        component: () => import("/src/views/system/role/index.vue"),
        hidden: false,
        icon: "document",
        id:2,
        igrade: 2,
        keep_alive: true,
        meta: {
          title: "角色管理",
          icon: "document",
          hidden: false,
          roles: [],
        },
        name: "角色管理",
        parent_id:2,
        path: "role",
        title: "角色管理",
      },
   
    ],
    component: () => import("/src/layout/index.vue"),
    hidden: false,
    meta: {
      hidden: false,
      icon: "document",
      roles: ["ROOT", "ADMIN", "vendor"],
      title: "菜单设置",
    },
    icon: "setting",
    id: 0,
    name: "菜单设置",
    path: "/menu",
    parent_id: 0,
    keep_alive: null,
    igrade: 0,
  },
  {
  children: [
    {
      always_show: null,
      component: () => import("/src/views/storeManage/WarehouseWarrant.vue"),
      hidden: false,
      icon: "document",
      id:12,
      igrade: 12,
      keep_alive: true,
      meta: {
        title: "入库单",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "入库单",
      parent_id:12,
      path: "inventory",
      title: "入库单",
    },
    {
      always_show: null,
      component: () => import("/src/views/storeManage/WwList.vue"),
      hidden: false,
      icon: "document",
      id: 11,
      igrade: 11,
      keep_alive: true,
      meta: {
        title: "入库单列表",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "入库单列表",
      parent_id: 11,
      path: "inventoryList",
      title: "入库单列表",
    },
  ],
  component: () => import("/src/layout/index.vue"),
  hidden: false,
  meta: {
    hidden: false,
    icon: "document",
    roles: ["ROOT", "ADMIN", "vendor"],
    title: "入库管理",
  },
  icon: "setting",
  id: 10,
  name: "入库管理",
  path: "/storeManage",
  parent_id: 10,
  keep_alive: null,
  igrade: 10,
},
{
  children: [
    {
      always_show: null,
      component: () => import("/src/views/shipOut/OutboundOrder.vue"),
      hidden: false,
      icon: "document",
      id:22,
      igrade: 22,
      keep_alive: true,
      meta: {
        title: "出库单",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "出库单",
      parent_id:22,
      path: "warehouse",
      title: "出库单",
    },
    {
      always_show: null,
      component: () => import("/src/views/shipOut/OoList.vue"),
      hidden: false,
      icon: "document",
      id: 21,
      igrade: 21,
      keep_alive: true,
      meta: {
        title: "出库单列表",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "出库单列表",
      parent_id: 21,
      path: "warehouseList",
      title: "出库单列表",
    },
  ],
  component: () => import("/src/layout/index.vue"),
  hidden: false,
  meta: {
    hidden: false,
    icon: "document",
    roles: ["ROOT", "ADMIN", "vendor"],
    title: "出库管理",
  },
  icon: "setting",
  id: 20,
  name: "出库管理",
  path: "/shipOut",
  parent_id: 20,
  keep_alive: null,
  igrade: 20,
},
{
  children: [
    {
      always_show: null,
      component: () => import("/src/views/cargoSpace/FCFind.vue"),
      hidden: false,
      icon: "document",
      id: 31,
      igrade: 31,
      keep_alive: true,
      meta: {
        title: "货位档案查询",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "货位档案查询",
      parent_id: 31,
      path: "FCFind",
      title: "货位档案查询",
    },
    {
      always_show: null,
      component: () => import("/src/views/cargoSpace/FCEdit.vue"),
      hidden: false,
      icon: "document",
      id: 32,
      igrade: 32,
      keep_alive: true,
      meta: {
        title: "货位档案维护",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "货位档案维护",
      parent_id: 32,
      path: "FCEdit",
      title: "货位档案维护",
    },
    {
      always_show: null,
      component: () => import("/src/views/cargoSpace/FCPrint.vue"),
      hidden: false,
      icon: "document",
      id: 33,
      igrade: 33,
      keep_alive: true,
      meta: {
        title: "货位标签打印",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "货位标签打印",
      parent_id: 33,
      path: "FCPrint",
      title: "货位标签打印",
    },
  ],
  component: () => import("/src/layout/index.vue"),
  hidden: false,
  meta: {
    hidden: false,
    icon: "document",
    roles: ["ROOT", "ADMIN", "vendor"],
    title: "货位档案",
  },
  icon: "setting",
  id: 20,
  name: "货位档案",
  path: "/cargoSpace",
  parent_id: 20,
  keep_alive: null,
  igrade: 20,
},
{
  children: [
    {
      always_show: null,
      component: () => import("/src/views/lending/AsnAdd.vue"),
      hidden: false,
      icon: "document",
      id:42,
      igrade: 42,
      keep_alive: true,
      meta: {
        title: "借出单",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "借出单",
      parent_id:42,
      path: "debitOrder",
      title: "借出单",
    },
    {
      always_show: null,
      component: () => import("/src/views/lending/AsnvoucherList.vue"),
      hidden: false,
      icon: "document",
      id: 41,
      igrade: 41,
      keep_alive: true,
      meta: {
        title: "借出单列表",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "借出单列表",
      parent_id: 41,
      path: "debitOrderList",
      title: "借出单列表",
    },
  ],
  component: () => import("/src/layout/index.vue"),
  hidden: false,
  meta: {
    hidden: false,
    icon: "document",
    roles: ["ROOT", "ADMIN", "vendor"],
    title: "借出管理",
  },
  icon: "setting",
  id: 40,
  name: "借出管理",
  path: "/lending",
  parent_id: 40,
  keep_alive: null,
  igrade: 40,
},
{
  children: [
    {
      always_show: null,
      component: () => import("/src/views/revert/AsnAdd.vue"),
      hidden: false,
      icon: "document",
      id:52,
      igrade: 52,
      keep_alive: true,
      meta: {
        title: "归还单",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "归还单",
      parent_id:52,
      path: "returnSlip",
      title: "归还单",
    },
    {
      always_show: null,
      component: () => import("/src/views/revert/AsnvoucherList.vue"),
      hidden: false,
      icon: "document",
      id: 51,
      igrade: 51,
      keep_alive: true,
      meta: {
        title: "归还单列表",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "归还单列表",
      parent_id: 51,
      path: "returnSlipList",
      title: "归还单列表",
    },
  ],
  component: () => import("/src/layout/index.vue"),
  hidden: false,
  meta: {
    hidden: false,
    icon: "document",
    roles: ["ROOT", "ADMIN", "vendor"],
    title: "归还管理",
  },
  icon: "setting",
  id: 50,
  name: "归还管理",
  path: "/revert",
  parent_id: 50,
  keep_alive: null,
  igrade: 50,
},
{
  children: [
    {
      always_show: null,
      component: () => import("/src/views/takeStock/AsnAdd.vue"),
      hidden: false,
      icon: "document",
      id:62,
      igrade: 62,
      keep_alive: true,
      meta: {
        title: "盘点单",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "盘点单",
      parent_id:62,
      path: "sheet",
      title: "盘点单",
    },
    {
      always_show: null,
      component: () => import("/src/views/takeStock/AsnvoucherList.vue"),
      hidden: false,
      icon: "document",
      id: 61,
      igrade: 61,
      keep_alive: true,
      meta: {
        title: "盘点单列表",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "盘点单列表",
      parent_id: 61,
      path: "sheetList",
      title: "盘点单列表",
    },
  ],
  component: () => import("/src/layout/index.vue"),
  hidden: false,
  meta: {
    hidden: false,
    icon: "document",
    roles: ["ROOT", "ADMIN", "vendor"],
    title: "盘点管理",
  },
  icon: "setting",
  id: 60,
  name: "盘点管理",
  path: "/takeStock",
  parent_id: 60,
  keep_alive: null,
  igrade: 60,
},
{
  children: [
    {
      always_show: null,
      component: () => import("/src/views/takeStock/AsnAdd.vue"),
      hidden: false,
      icon: "document",
      id:72,
      igrade: 72,
      keep_alive: true,
      meta: {
        title: "转移单",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "转移单",
      parent_id:72,
      path: "materialMono",
      title: "转移单",
    },
    {
      always_show: null,
      component: () => import("/src/views/takeStock/AsnvoucherList.vue"),
      hidden: false,
      icon: "document",
      id: 71,
      igrade: 71,
      keep_alive: true,
      meta: {
        title: "物料转移单列表",
        icon: "document",
        hidden: false,
        roles: [],
      },
      name: "物料转移单列表",
      parent_id: 71,
      path: "materialMonoList",
      title: "物料转移单列表",
    },
  ],
  component: () => import("/src/layout/index.vue"),
  hidden: false,
  meta: {
    hidden: false,
    icon: "document",
    roles: ["ROOT", "ADMIN", "vendor"],
    title: "物料转移",
  },
  icon: "setting",
  id: 70,
  name: "物料转移",
  path: "/material",
  parent_id: 70,
  keep_alive: null,
  igrade: 70,
},
];
