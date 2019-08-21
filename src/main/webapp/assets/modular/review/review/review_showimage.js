/**
 * 用户详情对话框
 */
var UserInfoDlg = {
    data: {
        deptId: "",
        deptName: ""
    }
};

layui.use(['layer', 'form', 'admin', 'laydate', 'ax'], function () {
    var $ = layui.jquery;
    var $ax = layui.ax;
    var form = layui.form;
    var admin = layui.admin;
    var laydate = layui.laydate;
    var layer = layui.layer;

    // 让当前iframe弹层高度适应
    // admin.iframeAuto();

    //获取用户信息
    var ajax = new $ax(Feng.ctxPath + "/review/showimage?studentId=" + Feng.getUrlParam("studentId") +"&bonusType=" +Feng.getUrlParam("bonusType"));
    var result = ajax.start();
    var path = result;
    $("#iamge").attr('src',path)
});