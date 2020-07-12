<%@ Page Title="" Language="C#" MasterPageFile="~/Admins/View/Admin.Master" AutoEventWireup="true" CodeBehind="ThongKe.aspx.cs" Inherits="MobileCenter.Admins.View.ThongKe" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div style="width: 75%;">
        <div style="display: flex;  padding-top: 20px;font-size: 16px;justify-content: center;">
             <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked >
                <label class="form-check-label" for="exampleRadios2">
                  <p style ="margin-left: 10px;margin-right: 10px;">Month</p>
                </label>
              </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" >
                    <label class="form-check-label" for="exampleRadios1">
                     <p style ="margin-left: 10px;margin-right: 10px;">Year</p>
                    </label>
                  </div>
        </div>
       
        <input class="mt-5 mb-4" id="datepicker" width="300" />
            <script>
                $('#datepicker').datepicker({
                    format: "mm/yyyy",
                    viewMode: "months",                   
                });
            </script>
        <div id="chartContainer" style="height: 300px; width: 100%;"></div>
        <div id="chartContainerYear" style="height: 300px; width: 100%;"></div>
    </div>
 
</asp:Content>