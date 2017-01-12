System.register(['@angular/core', 'ag-grid-ng2/main', '@angular/router', '../member.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, main_1, router_1, member_service_1;
    var MemberDataBaseComponent;
    function onPageSizeChanged(newPageSize) {
        this.pageSize = new Number(newPageSize);
        this.createNewDatasource();
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            }],
        execute: function() {
            MemberDataBaseComponent = (function () {
                function MemberDataBaseComponent(_memberService) {
                    var _this = this;
                    this._memberService = _memberService;
                    this.gridOptions = [];
                    this.allOfTheData = null;
                    this.pageSize = 5;
                    this.columnDefs = [
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
                    this.dataSource = {
                        pageSize: 5,
                        getRows: function (params) {
                            console.log("what is params");
                            console.log(params);
                            _this._memberService.getMemberAll().subscribe(function (jsonObj) {
                                var lastRow = 10;
                                console.log("jsonOOO");
                                console.log(jsonObj);
                                var rowsThisPage = jsonObj.slice(params.startRow, params.endRow);
                                params.successCallback(rowsThisPage, lastRow);
                            }, function (err) { return console.log(err); });
                        }
                    };
                    this.gridOptions = {
                        columnDefs: this.columnDefs,
                        enableColResize: true,
                        enableSorting: true,
                        enableFilter: true,
                        rowModelType: 'pagination'
                    };
                }
                MemberDataBaseComponent.prototype.returnRows = function () {
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
                    ];
                    return rowData;
                };
                MemberDataBaseComponent.prototype.ngOnInit = function () {
                    this._memberService.getMemberAll().subscribe(function (jsonObj) {
                        console.log(jsonObj);
                        console.log('success all');
                    }, function (err) { return console.log(err); });
                    this.gridOptions.datasource = this.dataSource;
                };
                MemberDataBaseComponent = __decorate([
                    core_1.Component({
                        selector: 'my-datatable',
                        template: "\n         <ag-grid-ng2 #agGrid style=\"height:100%;width:845px\" class=\"ag-fresh\"\n            [gridOptions]=\"gridOptions\">\n         </ag-grid-ng2 >\n     ",
                        directives: [router_1.ROUTER_DIRECTIVES, main_1.AgGridNg2]
                    }), 
                    __metadata('design:paramtypes', [member_service_1.MemberService])
                ], MemberDataBaseComponent);
                return MemberDataBaseComponent;
            }());
            exports_1("MemberDataBaseComponent", MemberDataBaseComponent);
        }
    }
});
//# sourceMappingURL=databasetable.component.js.map