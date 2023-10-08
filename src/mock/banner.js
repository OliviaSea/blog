import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "https://www4.bing.com//th?id=OHR.BHNMBelize_ZH-CN9422261941_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=1920&h=1080",
      title: "春风拂面百花香，夏日炎炎绿草长",
      description: "大海波涛滚涌起，浩渺辽阔无边际",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "https://www4.bing.com//th?id=OHR.VerdonCanyon_ZH-CN8872507857_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=1920&h=1080",
      title: "江水悠悠宛如画，山峦叠嶂美无瑕",
      description: "风吹松涛细腻音，溪水潺潺石上吟",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "https://www4.bing.com//th?id=OHR.FannetteIsland_ZH-CN2395055456_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=1920&h=1080",
      title: "翠竹深深掩春色，山光水色共斑斓",
      description: "云轻鸟影共舞蓝，花开花落烂漫间",
    },
    {
      id: "4",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "https://www4.bing.com//th?id=OHR.VerdonCanyon_ZH-CN8872507857_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=1920&h=1080",
      title: "江水悠悠宛如画，山峦叠嶂美无瑕",
      description: "风吹松涛细腻音，溪水潺潺石上吟",
    },
  ],
});
