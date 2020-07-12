<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="ChiTietDonHangKhachHang.aspx.cs" Inherits="MobileCenter.View.ChiTietDonHangKhachHang" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div>
        <span><strong style="font-size: 20pt"><span style="color: #cc0000">
            <br />
            CHI TIẾT ĐƠN HÀNG</span></strong></span><br />
        <div style="padding-top: 20px; padding-bottom: 20px;">
            <span style="color: #cc0000; font-size: 15px;">Mã Giao dịch: </span>
        <asp:Label ID="lblIDGiaoDich" runat="server" Font-Bold="True" ForeColor="#330000" Font-Size="15px"></asp:Label><br />
        </div>
        
        <asp:GridView ID="gridChiTietDonHang" runat="server" AutoGenerateColumns="False"
            Width="600px" OnRowDataBound="gridChiTietDonHang_RowDataBound" class="table table-hover table-condensed" >
            <Columns>
                <asp:TemplateField HeaderText="Số lượng">
                    <ItemTemplate>
                        <%# Eval("SoLuongSanPham") %>
                    </ItemTemplate>
                    <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass=" text-lg-center" Font-Size="13px" Width="20%" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol" Font-Size="13px" />
                </asp:TemplateField> 
                <asp:TemplateField HeaderText="T&#234;n Sản Phẩm">
                    <ItemTemplate>
                        <%# Eval("TenSanPham") %>
                    </ItemTemplate>
                    <HeaderStyle BorderColor="#404040" ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass="text-lg-center"  Font-Size="13px" Width="30%" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol text-lg-center" Font-Size="15px" Font-Bold="true" />
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Gi&#225; Sản phẩm">
                    <ItemTemplate>
                        <%# Eval("GiaSanPham" , "{0:###,###,###} VNĐ" )%>
                    </ItemTemplate>
                    <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" Font-Size="13px" Width="30%" CssClass="text-lg-center" />
                    <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol pl-5 text-lg-center"  Font-Size="15px" Font-Bold="true"  />
                </asp:TemplateField>
            </Columns>
        </asp:GridView>
        <span style="color: #cc0000; font-size: 15px;"><strong>Tổng cộng: </strong></span>
        <asp:Label ID="lblTongTien" runat="server" Font-Bold="True" ForeColor="#330000" Font-Size="15px"></asp:Label><br />
        <br />
        <%--<asp:ImageButton ID="ImageButtonTroVe" runat="server" ImageUrl="~/images/button_back.jpg" OnClick="ImageButtonTroVe_Click" />--%>
        <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtontieptucmuahang" style ="margin-top:20px; width:50%;  padding:10px; border-radius: 10px; padding-right:10px; margin-right: 5px;font-size:12px; margin-bottom: 20px;" runat="server"  OnClick="ImageButtonTroVe_Click"> Quay lại</asp:LinkButton>

    </div>

</asp:Content>
