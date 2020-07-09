<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="DonHangKhachHang.aspx.cs" Inherits="MobileCenter.View.DonHangKhachHang" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div style="margin-bottom: 20px">
        <strong><span style="font-size: 15pt; color: #330000"><span style="color: #cc0000">CÁC ĐƠN HÀNG CỦA BẠN</span><br />
        </span></strong>
        <asp:GridView ID="gridviewOrders" runat="server" AutoGenerateColumns="False" Width="680px" class="table table-hover table-condensed" AllowPaging="True" OnPageIndexChanging="gridviewOrders_PageIndexChanging" PageSize="5">
            <Columns>
                <asp:TemplateField HeaderText="Id giao dịch">
                    <ItemTemplate>
                        <a href="invoice-detail?MaGiaoDich=<%# Eval("MaGiaoDich")%>&IdDonHang=<%# Eval("IdDonHang") %>">
                            <%# Eval("MaGiaoDich") %>
                        </a>
                    </ItemTemplate>
                    <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass=" text-lg-center" Font-Size="13px" Width="30%" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol" Font-Size="13px" />
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Ng&#224;y tạo đơn h&#224;ng">
                    <ItemTemplate>
                        <%# Eval("NgayTaoDonHang", "{0:dd/MM/yyyy}") %>
                    </ItemTemplate>
                    <HeaderStyle BorderColor="#404040" ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass="text-lg-center"  Font-Size="13px" Width="20%" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol" Font-Size="15px" Font-Bold="true" />
                </asp:TemplateField>
                <asp:TemplateField HeaderText="T&#236;nh trạng đơn h&#224;ng">
                    <ItemTemplate>
                        <%# Eval("TenTinhTrangDonHang") %>
                    </ItemTemplate>
                    <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" Font-Size="13px" Width="25%" CssClass="text-lg-center" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol pr-5"  Font-Size="15px" Font-Bold="true" />
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Ng&#224;y xử l&#253; đơn h&#224;ng">
                    <ItemTemplate>
                        <%# Eval("NgayXuLyDonHang", "{0:dd/MM/yyyy}")%>
                    </ItemTemplate>
                    <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass=" text-lg-center" Font-Size="13px" Width="20%" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol" Font-Size="13px" />
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Tracking Number">
                    <ItemTemplate>
                        <%# Eval( "TrackingNumber" )%>
                    </ItemTemplate>
                    <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass=" text-lg-center" Font-Size="13px" Width="25%" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol" Font-Size="13px" />
                </asp:TemplateField>
            </Columns>
        </asp:GridView>
        <div>
            <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtontieptucmuahang" style ="margin-top:20px; width:50%;  padding:10px; border-radius: 10px; padding-right:10px; margin-right: 5px;font-size:12px; margin-bottom: 20px;" runat="server"  OnClick="ImageButtontrove_Click"> Quay lại</asp:LinkButton>

        </div>
    </div>
    <%--<asp:ImageButton ID="ImageButtontrove" runat="server" ImageUrl="~/images/button_back.jpg" OnClick="ImageButtontrove_Click" />--%>
</asp:Content>

