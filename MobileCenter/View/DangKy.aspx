<%@ Page Title="" Language="C#" MasterPageFile="~/View/Home.Master" AutoEventWireup="true" CodeBehind="DangKy.aspx.cs" Inherits="MobileCenter.View.DangKy" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="container">
<br>  
<hr>





<div class="card bg-light" >
<article class="card-body mx-auto" style="max-width: 800px;">
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	<p class="text-center">Get started with your free account</p>
	<p>
		<a href="" style="background-color:#42AEEC; color:white" class="btn btn-block btn-twitter text-register"> <i class="fa fa-twitter" style="padding-top: 6px;"></i>   Login via Twitter</a>
		<a href="" style="background-color:#0056b3; color:white" class="btn btn-block btn-facebook text-register"> <i class="fa fa-facebook-official" style="padding-top: 6px;"></i>   Login via facebook</a>
	</p>
	<p class="divider-text">
        <span class="bg-light">OR</span>
    </p>
	<form>
	<div class="form-group input-group" style="height: 40px;">
		<div class="input-group-prepend" ">
		    <span class="input-group-text" > <i class="fa fa-user"></i> </span>
		 </div>
        <asp:TextBox class="form-control text-register text-register" placeholder="Full name" ID="textHoTen" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" class= "pl-2 pt-2" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
    </div> <!-- form-group// -->
    <div class="form-group input-group" style="height: 40px;">
	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <asp:TextBox class="form-control text-register" placeholder="Tên đăng nhập" ID="textTenDangNhap" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator18" class= "pl-2 pt-2" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
    </div> <!-- form-group// -->
    <div class="form-group input-group" style="height: 40px;">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope" style ="width: 7px;"></i> </span>
		 </div>
        <asp:TextBox class="form-control text-register" placeholder="Email address" ID="textEmail" runat="server"></asp:TextBox>
         <asp:RequiredFieldValidator ID="RequiredFieldValidator11" class= "pl-2 pt-2" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
    </div> <!-- form-group// -->
    <div class="form-group input-group" style="height: 40px;">
    	<div class="input-group-prepend" >
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
		<select class="custom-select text-register"  style="max-width: 120px; height: 40px;">
		    <option selected="">+971</option>
		    <option value="1">+972</option>
		    <option value="2">+84</option>
		    <option value="3">+37</option>
		</select>
        <asp:TextBox class="form-control text-register" placeholder="Phone number" ID="textSoDienThoai" runat="server"></asp:TextBox>
         <asp:RequiredFieldValidator ID="RequiredFieldValidator12" class= "pl-2 pt-2" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
    </div> <!-- form-group// -->
    <div class="form-group input-group" style="height: 40px;">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-map-marker"></i> </span>
		</div>
         <asp:dropdownlist runat="server" class="form-control text-register" id="textThanhPho">
                     <asp:listitem text="Hồ Chí Minh" value="1"></asp:listitem>
                     <asp:listitem text="Hà Nội" value="2"></asp:listitem>
                     <asp:listitem text="Đà Nẵng" value="3"></asp:listitem>
                </asp:dropdownlist>
               
               <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
         <asp:RequiredFieldValidator ID="RequiredFieldValidator13" class= "pl-2 pt-2" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
	</div> <!-- form-group end.// -->
          <div class="form-group input-group" style="height: 40px;">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-map-marker"></i> </span>
		</div>
               <asp:dropdownlist runat="server" class="form-control text-register" id="textQuanHuyen">
                     <asp:listitem text="Quận 1" value="1"></asp:listitem>
                     <asp:listitem text="Quận 2" value="2"></asp:listitem>
                     <asp:listitem text="Quận Thủ Đức" value="3"></asp:listitem>
                     <asp:listitem text="Quận Tân Bình" value="4"></asp:listitem>
                     <asp:listitem text="Quận Bình Thạnh" value="5"></asp:listitem>
                </asp:dropdownlist>
               
               <asp:RequiredFieldValidator ID="RequiredFieldValidator14" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
	</div> <!-- form-group end.// -->
          <div class="form-group input-group" style="height: 40px;">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-map-marker"></i> </span>
		 </div>
              <asp:TextBox class="form-control text-register" placeholder="Địa chỉ" ID="textTenDuongPho" runat="server"></asp:TextBox>
               <asp:RequiredFieldValidator ID="RequiredFieldValidator15" class= "pl-2 pt-2" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
    </div>
    <div class="form-group input-group" style="height: 40px;">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <asp:TextBox class="form-control text-register" placeholder="Create password" ID="TextBox6" runat="server" TextMode="Password"></asp:TextBox>
         <asp:RequiredFieldValidator ID="RequiredFieldValidator16" class= "pl-2 pt-2" runat="server" ControlToValidate="textHoTen"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
    </div> <!-- form-group// -->
    <div class="form-group input-group" style="height: 40px;">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <asp:TextBox class="form-control text-register" placeholder="Repeat password" ID="textMatKhau" runat="server" TextMode="Password"></asp:TextBox>
         <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ControlToValidate="textMatKhau"
                    ErrorMessage="Không được để trống"></asp:RequiredFieldValidator>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" ControlToValidate="textMatKhau"
                    ErrorMessage="Mật khẩu nhập lại không khớp"></asp:RequiredFieldValidator></td>
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button type="submit" style="background-image: linear-gradient(to left, #74ebd5, #9face6); border:none;" class="btn btn-primary btn-block text-register"> Create Account  </button>
    </div> <!-- form-group// -->                                                                    
</form>
</article>
</div> <!-- card.// -->

</div> 
<!--container end.//-->


</asp:Content>

