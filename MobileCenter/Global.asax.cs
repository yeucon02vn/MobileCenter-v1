using MobileCenter.Models.BUS;
using System;
using System.Web;
using System.Web.Optimization;
using System.Web.Routing;


namespace MobileCenter
{
    public class Global : HttpApplication
    {
        void RegisterRoute(RouteCollection routes)
        {
            routes.MapPageRoute("Home Page","", "~/View/GioiThieuSanPham.aspx");
            routes.MapPageRoute("Cart Page", "customer/cart", "~/View/GioHang.aspx");
            routes.MapPageRoute("Sign in Page", "customer/signin", "~/View/DangNhap.aspx");
            routes.MapPageRoute("Sign up Page", "customer/signup", "~/View/DangKy.aspx");
            routes.MapPageRoute("Sign out Page", "customer/signout", "~/View/DangXuat.aspx");
            routes.MapPageRoute("Add Bill", "customer/add-bill", "~/View/ThemDonHang.aspx");
            routes.MapPageRoute("Product By Directory", "customer/product", "~/View/SanPhamTheoDanhMuc.aspx");
            routes.MapPageRoute("Invoice Page", "customer/invoice", "~/View/DonHangKhachHang.aspx");
            routes.MapPageRoute("Invoice Detail Page", "customer/invoice-detail", "~/View/ChiTietDonHangKhachHang.aspx");
            routes.MapPageRoute("Search Product Page", "customer/search", "~/View/TimKiemSanPham.aspx");
            routes.MapPageRoute("Add Product Page", "customer/add-product", "~/View/ThemGioHang.aspx");
            routes.MapPageRoute("Product Detail Page", "customer/product-detail", "~/View/ChiTietSanPham.aspx");

            routes.MapPageRoute("Admin Page", "admin", "~/Admins/View/DangNhapAdmin.aspx");
            routes.MapPageRoute("Admin SanPham Page", "admin/sanpham", "~/Admins/View/SanPham.aspx");
            routes.MapPageRoute("Admin ChiTietDonHang Page", "admin/chitietdonhang", "~/Admins/View/ChiTietDonHang.aspx");
            routes.MapPageRoute("Admin SuaSanPham Page", "admin/suasanpham", "~/Admins/View/SuaSanPham.aspx");
            routes.MapPageRoute("Admin ThemSanPham Page", "admin/themsanpham", "~/Admins/View/ThemSanPham.aspx");
            routes.MapPageRoute("Admin ThongKeDonHang Page", "admin/thongkedonhang", "~/Admins/View/ThongKeDonHang.aspx");
            routes.MapPageRoute("Admin ThongKe Page", "admin/thongke", "~/Admins/View/ThongKe.aspx");
        }
        void Application_Start(object sender, EventArgs e)
        {
            RegisterRoute(RouteTable.Routes);
            // Code that runs on application startup
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Application["SoNguoiOnLine"] = 0;
        }

        void Session_Start(object sender, EventArgs e)
        {
            // Code that runs when a new session is started
            ThamSoBUS soLuongTruyCap = new ThamSoBUS();
            soLuongTruyCap.Update();
            // Code that runs when a new session is started
            Application["SoNguoiOnLine"] = (int)Application["SoNguoiOnLine"] + 1;
        }

        void Session_End(object sender, EventArgs e)
        {
            // Code that runs when a session ends. 
            // Note: The Session_End event is raised only when the sessionstate mode
            // is set to InProc in the Web.config file. If session mode is set to StateServer 
            // or SQLServer, the event is not raised.
            Application["SoNguoiOnLine"] = (int)Application["SoNguoiOnLine"] - 1;
        }
    }
}