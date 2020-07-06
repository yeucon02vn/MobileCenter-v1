using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using MobileCenter.App_User;
using MobileCenter.Models.BUS;
using MobileCenter.Models.DTO;

namespace MobileCenter.View
{
    public partial class Home : MasterPage
    {
        public bool isVisible = true;
 
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                HienThiDanhMucSanPham();
                cardArea.Visible = isVisible;
                slideShow.Visible = isVisible;
                lblOnline.Text = Application["SoNguoiOnLine"].ToString();
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