using MobileCenter.Models.DTO;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI.WebControls;

namespace MobileCenter.Models.DAL
{
    public class NguoiDungDAL
    {
        public NguoiDungDTO _nguoiDung { get; set; }

        public SqlDataSource Connect()
        {
            SqlDataSource sqlData = new SqlDataSource();
            KetNoi chuoiketnoi = new KetNoi();
            sqlData.ConnectionString = chuoiketnoi.ConnectionString();
            return sqlData;
        }

        public void Insert()
        {
            SqlDataSource sqlData = Connect();
            sqlData.InsertCommandType = SqlDataSourceCommandType.StoredProcedure;
            sqlData.InsertCommand = "NguoiDung_Insert";
            sqlData.InsertParameters.Add("HoTen", _nguoiDung.HoTen);
            sqlData.InsertParameters.Add("TenDangNhap", _nguoiDung.TenDangNhap);
            sqlData.InsertParameters.Add("DiaChi", _nguoiDung.DiaChi);
            sqlData.InsertParameters.Add("SoDienThoai", _nguoiDung.SoDienThoai);
            sqlData.InsertParameters.Add("Email", _nguoiDung.Email);
            sqlData.InsertParameters.Add("IdKieuNguoiDung", _nguoiDung.IdKieuNguoiDung.ToString());
            sqlData.InsertParameters.Add("MatKhau", _nguoiDung.MatKhau);
            sqlData.Insert();

        }

        public SqlDataSource LoginWithAdmin()
        {
            SqlDataSource sqlData = Connect();
            sqlData.SelectCommandType = SqlDataSourceCommandType.StoredProcedure;
            sqlData.SelectCommand = "DangNhapAdmin_Select";
            sqlData.SelectParameters.Add("TenDangNhap", _nguoiDung.TenDangNhap);
            sqlData.SelectParameters.Add("MatKhau", _nguoiDung.MatKhau);
            return sqlData;
        }

        public SqlDataSource LoginWithUser()
        {
            SqlDataSource sqlData = Connect();
            sqlData.SelectCommandType = SqlDataSourceCommandType.StoredProcedure;
            sqlData.SelectCommand = "DangNhapNguoiDung_Select";
            sqlData.SelectParameters.Add("TenDangNhap", _nguoiDung.TenDangNhap);
            sqlData.SelectParameters.Add("MatKhau", _nguoiDung.MatKhau);
            return sqlData;
        }

        public void Update()
        {
            SqlDataSource sqlData = Connect();
            SqlConnection conect = new SqlConnection(sqlData.ConnectionString);
            conect.Open();
            SqlCommand com = new SqlCommand();
            com.Connection = conect;
            com.CommandType = CommandType.StoredProcedure;
            com.CommandText = "NguoiDung_Update";
            com.Parameters.Add("@HoTen", SqlDbType.Int).Value = _nguoiDung.HoTen;
            com.Parameters.Add("@DiaChi", SqlDbType.NVarChar).Value = _nguoiDung.DiaChi;
            com.Parameters.Add("@SoDienThoai", SqlDbType.NVarChar).Value = _nguoiDung.SoDienThoai;
            com.Parameters.Add("@Email", SqlDbType.NVarChar).Value = _nguoiDung.Email;
            com.Parameters.Add("@IdNguoiDung", SqlDbType.Int).Value = _nguoiDung.IdNguoiDung;
            com.ExecuteNonQuery();
        }

        public void ChangePassword()
        {
            SqlDataSource sqlData = Connect();
            SqlConnection conect = new SqlConnection(sqlData.ConnectionString);
            conect.Open();
            SqlCommand com = new SqlCommand();
            com.Connection = conect;
            com.CommandType = CommandType.StoredProcedure;
            com.CommandText = "NguoiDung_Update";
            com.Parameters.Add("@MatKhau", SqlDbType.NVarChar).Value = _nguoiDung.HoTen;
            com.Parameters.Add("@IdNguoiDung", SqlDbType.Int).Value = _nguoiDung.DiaChi;
            com.ExecuteNonQuery();
        }

        public SqlDataSource SelectUserById()
        {
            SqlDataSource sqlData = Connect();
            sqlData.SelectCommandType = SqlDataSourceCommandType.StoredProcedure;
            sqlData.SelectCommand = "NguoiDung_SelectById";
            sqlData.SelectParameters.Add("IdNguoiDung", _nguoiDung.IdNguoiDung.ToString());
            return sqlData;
        }
    }
}