<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="DangKy.aspx.cs" Inherits="MobileCenter.View.DangKy" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
       <link rel="stylesheet" href="https://localhost:44375/View/fonts/material-icon/css/material-design-iconic-font.min.css" >
    <link rel="stylesheet" href="https://localhost:44375/View/css/style.css">
<%--<table style="width: 600px">
        <tr>
            <td style="width: 200px; height: 21px">
                <span style="color: #000000">
                Họ Và Tên</span></td>
            <td style="width: 400px; height: 21px" align="left">
                <asp:TextBox ID="textHoTen" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 40px">
                <span style="color: #000000">
                Tên Đăng Nhập</span></td>
            <td style="width: 400px; height: 40px" align="left">
                <asp:TextBox ID="textTenDangNhap" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="textTenDangNhap"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px">
                <span style="color: #000000">
                Thành Phố</span></td>
            <td style="width: 400px" align="left">
                <asp:TextBox ID="textThanhPho" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="textThanhPho"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 26px">
                <span style="color: #000000">
                Quận Huyện</span></td>
            <td style="width: 400px; height: 26px" align="left">
                <asp:TextBox ID="textQuanHuyen" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="textQuanHuyen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px">
                <span style="color: #000000">
                Tên Đường Phố</span></td>
            <td style="width: 400px" align="left">
                <asp:TextBox ID="textTenDuongPho" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="textTenDuongPho"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator></td>
        </tr>
        
        <tr>
            <td style="width: 200px">
                <span style="color: #000000">Mật Khẩu</span></td>
            <td style="width: 400px" align="left">
                <asp:TextBox ID="textMatKhau" runat="server" TextMode="Password"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ControlToValidate="textMatKhau"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" ControlToValidate="textMatKhau"
                    ErrorMessage="Mật khẩu nhập lại không khớp"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px">
                <span style="color: #000000">
                Nhập Lại Mật Khẩu</span></td>
            <td style="width: 400px" align="left">
                <asp:TextBox ID="TextBox6" runat="server" TextMode="Password"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ControlToValidate="TextBox6"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px">
                <span style="color: #000000">
                Email</span></td>
            <td style="width: 400px" align="left">
                <asp:TextBox ID="textEmail" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" ControlToValidate="textEmail"
                    ErrorMessage="Không đúng định dạng"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px">
                <span style="color: #000000">Số Điện Thoại</span></td>
            <td style="width: 400px" align="left">
                <asp:TextBox ID="textSoDienThoai" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td style="width: 200px; height: 26px;">
            </td>
            <td style="width: 400px; height: 26px;" align="left">
                <asp:ImageButton ID="btnDangKy" runat="server" ImageUrl="~/images/button_dangky.jpg" OnClick="btnDangKy_Click" /></td>
        </tr>
    </table>--%>

     <div class="main">

        <!-- Sign up form -->
        <div class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-accounts-outline material-icons-name"></i></label>
                                <input type="text" name="name" ID="textHoTen" runat="server" placeholder="Họ Và Tên"/>
                            </div>
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="textTenDangNhap" runat="server" placeholder="Tên đăng nhập"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-city"></i></label>
                                <input type="text" name="email" runat="server" id="textThanhPho" placeholder="Thành Phố"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-my-location "></i></label>
                                <input type="text" name="pass" id="textQuanHuyen" runat="server" placeholder="Quận huyện"/>
                                
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-circle "></i></label>
                                <input type="text" runat="server" id="textDuongPho" placeholder="Tên Đường Phố"/>
                            </div>
                             <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="textMatKhau" runat="server" placeholder="Mật Khẩu"/>
                                
                            </div>
                             <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="pass" id="TextBox6" runat="server" placeholder="Nhập lại mật khẩu"/>
                                
                            </div>
                              <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="pass" id="textEmail" runat="server" placeholder="Email"/>
                                
                            </div>
                             <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-phone"></i></label>
                                <input type="text" name="pass" id="textSoDienThoai" runat="server" placeholder="Số Điện Thoại" />
                                
                            </div>  
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <asp:LinkButton class="btn btn-outline-primary border border-primary " ID="ImageButtontieptucmuahang" style ="margin-top:20px; width:50%;  padding:10px; border-radius: 10px; padding-right:10px; margin-right: 5px;font-size:12px; margin-bottom: 20px;" runat="server"  OnClick="btnDangKy_Click"> Đăng ký </asp:LinkButton>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="https://localhost:44375/View/images/signup-image.jpg" alt="sing up image"></figure>
                        <%--<a href="#" class="signup-image-link">I am already member</a>--%>
                    </div>
                </div>
            </div>
        </div>


    </div>
</asp:Content>

