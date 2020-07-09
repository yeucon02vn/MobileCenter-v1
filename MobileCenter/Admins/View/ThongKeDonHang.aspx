<%@ Page Title="" Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="ThongKeDonHang.aspx.cs" Inherits="MobileCenter.Admins.View.ThongKeDonHang" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:GridView ID="gridTatCaDonHang" class="table table-hover table-condensed" runat="server" AutoGenerateColumns="False" BorderStyle="Dashed" CssClass="mt-5" AllowPaging="True" OnPageIndexChanging="gridTatCaDonHang_PageIndexChanging" PageSize="7"> 
        <Columns>
            <asp:TemplateField HeaderText="ID Giao dịch" >
                <ItemTemplate >
                    <a href="chitietdonhang?MaGiaoDich=<%# Eval("MaGiaoDich")
        %>&IdDonHang=<%# Eval("IdDonHang") %>&Email=<%# Eval("Email") %>"><%#
        Eval("MaGiaoDich") %></a>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="18%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass="border-top border-dark pl-2 gj-text-align-center"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Họ và tên">
                <ItemTemplate>
                    <%# Eval("HoTen") %>
                    <br />
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="15%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass="border-top border-dark pl-2 name gj-text-align-center"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Địa chỉ">
                <ItemTemplate>
                    <%# Eval("DiaChi") %>
                    <br />
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="7%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass="border-top border-dark pl-2 gj-text-align-center"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Email">
                <ItemTemplate>
                    <%# Eval("Email") %>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="10%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass="border-top border-dark pl-2 gj-text-align-center"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Số điện thoại">
                <ItemTemplate>
                    <%# Eval("SoDienThoai") %>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="8%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass="border-top border-dark pl-2 gj-text-align-center"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Ngày tạo đơn hàng">
                <ItemTemplate>
                    <%# Eval("NgayTaoDonHang") %>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="14%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass="border-top border-dark day pl-2 gj-text-align-center"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Ngày xử lý đơn hàng">
                <ItemTemplate>
                    <%# Eval("NgayXuLyDonHang") %>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="14%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass="border-top border-dark day pl-2 gj-text-align-center"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Tình trạng đơn hàng" >
                <ItemTemplate>
                    <%# Eval("TenTinhTrangDonHang") %>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" CssClass="border-dark pl-2 text-lg-center" Font-Size="16px" Width="10%"   />
                <ItemStyle HorizontalAlign="Left" Font-Size="14px" Height="30px" VerticalAlign="Middle" CssClass='border-top border-dark pl-2 gj-text-align-center handle'/>
            </asp:TemplateField>
        </Columns>
       
    </asp:GridView>

</asp:Content>