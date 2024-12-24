import{f as fe,Q as y,a1 as ye,J as ve,ai as ge,y as we,p as xe,i as _,t as g,q as w,j as t,x as C,a4 as u,a5 as d,z as p,a9 as a,k as l,A as i,v,aq as x,F as b,s as k,D as c,av as he,c as be,R as ke,N as Fe,o as h,u as Oe,B as Ce,T as Se}from"./entry.4bbb2d6c.js";import{O as Be}from"./OtpVerify.f5074882.js";import{_ as Ve}from"./logo.bbc6aa26.js";const Ie={data(){return{showModal:!1,step:1,themeCss:"/demo2.css",country:"",news_letter:!1,terms_conditions:!1,phonecode:"",anotherInputValue:"",successMessage:"",errorMessage:"",auth:{user_code:"",firstname:"",lastname:"",email:"",username:"",password:"",password_confirmation:"",company_name:"",addressone:"",addresstwo:"",postalcode:"",city:"",country:"",state:"",contact:"",telephone:"",from_to_platform:"",desc_business:"",is_representative:"no",representative_code:"",phonecode:"",otp:"",isBlurred:!1},autherror:{},selected:{firstname:!1,lastname:!1,email:!1,username:!1,password:!1,password_confirmation:!1,company_name:!1,addressone:!1,addresstwo:!1,postalcode:!1,city:!1,country:!1,state:!1,contact:!1,telephone:!1,from_to_platform:!1,desc_business:!1,is_representative:!1,representative_code:!1},otpdata:{encryptedOTP:"",userInputOTP:""},countries:{},states:{},market_platform:{},business_describe:{},otp_success:"",otp_error:"",cartFlag:!1,wishFlag:!1,is_cartData:!1,is_wishData:!1,is_verify_otp:!1,otperror:{}}},components:{OtpVerify:Be},computed:{},head(){return{title:"Register"}},watch:{country:async function(){this.auth.contact="",this.otp_success="",this.otperror={},this.auth.country=this.country;var r=await this.countries.filter(e=>e.id===this.country);this.phonecode="+"+r[0].phonecode,this.fetchState()},news_letter:function(){this.auth.news_letter=this.news_letter?"yes":"no"},terms_conditions:function(){this.auth.terms_conditions=this.terms_conditions?"yes":""},cartFlag:function(){if(this.is_cartData){if(this.is_wishData)return!0;this.cartFlag&&this.pageRedirect()}},wishFlag:function(){this.is_cartData?this.wishFlag&&this.cartFlag&&this.pageRedirect():this.wishFlag&&this.pageRedirect()}},methods:{focusInput(r){this.$refs[r].focus()},select(r){this.selected[r]=!0},handleFocusOut(r){r==="contact"&&this.successMessage==""&&(this.selected.anotherInput=this.auth.contact!=="",this.otp_success==!1&&this.autherror!=""&&this.sendOtp(),this.selected.contact=!1)},showMessage(r,e){this[e]=r,setTimeout(()=>{this[e]=""},5e3)},async login(){const r=await y("login",this.auth);r.error?this.errorform=r.errors:r.success&&(localStorage.setItem("user-data",JSON.stringify(r.data.user)),localStorage.setItem("token",r.data.token),localStorage.getItem("cart-product")!=null&&(localStorage.getItem("wish-product")!=null&&(this.is_wishData=!0),this.cartFlag=await this.storeDatatoCart(),this.is_cartData=!0),localStorage.getItem("wish-product")!=null&&(await this.storeDatatoWish(),this.is_wishData=!0),!this.is_cartData&&!this.is_wishData&&this.pageRedirect())},async pageRedirect(){window.location.href="/"},async storeDatatoCart(){if(localStorage.getItem("cart-product")!=null){const r=localStorage.getItem("cart-product"),e=JSON.parse(r);let m=0;e.length>0&&e.forEach((f,o)=>{console.warn(m++);let n={productid:f.productid,quantity:f.quantity,price:f.price,flag:"addToCart",guest:!0,image:JSON.parse(f.productid.work_images)!=null?JSON.parse(f.productid.work_images)[0].path:"/images/image-not-found.png"};ye().addToCart(n).then(()=>{o===e.length-1&&(this.cartFlag=!0,localStorage.removeItem("cart-product"))})})}},async storeDatatoWish(){if(localStorage.getItem("wish-product")!=null){const r=localStorage.getItem("wish-product"),e=JSON.parse(r);let m=0;e.length>0&&e.forEach((f,o)=>{console.log(m++);let n={productid:f.productid,flag:!1,add:!0,guest:!0,image:f.image};ve().addToWishList(n).then(()=>{o===e.length-1&&(this.wishFlag=!0,localStorage.removeItem("wish-product"))})})}},attemptstep1(){(this.auth.firstname||this.auth.lastname||this.auth.email||this.auth.username||this.auth.password||this.auth.password_confirmation)&&this.changeStep(2)},attemptstep2(){(this.auth.company_name||this.auth.addressone||this.auth.addresstwo||this.auth.postalcode||this.auth.city||this.auth.country||this.auth.state||this.auth.contact||this.auth.telephone||this.auth.taxid||this.auth.company_website)&&this.changeStep(3)},attemptstep3(){(this.auth.from_to_platform||this.auth.desc_business||this.auth.is_representative||this.auth.representative_code||this.news_letter||this.terms_conditions)&&this.register(2)},async register(){var e=await y("register",this.auth);e.success?(this.autherror={},this.login()):e.error&&(this.autherror=e.errors)},async sendOtp(){try{this.auth.phonecode=this.phonecode;let r=await y("send-contact",this.auth);r.error?(this.autherror.contact="",this.otperror=r.errors.error,this.otperror=r.errors.contact[0]):(this.autherror={},this.otperror={},this.otpdata.encryptedOTP=r.data.enc_otp.encrypted,this.otpdata.userInputOTP=r.data.enc_otp.code,this.openModal())}catch(r){console.error("API Error:",r)}},async submitOTP(){try{this.otpdata.userInputOTP=this.auth.anotherInputValue;var r=await y("verify-otp",this.otpdata);r.error?(this.showMessage(r.errors.userInputOTP[0],"errorMessage"),this.successMessage=""):(this.errorMessage="",this.successMessage=(r.msg,"successMessage"),this.selected.anotherInput=!1)}catch(e){console.error("API Error:",e),this.errorMessage="An error occurred. Please try again later.",this.successMessage=""}},async changeStep(r){var e=!1,m;r==1?m={success:!0}:r==2?(m=await y("register-step-one",this.auth),m.success&&(this.autherror.user_code="")):r==3&&(m=await y("register-step-two",this.auth)),m.success?r==3&&this.otp_success==""?this.auth.contact!=""&&this.handleBlur():e=!0:m.error&&(this.autherror=m.errors),e&&(this.step=r)},async fetchCountry(){let r=await y("countries",{});this.countries=r.data.country},async fetchBusinessDescribe(){let r=await y("business-describes",{});this.business_describe=r.data.business_describe},async fetchMarketPlatform(){let r=await y("market-platform",{});this.market_platform=r.data.market_platform},async fetchState(){let r=await y("states",this.auth);this.states=r.data.state},async handleBlur(){this.auth.contact.trim()!==""&&this.otp_success==!1&&this.sendOtp()},async openModal(){var r=this.$refs.modalPopup;r.click()},validateInput(){this.auth.postalcode=this.auth.postalcode.replace(/\D/g,"").slice(0,5)},handleOtpSuccess(r){this.otp_success=r.success,this.otp_error=r.error},async checkAuth(){(await ge("check_auth")).success&&(window.location.href="/")},async getcountry(){this.country==""&&alert("Please select country.")}},beforeMount(){this.fetchCountry(),this.fetchBusinessDescribe(),this.fetchMarketPlatform(),this.checkAuth()},mounted(){(we("layoutType").value||"light")==="dark"?this.themeCss="/voxo/css/demo2_dark.css":this.themeCss="/voxo/css/demo2.css",this.$refs.myForm.addEventListener("keydown",m=>{m.keyCode===13&&(this.step=="1"?this.$refs.btn_click.click():this.step=="2"?this.changeStep(3):this.step=="3"&&this.register(2))})}},Me={class:"login-section register-section"},Te={class:"materialContainer"},De={class:"box",ref:"myForm"},Ke={class:"register-logo"},Pe=t("img",{src:Ve,class:"img-fluid",alt:"logo"},null,-1),Ue=t("div",{class:"login-title"},[t("h2",null,"Register")],-1),Ne={class:"progress-container"},Ae=t("div",{class:"progress",id:"progress"},null,-1),Re={key:0,class:"container"},Ee={class:"row"},je={class:"col-md-6"},We={class:"input"},qe=t("label",{for:"firstname",style:l([{"line-height":"18px"}])},[c("First Name "),t("span",{class:"text-danger"},"*")],-1),Je={class:"text-danger"},Le={class:"col-md-6"},He={class:"input"},Ye=t("label",{for:"lastname",style:l([{"line-height":"18px"}])},[c("Last Name "),t("span",{class:"text-danger"},"*")],-1),ze={class:"text-danger"},Qe={class:"col-md-6"},Xe={class:"input"},Ze=t("label",{for:"email",style:l([{"line-height":"18px"}])},[c("Email Address "),t("span",{class:"text-danger"},"*")],-1),Ge={class:"text-danger"},$e={class:"col-md-6"},et={class:"input"},tt=t("label",{for:"pass",style:l([{"line-height":"18px"}])},[c("Password "),t("span",{class:"text-danger"},"*")],-1),st={class:"text-danger"},ot={class:"col-md-6"},nt={class:"input"},rt=t("label",{for:"password_confirmation",style:l([{"line-height":"18px"}])},"Confirm Password",-1),lt={class:"text-danger"},it={class:"col-md-6"},at={class:"input"},ut=t("label",{for:"user_code",style:l([{"line-height":"18px"}])},"Promo Code (if applicable)",-1),dt={class:"text-danger"},ct={class:"col-md-6 offset-md-6 mt-3"},pt={class:"button login"},ht=t("span",null,"Next",-1),mt=t("i",{class:"fa fa-check"},null,-1),_t=[ht,mt],ft={key:1,class:"container"},yt={class:"row"},vt={class:"col-md-12"},gt={class:"input"},wt=t("label",{for:"company_name",style:l([{"line-height":"18px"}])},[c("Company Name "),t("span",{class:"text-danger"},"*")],-1),xt={class:"text-danger"},bt={class:"col-md-6"},kt={class:"input"},Ft=t("label",{for:"addressone",style:l([{"line-height":"18px"}])},[c("Street Address Line 1 "),t("span",{class:"text-danger"},"*")],-1),Ot={class:"text-danger"},Ct={class:"col-md-6"},St={class:"input"},Bt=t("label",{for:"addresstwo",style:l([{"line-height":"18px"}])},"Street Address Line 2",-1),Vt={class:"text-danger"},It={class:"col-md-6"},Mt={class:"input"},Tt=t("label",{for:"postalcode",style:l([{"line-height":"18px"}])},[c("Zip/Postal Code "),t("span",{class:"text-danger"},"*")],-1),Dt={class:"text-danger"},Kt={class:"col-md-6"},Pt={class:"input"},Ut=t("label",{for:"city",style:l([{"line-height":"18px"}])},[c("City "),t("span",{class:"text-danger"},"*")],-1),Nt={class:"text-danger"},At={class:"col-md-6"},Rt={class:"input"},Et=t("label",{for:"country",style:l([{"line-height":"18px"}])},[c("Country "),t("span",{class:"text-danger"},"*")],-1),jt=["value"],Wt={class:"text-danger"},qt={class:"col-md-6"},Jt={class:"input"},Lt=t("span",{class:"text-danger"},"*",-1),Ht=["value"],Yt={class:"text-danger"},zt={class:"col-md-6"},Qt={class:"input"},Xt=t("label",{for:"contact",style:l([{"line-height":"18px"}])},[c("Mobile Number "),t("span",{class:"text-danger"},"*")],-1),Zt={class:"row"},Gt={class:"col-md-3 col-3"},$t=["value"],es={class:"col-md-9 col-9"},ts=["readonly"],ss={"data-bs-toggle":"modal","data-bs-target":"#otp-verify",ref:"modalPopup",style:{display:"none"}},os={key:0,class:"text-danger"},ns={key:1,class:"text-danger"},rs={class:"text-danger"},ls={class:"col-md-6"},is={class:"input"},as=t("label",{for:"telephone",style:l([{"line-height":"18px"}])},"Telephone ",-1),us={class:"text-danger"},ds={class:"col-md-6"},cs={class:"input"},ps=t("label",{for:"taxid",style:l([{"line-height":"18px"}])},"TAX ID / EIN / VAT NUMBER",-1),hs={class:"text-danger"},ms={class:"col-md-6"},_s={class:"input"},fs=t("label",{for:"company_website",style:l([{"line-height":"18px"}])},"Company Website",-1),ys={class:"text-danger"},vs={class:"col-md-6"},gs={class:"button login"},ws=t("span",null,"Back",-1),xs=[ws],bs={class:"col-md-6"},ks={class:"button login"},Fs=t("span",null,"Next",-1),Os=[Fs],Cs={key:2,class:"container"},Ss={class:"row"},Bs={class:"col-md-6"},Vs={class:"input"},Is=t("label",{for:"from_to_platform",style:l([{"line-height":"18px"}])},[c("How Did You Hear About This ? "),t("span",{class:"text-danger"},"*")],-1),Ms=["value"],Ts={class:"text-danger"},Ds={class:"col-md-6"},Ks={class:"input"},Ps=t("label",{for:"desc_business",style:l([{"line-height":"18px"}])},"What Best Describes Your Business ?",-1),Us=["value"],Ns={class:"col-md-6"},As={class:"input"},Rs=t("label",{for:"is_representative",style:l([{"line-height":"18px"}])},"Txparts Representative ?",-1),Es=t("option",{value:"yes"},"Yes",-1),js=t("option",{value:"no"},"No",-1),Ws=[Es,js],qs={class:"col-md-6"},Js={class:"input"},Ls=t("label",{for:"representative_code",style:l([{"line-height":"18px"}])},"Account Code For Representative",-1),Hs={class:"col-md-12"},Ys={class:"form-check ps-0 custome-form-check mt-3"},zs=t("label",{class:"form-check-label",for:"news_letter"},"Sign Up for Newsletter",-1),Qs={class:"text-danger"},Xs={class:"col-md-12"},Zs={class:"form-check ps-0 custome-form-check mt-3"},Gs=t("label",{class:"form-check-label terms_conditions-check",for:"terms_conditions"},[c("Yes, I agree to the Terms & Conditions and Privacy Policy. "),t("span",{class:"text-danger"},"*")],-1),$s={class:"text-danger"},eo={class:"col-md-6"},to={class:"button login"},so=t("span",null,"Back",-1),oo=[so],no={class:"col-md-6"},ro={class:"button login"},lo=t("span",null,"Submit",-1),io=[lo];function ao(r,e,m,f,o,n){var S,B,V,I,M,T,D,K,P,U,N,A,R,E,j,W,q,J,L,H,Y,z,Q,X,Z,G,$,ee,te,se,oe,ne,re,le,ie,ae,ue,de,ce,pe;const F=Se,me=ke,O=Fe,_e=xe("OtpVerify");return h(),_(b,null,[g(me,null,{default:w(()=>[g(F,null,{default:w(()=>[c("Register")]),_:1})]),_:1}),t("div",Me,[t("div",Te,[t("div",De,[t("div",Ke,[g(O,{to:"/"},{default:w(()=>[Pe]),_:1})]),Ue,t("div",Ne,[Ae,t("div",{class:C(["circle",o.step>=1?"active":""])},"1",2),t("div",{class:C(["circle",o.step>=2?"active":""])},"2",2),t("div",{class:C(["circle",o.step>=3?"active":""])},"3",2)]),o.step==1?(h(),_("span",Re,[t("div",Ee,[t("div",je,[t("div",We,[qe,u(t("input",{type:"text",name:"firstname",id:"firstname","onUpdate:modelValue":e[0]||(e[0]=s=>o.auth.firstname=s),onFocus:e[1]||(e[1]=p(s=>n.select("firstname"),["prevent"])),onBlur:e[2]||(e[2]=s=>n.handleFocusOut("firstname")),onKeyup:e[3]||(e[3]=a((...s)=>n.attemptstep1&&n.attemptstep1(...s),["enter"])),autofocus:""},null,544),[[d,o.auth.firstname]]),t("span",{class:"spin",style:l([{width:o.selected.firstname?"100%":"0%"}])},null,4)]),t("span",Je,i((S=o.autherror)!=null&&S.firstname?(B=o.autherror)==null?void 0:B.firstname[0]:""),1)]),t("div",Le,[t("div",He,[Ye,u(t("input",{type:"text",name:"lastname",id:"lastname","onUpdate:modelValue":e[4]||(e[4]=s=>o.auth.lastname=s),onFocus:e[5]||(e[5]=p(s=>n.select("lastname"),["prevent"])),onBlur:e[6]||(e[6]=s=>n.handleFocusOut("lastname")),onKeyup:e[7]||(e[7]=a((...s)=>n.attemptstep1&&n.attemptstep1(...s),["enter"]))},null,544),[[d,o.auth.lastname]]),t("span",{class:"spin",style:l([{width:o.selected.lastname?"100%":"0%"}])},null,4)]),t("span",ze,i((V=o.autherror)!=null&&V.lastname?(I=o.autherror)==null?void 0:I.lastname[0]:""),1)]),t("div",Qe,[t("div",Xe,[Ze,u(t("input",{type:"text",name:"email",id:"email","onUpdate:modelValue":e[8]||(e[8]=s=>o.auth.email=s),onFocus:e[9]||(e[9]=p(s=>n.select("email"),["prevent"])),onBlur:e[10]||(e[10]=s=>n.handleFocusOut("email")),onKeyup:e[11]||(e[11]=a((...s)=>n.attemptstep1&&n.attemptstep1(...s),["enter"]))},null,544),[[d,o.auth.email]]),t("span",{class:"spin",style:l([{width:o.selected.email?"100%":"0%"}])},null,4)]),t("span",Ge,i((M=o.autherror)!=null&&M.email?(T=o.autherror)==null?void 0:T.email[0]:""),1)]),t("div",$e,[t("div",et,[tt,u(t("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":e[12]||(e[12]=s=>o.auth.password=s),onFocus:e[13]||(e[13]=p(s=>n.select("password"),["prevent"])),onBlur:e[14]||(e[14]=s=>n.handleFocusOut("password")),onKeyup:e[15]||(e[15]=a((...s)=>n.attemptstep1&&n.attemptstep1(...s),["enter"]))},null,544),[[d,o.auth.password]]),t("span",{class:"spin",style:l([{width:o.selected.password?"100%":"0%"}])},null,4)]),t("span",st,i((D=o.autherror)!=null&&D.password?(K=o.autherror)==null?void 0:K.password[0]:""),1)]),t("div",ot,[t("div",nt,[rt,u(t("input",{type:"password",name:"password_confirmation",id:"password_confirmation","onUpdate:modelValue":e[16]||(e[16]=s=>o.auth.password_confirmation=s),onFocus:e[17]||(e[17]=p(s=>n.select("password_confirmation"),["prevent"])),onBlur:e[18]||(e[18]=s=>n.handleFocusOut("password_confirmation")),onKeyup:e[19]||(e[19]=a((...s)=>n.attemptstep1&&n.attemptstep1(...s),["enter"]))},null,544),[[d,o.auth.password_confirmation]]),t("span",{class:"spin",style:l([{width:o.selected.password_confirmation?"100%":"0%"}])},null,4)]),t("span",lt,i((P=o.autherror)!=null&&P.password_confirmation?(U=o.autherror)==null?void 0:U.password_confirmation[0]:""),1)]),t("div",it,[t("div",at,[ut,u(t("input",{type:"text",name:"user_code",id:"user_code","onUpdate:modelValue":e[20]||(e[20]=s=>o.auth.user_code=s),onFocus:e[21]||(e[21]=p(s=>n.select("user_code"),["prevent"])),onBlur:e[22]||(e[22]=s=>n.handleFocusOut("user_code")),onKeyup:e[23]||(e[23]=a((...s)=>n.attemptstep1&&n.attemptstep1(...s),["enter"]))},null,544),[[d,o.auth.user_code]]),t("span",{class:"spin",style:l([{width:o.selected.user_code?"100%":"0%"}])},null,4)]),t("span",dt,i((N=o.autherror)!=null&&N.user_code?(A=o.autherror)==null?void 0:A.user_code[0]:""),1)]),t("div",ct,[t("div",pt,[t("button",{href:"javascript:void(0)",onClick:e[24]||(e[24]=s=>n.changeStep(2)),ref:"btn_click"},_t,512)])])])])):v("",!0),o.step==2?(h(),_("span",ft,[t("div",yt,[t("div",vt,[t("div",gt,[wt,u(t("input",{type:"text",name:"company_name",id:"company_name","onUpdate:modelValue":e[25]||(e[25]=s=>o.auth.company_name=s),onFocus:e[26]||(e[26]=p(s=>n.select("company_name"),["prevent"])),onBlur:e[27]||(e[27]=s=>n.handleFocusOut("company_name")),onKeyup:e[28]||(e[28]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},null,544),[[d,o.auth.company_name]]),t("span",{class:"spin",style:l([{width:o.selected.company_name?"100%":"0%"}])},null,4)]),t("span",xt,i((R=o.autherror)!=null&&R.company_name?(E=o.autherror)==null?void 0:E.company_name[0]:""),1)]),t("div",bt,[t("div",kt,[Ft,u(t("input",{type:"text",name:"addressone",id:"addressone","onUpdate:modelValue":e[29]||(e[29]=s=>o.auth.addressone=s),onFocus:e[30]||(e[30]=p(s=>n.select("addressone"),["prevent"])),onBlur:e[31]||(e[31]=s=>n.handleFocusOut("addressone")),onKeyup:e[32]||(e[32]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},null,544),[[d,o.auth.addressone]]),t("span",{class:"spin",style:l([{width:o.selected.addressone?"100%":"0%"}])},null,4)]),t("span",Ot,i((j=o.autherror)!=null&&j.addressone?(W=o.autherror)==null?void 0:W.addressone[0]:""),1)]),t("div",Ct,[t("div",St,[Bt,u(t("input",{type:"text",name:"addresstwo",id:"addresstwo","onUpdate:modelValue":e[33]||(e[33]=s=>o.auth.addresstwo=s),onFocus:e[34]||(e[34]=p(s=>n.select("addresstwo"),["prevent"])),onBlur:e[35]||(e[35]=s=>n.handleFocusOut("addresstwo")),onKeyup:e[36]||(e[36]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},null,544),[[d,o.auth.addresstwo]]),t("span",{class:"spin",style:l([{width:o.selected.addresstwo?"100%":"0%"}])},null,4)]),t("span",Vt,i((q=o.autherror)!=null&&q.addresstwo?(J=o.autherror)==null?void 0:J.addresstwo[0]:""),1)]),t("div",It,[t("div",Mt,[Tt,u(t("input",{type:"text",name:"postalcode",id:"postalcode","onUpdate:modelValue":e[37]||(e[37]=s=>o.auth.postalcode=s),onFocus:e[38]||(e[38]=p(s=>n.select("postalcode"),["prevent"])),onBlur:e[39]||(e[39]=s=>n.handleFocusOut("postalcode")),onKeyup:e[40]||(e[40]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"])),maxlength:"10"},null,544),[[d,o.auth.postalcode]]),t("span",{class:"spin",style:l([{width:o.selected.postalcode?"100%":"0%"}])},null,4)]),t("span",Dt,i((L=o.autherror)!=null&&L.postalcode?(H=o.autherror)==null?void 0:H.postalcode[0]:""),1)]),t("div",Kt,[t("div",Pt,[Ut,u(t("input",{type:"text",name:"city",id:"city","onUpdate:modelValue":e[41]||(e[41]=s=>o.auth.city=s),onFocus:e[42]||(e[42]=p(s=>n.select("city"),["prevent"])),onBlur:e[43]||(e[43]=s=>n.handleFocusOut("city")),onKeyup:e[44]||(e[44]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},null,544),[[d,o.auth.city]]),t("span",{class:"spin",style:l([{width:o.selected.city?"100%":"0%"}])},null,4)]),t("span",Nt,i((Y=o.autherror)!=null&&Y.city?(z=o.autherror)==null?void 0:z.city[0]:""),1)]),t("div",At,[t("div",Rt,[Et,u(t("select",{name:"country",id:"country","onUpdate:modelValue":e[45]||(e[45]=s=>o.country=s),onFocus:e[46]||(e[46]=s=>n.select("country")),onBlur:e[47]||(e[47]=s=>n.handleFocusOut("country")),onKeyup:e[48]||(e[48]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},[(h(!0),_(b,null,k(o.countries,s=>(h(),_("option",{key:s.id,value:s.id},i(s.name),9,jt))),128))],544),[[x,o.country]]),t("span",{class:"spin",style:l([{width:o.selected.country?"100%":"0%"}])},null,4)]),t("span",Wt,i((Q=o.autherror)!=null&&Q.country?(X=o.autherror)==null?void 0:X.country[0]:""),1)]),t("div",qt,[t("div",Jt,[t("label",{for:"state",style:l([{"line-height":"18px"}]),onKeyup:e[49]||(e[49]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},[c("State "),Lt],32),u(t("select",{name:"state",id:"state","onUpdate:modelValue":e[50]||(e[50]=s=>o.auth.state=s),onFocus:e[51]||(e[51]=s=>n.select("state")),onBlur:e[52]||(e[52]=s=>n.handleFocusOut("state"))},[(h(!0),_(b,null,k(o.states,s=>(h(),_("option",{key:s.id,value:s.id},i(s.name),9,Ht))),128))],544),[[x,o.auth.state]]),t("span",{class:"spin",style:l([{width:o.selected.state?"100%":"0%"}])},null,4)]),t("span",Yt,i((Z=o.autherror)!=null&&Z.state?(G=o.autherror)==null?void 0:G.state[0]:""),1)]),t("div",zt,[t("div",Qt,[Xt,t("div",Zt,[t("div",Gt,[t("input",{type:"text",readonly:"",value:o.phonecode,onClick:e[53]||(e[53]=s=>n.focusInput("contact")),onKeyup:e[54]||(e[54]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},null,40,$t)]),t("div",es,[u(t("input",{ref:"contact",type:"text",onBlur:e[55]||(e[55]=(...s)=>n.handleBlur&&n.handleBlur(...s)),onkeypress:"return event.charCode >= 48 && event.charCode <= 57",name:"contact",id:"contact","onUpdate:modelValue":e[56]||(e[56]=s=>o.auth.contact=s),onKeyup:e[57]||(e[57]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"])),readonly:this.otp_success==!0||o.country=="",autocomplete:"off",maxlength:"10",onClick:e[58]||(e[58]=s=>n.getcountry())},null,40,ts),[[d,o.auth.contact]]),t("button",ss,null,512)])]),t("span",{class:"spin",style:l([{width:o.selected.contact?"100%":"0%"}])},null,4)]),this.otp_error==!0?(h(),_("span",os,i("Wrong Otp"))):v("",!0),Object.keys(o.otperror).length>0?(h(),_("span",ns,i(o.otperror),1)):v("",!0),t("span",rs,i(($=o.autherror)!=null&&$.contact?(ee=o.autherror)==null?void 0:ee.contact[0]:""),1)]),t("div",ls,[t("div",is,[as,u(t("input",{type:"text",name:"telephone",id:"telephone","onUpdate:modelValue":e[59]||(e[59]=s=>o.auth.telephone=s),onFocus:e[60]||(e[60]=p(s=>n.select("telephone"),["prevent"])),onBlur:e[61]||(e[61]=s=>n.handleFocusOut("telephone")),onKeyup:e[62]||(e[62]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"])),onkeypress:"return event.charCode >= 48 && event.charCode <= 57",maxlength:"15"},null,544),[[d,o.auth.telephone]]),t("span",{class:"spin",style:l([{width:o.selected.telephone?"100%":"0%"}])},null,4)]),t("span",us,i((te=o.autherror)!=null&&te.telephone?(se=o.autherror)==null?void 0:se.telephone[0]:""),1)]),t("div",ds,[t("div",cs,[ps,u(t("input",{type:"text",name:"taxid",id:"taxid","onUpdate:modelValue":e[63]||(e[63]=s=>o.auth.taxid=s),onFocus:e[64]||(e[64]=p(s=>n.select("taxid"),["prevent"])),onBlur:e[65]||(e[65]=s=>n.handleFocusOut("taxid")),onKeyup:e[66]||(e[66]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},null,544),[[d,o.auth.taxid]]),t("span",{class:"spin",style:l([{width:o.selected.taxid?"100%":"0%"}])},null,4)]),t("span",hs,i((oe=o.autherror)!=null&&oe.taxid?(ne=o.autherror)==null?void 0:ne.taxid[0]:""),1)]),t("div",ms,[t("div",_s,[fs,u(t("input",{type:"text",name:"company_website",id:"company_website","onUpdate:modelValue":e[67]||(e[67]=s=>o.auth.company_website=s),onFocus:e[68]||(e[68]=p(s=>n.select("company_website"),["prevent"])),onBlur:e[69]||(e[69]=s=>n.handleFocusOut("company_website")),onKeyup:e[70]||(e[70]=a((...s)=>n.attemptstep2&&n.attemptstep2(...s),["enter"]))},null,544),[[d,o.auth.company_website]]),t("span",{class:"spin",style:l([{width:o.selected.company_website?"100%":"0%"}])},null,4)]),t("span",ys,i((re=o.autherror)!=null&&re.company_website?(le=o.autherror)==null?void 0:le.company_website[0]:""),1)]),t("div",vs,[t("div",gs,[t("button",{href:"javascript:void(0)",onClick:e[71]||(e[71]=s=>n.changeStep(1))},xs)])]),t("div",bs,[t("div",ks,[t("button",{href:"javascript:void(0)",onClick:e[72]||(e[72]=s=>n.changeStep(3)),ref:"btn_step2"},Os,512)])])])])):v("",!0),o.step==3?(h(),_("span",Cs,[t("div",Ss,[t("div",Bs,[t("div",Vs,[Is,u(t("select",{name:"from_to_platform",id:"from_to_platform","onUpdate:modelValue":e[73]||(e[73]=s=>o.auth.from_to_platform=s),onFocus:e[74]||(e[74]=s=>n.select("from_to_platform")),onBlur:e[75]||(e[75]=s=>n.handleFocusOut("from_to_platform")),onKeyup:e[76]||(e[76]=a((...s)=>n.attemptstep3&&n.attemptstep3(...s),["enter"]))},[(h(!0),_(b,null,k(o.market_platform,s=>(h(),_("option",{key:s.id,value:s.id},i(s.name),9,Ms))),128))],544),[[x,o.auth.from_to_platform]]),t("span",{class:"spin",style:l([{width:o.selected.from_to_platform?"100%":"0%"}])},null,4)]),t("span",Ts,i((ie=o.autherror)!=null&&ie.from_to_platform?(ae=o.autherror)==null?void 0:ae.from_to_platform[0]:""),1)]),t("div",Ds,[t("div",Ks,[Ps,u(t("select",{name:"desc_business",id:"desc_business","onUpdate:modelValue":e[77]||(e[77]=s=>o.auth.desc_business=s),onFocus:e[78]||(e[78]=s=>n.select("desc_business")),onBlur:e[79]||(e[79]=s=>n.handleFocusOut("desc_business")),onKeyup:e[80]||(e[80]=a((...s)=>n.attemptstep3&&n.attemptstep3(...s),["enter"]))},[(h(!0),_(b,null,k(o.business_describe,s=>(h(),_("option",{key:s.id,value:s.id},i(s.name),9,Us))),128))],544),[[x,o.auth.desc_business]]),t("span",{class:"spin",style:l([{width:o.selected.desc_business?"100%":"0%"}])},null,4)])]),t("div",Ns,[t("div",As,[Rs,u(t("select",{name:"is_representative",id:"is_representative","onUpdate:modelValue":e[81]||(e[81]=s=>o.auth.is_representative=s),onFocus:e[82]||(e[82]=s=>n.select("is_representative")),onBlur:e[83]||(e[83]=s=>n.handleFocusOut("is_representative")),onKeyup:e[84]||(e[84]=a((...s)=>n.attemptstep3&&n.attemptstep3(...s),["enter"]))},Ws,544),[[x,o.auth.is_representative]]),t("span",{class:"spin",style:l([{width:o.selected.is_representative?"100%":"0%"}])},null,4)])]),t("div",qs,[t("div",Js,[Ls,u(t("input",{type:"text",name:"representative_code",id:"representative_code","onUpdate:modelValue":e[85]||(e[85]=s=>o.auth.representative_code=s),onFocus:e[86]||(e[86]=p(s=>n.select("representative_code"),["prevent"])),onBlur:e[87]||(e[87]=s=>n.handleFocusOut("representative_code")),onKeyup:e[88]||(e[88]=a((...s)=>n.attemptstep3&&n.attemptstep3(...s),["enter"]))},null,544),[[d,o.auth.representative_code]]),t("span",{class:"spin",style:l([{width:o.selected.representative_code?"100%":"0%"}])},null,4)])]),t("div",Hs,[t("div",Ys,[u(t("input",{class:"checkbox_animated check-it",type:"checkbox",id:"news_letter",value:"yes","onUpdate:modelValue":e[89]||(e[89]=s=>o.news_letter=s),onKeyup:e[90]||(e[90]=a((...s)=>n.attemptstep3&&n.attemptstep3(...s),["enter"]))},null,544),[[he,o.news_letter]]),zs]),t("span",Qs,i((ue=o.autherror)!=null&&ue.news_letter?(de=o.autherror)==null?void 0:de.news_letter[0]:""),1)]),t("div",Xs,[t("div",Zs,[u(t("input",{class:"checkbox_animated check-it",type:"checkbox",id:"terms_conditions",value:"yes","onUpdate:modelValue":e[91]||(e[91]=s=>o.terms_conditions=s),onKeyup:e[92]||(e[92]=a((...s)=>n.attemptstep3&&n.attemptstep3(...s),["enter"]))},null,544),[[he,o.terms_conditions]]),Gs]),t("span",$s,i((ce=o.autherror)!=null&&ce.terms_conditions?(pe=o.autherror)==null?void 0:pe.terms_conditions[0]:""),1)]),t("div",eo,[t("div",to,[t("button",{href:"javascript:void(0)",onClick:e[93]||(e[93]=s=>n.changeStep(2))},oo)])]),t("div",no,[t("div",ro,[t("button",{href:"javascript:void(0)",onClick:e[94]||(e[94]=s=>n.register(2)),ref:"btn_step3"},io,512)])])])])):v("",!0),t("p",null,[g(O,{to:"/login",class:"theme-color"},{default:w(()=>[c(i(Oe(Ce)().public.const.Alreadyhaveanaccount),1)]),_:1})]),t("p",null,[g(O,{to:"/",class:"theme-color"},{default:w(()=>[c("Back To Home")]),_:1})])],512)])]),this.otp_success==!1?(h(),be(_e,{key:0,show:o.showModal,onClose:r.closeModal,OTPencrypt:o.otpdata.encryptedOTP,otpuserInput:o.otpdata.userInputOTP,onOtpSuccess:n.handleOtpSuccess},null,8,["show","onClose","OTPencrypt","otpuserInput","onOtpSuccess"])):v("",!0)],64)}const ho=fe(Ie,[["render",ao]]);export{ho as default};
