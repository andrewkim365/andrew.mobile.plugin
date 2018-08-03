﻿/******JS插件按需引入（注意：插件名称和插件文件名需要保持一致，而且插件文件必须要放到plugin目录里面，否则会出错！）******/
/*
参数说明：Andrew_Plugin("插件名称或插件的js文件名","该插件是否存在相关css文件？存在写css，不存在设为空。");
* 做项目时不必要的插件可以注释处理。
* 注：调用插件的地方在router目录里的相关html文件中的最底部。
*/
Andrew_Plugin("Andrew_AllChecked"); //全选功能
Andrew_Plugin("Andrew_ButtonSubmit","css"); //防止重复提交功能
Andrew_Plugin("Andrew_ChangeIcon"); //图标切换功能
Andrew_Plugin("Andrew_ChangeInput"); //输入框值互换功能
Andrew_Plugin("Andrew_Checkbox","css"); //复选框美化
Andrew_Plugin("Andrew_ChooseList"); //按钮模式复选和单选功能
Andrew_Plugin("Andrew_Circliful"); //圆形统计插件
Andrew_Plugin("Andrew_Codeval","css"); //图片验证功能
Andrew_Plugin("Andrew_CountDown"); //倒计时功能
Andrew_Plugin("Andrew_CountTo"); //数字动画效果
Andrew_Plugin("Andrew_DateTime","css"); //日期和时间插件
Andrew_Plugin("Andrew_Dialog","css"); //alert，confirm，prompt等弹出层功能
Andrew_Plugin("Andrew_DropLoad","css"); //上拉刷新和下拉加载更多功能
Andrew_Plugin("Andrew_DropUpDown"); //列表展开和收起功能
Andrew_Plugin("Andrew_Favorite"); //点赞或收藏功能
Andrew_Plugin("Andrew_Form"); //表单提交相关效果
Andrew_Plugin("Andrew_GetVerifyCode"); //手机短信验证码认证功能
Andrew_Plugin("Andrew_GoTop"); //返回页面顶部插件
Andrew_Plugin("Andrew_IntlTelInput","css"); //国际区号选择功能
Andrew_Plugin("Andrew_Keyboard","css"); //安全键盘
Andrew_Plugin("Andrew_Lazyload"); //图片加载时有动画效果
Andrew_Plugin("Andrew_lightSlider","css"); //图片列表左右滑动功能
Andrew_Plugin("Andrew_Loader","css"); //Loading效果功能
Andrew_Plugin("Andrew_Marquee","css"); //上下左右滚动插件
Andrew_Plugin("Andrew_MobileChat","css"); //移动端聊天功能插件
Andrew_Plugin("Andrew_MultiDate","css"); //多功能日期和时间插件
Andrew_Plugin("Andrew_NavScroll"); //导航滑动功能（今日头条）
Andrew_Plugin("Andrew_NowTime"); //获取当前时间的功能
Andrew_Plugin("Andrew_Paginator","css"); //分页插件
Andrew_Plugin("Andrew_Popupwin"); //弹窗功能
Andrew_Plugin("Andrew_PortraitImage","css"); //头像上传功能
Andrew_Plugin("Andrew_PreviewImage","css"); //同时上传多个图片的功能
Andrew_Plugin("Andrew_Progress","css"); //进度条插件
Andrew_Plugin("Andrew_QRcode"); //二维码生成插件
Andrew_Plugin("Andrew_Radio","css"); //单选框美化
Andrew_Plugin("Andrew_Range","css"); //滑块功能插件
Andrew_Plugin("Andrew_Ratyli"); //星级评价功能
Andrew_Plugin("Andrew_ScrollFixed"); //当屏幕滑动时把指定元素固定到页面顶部的功能
Andrew_Plugin("Andrew_Select","css"); //移动端专用下拉菜单功能
Andrew_Plugin("Andrew_SelectOption","css"); //pc端专用select下拉框插件
Andrew_Plugin("Andrew_Slider","css"); //欢迎页和联播图功能
Andrew_Plugin("Andrew_Spinner"); //数量控制功能
Andrew_Plugin("Andrew_StepOrder"); //步骤插件
Andrew_Plugin("Andrew_Substring"); //输入框里输入的数字强行转换为人民币格式的插件
Andrew_Plugin("Andrew_Switch","css"); //开关按钮美化
Andrew_Plugin("Andrew_Tabs"); //TABS切换内容功能
Andrew_Plugin("Andrew_Template"); //模板引擎插件
Andrew_Plugin("Andrew_Textarea"); //多行输入框实时查询字符数的功能
Andrew_Plugin("Andrew_TouchDelete","css"); //列表滑动删除功能
Andrew_Plugin("Andrew_TimeAxis","css"); //时间轴展示功能
Andrew_Plugin("Andrew_Typeahead","css"); //模糊搜索功能
Andrew_Plugin("Andrew_TypeIt","css"); //文字打字效果
Andrew_Plugin("Andrew_Viewer","css"); //图片放大预览功能
Andrew_Plugin("Andrew_Vticker"); //列表垂直滚动插件
Andrew_Plugin("Andrew_Waterfall","css"); //瀑布流展示功能
Andrew_Plugin("Andrew_WebToast","css"); //提示框效果
Andrew_Plugin("Andrew_ReadMore"); //查看更多插件

//Andrew_Plugin("Andrew_SnInput"); //输入支付密码功能 (已停用：被Andrew_Keyboard取代)
//Andrew_Plugin("Andrew_Validate"); //表单验证功能 （已停用：被Andrew_Form合并）