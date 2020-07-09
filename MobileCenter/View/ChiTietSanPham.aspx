<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="ChiTietSanPham.aspx.cs" Inherits="MobileCenter.View.ChiTietSanPham" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:DataList ID="dtlChiTietSanPham" runat="server">
        <ItemTemplate>
            <div class="card bg-light" style="margin-bottom: 10px;">
                        <div class="card-body row" style="padding: 0px;">
                            <div class="card-group col">
                                <div class="card card-img" style="width: 50rem; font-size: 16px">
                                    <div>
                                        <asp:Image ID="Image1" style="width: 60%;" class="zoom" runat="server" ImageUrl='<%# Eval("IdHinhSanPham","HienThiHinhSanPham.ashx?IdHinhSanPham={0}") %>' />
                                    </div>
                                    
                                </div>
                            </div>
                             <div class="card-group col">
                                 
                                <div class="card card-img" style="width: 50rem; font-size: 16px">
                                    
                                    <asp:Label class="card-link nameproduct" ID="lblTenSanpham" runat="server" Text='<%# Eval("TenSanPham") %>' ></asp:Label>                      
                                    <div class="stars">
                                          <form action="">
                                            <input class="star star-5" id="star-5" type="radio" name="star"/>
                                            <label class="star star-5" for="star-5"></label>
                                            <input class="star star-4" id="star-4" type="radio" name="star"/>
                                            <label class="star star-4" for="star-4"></label>
                                            <input class="star star-3" id="star-3" type="radio" name="star"/>
                                            <label class="star star-3" for="star-3"></label>
                                            <input class="star star-2" id="star-2" type="radio" name="star"/>
                                            <label class="star star-2" for="star-2"></label>
                                            <input class="star star-1" id="star-1" type="radio" name="star"/>
                                            <label class="star star-1" for="star-1"></label>
                                          </form>
                                    </div>
                                    <div style="height:60px">
                                        <div style="float :left">     
                                            <div style ="padding-right:20px ">
                                                Giá niêm yết
                                            </div>
                                             
                                            <div style ="padding-top:5px; ">
                                                Giá khuyến mãi
                                            </div>
                                         </div> 
                                        <div style="float :right">
                                            <div style ="color:darkgray; padding-right:218px; text-decoration: line-through;">
                                                <asp:Label ID="Label1" runat="server" Text='<%# Eval("GiaSanPham", "{0:0,000,000} VND") %>' ></asp:Label>
                                            </div>
                                            <div style ="color:darkgray;padding-top:5px; padding-right:218px">
                                                <asp:Label class="price" ID="lblGiaSanpham" runat="server" Text='<%# Eval("GiaSanPham", "{0:0,000,000} VND") %>' ></asp:Label>
                                            </div>
                                         </div>
                                    </div>
                                    
                                    <div style="height:60px">
                                        <div style="float :left">       
                                             Khuyến mãi
                                         </div> 
                                        <div style="float :right">
                                            <i class="fa fa-gift" style="color: orangered;" aria-hidden="true"></i>                                             
                                            <a style ="color:darkgray; padding-right:218px"> Mua một tặng: </a>
                                            <div style ="color:darkgray;padding-top:5px; padding-right:7px">
                                                Khung mâm nghiêng - Từ 19” - 42″ M43N
                                            </div>
                                         </div>
                                    </div>
                                     <div style="height:40px">
                                         <div style="float :left">
                                             Vận chuyển
                                         </div> 
                                        
                                         <div style="float :right">
                                             <i class="fa fa-truck fa-flip-horizontal" style="color: lightcoral;" aria-hidden="true"></i>
                                             <a style ="color:#6c757d; ">Miễn phí vận chuyển đơn hàng trên 500.000đ</a>
                                         </div>
                                    </div>
                                    <div style= "width:60%">
                                    <asp:LinkButton class="btn btn-outline-primary  border-primary " NavigateUrl='<%# "GioiThieuSanPham.aspx" %>' style =" border: 1.5px solid!important;padding:10px; border-radius: 5px; padding-left:30px;padding-right:30px; font-size:16px;" runat="server"> Trở lại</asp:LinkButton>                  
                                    <asp:LinkButton class="btn btn-outline-primary  border-primary "  NavigateUrl='<%# Eval("IdSanPham","ThemGioHang.aspx?IDSanpham={0}") %>' style =" border:1.5px solid!important; float:right; padding:10px; border-radius: 5px;  font-size:16px;" runat="server">Thêm vào giỏ hàng </asp:LinkButton>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <div style =" float:left">
               <asp:Label ID="lblMoTaChiTiet"  style =" float:left;font-size:16px; text-align: left;" runat="server" Text='<%# Eval("MoTaSanPham") %>'></asp:Label>
            </div>
            
        </ItemTemplate>
    </asp:DataList>
</asp:Content>

