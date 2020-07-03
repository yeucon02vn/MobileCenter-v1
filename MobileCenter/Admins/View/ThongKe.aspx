<%@ Page Title="" Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="ThongKe.aspx.cs" Inherits="MobileCenter.Admins.View.ThongKe" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div style="width: 65%; margin: 15% 0 0 15%">
        <input id="datepicker" width="300" />
            <script>
                $('#datepicker').datepicker({
                    format: "mm/yyyy",
                    viewMode: "months",                   
                });
            </script>
        <div id="chartContainer" style="height: 300px; width: 100%;"></div>
    </div>
 
</asp:Content>