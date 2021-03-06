
export class TableConstants {
    purcahseOrderColumns: any = [];
    consumptionDetailsColumns: any = [];
    consumptionReportColumns: any = [];
    purchaseBillColumns: any = [];
    wardenTableColumns: any = [];
    wardenDetailsReportColumns: any = [];
    registrationColumns: any = [];
    purchaseDetailsReportColumns: any = [];
    openingBalanceReportColumns: any = [];
    hostelReportCols: any = [];
    studentDetailsColumns: any = [];
    employeeReportCols: any = [];
    studentFacilityReportCols: any = [];
    OpeningBalanceColumns: any = [];
    studentAcademicStatusDetailsColumns: any = [];
    hostelinfrastructureReportCols: any = [];
    feedingchargetypeReportCols: any = [];
    AccHeadColumns: any = [];
    HostelFundColumns: any = [];
    DistrictFundColumns: any = [];
    AccountHeadTable: any = [];
    HostelFundtable: any = [];
    StudentAttendanceTable: any = [];
    monthlywiseintentReportCols: any = [];
    employeeAttendanceReportCols: any = [];
    biometricattendancecountColumns: any = [];
    BMAttendanceReportCols: any = [];
    purchasedetailsReportCols: any = [];
    constructor() {
        this.purcahseOrderColumns = [
            { field: 'Commodity', header: 'Commodity', align: 'left !important' },
            { field: 'Quantity', header: 'Quantity', align: 'right !important' },
            { field: 'Unit', header: 'Unit', align: 'left !important' },
            { field: 'Rate', header: 'Rate', align: 'right !important' },
            { field: 'Total', header: 'Total', align: 'right !important' },
        ];

        this.consumptionReportColumns = [
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'ConsumptionDate', header: 'Consumption Date', align: 'center !important' },
            { field: 'TotalStudent', header: 'Total No.Of Students', align: 'right !important' },
            { field: 'Consumption', header: 'Consumption For', align: 'left !important' },
            { field: 'Commodity', header: 'Commodity', align: 'left !important' },
            { field: 'Unit', header: 'Unit', align: 'left !important' },
            { field: 'OB', header: 'Opening Balance', align: 'right !important' },
            { field: 'QTY', header: 'Required Quantity', align: 'right !important' },
            { field: 'CB', header: 'Closing Balance', align: 'right !important' },
        ];

        this.consumptionDetailsColumns = [
            { field: 'Consumption', header: 'Consumption For', align: 'left !important' },
            { field: 'cDate', header: 'Consumption Date', align: 'center !important' },
            { field: 'Commodity', header: 'Commodity', align: 'left !important' },
            { field: 'Unit', header: 'Unit', align: 'left !important' },
            { field: 'OB', header: 'Opening Balance', align: 'right !important' },
            { field: 'QTY', header: 'Required Quantity', align: 'right !important' },
            { field: 'CB', header: 'Closing Balance', align: 'right !important' },
        ];

        this.purchaseBillColumns = [
            { field: 'billNo', header: 'Bill No.', align: 'left !important' },
            { field: 'bDate', header: 'Bill Date', align: 'center !important' },
            { field: 'billAmount', header: 'Bill Amount', align: 'right !important' },
            { field: 'shopName', header: 'ShopName', align: 'left !important' },
            { field: 'gstNo', header: 'Gst Number', align: 'left !important' },
        ];

        this.wardenTableColumns = [
            { field: 'Name', header: 'Warden Name', align: 'left !important' },
            { field: 'CourseName', header: 'Qualification', align: 'left !important' },
            { field: 'Designation', header: 'Designation', align: 'left !important' },
            { field: 'EMail', header: 'Email', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'PhoneNo', header: 'Mobile No', align: 'center !important' },
            { field: 'Pincode', header: 'Pincode', align: 'center !important' },
        ];

