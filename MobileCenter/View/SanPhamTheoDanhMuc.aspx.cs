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
    public partial class SanPhamTheoDanhMuc : NguoiDungHienTai
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
                HienThiSanPham();
            }
        }

        private void HienThiSanPham()
        {
            SanPhamDTO sanPham = new SanPhamDTO();
            sanPham.IdDanhMucSanPham = int.Parse(Request.QueryString["IdDanhMucSanPham"]);
            SanPhamBUS sanPhamBUS = new SanPhamBUS();
            sanPhamBUS._sanPham = sanPham;
            sanPhamBUS.SelectByDanhMuc();
            dtlSanPhamDM.DataSource = sanPhamBUS.KetQua;
            dtlSanPhamDM.DataBind();
        }
    }
}