<%@ Page Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="DangNhapAdmin.aspx.cs" Inherits="MobileCenter.Admins.View.DangNhapAdmin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

<table style="width: 820px">
        <tr>
            <td colspan="2" style="font-size: 20pt; color: #990000; font-style: normal; text-align: center">
                ĐĂNG NHẬP QUYỀN QUẢN TRỊ WEBSITE</td>
        </tr>
        <tr>
            <td style="width: 200px; font-size:20px">
                Tên đăng nhập</td>
            <td style="width: 520px; ">
                <asp:TextBox ID="textUsername" class="form-control" runat="server" Width="250px" Height="30px" style="margin-top:20px; font-size:15px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="textUsername"
                    ErrorMessage="Tên đăng nhập không được rỗng"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px; font-size:20px">
                Mật khẩu</td>
            <td style="width: 520px">
                <asp:TextBox ID="textMatKhau" class="form-control" runat="server" TextMode="Password" Width="250px" Height="30px" style="margin-top:20px; font-size:15px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2"  runat="server" ControlToValidate="textMatKhau"
                    ErrorMessage="Mật khẩu không được rỗng"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px">
            </td>
            <td style="width: 520px">
                <asp:Button ID="btnDangNhap" runat="server" OnClick="btnDangNhap_Click" Width="250px" Height="30px" 
                    Text="Đăng Nhập" class="btn btn-outline-primary" type="submit" style ="margin-top:20px; font-size:15px"/>
                <asp:Label ID="labelMessage" runat="server"></asp:Label></td>
        </tr>
    </table>
</asp:Content>
