using MobileCenter.App_User;
using MobileCenter.Models;
using MobileCenter.Models.BUS;
using MobileCenter.Models.DTO;
using System;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MobileCenter.View
{

    public partial class GioHang : NguoiDungHienTai
    {
        private decimal _tongtien;
        private int dem = 0;
        protected void Page_Load(object sender, EventArgs e)
        {

            gridgiohang.PageSize = 10;
            if (!IsPostBack)
            {
                HienThiGioHang();
                ((Home)this.Master).isVisible = false;
            }
        }

        private void HienThiGioHang()
        {
            dem = 0;
            GioHangDTO gioHang = new GioHangDTO();
            gioHang.CartGuid = CartGUID;
            GioHangBUS gioHangBUS = new GioHangBUS();
            gioHangBUS._gioHang = gioHang;
            gioHangBUS.Select(); gioHangBUS.Select();
            gridgiohang.DataSource = gioHangBUS.KetQua;
            gridgiohang.DataBind();
            foreach (GridViewRow row in gridgiohang.Rows)
            {
                TextBox quantity = (TextBox)row.FindControl("textQuantity");
                dem += int.Parse(quantity.Text);
            }
            Label count = (Label)((Home)this.Master).FindControl("productQuantity");
            count.Text = dem.ToString();
        }
        private string CartGUID
        {
            get { return TaoCartGuid.LayCartGUID(); }
        }
        protected void ImageButtontieptucmuahang_Click(object sender, EventArgs e)
        {
            Response.Redirect("~");
        }
        protected void ImageButtoncapnhatthaydoi_Click(object sender, EventArgs e)
        {
            foreach (GridViewRow row in gridgiohang.Rows)
            {
                if (row.RowType == DataControlRowType.DataRow)
                {
                    DataKey data = gridgiohang.DataKeys[row.DataItemIndex];//lay du lieu cua cot lam khoa
                    //-------------------Cập nhật thay đổi số lượng sản phẩm trong TextBox--------------------
                    TextBox textmoi = (TextBox)row.FindControl("textQuantity");
                    int newQuantity = int.Parse(textmoi.Text);
                    Update(int.Parse(data.Values["IdGioHang"].ToString()), newQuantity);
                }
            }
            HienThiGioHang();

            int Dem = gridgiohang.Rows.Count;
            if (Dem == 0)
            {
                lblTotal.Text = "0 VND";
                lblThongBao.Text = "Bạn chưa có sản phẩm nào trong giỏ hàng";
            }
        }


        protected void DeleteProduct(object sender, EventArgs e)
        {
        }

        //------------Thủ tục Update------------------
        private void Update(int id, int soluong)
        {
            GioHangBUS gioHangBUS = new GioHangBUS();
            GioHangDTO gioHang = new GioHangDTO();
            gioHang.SoLuong = soluong;
            gioHang.IdGioHang = id;
            gioHangBUS._gioHang = gioHang;
            try
            {
                gioHangBUS.Update();
            }
            catch
            {
                Response.Redirect("Trangloi.aspx");
            }

        }
        //--------------------Thủ tục Delete()------------------
        private void Delete(int id)
        {
            GioHangBUS gioHangBUS = new GioHangBUS();
            GioHangDTO gioHang = new GioHangDTO();
            gioHang.IdGioHang = id;
            gioHangBUS._gioHang = gioHang;
            try
            {
                gioHangBUS.Delete();
            }
            catch
            {
                Response.Redirect("Trangloi.aspx");
            }
        }
        protected void gridgiohang_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                _tongtien += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "ThanhTien"));
            }
            lblTotal.Text = string.Format(_tongtien.ToString("###,###,###")) + " VND";

        }
        protected void ImageButtonXacnhanthanhtoan_Click(object sender, EventArgs e)
        {
            Response.Cookies["ReturnURL"].Value = "add-bill";
            if(base._NguoiDungHienTai == null)
                Response.Redirect("~/customer/signin");
            else
                Response.Redirect("~/customer/invoice");
        }

        protected void gridgiohang_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            DataKey data = gridgiohang.DataKeys[e.RowIndex];
            Delete(int.Parse(data.Values["IdGioHang"].ToString()));
            HienThiGioHang();

            int Dem = gridgiohang.Rows.Count;
            if (Dem == 0)
            {
                lblTotal.Text = "0 VND";
                lblThongBao.Text = "Bạn chưa có sản phẩm nào trong giỏ hàng";
            }
        }
    }

}