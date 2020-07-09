using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using MobileCenter.App_User;
using MobileCenter.Models;
using MobileCenter.Models.BUS;
using MobileCenter.Models.DTO;

namespace MobileCenter.View
{
    public partial class Home : MasterPage
    {
        public bool isVisible = true;
        public int dem { get; set; } = 0;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                HienThiDanhMucSanPham();
                cardArea.Visible = isVisible;
                slideShow.Visible = isVisible;
                imgAdv.Visible = isVisible;
                dem = 0;
                 // lblOnline.Text = Application["SoNguoiOnLine"].ToString();
                GioHangDTO gioHang = new GioHangDTO();
                gioHang.CartGuid = CartGUID;
                GioHangBUS gioHangBUS = new GioHangBUS();
                gioHangBUS._gioHang = gioHang;
                gioHangBUS.Select();
                GridView gridView = new GridView();
                gridView.DataSource = gioHangBUS.KetQua;
                gridView.DataBind();
                
                foreach(GridViewRow row in gridView.Rows)
                {
                    dem += int.Parse(row.Cells[3].Text);
                }
                productQuantity.Text = dem.ToString(); 
            }
        }

        private string CartGUID
        {
            get { return TaoCartGuid.LayCartGUID(); }
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