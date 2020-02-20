import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 测试 - Test
// 404 - 404
// 首页 - Home(/)

// 整体设置 - GlobalSettings
// 登录页 - Login
// 首页 - MainMenu
// 会议背景 - MeetingBackground
// 会议日程 - MeetingSchedule
// 讲师介绍 - LecturerIntroduction
// 赞助商 - Sponsor
// 会务日程 - ConferenceSchedule
// 新增会务 - NewConference
// 调查问卷 - Questionnaire
// 资料下载 - DataDownload
// 联系我们 - ConnectUs
// 个人中心 - PersonalCenter
// 报表 - ReportForms

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/Test")
    },

    {
      path: "/404",
      name: "NotFound404",
      component: () => import("@/views/NotFound404")
    },
    { path: "*", redirect: "/404" },
    // ********* system
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home"),
      redirect: "/mettinglist",
      children: [
        {
          path: "/mettinglist",
          name: "MettingList",
          component: () => import("@/views/MettingList")
        },
        {
          path: "/systemindex",
          name: "SystemIndex",
          component: () => import("@/views/system/SystemIndex"),
          redirect: "/allsetting",
          children: [
            {
              path: "/globalsettings",
              name: "整体设置",
              component: () => import("@/views/system/GlobalSettings")
            },
            {
              path: "/login",
              name: "登录页",
              component: () => import("@/views/system/Login")
            },
            {
              path: "/mainmenu",
              name: "首页",
              component: () => import("@/views/system/MainMenu")
            },
            {
              path: "/meetingbackground",
              name: "会议背景",
              component: () => import("@/views/system/MeetingBackground")
            },
            {
              path: "/meetingschedule",
              name: "会议日程",
              component: () => import("@/views/system/MeetingSchedule")
            },
            {
              path: "/lecturerintroduction",
              name: "讲师介绍",
              component: () => import("@/views/system/LecturerIntroduction")
            },
            {
              path: "/sponsor",
              name: "赞助商",
              component: () => import("@/views/system/Sponsor")
            },
            {
              path: "/conferenceschedule",
              name: "会务日程",
              component: () => import("@/views/system/ConferenceSchedule")
            },
            {
              //
              path: "/newconference",
              name: "新增会务",
              component: () => import("@/views/system/NewConference")
            },
            {
              path: "/questionnaire",
              name: "调查问卷",
              component: () => import("@/views/system/Questionnaire")
            },
            {
              path: "/datadownload",
              name: "资料下载",
              component: () => import("@/views/system/DataDownload")
            },
            {
              path: "/connectus",
              name: "联系我们",
              component: () => import("@/views/system/ConnectUs")
            },
            {
              path: "/personalcenter",
              name: "个人中心",
              component: () => import("@/views/system/PersonalCenter")
            },
            {
              path: "/reportforms",
              name: "报表",
              component: () => import("@/views/system/ReportForms")
            }
          ]
        }
      ]
    }
  ]
});
