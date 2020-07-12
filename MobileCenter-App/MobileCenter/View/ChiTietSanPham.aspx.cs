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
    public partial class ChiTietSanPham : NguoiDungHienTai
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ((Home)this.Master).isVisible = false;
                if (base._NguoiDungHienTai == null)
                    ((Home)this.Master).isLogIn = true;
                else
                    ((Home)this.Master).isLogIn = false;
                Hienchitietsanpham();
            }
        }

        private void Hienchitietsanpham()
        {
            SanPhamDTO sanPham = new SanPhamDTO();
            sanPham.IdSanPham = int.Parse(Request.QueryString["IdSanPham"]);
            SanPhamBUS sanPhamBUS = new SanPhamBUS();
            sanPhamBUS._sanPham = sanPham;
            try
            {
                sanPhamBUS.SelectById();
            }
            catch
            {
                Response.Redirect("Trangloi.aspx");
            }
            dtlChiTietSanPham.DataSource = sanPhamBUS.KetQua;
            // dtlChiTietSanPham là ID của DataList
            dtlChiTietSanPham.DataBind();

        }
    }
}