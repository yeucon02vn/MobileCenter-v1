using MobileCenter.App_User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MobileCenter.View
{
    public partial class DangXuat : NguoiDungHienTai
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            base._NguoiDungHienTai = null;
            Response.Redirect("~");
        }
    }
}