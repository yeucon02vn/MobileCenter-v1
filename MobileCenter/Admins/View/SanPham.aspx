<%@ Page Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="SanPham.aspx.cs" Inherits="MobileCenter.Admins.View.SanPham" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:Button ID="bntThemSanPham" class="btn btn-outline-primary" runat="server" style="font-size:20px " Text="Thêm Sản Phẩm" OnClick="bntThemSanPham_Click" /><br/>

   
        <asp:DataList ID="dtlSanpham" runat="server"  RepeatColumns="3" Width="750px" CellPadding="0">
        <ItemTemplate>
        <asp:Panel ID="Panel1" runat="server" BorderColor="#E0E0E0" BorderStyle="Solid" BorderWidth="1px" Width="250px">
            <table style="width: 250px; height:150px">
                <tr>
                    <div>             
                        <div class="hovereffect" style=" margin: auto;width: 50%;" >                      
                         <asp:Image style="font-size:20px ; align-items:center"   ID="Image1" runat="server" Height="150px" 
                            ImageUrl='<%# Eval("IdHinhSanPham","~/View/HienThiHinhSanPham.ashx?IdHinhSanPham={0}") %>'/>                                 
                    </div>
                      
                </tr>
                <tr>
               
                    <td colspan="2" rowspan="1" style="width: 250px; font-size:20px;"<%-- align="center" valign="middle"--%>>
                          <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl='<%# Eval("IdSanPham","SuaSanPham.aspx?IdSanPham={0}") %>'
                            Text='<%# Eval("TenSanPham") %>'></asp:HyperLink>
                        <br />
                        <asp:Label ID="Label1" runat="server" Text='<%# Eval("GiaSanPham","{0:###,###,###} VND") %>'></asp:Label>
                        <asp:Label ID="Label2" runat="server" Text='<%# Eval("MoTaSanPham") %>'></asp:Label>
                       
                    </td>
                </tr>
            </table>
        </asp:Panel>
        </ItemTemplate>
    </asp:DataList>
</asp:Content>