        this.wardenDetailsReportColumns = [
            { field: 'WardenName', header: 'Name', align: 'left !important' },
            { field: 'Qualification', header: 'Qualification', align: 'left !important' },
            { field: 'ServiceJoinedDate', header: 'Service Joined Date', align: 'center !important' },
            { field: 'Designation', header: 'Designation', align: 'left !important' },
            { field: 'HostelJoinedDate', header: 'Hostel Joined Date', align: 'center !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'EMail', header: 'Email', align: 'left !important' },
            { field: 'PhoneNo', header: 'Phone No', align: 'right !important' },
            { field: 'EndDate', header: 'Service End Date', align: 'center !important' },
        ];

        this.registrationColumns = [
            { field: 'studentName', header: 'Name', align: 'left !important' },
            { field: 'age', header: 'Age', align: 'right !important' },
            { field: 'genderName', header: 'Gender', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'mobileNo', header: 'Mobile No.', align: 'right !important' },
            { field: 'instituteName', header: 'Institute Name', align: 'left !important' },
            { field: 'courseTitle', header: 'Course', align: 'left !important' },
            { field: 'aadharNo', header: 'Aadhar No.', align: 'right !important' },
            { field: 'emisno', header: 'EMIS NO.', align: 'right !important' },
            { field: 'totalYIncome', header: 'Yearly Income', align: 'right !important' },
        ];

        this.studentDetailsColumns = [
            { field: 'studentName', header: 'Name', align: 'left !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'age', header: 'Age', align: 'right !important' },
            { field: 'genderName', header: 'Gender', align: 'left !important' },
            { field: 'mobileNo', header: 'Mobile No.', align: 'right !important' },
            { field: 'instituteName', header: 'Institute Name', align: 'left !important' },
            { field: 'courseTitle', header: 'Course', align: 'left !important' },
            { field: 'address', header: 'Address', align: 'left !important' },
            { field: 'aadharNo', header: 'Aadhar No.', align: 'right !important' },
            { field: 'emisno', header: 'EMIS NO.', align: 'right !important' },
        ];

        this.purchaseDetailsReportColumns = [
            { field: 'BillNo', header: 'Bill No.', align: 'left !important' },
            { field: 'BillDate', header: 'Bill Date', align: 'center !important' },
            { field: 'BillAmount', header: 'Bill Amount', align: 'right !important' },
            { field: 'ShopName', header: 'ShopName', align: 'left !important' },
            { field: 'GstNo', header: 'Gst Number', align: 'left !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
        ];

        this.openingBalanceReportColumns = [
            { field: 'ShortYear', header: 'Accounting Year', align: 'left !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'CommodityName', header: 'Commodity Name', align: 'left !important' },
            { field: 'Qty', header: 'Quantity', align: 'right !important' },
            { field: 'UnitName', header: 'Unit', align: 'left !important' },

        ]

        this.hostelReportCols = [
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'HostelNameTamil', header: '?????????????????????????????? ???????????????', align: 'left !important' },
            { field: 'Name', header: 'Hostel Type', align: 'left !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            // { field: 'BuildingNo', header: 'BuildingNo', width: '100px', align: 'left !important'},
            // { field: 'Street', header: 'Street', width: '100px', align: 'left !important'},
            // { field: 'Landmark', header: 'Landmark', width: '100px', align: 'left !important'},
            { field: 'Pincode', header: 'Pincode', align: 'right !important' },
            { field: 'Phone', header: 'Contact No.', align: 'right !important' },
            { field: 'TotalStudent', header: 'Student Count', align: 'right !important' },
        ];

        this.employeeReportCols = [
            { field: 'district1', header: 'District Name', width: '100px', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk Name', width: '100px', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', width: '100px', align: 'left !important' },
            { field: 'DesignationName', header: 'Designation', width: '100px', align: 'left !important' },
            { field: 'FirstName', header: 'First Name', width: '100px', align: 'left !important' },
            { field: 'LastName', header: 'Last Name', width: '100px', align: 'left !important' },
            { field: 'Doj', header: 'Doj', width: '100px', align: 'left !important' },
            { field: 'GenderName', header: 'Gender', width: '100px', align: 'left !important' },
            { field: 'Address', header: 'Address', width: '100px', align: 'left !important' },
            { field: 'NativeDistrict', header: 'Native District', width: '100px', align: 'left !important' },
            { field: 'MobileNo', header: 'Mobile No', width: '100px', align: 'left !important' },
        ];

        this.studentFacilityReportCols = [
            { field: 'Districtname', header: 'District Name', width: '200px', align: 'left !important' },
            { field: 'Talukname', header: 'Hostel Name', width: '200px', align: 'left !important' },
            { field: 'HostelName', header: 'Hostel Name', width: '200px', align: 'left !important' },
            { field: 'FacilityName', header: 'Facility Name', width: '200px', align: 'left !important' },
            { field: 'FacilityType', header: 'Facility Type', width: '200px', align: 'left !important' },
            { field: 'NoOfCounts', header: 'No Of Counts', width: '200px', align: 'left !important' },
            { field: 'Remarks', header: 'Remarks', width: '200px', align: 'left !important' },
        ];

        this.OpeningBalanceColumns = [
            { field: 'ShortYear', header: 'Accounting Year', align: 'left !important' },
            // { field: 'Districtname', header: 'District', align: 'left !important'},
            // { field: 'Talukname', header: 'Taluk', align: 'left !important'},
            // { field: 'HostelName', header: 'Hostel Name', align: 'left !important'},
            { field: 'CommodityName', header: 'Commodity Name', align: 'left !important' },
            { field: 'Qty', header: 'Quantity', align: 'right !important' },
            { field: 'UnitName', header: 'Unit', align: 'left !important' },
        ];

        this.studentAcademicStatusDetailsColumns = [
            { field: 'StudentName', header: 'Student Name' },
            { field: 'Class', header: 'Class' },
        ];

        this.feedingchargetypeReportCols = [
            { field: 'AccountingYear', header: 'Accounting Year' },
            { field: 'FeedingChargeName', header: 'FeedingChargesType' },
            { field: 'School', header: 'Amount For School' },
            { field: 'College', header: 'Amount For College' },
            { field: 'Flag', header: 'Status' },
        ];

        this.hostelinfrastructureReportCols = [
            { field: 'Districtname', header: 'District' },
            { field: 'Talukname', header: 'Taluk' },
            { field: 'HostelName', header: 'Hostel' },
            { field: 'TotalArea', header: 'Total Area' },
            { field: 'BuildingArea', header: 'Building Area' },
            { field: 'NoOfFloor', header: 'No Of Floor' },
            { field: 'NoOfRoom', header: 'No Of Room' },
            { field: 'Kitchen', header: 'Kitchen' },
            { field: 'Bathroom', header: 'Bathroom' },
            { field: 'CreatedDate', header: 'Created Date' },
        ];

        this.AccHeadColumns = [
            { field: 'ShortYear', header: 'Accounting Year', align: 'left !important' },
            { field: 'GONumber', header: 'GO Number', align: 'left !important' },
            { field: 'GroupName', header: 'Group Type', align: 'left !important' },
            { field: 'AccountHeadName', header: 'Account Head', align: 'center !important' },
            { field: 'Amount', header: 'Amount', align: 'right !important' },
        ];

        this.HostelFundColumns = [
            { field: 'ShortYear', header: 'Accounting Year', align: 'left !important' },
            { field: 'GONumber', header: 'GO Number', align: 'left !important' },
            { field: 'GroupName', header: 'Group Type', align: 'left !important' },
            { field: 'AccountHeadName', header: 'Account Head', align: 'center !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'TalukAmount', header: 'Taluk Fund', align: 'right !important' },
        ];

        this.DistrictFundColumns = [
            { field: 'ShortYear', header: 'Accounting Year', align: 'left !important' },
            { field: 'GONumber', header: 'GO Number', align: 'left !important' },
            { field: 'GroupName', header: 'Group Type', align: 'left !important' },
            { field: 'AccountHeadName', header: 'Account Head', align: 'center !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'DistrictAmount', header: 'Amount', align: 'right !important' }
        ];

        this.AccountHeadTable = [
            { field: 'ShortYear', header: 'Accounting Year', align: 'left !important' },
            { field: 'GONumber', header: 'GO Number', align: 'left !important' },
            { field: 'GroupName', header: 'Group Type', align: 'left !important' },
            { field: 'AccountHeadName', header: 'Account Head', align: 'center !important' },
            { field: 'Amount', header: 'Alloted Amount', align: 'right !important' },
        ];

        this.HostelFundtable = [
            { field: 'ShortYear', header: 'Accounting Year', align: 'left !important' },
            { field: 'GONumber', header: 'GO Number', align: 'left !important' },
            { field: 'GroupName', header: 'Group Type', align: 'left !important' },
            { field: 'AccountHeadName', header: 'Account Head', align: 'center !important' },
            { field: 'Districtname', header: 'District', align: 'left !important' },
            { field: 'Talukname', header: 'Taluk', align: 'left !important' },
            { field: 'TalukAmount', header: 'Taluk Fund', align: 'right !important' },
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important' },
            { field: 'HostelFund', header: 'Hostel Fund', align: 'right !important' },
        ];

        this.StudentAttendanceTable = [
            { field: 'StudentName', header: 'Student Name' },
            { field: 'remarks', header: 'Remarks' },
        ];

        this.monthlywiseintentReportCols = [
            { field: 'ShortYear', header: 'Accounting Year' },
            { field: 'CommodityName', header: 'Commodity Name' },
            { field: 'UnitName', header: 'Unit' },
            { field: 'Qty', header: 'Quantity' },
            { field: 'MonthwiseDate', header: 'Month' },
            { field: 'ApprovalStatusName', header: 'Approval Status' },
        ];

        this.employeeAttendanceReportCols = [
            { field: 'Districtname', header: 'Districtname', width: '100px', align: 'left !important'},
            { field: 'Talukname', header: 'HostelName', width: '100px', align: 'left !important'},
            { field: 'HostelName', header: 'HostelName', width: '100px', align: 'left !important'},
            { field: 'FirstName', header: 'Employee Name', width: '100px', align: 'left !important' },
            { field: 'DesignationName', header: 'Designation', width: '100px', align: 'left !important'},
            { field: 'AttendanceDate', header: 'Attendance Date', width: '100px', align: 'center !important'},
            { field: 'Remarks', header: 'Remarks', width: '100px', align: 'left !important' },
        ];

        this.BMAttendanceReportCols = [
            { field: 'SerialNumber', header: 'Machine Serial No', width: '100px', align: 'center !important'},
            { field: 'Districtname', header: 'District Name', width: '100px', align: 'center !important'},
            { field: 'Talukname', header: 'Taluk', align: 'left !important'},
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important'},
           // { field: 'DeviceId', header: 'Device No', width: '100px', align: 'center !important'},
            { field: 'StudentName', header: 'Stuent Name', width: '100px', align: 'center !important'},
            { field: 'Name', header: 'Standard/Course', width: '100px', align: 'center !important'},
            { field: 'UserId', header: 'Attendance ID', width: '100px', align: 'center !important'},
            { field: 'LogDate', header: 'Attendance Date', width: '100px', align: 'center !important'},
            //{ field: 'DownloadDate', header: 'Download Date', width: '100px', align: 'center !important'},
        ];

        this.biometricattendancecountColumns = [
            { field: 'SerialNumber', header: 'Machine Serial No', width: '100px', align: 'center !important'},
            { field: 'AttendanceDate', header: 'Date', width: '100px', align: 'center !important'},
            { field: 'monyr', header: 'Month/Year', width: '100px'},
            { field: 'StudentCount', header: 'Student Count', width: '100px', align: 'center !important'},
        ];

        this.purchasedetailsReportCols = [
            { field: 'BillNo', header: 'Bill No.', align: 'left !important'},
            { field: 'BillDate', header: 'Bill Date', align: 'center !important'},
            { field: 'BillAmount', header: 'Bill Amount',align: 'right !important'},
            { field: 'ShopName', header: 'ShopName', align: 'left !important'},
            { field: 'GstNo', header: 'Gst Number', align: 'left !important'},
            { field: 'Districtname', header: 'District', align: 'left !important'},
            { field: 'Talukname', header: 'Taluk', align: 'left !important'},
            { field: 'HostelName', header: 'Hostel Name', align: 'left !important'},
            { field: 'Qty', header: 'Quantity', align: 'left !important'},
            { field: 'UnitId', header: 'Unit Id', align: 'left !important'},
        ];

    }
}