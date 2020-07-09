using MobileCenter.App_User;
using MobileCenter.Models.BUS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MobileCenter.View
{
    public partial class TimKiemSanPham : NguoiDungHienTai
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ((Home)this.Master).isVisible = false;
            ((Home)this.Master).isLogIn = false;
            HienThiSanPham();
        }

        private void HienThiSanPham()
        {
            SanPhamBUS sanPhamBUS = new SanPhamBUS();
            sanPhamBUS.Search(Request.QueryString["SearchBy"]);
            dtlSanPhamSearch.DataSource = sanPhamBUS.KetQua;
            dtlSanPhamSearch.DataBind();
        }
    }
}