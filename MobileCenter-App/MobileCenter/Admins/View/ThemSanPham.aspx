<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ThemSanPham.aspx.cs" Inherits="MobileCenter.Admins.View.ThemSanPham" MasterPageFile="~/Admins/View/Admin.Master" %>

<%@ Register Assembly="CKEditor.NET" Namespace="CKEditor.NET" TagPrefix="CKEditor" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="mt-5" border="0" cellpadding="0" cellspacing="0" style="width: 820px; font-size:16px">
        <tr>
            <td style="width: 200px">
                Tên Sản Phẩm</td>
            <td style="width: 620px">
                <asp:TextBox ID="txtTenSanPham" class="form-control" runat="server" Width="250px" Height="30px" style="font-size:16px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" Display="Dynamic"
                    ErrorMessage="Tên sản phẩm không để trống" ControlToValidate="txtTenSanPham"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 22px">Danh Mục Sản Phẩm</td>
            <td style="width: 620px; height: 22px">
                <asp:DropDownList ID="dropDanhMucSanPham" runat="server" Width="250px" Height="30px" style="margin-top:20px; margin-bottom:20px; font-size:16px">
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td style="width: 200px">Mô Tả Sản Phẩm</td>
            <td style="width: 620px">
                <CKEditor:CKEditorControl ID="CKEditorControlMoTa" runat="server"></CKEditor:CKEditorControl>
            </td>
        </tr>
        <tr>
            <td style="width: 200px">Giá Sản Phẩm</td>
            <td style="width: 620px">
                <asp:TextBox ID="txtGia" class="form-control" runat="server" Width="250px" Height="30px" style="margin-top:20px; font-size:16px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Giá sản phẩm không để trống" ControlToValidate="txtGia">Giá sản phẩm không để trống</asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 22px">Hình Sản Phẩm</td>
            <td style="width: 620px; height: 22px">
                <asp:FileUpload ID="fileuploadHinhSanPham" runat="server" Width="297px" /></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 24px;">
            </td>
            <td style="width: 620px; height: 24px;">
                <asp:Button class="btn btn-outline-primary" type="submit" style ="margin-top:20px; margin-right:100px; font-size:16px" ID="btnCapNhat" runat="server" Text="Thêm" OnClick="btnCapNhat_Click" />
                <asp:Button class="btn btn-outline-primary" type="submit" style ="margin-top:20px; font-size:16px" ID="BtnBoQua" runat="server" Text="Bỏ qua" OnClick="BtnBoQua_Click" /></td>
        </tr>
    </table>
</asp:Content>
