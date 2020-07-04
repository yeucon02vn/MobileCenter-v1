using MobileCenter.Models.DAL;
using MobileCenter.Models.DTO;
using System.Web.UI.WebControls;

namespace MobileCenter.Models.BUS
{
    public class NguoiDungBUS
    {
        public NguoiDungDTO _nguoiDung { get; set; }
        public SqlDataSource KetQua { get; set; }
        public bool IsAuthenticated { get; set; }
        public bool IsInvalid { get; set; }

        public void LoginWithAdmin()
        {
            NguoiDungDAL loginWithAdmin = new NguoiDungDAL();
            loginWithAdmin._nguoiDung = this._nguoiDung;
            KetQua = loginWithAdmin.LoginWithAdmin();
            GridView grid = new GridView();
            grid.DataSource = KetQua;
            grid.DataBind();
            if (grid.Rows.Count != 0)
            {
                IsAuthenticated = true;
            }
            else
            {
                IsAuthenticated = false;
            }
        }

        public void LoginWithUser()
        {
            NguoiDungDAL loginWithUser = new NguoiDungDAL();
            loginWithUser._nguoiDung = this._nguoiDung;
            KetQua = loginWithUser.LoginWithUser();
            GridView grid = new GridView();
            grid.DataSource = KetQua;
            grid.DataBind();
            if (grid.Rows.Count != 0)
            {
                IsInvalid = true;
                _nguoiDung.HoTen = grid.Rows[0].Cells[0].Text;
                _nguoiDung.IdNguoiDung = int.Parse(grid.Rows[0].Cells[1].Text);
            }
            else
            {
                IsInvalid = false;
            }
        }

        public void Register()
        {
            NguoiDungDAL registerUser = new NguoiDungDAL();
            registerUser._nguoiDung = this._nguoiDung;
            registerUser.Insert();
            this._nguoiDung.IdNguoiDung = registerUser._nguoiDung.IdNguoiDung;
        }

        public void Update()
        {
            NguoiDungDAL updateUser = new NguoiDungDAL();
            updateUser._nguoiDung = this._nguoiDung;
            updateUser.Update();
        }

        public void ChangePassword()
        {
            NguoiDungDAL changePassword = new NguoiDungDAL();
            changePassword._nguoiDung = this._nguoiDung;
            changePassword.ChangePassword();
        }

        public void SelectById()
        {
            NguoiDungDAL selectUserById = new NguoiDungDAL();
            selectUserById._nguoiDung = this._nguoiDung;
            KetQua = selectUserById.SelectUserById();
        }
    }
}