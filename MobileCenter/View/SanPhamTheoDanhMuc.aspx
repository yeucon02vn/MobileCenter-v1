<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="SanPhamTheoDanhMuc.aspx.cs" Inherits="MobileCenter.View.SanPhamTheoDanhMuc" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
     <asp:DataList ID="dtlSanPhamDM" runat="server" RepeatColumns="3"  CaptionAlign="Top" HorizontalAlign="Center">
        <ItemTemplate>
            <div  class="card" style=" margin: 20px; justify-content:center; align-items: center; padding-left: 25px; padding-right: 25px; ">
                <asp:Panel ID="Panel1" runat="server" BorderColor="#E0E0E0" BorderStyle="Solid" BorderWidth="0.1px"
                Width="170px" Height="250px" box-shadow="5px">
            <table cellpadding="0" cellspacing="0" style="width:170px "> 
                <tr>
                    <td style="width: 175px; height: 125px; text-align: center; padding-top: 10px; " align="center">
                        <asp:Image ID="Image1" runat="server" Height="125px" ImageUrl='<%# Eval("IdHinhSanPham","HienThiHinhSanPham.ashx?IdHinhSanPham={0}") %>' Width="100px" /></td>
                </tr>
                <tr>
                    <td style="width: 175px; height: 22px; padding-top: 10px;" align="center">
                        <asp:Label ID="Label1" runat="server" Text='<%# Eval("TenSanPham") %>' Font-Bold="True" ForeColor="#330000"></asp:Label></td>
                </tr>
                <tr>
                    <td style="width: 175px; padding-top: 10px; font-size: 15px" align="center">
                        <asp:Label ID="Label2" runat="server" Text='<%# Eval("GiaSanPham", "{0:##,###,###} VND") %>' ForeColor="#330000"></asp:Label></td>
                </tr>
                <tr>
                    <td style="width: 175px ; text-align: center; padding-top: 20px" align="center">
                        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl='<%# Eval("IdSanPham","ChiTietSanPham.aspx?IdSanpham={0}") %>' ImageUrl="~/images/button_detail.jpg" Width="63px">Chi tiết sản phẩm</asp:HyperLink><asp:HyperLink ID="HyperLink2" runat="server" ImageUrl="~/images/button_buy.gif" Width="100px" NavigateUrl='<%# Eval("IdSanPham","ThemGioHang.aspx?IDSanpham={0}") %>'>Thêm vào giỏ hàng</asp:HyperLink></td>
                </tr>
            </table>
            </asp:Panel>
            </div>
                  
          
        </ItemTemplate>
        
    </asp:DataList>

</asp:Content>
