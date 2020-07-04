<%@ Page Title="" Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="ThongKeDonHang.aspx.cs" Inherits="MobileCenter.Admins.View.ThongKeDonHang" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:GridView ID="gridTatCaDonHang" runat="server" AutoGenerateColumns="False" BorderStyle="Dashed" CssClass="mt-5"> 
        <Columns>
            <asp:TemplateField HeaderText="ID Giao dịch" >
                <ItemTemplate >
                    <a href="chitietdonhang?MaGiaoDich=<%# Eval("MaGiaoDich")
        %>&IdDonHang=<%# Eval("IdDonHang") %>&Email=<%# Eval("Email") %>"><%#
        Eval("MaGiaoDich") %></a>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" Height="40px" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Họ và tên">
                <ItemTemplate>
                    <%# Eval("HoTen") %>
                    <br />
                </ItemTemplate>
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Địa chỉ">
                <ItemTemplate>
                    <%# Eval("DiaChi") %>
                    <br />
                </ItemTemplate>
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Email">
                <ItemTemplate>
                    <%# Eval("Email") %>
                </ItemTemplate>
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Số điện thoại">
                <ItemTemplate>
                    <%# Eval("SoDienThoai") %>
                </ItemTemplate>
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Ngày tạo đơn hàng">
                <ItemTemplate>
                    <%# Eval("NgayTaoDonHang") %>
                </ItemTemplate>
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Ngày xử lý đơn hàng">
                <ItemTemplate>
                    <%# Eval("NgayXuLyDonHang") %>
                </ItemTemplate>
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Tình trạng đơn hàng">
                <ItemTemplate>
                    <%# Eval("TenTinhTrangDonHang") %>
                </ItemTemplate>
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" BackColor="#E0E0E0" ForeColor="Maroon" Width="12.5%" CssClass="text-center border border-dark"/>
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
            </asp:TemplateField>
        </Columns>

    </asp:GridView>

</asp:Content>
