<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="GioHang.aspx.cs" Inherits="MobileCenter.View.GioHang" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

<asp:Label ID="lblThongBao" runat="server" Text=""></asp:Label><br />
<asp:GridView ID="gridgiohang" class="table table-hover table-condensed" runat="server" AutoGenerateColumns="False" DataKeyNames="IDgiohang" OnRowDataBound="gridgiohang_RowDataBound" Width="530px">
    
        <Columns>
            
            <asp:TemplateField HeaderText="Sản Phẩm">
                <ItemTemplate>
                <%# Eval("TenSanPham") %>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" BorderColor="#404040" ForeColor="Maroon" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderStyle="Solid" BorderWidth="1px" />
                <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" BorderColor="#404040" BorderStyle="Solid" BorderWidth="1px" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Số lượng">
                <ItemTemplate>
                    <asp:TextBox ID="textQuantity" type="number" class="form-control text-center" runat="server" Text='<%# Eval("SoLuong") %>' Width="93px"></asp:TextBox>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" BorderColor="#404040" ForeColor="Maroon" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderStyle="Solid" BorderWidth="1px" />
                <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" BorderColor="#404040" BorderStyle="Solid" BorderWidth="1px" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Đơn Gi&#225;">
                <ItemTemplate>
                <%# Eval("GiaSanPham")%>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" BorderColor="#404040" ForeColor="Maroon" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderStyle="Solid" BorderWidth="1px" />
                <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" BorderColor="#404040" BorderStyle="Solid" BorderWidth="1px" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Th&#224;nh Tiền">
                <ItemTemplate>
                <%# Eval("ThanhTien","{0:###,###,###} VND")%>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" BorderColor="#404040" ForeColor="Maroon" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderStyle="Solid" BorderWidth="1px" />
                <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" BorderColor="#404040" BorderStyle="Solid" BorderWidth="1px" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="X&#243;a">
                <ItemTemplate>
                    <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i>
                </ItemTemplate>
                <HeaderStyle BackColor="#E0E0E0" BorderColor="#404040" ForeColor="Maroon" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderStyle="Solid" BorderWidth="1px" />
                <ItemStyle BackColor="White" BorderColor="#404040" BorderStyle="Solid" BorderWidth="1px" />
            </asp:TemplateField>
        </Columns>
    </asp:GridView>
    <br />
    <asp:Label ID="Label1" runat="server" Text="Tổng tiền:" Font-Bold="True" ForeColor="#330000"></asp:Label>
    <asp:Label ID="lblTotal" runat="server" ForeColor="#330000"></asp:Label><br />
    <br />
    <td style="width: 920px; height: 24px;">
        <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtontieptucmuahang" style ="margin-top:20px; float:left; padding:10px;  font-size:16px"  runat="server"  OnClick="ImageButtontieptucmuahang_Click"><i class="fa fa-angle-double-left" style="font-size:16px"></i>  Tiếp tục</asp:LinkButton>
        <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtoncapnhatthaydoi" style ="margin-top:20px; float:center; padding:10px;  font-size:16px" runat="server" OnClick="ImageButtoncapnhatthaydoi_Click"><i class="fa fa-refresh" style="font-size:24px"></i></asp:LinkButton>
        <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtonXacnhanthanhtoan" style ="margin-top:20px; float:right; padding:10px;  font-size:16px" runat="server"  OnClick="ImageButtonXacnhanthanhtoan_Click">Xác nhận  <i class="fa fa-angle-double-right" style="font-size:16px"></i></asp:LinkButton>
    </td>
</asp:Content>

