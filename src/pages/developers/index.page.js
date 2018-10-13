var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import Component from "vue-class-component";
var DevelopersIndexPage = /** @class */ (function (_super) {
    __extends(DevelopersIndexPage, _super);
    function DevelopersIndexPage() {
        // private devsService: DevsService;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "devs works good";
        return _this;
        // public columnOptions: any[] = [];
        // public devs: Developer[] = [];
        // constructor() {
        //     super();
        //     this.devsService = new DevsService();
        // }
        // public mounted() {
        //     this.columnOptions.push({ data: "Id" });
        //     this.columnOptions.push({ data: "FirstName" });
        //     this.columnOptions.push({ data: "LastName" });
        //     this.columnOptions.push({ data: "Category" });
        //     this.columnOptions.push({ data: "Birthday" });
        //     this.columnOptions.push({
        //         render: function (data: any, type: any, row: any) {
        //             return '<a class="edit" href="/devs/details?id=' + row.Id + '" >Details</a>';
        //         }
        //     });
        //     this.devsService.getDevs()
        //         .then(response => {
        //             this.devs = response.data;
        //         });
        // }
    }
    DevelopersIndexPage = __decorate([
        Component({
            el: '#index-devs-page',
        })
    ], DevelopersIndexPage);
    return DevelopersIndexPage;
}(Vue));
export default DevelopersIndexPage;
var page = new DevelopersIndexPage();
Vue.config.devtools = true;
