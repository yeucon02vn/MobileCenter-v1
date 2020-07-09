<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="DangNhap.aspx.cs" Inherits="MobileCenter.View.DangNhap" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<%--<table cellpadding="0" cellspacing="0" style="width: 600px">
        <tr>
            <td style="width: 200px; height: 19px">
                <span style="color: #000000">
                Tên Đăng Nhập</span></td>
            <td align="left" style="width: 400px; height: 19px">
                <asp:TextBox ID="textUsername" runat="server" Width="149px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="textUsername"
                    ErrorMessage="Tên đăng nhập không để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 19px">
                &nbsp;<span style="color: #000000">Mật Khẩu</span></td>
            <td align="left" style="width: 400px; height: 19px">
                <asp:TextBox ID="textMatKhau" runat="server" TextMode="Password" Width="149px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="textMatKhau"
                    ErrorMessage="Mật khẩu không để trống"></asp:RequiredFieldValidator></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 19px">
            </td>
            <td style="width: 400px; height: 19px" align="left">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td style="width: 200px">
            </td>
            <td style="width: 400px" align="left">
                <asp:ImageButton ID="btnDangNhap" runat="server" OnClick="btnDangNhap_Click" ImageUrl="~/images/button_dangnhap.jpg" />
                <asp:Label ID="labelMessage" runat="server"></asp:Label></td>
        </tr>
        <tr>
            <td style="width: 200px; height: 22px;">
            </td>
        </tr>
</table>--%>
    <html>
         <body>
       
      <div class="limiter">
		<div class="container-login100" style="background-image: url('https://localhost:44375/Admins/View/images/bg-01.jpg')">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Enter username" >
						<input runat="server" id="textUsername" class="input100" type="text" name="username" placeholder="Username">
						<%--<span class="focus-input100" data-placeholder="&#xf207;"></span>--%>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" runat="server" id="textMatKhau" type="password" name="pass" placeholder="Password">
						<%--<span class="focus-input100" data-placeholder="&#xf191;"></span>--%>
					</div>

					<div class="contact100-form-checkbox" style="display: flex; justify-content: flex-start" >
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

    					<div class="container-login100-form-btn">
						    <asp:Button ID="btnDangNhap" runat="server" OnClick="btnDangNhap_Click" 
                        Text="Login" class="login100-form-btn" />
					    </div>


					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<%--<div id="dropDownSelect1"></div>--%>
    </body>
  
    </html>
   
	

</asp:Content>