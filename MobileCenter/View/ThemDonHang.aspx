<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="ThemDonHang.aspx.cs" Inherits="MobileCenter.View.ThemDonHang" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:GridView ID="gridgiohang" class="table table-hover table-condensed " runat="server" AutoGenerateColumns="False" DataKeyNames="IdSanPham" OnRowDataBound="gridgiohang_RowDataBound" Width="600px">
        <Columns>            
            <asp:TemplateField HeaderText="T&#234;n Sản Phẩm">
                <ItemTemplate>
                  <asp:Label ID="lblTenSanPham" runat="server" Text='<%# Eval("TenSanPham") %>'></asp:Label>    
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass="text-lg-center" Font-Size="13px" Width="30%"   />
                <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol" Font-Size="13px" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Số lượng">
                <ItemTemplate>
                    <asp:Label ID="lblSoLuong" runat="server" Text='<%# Eval("SoLuong") %>'></asp:Label>&nbsp;
                </ItemTemplate>
                <HeaderStyle  ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" Font-Size="13px" Width="10%" CssClass="text-lg-center" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol pl-5 pr-5"  />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Đơn Gi&#225;">
                <ItemTemplate>
                    <asp:Label ID="lblDonGia" runat="server" Text='<%# Eval("GiaSanPham" ) %>'></asp:Label>
               
                </ItemTemplate>
                <HeaderStyle  BorderColor="#404040" ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass="pl-3 text-lg-center" Font-Size="13px" Width="30%"/> 
                <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol" Font-Size="15px" Font-Bold="true" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Th&#224;nh Tiền">
                <ItemTemplate>
                    <asp:Label ID="lblThanhTien" runat="server" Text='<%# Eval("ThanhTien", "{0:###,###,###} VND") %>'></asp:Label>
          
                </ItemTemplate>
                <HeaderStyle  ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" Font-Size="13px" CssClass="pl-3 text-lg-center" Width="30%" />
                <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol pr-5"  Font-Size="15px" Font-Bold="true"/>
            </asp:TemplateField>
        </Columns>
    </asp:GridView>
    <div class="style-totalMoney">
        <div style="color: #090909; font-size: 20px; font-weight:bold;padding-bottom: 10px;">
            Cart Total
        </div>
        <div style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1); width: 94%;">
        </div>
        <div style="width: 100%; font-size: 15px; padding-top: 15px; display: flex; justify-content: space-between;">
            <div>Shipping</div>
            <div class="pr-5">Free ship</div>
        </div>
        <div style="font-size: 15px; padding-top: 15px;padding-bottom: 15px;">
            Flat rate
        </div>
        <div style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1); width: 94%;">
        <div style="display: flex; justify-content: space-between;padding-top: 15px;">
             <asp:Label ID="Label1" Font-Size="15px" runat="server" Text="Total:" Font-Bold="True" ForeColor="#330000"></asp:Label>
             <asp:Label ID="lblTotal" runat="server" Font-Bold="true" Font-Size="15px" ForeColor="#330000"> </asp:Label>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex: 1">
            <%--<asp:ImageButton  ID="ImageButtonTieptucmuahang" runat="server" ImageUrl="~/images/button_tiepmua.jpg" OnClick="ImageButtonTieptucmuahang_Click" />--%>
            <%--<asp:ImageButton ID="ImageButtonTaovaguidonhang" runat="server" ImageUrl="~/images/button_guidonhang.jpg" OnClick="ImageButtonTaovaguidonhang_Click" />--%>
    
        <asp:LinkButton class="btn btn-primary border border-primary " ID="LinkButton1" style ="margin-top:20px; width:50%;  padding:10px; border-radius: 10px; padding-right:5px; margin-right: 5px;font-size:12px; margin-bottom: 20px;"  runat="server"  OnClick="ImageButtonTieptucmuahang_Click">  Tiếp tục mua hàng</asp:LinkButton>
        <asp:LinkButton class="btn btn-primary border border-primary " ID="ImageButtonXacnhanthanhtoan" style ="margin-top:20px; width: 50%; border-radius: 10px; padding:10px;  font-size:12px; margin-bottom: 20px;" runat="server"  OnClick="ImageButtonTaovaguidonhang_Click">Gửi hoá đơn </asp:LinkButton>
            </div>
    </div>
    
</asp:Content>

