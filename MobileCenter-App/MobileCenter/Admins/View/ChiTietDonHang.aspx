<%@ Page Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="ChiTietDonHang.aspx.cs" Inherits="MobileCenter.Admins.View.ChiTietDonHang" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table class="mt-5 gj-font-size-16">
        <tr>
            <td style="width: 300px">
                ID Giao dịch</td>
            <td style="width: 700px;">
                <asp:Label ID="labelTransactionID" runat="server" ForeColor="#3300FF"></asp:Label></td>
        </tr>
        <tr>
            <td style="width: 300px">
                Các sản phẩm đơn hàng</td>
            <td style="width: 700px">
                <asp:GridView ID="gridviewOrderDetailsProducts" runat="server" AutoGenerateColumns="False" Width="481px" style="margin-top:20px; margin-bottom:20px;">
                    <Columns>
                        <asp:TemplateField HeaderText="Số lượng">
                            <ItemTemplate>
                                <asp:Label ID="Label1" runat="server" Text='<%# Eval("SoLuongSanPham") %>'></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" CssClass="text-center border border-dark"/>
                            <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="T&#234;n sản phẩm">
                            <ItemTemplate>
                                <asp:Label ID="Label2" runat="server" Text='<%# Eval("TenSanPham") %>'></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" CssClass="text-center border border-dark"/>
                            <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Đơn gi&#225;">
                            <ItemTemplate>
                                <asp:Label ID="Label3" runat="server" Text='<%# Eval("GiaSanPham","{0:###,###,###} VNĐ") %>'></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle BackColor="#E0E0E0" ForeColor="Maroon" CssClass="text-center border border-dark"/>
                            <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" CssClass="border border-dark pl-2"/>
                        </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </td>
        </tr>
        <tr>
            <td style="width: 300px">
                Ngày xử lý đơn hàng</td>
            <td style="width: 700px">
                <asp:TextBox ID="textShippedDate" Width="320px" runat="server"></asp:TextBox>
                <asp:ImageButton ID="imagebuttonDatePicker" runat="server" ImageUrl="https://localhost:44375/Admins/View/images/calendar.jpg" OnClick="imagebuttonDatePicker_Click" Height="25px" ImageAlign="Top" Width="25px" /><br />
                <asp:Calendar ID="calendarDatePicker" runat="server" OnSelectionChanged="calendarDatePicker_SelectionChanged" Width="320px" BorderColor="Black" CssClass="mt-2"></asp:Calendar>
            </td>
        </tr>
        <tr>
            <td style="width: 300px">
                Tracking number</td>
            <td style="width: 700px">
                <asp:TextBox ID="textTrackingNumber" runat="server" Width="320px" style="margin-top:20px; margin-bottom:20px;"></asp:TextBox></td>
        </tr>
        <tr>
            <td style="width: 300px">
                Tình trạng đơn hàng</td>
            <td style="width: 700px">
                <asp:DropDownList ID="dropdownlistOrderStatus" runat="server" Width="320px" style="margin-bottom:20px;">
                </asp:DropDownList></td>
        </tr>
        <tr>
            <td style="width: 300px">
            </td>
            <td style="width: 320px; display:flex; justify-content:space-between; margin: 0">
                <asp:Button class="btn btn-outline-primary" type="submit" style ="font-size:16px" ID="btnCapNhat" runat="server" Text="Cập nhật" OnClick="btnCapNhat_Click" />
                <asp:Button class="btn btn-outline-primary" type="submit" style ="font-size:16px" ID="btnTroVe" runat="server" Text="Trở về" OnClick="btnTroVe_Click" />
            </td>
        </tr>
    </table>
</asp:Content>
