"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[872],{7872:(k,p,c)=>{c.r(p),c.d(p,{MoviesListModule:()=>B});var m=c(8583),l=c(292),s=c(4785),t=c(7716),u=c(900),d=c(4655),_=c(2976);function f(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",16),t.TgZ(1,"span",17),t.NdJ("click",function(){return t.CHM(i),t.oxw().addNewMovie()}),t._uU(2,"Add New Movie"),t.qZA(),t.qZA()}}function v(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1," Name "),t.qZA())}function h(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.name," ")}}function g(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1," Director "),t.qZA())}function C(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.director," ")}}function M(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1," IMDB Score "),t.qZA())}function Z(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.imdb_score," ")}}function T(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1," Genre "),t.qZA())}function x(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.genre," ")}}function L(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1," Popularity "),t.qZA())}function y(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i._99popularity," ")}}function N(e,o){1&e&&t._UZ(0,"th",18)}function U(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"td",19),t.TgZ(1,"span",20),t.NdJ("click",function(){const r=t.CHM(i).$implicit;return t.oxw().editMovie(r)}),t._uU(2,"Edit"),t.qZA(),t.qZA()}}function A(e,o){1&e&&t._UZ(0,"th",18)}function Y(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"td",19),t.TgZ(1,"span",21),t.NdJ("click",function(){const r=t.CHM(i).$implicit;return t.oxw().deleteMovie(r)}),t._uU(2,"Delete"),t.qZA(),t.qZA()}}function w(e,o){1&e&&t._UZ(0,"tr",22)}function D(e,o){1&e&&t._UZ(0,"tr",23)}const S=function(){return[7]};let Q=(()=>{class e{constructor(i,n,a){this.appService=i,this.router=n,this.appConstants=a,this.displayedColumns=["name","director","imdb_score","_99popularity","genre"],this.dataSource=new s.by([]),a.loggedInUser.id&&this.displayedColumns.push("edit","delete")}ngOnInit(){this.search()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}search(){this.appService.getMovies().subscribe(i=>{i&&i.List&&i.List.length>0&&(this.dataSource=new s.by(i.List),this.dataSource.paginator=this.paginator)})}editMovie(i){this.router.navigateByUrl("/mmania/add-movie/"+i.id||0)}addNewMovie(){this.router.navigateByUrl("/mmania/add-movie/0")}deleteMovie(i){this.appService.deleteMovie(i.id||0).subscribe(n=>{n&&n.List&&n.List.length>0&&(this.dataSource=new s.by(n.List),this.dataSource.paginator=this.paginator)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(u.z),t.Y36(d.F0),t.Y36(_.$))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-movies-list"]],viewQuery:function(i,n){if(1&i&&t.Gf(l.NW,5),2&i){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first)}},decls:29,vars:6,consts:[[1,"app-title"],["class","flx-end-end","style","color: rgb(58, 60, 184);",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","director"],["matColumnDef","imdb_score"],["matColumnDef","genre"],["matColumnDef","_99popularity"],["matColumnDef","edit"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],[1,"flx-end-end",2,"color","rgb(58, 60, 184)"],[1,"pointer",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"pointer",2,"color","rgb(58, 60, 184)",3,"click"],[1,"pointer",2,"color","rgb(243, 13, 13)",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t._uU(1,"Movies List"),t.qZA(),t.YNc(2,f,3,0,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"table",3),t.ynx(5,4),t.YNc(6,v,2,0,"th",5),t.YNc(7,h,2,1,"td",6),t.BQk(),t.ynx(8,7),t.YNc(9,g,2,0,"th",5),t.YNc(10,C,2,1,"td",6),t.BQk(),t.ynx(11,8),t.YNc(12,M,2,0,"th",5),t.YNc(13,Z,2,1,"td",6),t.BQk(),t.ynx(14,9),t.YNc(15,T,2,0,"th",5),t.YNc(16,x,2,1,"td",6),t.BQk(),t.ynx(17,10),t.YNc(18,L,2,0,"th",5),t.YNc(19,y,2,1,"td",6),t.BQk(),t.ynx(20,11),t.YNc(21,N,1,0,"th",5),t.YNc(22,U,3,0,"td",6),t.BQk(),t.ynx(23,12),t.YNc(24,A,1,0,"th",5),t.YNc(25,Y,3,0,"td",6),t.BQk(),t.YNc(26,w,1,0,"tr",13),t.YNc(27,D,1,0,"tr",14),t.qZA(),t._UZ(28,"mat-paginator",15),t.qZA()),2&i&&(t.xp6(2),t.Q6J("ngIf",null==n.appConstants||null==n.appConstants.loggedInUser?null:n.appConstants.loggedInUser.id),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,S)))},directives:[m.O5,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,l.NW,s.ge,s.ev,s.XQ,s.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,l.TU,s.p0,d.Bz.forChild([{path:"",pathMatch:"full",component:Q}])]]}),e})()}}]);