import {Component} from '@angular/core';
import {AgGridNg2, } from 'ag-grid-ng2/main';
import { Router }      from '@angular/router';
import {OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import {MemberService} from '../member.service'

@Component({
    selector: 'my-datatable',
    template: `
         <ag-grid-ng2 #agGrid style="height:100%;width:845px" class="ag-fresh"
            [gridOptions]="gridOptions">
         </ag-grid-ng2 >
     `,
    directives: [ROUTER_DIRECTIVES, AgGridNg2]
})

export class MemberDataBaseComponent implements OnInit {

    public gridOptions: any = [];
    allOfTheData = null;
    public pageSize = 5;

    columnDefs = [
        { headerName: "#", width: 50, cellRenderer: function (params) {
                return params.node.id + 1;
            }
        },
        { headerName: 'Sal', field: "title", width: 200 },
        { headerName: 'Name', field: "name", width: 180 },
        { headerName: 'Partner', field: "nric", width: 160 },
        { headerName: 'Status', field: "partner", width: 300 },
        { headerName: 'martial_status', field: "martial_status", width: 300 },
        { headerName: 'affiliation', field: "affiliation", width: 300 },
        { headerName: 'Status', field: "date_of_birth", width: 300 },
        { headerName: 'Status', field: "gender", width: 300 },
        { headerName: 'Status', field: "race", width: 300 },
        { headerName: 'Status', field: "member_number", width: 300 },
        { headerName: 'Status', field: "date_joined", width: 300 },
        { headerName: 'Status', field: "type", width: 300 },
        { headerName: 'Status', field: "home_address_1", width: 300 },
        { headerName: 'Status', field: "home_address_2", width: 300 },
        { headerName: 'Status', field: "home_address_3", width: 300 },
        { headerName: 'Status', field: "country", width: 300 },
        { headerName: 'Status', field: "postal_code", width: 300 },
        { headerName: 'Status', field: "residential", width: 300 },
        { headerName: 'Status', field: "mobile", width: 300 },
        { headerName: 'Status', field: "e_amplified", width: 300 },
        { headerName: 'Status', field: "highest_qualifications", width: 300 },
        { headerName: 'Status', field: "other_qualifications", width: 300 },
        { headerName: 'Status', field: "name_of_company", width: 300 },
        { headerName: 'Status', field: "designation", width: 300 },
        { headerName: 'Status', field: "office_1", width: 300 },
        { headerName: 'Status', field: "office_2", width: 300 },
        { headerName: 'Status', field: "office_3", width: 300 },
        { headerName: 'Status', field: "office_4", width: 300 },
        { headerName: 'Status', field: "postal_code_office", width: 300 },
        { headerName: 'Status', field: "contact_number_office", width: 300 },
        { headerName: 'Status', field: "fax_number", width: 300 },
        { headerName: 'Status', field: "details", width: 300 },
        { headerName: 'Status', field: "email_address", width: 300 },
        { headerName: 'Status', field: "subscription", width: 300 },
        { headerName: 'Status', field: "returned_mail_address", width: 300 },
        { headerName: 'Status', field: "date_of_update", width: 300 }

    ];

    dataSource = {

        pageSize: 5,
        getRows: (params: any) => {
            console.log("what is params")
            console.log(params)
            //var rowData = [
            //{"chr": "1", "_id": "1-22848972-A-C", "ref": "A", "pos": 22848972, "alt": "C"},
            //{"chr": "1", "_id": "1-33133968-T-C", "ref": "T", "pos": 33133968, "alt": "C"}
            //]
           // var rowData = this.returnRows();
           // var rowsThisPage = rowData.slice(params.startRow, params.endRow); //return data here
            //console.log(rowsThisPage)

           this._memberService.getMemberAll().subscribe(jsonObj =>{
                  var lastRow = 10;
                  // var rowData = this.returnRows();
                  // var rowsThisPage = jsonObj ;

                  console.log("jsonOOO")
                  console.log(jsonObj)
                 //console.log( jsonObj.mailing_list.name)
                   var rowsThisPage = jsonObj.slice(params.startRow, params.endRow)
                params.successCallback(rowsThisPage, lastRow);
            },err =>console.log(err));
        }
    }

    returnRows() {
        var rowData = [
            { "name": "Ronald Bowman", "country": "China", "city": "Lutou", "email": "rbowman0@spotify.com" },
            { "name": "Pamela Hill", "country": "Russia", "city": "Krylovskaya", "email": "phill1@symantec.com" },
            { "name": "Robin Andrews", "country": "Ukraine", "city": "Korop", "email": "randrews2@photobucket.com" },
            { "name": "Peter Kim", "country": "Mexico", "city": "San Jose", "email": "pkim3@theatlantic.com" },
            { "name": "Carol Foster", "country": "Mexico", "city": "El Aguacate", "email": "cfoster8@intel.com" },
            { "name": "Jimmy Burke", "country": "Indonesia", "city": "Banjarsari", "email": "jburke9@over-blog.com" },
            { "name": "Jonathan Crawford", "country": "Peru", "city": "Alca", "email": "jcrawforda@deliciousdays.com" },
            { "name": "Donald Montgomery", "country": "Poland", "city": "Działoszyce", "email": "dmontgomeryb@google.com.br" },
            { "name": "Donna Shaw", "country": "Japan", "city": "Akune", "email": "dshawc@chronoengine.com" },
            { "name": "Helen King", "country": "United States", "city": "Hollywood", "email": "hkingd@devhub.com" },
            { "name": "Walter Myers", "country": "China", "city": "a ndaowa n", "email": "wmyerse@state.tx.us" },
            { "name": " Alice Collins", "country": "Papua Nw  Guine a", "city": "Mendi", "email": "acollinsf@npr.org" },
            { "name": "Anne Richards", "country": "China", "city": "Koramlik", "email": "arichardsu@vinaora.com" },
            { "name": "Randy Miller", "country": "Indonesia", "city": "Trenggulunan", "email": "rmillerv@oakley.com" },
            { "name": "Phillip Adams", "country": "Bahamas", "city": "Duncan Town", "email": "padamsw@lycos.com" },
            { "name": "Nicholas Allen", "country": "Philippines", "city": "Bautista", "email": "nallenx@aboutads.info" },
            { "name": "Lisa Willis", "country": "Thailand", "city": "Lat Yao", "email": "lwillisy@istockphoto.com" },
            { "name": "Jeffrey Castillo", "country": "Indonesia", "city": "Karangsari", "email": "jcastilloz@washington.edu" },
            { "name": "Michael Carpenter", "country": "Colombia", "city": "Cali", "email": "mcarpenter13@prlog.org" },
            { "name": "Roger Lee", "country": "France", "city": "Courtaboeuf", "email": "rlee14@earthlink.net" },
            { "name": "Steve Wallace", "country": "Russia", "city": "Novobeysugskaya", "email": "swallace15@cisco.com" },
            { "name": "Shirley Patterson", "country": "Peru", "city": "La Tinguiña", "email": "spatterson16@woothemes.com" },
            { "name": "Nancy Ward", "country": "Sweden", "city": "Båstad", "email": "nward17@mapquest.com" }
        ]
        return rowData
    }

    constructor(private _memberService: MemberService) {
        this.gridOptions = {
            // rowData: this.myRowData,
            columnDefs: this.columnDefs,
            // rowSelection: 'multiple',
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            rowModelType: 'pagination'
        }
    }

    ngOnInit() {

        this._memberService.getMemberAll().subscribe(jsonObj => {
            console.log(jsonObj);
            console.log('success all')
        }, err => console.log(err));


        //console.log(this.myRowData)
        //this.createNewDatasource();
        //this.setRowData(this.myRowData);
        //console.log(this.myRowData)
        this.gridOptions.datasource = this.dataSource;
        //this.myRowData = this.returnRows();
    }
}



function onPageSizeChanged(newPageSize) {

    this.pageSize = new Number(newPageSize);
    this.createNewDatasource();
}


