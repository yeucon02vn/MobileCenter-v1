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
                NguoiDungDTO nguoiDung = new NguoiDungDTO();
                NguoiDungBUS nguoiDungBus = new NguoiDungBUS();
                nguoiDung.TenDangNhap = userName.Value;
                nguoiDung.MatKhau = passWord.Value;
                nguoiDungBus._nguoiDung = nguoiDung;
                nguoiDungBus.LoginWithAdmin();
                if (nguoiDungBus.IsAuthenticated)
                {
                    FormsAuthentication.SetAuthCookie(nguoiDung.TenDangNhap, false);
                    FormsAuthentication.RedirectFromLoginPage(nguoiDung.TenDangNhap, false);   
                    Response.Redirect("~/admin/sanpham");
                }
            }
        }
    }
}