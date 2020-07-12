using MobileCenter.App_User;
using MobileCenter.Models.BUS;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MobileCenter.View
{
    public partial class GioiThieuSanPham : NguoiDungHienTai
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ((Home)this.Master).isVisible = true;
            if (base._NguoiDungHienTai == null)
                ((Home)this.Master).isLogIn = true;
            else
                ((Home)this.Master).isLogIn = false;
            Response.Cookies["ReturnURL"].Value = null;
        }
    }
}