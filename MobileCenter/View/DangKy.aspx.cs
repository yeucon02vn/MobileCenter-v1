using MobileCenter.App_User;
using MobileCenter.Models.BUS;
using MobileCenter.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MobileCenter.View
{
    public partial class DangKy : NguoiDungHienTai
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            textHoTen.Focus();
            ((Home)this.Master).isVisible = false;
        }

        protected void btnDangKy_Click(object sender, EventArgs e)
        {
            NguoiDungDTO nguoiDung = new NguoiDungDTO();
            NguoiDungBUS nguoiDungBUS = new NguoiDungBUS();
            if (IsValid)
            {
                nguoiDung.IdKieuNguoiDung = 1;
                nguoiDung.HoTen = textHoTen.Value;
                nguoiDung.TenDangNhap = textTenDangNhap.Value;
                nguoiDung.DiaChi = textDuongPho.Value + ", " + textThanhPho.Value + ", " + textQuanHuyen.Value;
                nguoiDung.MatKhau = textMatKhau.Value;
                nguoiDung.Email = textEmail.Value;
                nguoiDung.SoDienThoai = textSoDienThoai.Value;

                nguoiDungBUS._nguoiDung = nguoiDung;
                nguoiDungBUS.Register();
                _NguoiDungHienTai = nguoiDungBUS._nguoiDung;
                Response.Redirect("~");
            }
        }
    }
}