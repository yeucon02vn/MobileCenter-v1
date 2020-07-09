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
        public bool isLogIn = true;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                HienThiDanhMucSanPham();
                cardArea.Visible = isVisible;
                slideShow.Visible = isVisible;
                imgAdv.Visible = isVisible;
                //lblOnline.Text = Application["SoNguoiOnLine"].ToString();
                HyperLink8.Visible = isLogIn;
                HyperLink9.Visible = isLogIn;
                HyperLink10.Visible = !isLogIn;
            }
        }

        private void HienThiDanhMucSanPham()
        {
            DanhMucSanPhamBUS xulydanhmucsanpham = new DanhMucSanPhamBUS();
            xulydanhmucsanpham.Select();
            dtlSanpham.DataSource = xulydanhmucsanpham.KetQua;
            dtlSanpham.DataBind();
        }
    }
}