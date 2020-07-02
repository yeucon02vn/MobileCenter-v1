<%@ Page Title="" Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="ThongKeDonHang.aspx.cs" Inherits="MobileCenter.Admins.View.ThongKeDonHang" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:GridView ID="gridTatCaDonHang" runat="server" AutoGenerateColumns="False" Width="820px">
        <Columns>
            <asp:TemplateField HeaderText="ID Giao dịch">
                <ItemTemplate>
                    <a href="chitietdonhang?MaGiaoDich=<%# Eval("MaGiaoDich")
        %>&IdDonHang=<%# Eval("IdDonHang") %>&Email=<%# Eval("Email") %>"><%#
        Eval("MaGiaoDich") %></a>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Họ v&#224; t&#234;n">
                <ItemTemplate>
                    <%# Eval("HoTen") %>
                    <br />
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Địa chỉ">
                <ItemTemplate>
                    <%# Eval("DiaChi") %>
                    <br />
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" />
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Email">
                <ItemTemplate>
                    <%# Eval("Email") %>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Số điện thoại">
                <ItemTemplate>
                    <%# Eval("SoDienThoai") %>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Ngày tạo đơn hàng">
                <ItemTemplate>
                    <%# Eval("NgayTaoDonHang") %>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Ngày xử lý đơn hàng">
                <ItemTemplate>
                    <%# Eval("NgayXuLyDonHang") %>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:TemplateField>

            <asp:TemplateField HeaderText="Tình trạng đơn hàng">
                <ItemTemplate>
                    <%# Eval("TenTinhTrangDonHang") %>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:TemplateField>
        </Columns>

    </asp:GridView>

</asp:Content>
