using System;
using System.Security.Principal;
using System.Web;
using System.Web.Security;
using System.Web.UI;

namespace MobileCenter.Admins.View
{
    public partial class Admin : MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.User.Identity.IsAuthenticated)
                menu.Visible = true;
            else
                menu.Visible = false;
        }
        protected void LinkButton1_Click(object sender, EventArgs e)
        {
            if (Page.User.Identity.IsAuthenticated)
            {
                FormsAuthentication.SignOut();
                HttpContext.Current.User =
                    new GenericPrincipal(new GenericIdentity(string.Empty), null);
                Response.Redirect("~/admin");
            }
            Response.Write("you're now logged out");
      
        }
    }
}