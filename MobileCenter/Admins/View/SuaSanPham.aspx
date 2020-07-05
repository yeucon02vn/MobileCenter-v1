<%@ Page Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="SuaSanPham.aspx.cs" Inherits="MobileCenter.Admins.View.SuaSanPham" %>

<%@ Register Assembly="CKEditor.NET" Namespace="CKEditor.NET" TagPrefix="CKEditor" %>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table style="width: 820px; font-size:16px">
        <tr>
            <td style="width: 300px">Tên sản phẩm</td>
            <td style="width: 700px">
                <asp:TextBox ID="txtTenSanPham" runat="server" Width="300px" Height="30px" style="margin-top:20px; margin-bottom:20px; font-size:16px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtTenSanPham"
                    ErrorMessage="Tên sản phẩm không để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 300px">Mô tả sản phẩm</td>
            <td style="width: 700px">
                <CKEditor:CKEditorControl ID="CKEditorControlMoTa" runat="server"></CKEditor:CKEditorControl>
            </td>
        </tr>
        <tr>
            <td style="width: 100px; height:50px;">Đơn giá</td>
            <td>
                <asp:TextBox ID="textGia" runat="server" Width="300px" Height="30px" style="margin-top:20px; margin-bottom: 20px; font-size:16px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="textGia"
                    ErrorMessage="Giá sản phẩm không để trống"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 300px">Danh mục</td>
            <td >
                <asp:DropDownList ID="dropDanhMucSanPham" runat="server" Width="300px">
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td style="width: 300px">Hình</td>
            <td style="width: 700px">
                <asp:Image ID="imgHinhSanPham" runat="server" Height="200px" Width="300px"  style="margin-top:20px; margin-bottom: 20px; font-size:16px"/></td>
        </tr>
        <tr>
            <td style="width: 300px"></td>
            <td style="width: 700px"><asp:FileUpload ID="fileuploadHinhSanPham" runat="server" /></td>
        </tr>
        <tr>
            <td style="width: 300px"></td>
            <td style="width: 700px">
                <asp:Button class="btn btn-outline-primary" type="submit" style ="margin-top:20px; margin-right:100px; font-size:15px" ID="btnCapNhat" runat="server" Text="Cập Nhật" OnClick="btnCapNhat_Click" />
                <asp:Button class="btn btn-outline-primary" type="submit" style ="margin-top:20px; font-size:16px" ID="btnBoQua" runat="server" Text="Xoá" OnClick="btnXoaSanPham_Click" /></td>
        </tr>
    </table>
</asp:Content>

