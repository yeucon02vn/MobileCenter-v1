using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MobileCenter.Models.BUS;
using MobileCenter.Models.DTO;

namespace MobileCenter.View
{
    public partial class Home : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                HienThiDanhMucSanPham();
            }
        }

        private void HienThiDanhMucSanPham()
        {
            DanhMucSanPhamBUS xulydanhmucsanpham = new DanhMucSanPhamBUS();
            xulydanhmucsanpham.Select();
            dtlSanpham.DataSource = xulydanhmucsanpham.KetQua;
            dtlSanpham.DataBind();
        }

        protected void LinkButton1_Click1(object sender, EventArgs e)
        {
            if (Request.Cookies["ReturnURL"] != null)
            {
                Response.Cookies["ReturnURL"].Expires = DateTime.Now.AddDays(-1);
            }
            Response.Redirect("DangNhap.aspx");
        }
    }
}