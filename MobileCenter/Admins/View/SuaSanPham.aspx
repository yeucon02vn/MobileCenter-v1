<%@ Page Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="SuaSanPham.aspx.cs" Inherits="MobileCenter.Admins.View.SuaSanPham" %>

<%@ Register Assembly="CKEditor.NET" Namespace="CKEditor.NET" TagPrefix="CKEditor" %>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table style="width: 820px">
        <tr>
            <td style="width: 300px" align="center">Tên sản phẩm</td>
            <td style="width: 700px">
                <asp:TextBox ID="txtTenSanPham" class="form-control" runat="server" Width="250px" Height="30px" style="margin-top:20px; font-size:15px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtTenSanPham"
                    ErrorMessage="Tên sản phẩm không để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 300px" align="center">Mô tả sản phẩm</td>
            <td style="width: 700px">
                <CKEditor:CKEditorControl ID="CKEditorControlMoTa" runat="server"></CKEditor:CKEditorControl>
        </tr>
        <tr>
            <td style="width: 100px; height:50px;" align="center" class="border border-primary">Đơn giá</td>
            <td>
                <asp:TextBox ID="textGia" class="form-control" runat="server" Width="250px" Height="30px" style="margin-top:20px; font-size:15px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="textGia"
                    ErrorMessage="Giá sản phẩm không để trống"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 300px" align="center">Danh mục</td>
            <td >
                <asp:DropDownList  class="form-control" ID="dropDanhMucSanPham" runat="server" Width="200px">
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td style="width: 300px" align="center">Hình</td>
            <td style="width: 700px">
                <asp:Image ID="imgHinhSanPham" runat="server" Height="125px" Width="200px" /></td>
        </tr>
        <tr>
            <td style="width: 300px"></td>
            <td style="width: 700px">
                
                <asp:FileUpload ID="fileuploadHinhSanPham" runat="server" /></td>
        </tr>
        <tr>
            <td style="width: 300px"></td>
            <td style="width: 700px">
                <asp:Button class="btn btn-outline-primary" type="submit" style ="margin-top:20px; margin-right:100px; font-size:15px" ID="btnCapNhat" runat="server" Text="Cập Nhật" OnClick="btnCapNhat_Click" />
                <asp:Button class="btn btn-outline-primary" type="submit" style ="margin-top:20px; font-size:15px" ID="btnBoQua" runat="server" Text="Bỏ Qua" OnClick="btnBoQua_Click" /></td>
        </tr>
    </table>
</asp:Content>

