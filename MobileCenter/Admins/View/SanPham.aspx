<%@ Page Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="SanPham.aspx.cs" Inherits="MobileCenter.Admins.View.SanPham" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:DataList ID="dtlSanpham" runat="server" RepeatColumns="3" Width="750px" CellPadding="0" >
        <ItemTemplate>
      
                <div class="card" style=" margin: 10px; justify-content:center; align-items: center ">
                    <asp:Image Style="font-size: 20px; align-items: center" ID="Image2"  runat="server" Height="150px"
                                    ImageUrl='<%# Eval("IdHinhSanPham","~/View/HienThiHinhSanPham.ashx?IdHinhSanPham={0}") %>' />
                    <div class="card-body" style="text-align:center;">
                        <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl='<%# Eval("IdSanPham","SuaSanPham.aspx?IdSanPham={0}") %>'
                                Text='<%# Eval("TenSanPham") %>'></asp:HyperLink>
                            <br />
                            <asp:Label ID="Label3" runat="server" Text='<%# Eval("GiaSanPham","{0:###,###,###} VND") %>'></asp:Label>
                            <%--<asp:Label ID="Label4" runat="server" Text='<%# Eval("MoTaSanPham") %>'></asp:Label>--%>
                    </div>
                </div>   
        </ItemTemplate>
    </asp:DataList>
</asp:Content>


