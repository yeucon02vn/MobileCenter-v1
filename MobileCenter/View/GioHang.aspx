<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="GioHang.aspx.cs" Inherits="MobileCenter.View.GioHang" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

<asp:Label ID="lblThongBao" runat="server" Text=""></asp:Label><br />
<asp:GridView ID="gridgiohang" class="table table-hover table-condensed " runat="server" AutoGenerateColumns="False" DataKeyNames="IDgiohang" OnRowDataBound="gridgiohang_RowDataBound" Width="700px" >
    
        <Columns>
            <asp:TemplateField HeaderText="Sản Phẩm">
                <ItemTemplate>
                <%# Eval("TenSanPham") %>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass="pb-4" Font-Size="13px" Width="30%"   />
                <ItemStyle ForeColor="#404040" HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol" Font-Size="13px" />
            </asp:TemplateField>
           
            <asp:TemplateField HeaderText="Đơn Giá">
                <ItemTemplate>
                <%# Eval("GiaSanPham","{0:###,###,###} VND")%>
                </ItemTemplate>
                <HeaderStyle  BorderColor="#404040" ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" CssClass="pl-3" Font-Size="13px" Width="20%"/> 
                <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol" Font-Size="15px" Font-Bold="true" />
            </asp:TemplateField>
             <asp:TemplateField HeaderText="Số lượng" HeaderStyle-Font-Size="15px">
                <ItemTemplate>
                    <asp:TextBox ID="textQuantity" type="number" class="form-control text-center" runat="server" Text='<%# Eval("SoLuong") %>' Width="50px" Height="30"></asp:TextBox>
                </ItemTemplate>
                <HeaderStyle  ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" Font-Size="13px" Width="20%" CssClass="pl-4" />
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" CssClass="styleCol pl-5 pr-5"  />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Th&#224;nh Tiền"> 
                <ItemTemplate>
                <%# Eval("ThanhTien","{0:###,###,###} VND")%>
                </ItemTemplate>
                <HeaderStyle  ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" Font-Size="13px" Width=""/>
                <ItemStyle ForeColor="#404040" HorizontalAlign="Right" VerticalAlign="Middle" CssClass="styleCol pr-5"  Font-Size="15px" Font-Bold="true"/>
            </asp:TemplateField>
            <asp:TemplateField HeaderText="X&#243;a">
                <ItemTemplate>
                    <button class="btn btn-primary btn-lg"><i class="fa fa-trash-o"></i>
                </ItemTemplate>
                <HeaderStyle ForeColor="#626060" HorizontalAlign="Center"
                    VerticalAlign="Middle" BorderWidth="0" Font-Size="13px"/>
                <ItemStyle BackColor="White"  CssClass="styleCol" />
            </asp:TemplateField>
        </Columns>
    </asp:GridView>
    <div class="style-totalMoney">
        <div style="color: #090909; font-size: 20px; font-weight:bold;padding-bottom: 10px;">
            Cart Total
        </div>
        <div style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1); width: 250px;">
        </div>
        <div style="font-size: 15px; padding-top: 15px; display: flex; flex-direction: row;">
            Shipping
            <div style="padding-left: 120px;">
                Free ship
            </div>
        </div>
        <div style="font-size: 15px; padding-top: 15px;padding-bottom: 15px;">
            Flat rate
        </div>
        <div style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1); width: 250px;">
        <div style="display: flex; justify-content: space-between;padding-top: 15px;">
             <asp:Label ID="Label1" Font-Size="15px" runat="server" Text="Total:" Font-Bold="True" ForeColor="#330000"></asp:Label>
             <asp:Label ID="lblTotal" runat="server" Font-Bold="true" Font-Size="15px" ForeColor="#330000"> </asp:Label>
        </div>
        <div>
            <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtontieptucmuahang" style ="margin-top:20px; float:left; padding:10px; border-radius: 10px;  font-size:16px; margin-bottom: 20px;"  runat="server"  OnClick="ImageButtontieptucmuahang_Click"><i class="fa fa-angle-double-left" style="font-size:16px"></i>  Tiếp tục</asp:LinkButton>
            <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtonXacnhanthanhtoan" style ="margin-top:20px; float:right; padding:10px; border-radius: 10px;  font-size:16px; margin-bottom: 20px;" runat="server"  OnClick="ImageButtonXacnhanthanhtoan_Click">Xác nhận  <i class="fa fa-angle-double-right" style="font-size:16px"></i></asp:LinkButton>
        </div>
       
    </div>
   
    </div>
    
</asp:Content>

