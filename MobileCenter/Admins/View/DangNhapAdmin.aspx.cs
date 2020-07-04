using System;
using System.Web.Security;
using MobileCenter.Models.BUS;
using MobileCenter.Models.DTO;

namespace MobileCenter.Admins.View
{
    public partial class DangNhapAdmin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            userName.Focus();
        }
        protected void btnDangNhap_Click(object sender, EventArgs e)
        {
            if (IsValid)
            {
                NguoiDungDTO nguoidung = new NguoiDungDTO();
                NguoiDungBUS xulydangnhapadmin = new NguoiDungBUS();
                nguoidung.TenDangNhap = userName.Value;
                nguoidung.MatKhau = passWord.Value;
                xulydangnhapadmin._nguoiDung = nguoidung;
                xulydangnhapadmin.LoginWithAdmin();
                if (xulydangnhapadmin.IsAuthenticated)
                {
                    FormsAuthentication.SetAuthCookie(nguoidung.TenDangNhap, false);
                    FormsAuthentication.RedirectFromLoginPage(nguoidung.TenDangNhap, false);
                    Response.Redirect("~/admin/sanpham");
                }
            }
        }
    }
}