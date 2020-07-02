<%@ Page Title="" Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="ThongKe.aspx.cs" Inherits="MobileCenter.Admins.View.ThongKe" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<canvas id="myChart" style="max-width: 500px;"></canvas>
   <body class="html_bg">
       
    <input id="datepicker" width="300" style="height:40px; font-size:15px"/>
    <script>
        $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });
    </script>
  
    </body>
    <div id="chartContainer" style="height: 300px; width: 100%;"></div>
</asp:Content>