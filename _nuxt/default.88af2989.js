import{o as d,i,j as t,t as _,q as B,u as l,aK as X,D as U,ab as Z,aL as x,h as r,G as h,K as N,H,M as w,I as L,a1 as J,f as C,p as b,F as tt,s as et,c as O,k as K,A as u,v as M,B as A,z as k,O as j,P as z,a6 as f,y as m,x as G,a4 as q,a5 as E,aI as st,aa as ot,aw as F,W as at,aM as lt}from"./entry.4bbb2d6c.js";import{g as S,_ as dt}from"./image-not-found.272939d4.js";import{N as rt}from"./navigation.c68ef1c0.js";import{f as it,T as ct}from"./free-mode.031359a5.js";import{u as nt}from"./userDashboard.69a1bd4f.js";import"./create-element-if-not-defined.67e0cfa8.js";const ut=""+globalThis.__publicAssetsURL("images/360Images/img-1.webp"),mt={class:"modal fade shipping-modal",id:"product-modal",tabindex:"-1",role:"dialog","aria-label":"myModalLabel","aria-hidden":"true"},pt={class:"modal-dialog modal-lg modal-dialog-centered"},_t={class:"modal-content"},ht=t("div",{class:"modal-header"},[t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gt={class:"modal-body"},yt={class:"wrapper"},bt=t("img",{src:ut},null,-1),ft=Z('<div class="buttons-wrapper"><button class="button" id="prev"><i class="fas fa-chevron-left"></i></button><button class="button" id="next"><i class="fas fa-chevron-right"></i></button></div>',1),vt={__name:"threeSixtyModal",setup(e){return(s,v)=>{const g=x;return d(),i("div",mt,[t("div",pt,[t("div",_t,[ht,t("div",gt,[t("div",yt,[bt,_(g,null,{default:B(()=>[_(l(X),{amount:36,imagePath:"/images/360Images",fileName:"img-{index}.jpg"})]),_:1}),U(" asdasdasd "),ft])])])])])}}};const wt={props:["showModal"],data(){return{thumbsSwiper:null,selectedSize:"",selectedColor:"",validEntries:!1,image:"/images/fashion/product/front/4.jpg",submited:!1,modules:[it,rt,ct]}},watch:{},computed:{selectedCurrencySymbol(){return r().selectedCurrencySymbol},...h(N,{product:"singleProductData",work_images:"work_images"}),...h(H,{userData:"user"})},methods:{setThumbsSwiper(e){this.thumbsSwiper=e},async addToCart(e){let s={productid:e,quantity:1,price:w(e,1,this.userData).price,flag:"addToCart",image:JSON.parse(L(e).work_images)!=null?JSON.parse(L(e).work_images)[0].path:"/images/image-not-found.png"};J().addToCart(s),this.$refs.modalDismiss.click()},redirectTo(e){this.$router.push(e)}}},Q=e=>(j("data-v-3088bcba"),e=e(),z(),e),Ct={class:"modal theme-modal fade quick-view-modal",id:"quick-view"},$t={class:"modal-dialog modal-lg modal-dialog-centered"},kt={key:0,class:"modal-content",ref:"modal"},St={type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref:"modalDismiss"},Mt={class:"modal-body"},Tt={class:"row gy-4"},Lt={class:"col-lg-6"},Dt=["src"],Vt={class:"quick-view-image"},It={class:"quick-view-slider ratio_2"},Pt=["src"],Bt=Q(()=>t("img",{src:dt,class:"img-fluid bg-img",alt:"product"},null,-1)),Nt=[Bt],Ut={class:"col-lg-6"},qt={class:"product-right"},Et={class:"mb-2"},Ot=Q(()=>t("ul",{class:"rating mt-1"},null,-1)),At={class:"qvm-price-sec"},Jt={class:"price mt-3"},jt={key:0,class:"price mt-3"},zt={key:0,class:"color-types"},Qt=Q(()=>t("h4",null,"color",-1)),Rt={class:"color-variant mb-0"},Wt=["src"],Kt={class:"product-details"},Ft={class:"font-light"},Ht={class:"product-btn"},Gt=["data-bs-dismiss"];function Yt(e,s,v,g,c,o){var p,$,n,D,V,I,W;const a=b("swiper-slide"),y=b("swiper");return d(),i("div",Ct,[t("div",$t,[((p=l(L)(e.product))==null?void 0:p.product_name)!=null?(d(),i("div",kt,[t("button",St,null,512),t("div",Mt,[t("div",Tt,[t("div",Lt,[t("img",{src:l(S)((n=($=e.product)==null?void 0:$.label)==null?void 0:n.image,!0),class:"img-fluid label-image",alt:""},null,8,Dt),t("div",Vt,[t("div",It,[_(y,{loop:!0,spaceBetween:10,thumbs:{swiper:c.thumbsSwiper},modules:c.modules},{default:B(()=>[e.work_images!=e.NULL?(d(!0),i(tt,{key:0},et(e.work_images,(P,Y)=>(d(),O(a,{key:"a"+Y},{default:B(()=>[t("div",{class:"sliderBackground bg-size",style:K({"background-image":`url(${l(S)(P.path,!0)})`})},[t("img",{src:l(S)(P.path,!0),class:"img-fluid bg-img d-none",alt:"product"},null,8,Pt)],4)]),_:2},1024))),128)):(d(),O(a,{key:1},{default:B(()=>[t("div",{class:"sliderBackground bg-size",style:K({"background-image":"url(/images/image-not-found.png)"})},Nt,4)]),_:1}))]),_:1},8,["thumbs","modules"])])])]),t("div",Ut,[t("div",qt,[t("h2",Et,u((D=l(L)(e.product))==null?void 0:D.product_name),1),Ot,t("div",At,[t("div",Jt,[t("h3",null,u(l(w)(e.product,1,e.userData).currency)+u(l(w)(e.product,1,e.userData).price),1)]),l(w)(e.product,e.productQuantity,e.userData).originalprice!=0&&l(w)(e.product,e.productQuantity,e.userData).originalprice!=l(w)(e.product,1,e.userData).price?(d(),i("h3",jt,u(l(w)(e.product,e.productQuantity,e.userData).currency)+u(l(w)(e.product,e.productQuantity,e.userData).originalprice),1)):M("",!0)]),e.product.color?(d(),i("div",zt,[Qt,t("div",Rt,[t("img",{src:l(S)((I=(V=e.product)==null?void 0:V.color)==null?void 0:I.image,!0),class:"img-fluid ml-3",alt:""},null,8,Wt)])])):M("",!0),t("div",Kt,[t("h4",null,u(l(A)().public.const.productdetail),1),t("ul",null,[t("li",null,[t("span",Ft,"SKU : "+u((W=e.product)==null?void 0:W.sku),1)])])]),t("div",Ht,[t("a",{"data-bs-dismiss":c.validEntries?"modal":"",onClick:s[0]||(s[0]=k(P=>o.addToCart(e.product),["prevent"])),class:"btn btn-solid-default btn-sm"}," Add To Cart ",8,Gt),t("a",{onClick:s[1]||(s[1]=k(P=>o.redirectTo("/product/"+l(L)(e.product).slug),["prevent"])),"data-bs-dismiss":"modal",class:"btn btn-solid-default btn-sm ms-1"}," View Details ")])])])])])],512)):M("",!0)])])}const Xt=C(wt,[["render",Yt],["__scopeId","data-v-3088bcba"]]),Zt={props:["showModal"],data(){return{swiperOption:{slidesPerView:4,spaceBetween:24,freeMode:!1,breakpoints:{1200:{slidesPerView:4,spaceBetween:24},991:{slidesPerView:3,spaceBetween:24},575:{slidesPerView:2,spaceBetween:12},0:{spaceBetween:12,slidesPerView:2}}}}},computed:{product(){return J().lastAddedProduct},relatedProducts(){return f().relatedProducts},selectedCurrencySymbol(){return r().selectedCurrencySymbol}},methods:{changePage(e){this.$router.push("/product/"+e)},redirectTo(e){this.$router.push(e)},getImageUrl(e){return"/images/"+e},dismiss(){this.showModal=!this.showModal}},watch:{product:{handler(e){},deep:!0}}};function xt(e,s,v,g,c,o){return null}const te=C(Zt,[["render",xt]]),ee={props:["showDarkButton"],data(){return{themeMode:""}},computed:{...h(r,{themeSettings:"themeConfig",primaryColor:"primaryColor",layoutType:"layoutType",layoutMode:"layoutMode",showThemeSettings:"showThemeSettings"})},methods:{toggleLayout(){r().setLayoutType(this.layoutType=="ltr"?"rtl":"ltr")},createStyle(){r().toggleLayoutMode()},setLayoutValue(e){console.log("theme-setting"),r().setPrimaryColor({primaryColor:e.target.value})},toggleCopySettings(){f().toggleCopySettings()}},watch:{primaryColor:function(){document.body.style.setProperty("--theme-color",this.primaryColor)},layoutMode(){this.layoutMode=="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),m("colorMode").value=this.layoutMode||""},layoutType(){this.layoutType=="rtl"?(document.documentElement.dir="rtl",document.getElementById("bootstrap-link").setAttribute("href","/css/bootstrap.rtl.min.css"),m("layoutType").value="rtl",document.body.classList.remove("ltr"),document.body.classList.add("rtl")):(document.documentElement.dir="ltr",document.getElementById("bootstrap-link").setAttribute("href","/css/bootstrap.min.css"),m("layoutType").value="ltr",document.body.classList.remove("rtl"),document.body.classList.add("ltr"))}}},se={class:"theme-setting"},oe={key:0},ae=t("li",null,[t("button",{id:"darkButton",class:"btn btn-sm p-0 dark-buttton","data-bs-toggle":"modal","data-bs-target":"#copySettings"}," Copy ")],-1),le={key:0},de={key:1},re={class:"color-picker"},ie=["value"];function ce(e,s,v,g,c,o){return d(),i("div",se,[e.showThemeSettings?(d(),i("ul",oe,[ae,t("li",null,[t("button",{id:"darkButton",class:"btn btn-sm p-0 dark-buttton",onClick:s[0]||(s[0]=k((...a)=>o.createStyle&&o.createStyle(...a),["prevent"]))}," Dark ")]),t("li",null,[t("button",{class:"btn btn-sm p-0 rtl-button",onClick:s[1]||(s[1]=k((...a)=>o.toggleLayout&&o.toggleLayout(...a),["prevent"]))},[e.layoutType==="rtl"?(d(),i("span",le,u(l(A)().public.const.LTR),1)):(d(),i("span",de,u(l(A)().public.const.RTL),1))])]),t("li",re,[t("input",{value:e.primaryColor,onChange:s[2]||(s[2]=(...a)=>o.setLayoutValue&&o.setLayoutValue(...a)),type:"color",id:"ColorPicker1",title:"Choose your color"},null,40,ie)])])):M("",!0)])}const ne=C(ee,[["render",ce]]),ue={computed:{...h(f,{successfulModal:"successfulModal",successfulModalImage:"successfulModalImage",successfulModalLink:"successfulModalLink",successfulModalMessage:"successfulModalMessage"})},methods:{},watch:{successfulModal:function(){this.successfulModal&&setTimeout(()=>{f().toggleSuccessfulModal()},1e3)}}},me={class:"custom-img"},pe=["src"],_e={class:"custom-text"};function he(e,s,v,g,c,o){return d(),i("div",{class:G(["added-notification cursor-pointer",[{show:e.successfulModal}]]),role:"button",onClick:s[0]||(s[0]=k(a=>e.$router.push(e.successfulModalLink),["prevent"]))},[t("div",me,[e.successfulModalImage?(d(),i("img",{key:0,src:l(S)(e.successfulModalImage,!0),class:"img-fluid",alt:""},null,8,pe)):M("",!0)]),t("div",_e,[t("h3",null,u(e.successfulModalMessage),1)])],2)}const ge=C(ue,[["render",he]]),ye={props:["showModal"],computed:{darkMode(){return r().layoutMode},layoutType(){return r().layoutType},themeColor(){return r().primaryColor}},methods:{redirectTo(e,s){this.toggleQuickViewModal(),s!=null?this.$router.push(e+s):this.$router.push(e)},toggleCopySettings(){f().toggleCopySettings()},copySettingsToClipboard(){let e=`{
            "layout":"${this.layoutType}",
            "primaryColor":"${this.themeColor}",
            "darkMode":${this.darkMode=="dark"},
            "useTheseSettings":${!0}
          }`;navigator.clipboard.writeText(e);let s={message:"Data Has Been Copied"};f().toggleSuccessfulModal(s)}}},be={class:"modal theme-modal fade quick-view-modal",id:"copySettings"},fe={class:"modal-dialog modal-md modal-dialog-centered"},ve={class:"modal-content"},we={class:"modal-body"},Ce={class:"modal-contain"},$e=t("div",{class:"modal-heading mb-sm-5 mb-4"},[t("h2",null,"Copy Layout Settings")],-1),ke={class:"modal-content"},Se={class:"modal-contain-img"},Me=t("span",null,"Dark Mode : \xA0",-1),Te=t("span",null,"Layout Type : \xA0",-1),Le=t("span",null,"Layout Color : \xA0",-1),De={class:"modal-contain-details"},Ve=t("div",{class:"product-total"},null,-1),Ie={class:"shop-cart-button mt-3"};function Pe(e,s,v,g,c,o){return d(),i("div",be,[t("div",fe,[t("div",ve,[t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:s[0]||(s[0]=(...a)=>o.toggleCopySettings&&o.toggleCopySettings(...a))}),t("div",we,[t("div",Ce,[t("div",null,[$e,t("div",ke,[t("div",Se,[t("p",null,[Me,t("span",null,u(o.darkMode=="dark"),1)]),t("p",null,[Te,t("span",null,u(o.layoutType),1)]),t("p",null,[Le,t("span",null,u(o.themeColor),1)])]),t("div",De,[Ve,t("div",Ie,[t("a",{href:"javascript:void(0)",onClick:s[1]||(s[1]=k((...a)=>o.copySettingsToClipboard&&o.copySettingsToClipboard(...a),["prevent"])),class:"btn default-light-theme conti-button default-theme default-theme-2 rounded"},"Copy Settings")])])])])])])])])])}const Be=C(ye,[["render",Pe]]);const Ne={data(){return{form:{name:"",email:"",comment:"",productid:""}}},computed:{...h(N,{successmsg:"successmsg",contacterror:"contacterror"})},watch:{successmsg:function(){this.contactus()},contacterror:function(){this.contactus()}},methods:{async submitcontactus(){N().pricecontactus(this.form,"")},async contactus(){this.successmsg?(this.$refs.modalDismiss.click(),this.form={},f().toggleSuccessfulModal({message:"Contact us submitted successfully"})):this.contacterror&&this.contacterror},closebutton(){this.$refs.modalDismiss.click(),this.form={}}}},T=e=>(j("data-v-342f44f2"),e=e(),z(),e),Ue={class:"theme-modal modal fade contact-view-modal theme-modal fade","data-bs-backdrop":"static",id:"contact_us"},qe={class:"modal-dialog modal-lg modal-dialog-centered"},Ee={class:"modal-content",ref:"modal"},Oe={class:"modal-header"},Ae=T(()=>t("h3",{class:"modal-title"},"Contact Us for price",-1)),Je={class:"modal-body"},je={class:"row gy-4"},ze={class:"col-lg-6"},Qe=T(()=>t("label",{for:"name",class:"form-label font-light"},[U("Name "),t("span",{class:"text-danger"},"*")],-1)),Re={class:"text-danger"},We={class:"col-lg-6"},Ke=T(()=>t("label",{for:"email",class:"form-label font-light"},[U("Email "),t("span",{class:"text-danger"},"*")],-1)),Fe={class:"text-danger"},He={class:"col-lg-12"},Ge=T(()=>t("label",{for:"email",class:"form-label font-light"},"Comment Box",-1)),Ye={class:"col-lg-12"},Xe={class:"product-buttons submit-btn"},Ze=T(()=>t("span",null,"Submit",-1)),xe=[Ze],ts=T(()=>t("span",null,"Cancel",-1)),es=[ts];function ss(e,s,v,g,c,o){var a,y,p,$;return d(),i("div",Ue,[t("div",qe,[t("div",Ee,[t("div",Oe,[Ae,t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref:"modalDismiss",onClick:s[0]||(s[0]=(...n)=>o.closebutton&&o.closebutton(...n))},null,512)]),t("div",Je,[t("div",je,[t("div",ze,[Qe,q(t("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":s[1]||(s[1]=n=>c.form.name=n),placeholder:"Name"},null,512),[[E,c.form.name]]),t("span",Re,u((a=e.contacterror)!=null&&a.name?(y=e.contacterror)==null?void 0:y.name[0]:""),1)]),t("div",We,[Ke,q(t("input",{type:"text",class:"form-control",id:"email","onUpdate:modelValue":s[2]||(s[2]=n=>c.form.email=n),placeholder:"Email"},null,512),[[E,c.form.email]]),t("span",Fe,u((p=e.contacterror)!=null&&p.email?($=e.contacterror)==null?void 0:$.email[0]:""),1)]),t("div",He,[Ge,q(t("textarea",{name:"comment",class:"form-control",id:"","onUpdate:modelValue":s[3]||(s[3]=n=>c.form.comment=n),cols:"100",rows:"10"},null,512),[[E,c.form.comment]])]),t("div",Ye,[t("div",Xe,[t("a",{href:"javascript:void(0)",class:"btn btn-solid hover-solid btn-animation",id:"cartEffect",onClick:s[4]||(s[4]=(...n)=>o.submitcontactus&&o.submitcontactus(...n))},xe),t("button",{onClick:s[5]||(s[5]=(...n)=>o.closebutton&&o.closebutton(...n)),class:"btn btn-solid hover-solid btn-animation",id:"cancle-btn"},es)])])])])],512)])])}const os=C(Ne,[["render",ss],["__scopeId","data-v-342f44f2"]]);const as={data(){return{}},computed:{...h(N,{product_moreabout:"product_moreabout",product_data:"product_data"}),...h(H,{userData:"user"})},methods:{addtocart(){let e={productid:this.product_data,quantity:"1",price:st(this.product_data,"1",this.userData).price,flag:"addToCart",image:JSON.parse(this.product_data.work_images)!=null?JSON.parse(this.product_data.work_images)[0].path:"/images/image-not-found.png"};J().addToCart(e),this.$refs.modalDismiss.click()},closebutton(){this.$refs.modalDismiss.click(),this.form={}}}},R=e=>(j("data-v-58981c92"),e=e(),z(),e),ls={class:"theme-modal modal fade more-about-view-modal theme-modal fade","data-bs-backdrop":"static",id:"more_about"},ds={class:"modal-dialog modal-lg modal-dialog-centered"},rs={class:"modal-content",ref:"modal"},is={class:"modal-header"},cs=R(()=>t("h3",{class:"modal-title"},"Learn More About this Product",-1)),ns={class:"modal-body"},us={class:"row gy-4"},ms=["href"],ps=["src"],_s={class:"col-lg-12"},hs={class:"pfooter"},gs=R(()=>t("span",null,"Cancel",-1)),ys=[gs],bs={class:"product-buttons submit-btn"},fs=R(()=>t("span",null,[t("i",{class:"fa fa-shopping-cart"}),U(" Add to Cart")],-1)),vs=[fs];function ws(e,s,v,g,c,o){var a,y;return d(),i("div",ls,[t("div",ds,[t("div",rs,[t("div",is,[cs,t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref:"modalDismiss",onClick:s[0]||(s[0]=(...p)=>o.closebutton&&o.closebutton(...p))},null,512)]),t("div",ns,[t("div",us,[t("a",{href:(a=e.product_moreabout[0])==null?void 0:a.redirect_url,target:"_blank",class:"adjust-img"},[t("img",{src:l(S)((y=e.product_moreabout[0])==null?void 0:y.image,!0),alt:"",style:{width:"100%"}},null,8,ps)],8,ms),t("div",_s,[t("div",hs,[t("button",{onClick:s[1]||(s[1]=(...p)=>o.closebutton&&o.closebutton(...p)),class:"btn btn-solid hover-solid btn-animation",id:"cancle-btn"},ys),t("div",bs,[t("a",{href:"javascript:void(0)",class:"btn btn-solid hover-solid btn-animation",id:"addtocart-btn",onClick:s[2]||(s[2]=p=>o.addtocart())},vs)])])])])])],512)])])}const Cs=C(as,[["render",ws],["__scopeId","data-v-58981c92"]]),$s={data(){return{showDarkButton:!0,themeCss:"/voxo/css/bootstrap.css"}},components:{themeSettings:ne,quickView:Xt,cartSuccessful:te,addedSuccessfulModal:ge,copySettingsModal:Be,threeSixtyModal:vt,ContactUs:os,MoreAboutProduct:Cs},watch:{async $route(e,s){e.path!==s.path&&window.scrollTo({behaviour:"smooth",top:0}),e.path.includes("home")||(document.body.removeAttribute("class"),document.body.classList.add("theme-color2"))}},computed:{...h(r,{selectedCurrency:"selectedCurrency",selectedCurrencySymbol:"selectedCurrencySymbol",currencyConversionMultiple:"currencyConversionMultiple",layoutType:"layoutType",primaryColor:"primaryColor",selectedLanguage:"selectedLanguage",showTapToTop:"showTapToTop"}),...h(f,{cartModal:"cartModal",quickViewModal:"quickViewModal",overlay:"overlay",copySettingsView:"copySettings"}),...h(ot,{allRoutes:"data"})},methods:{handleScroll(){r().setShowTapToTop({value:window.scrollY>600})},closeOverlay(){f().closeOverlay()},beforeWindowUnload(){localStorage.setItem("cartItems",JSON.stringify(this.cartItems)),localStorage.setItem("compare",JSON.stringify(F().productsToCompare)),localStorage.setItem("layoutMode",r().layoutMode),m("primaryColor").value=this.primaryColor,m("selectedCurrency").value=this.selectedCurrency,m("selectedCurrencySymbol").value=this.selectedCurrencySymbol,m("currencyConversionMultiple").value=this.currencyConversionMultiple}},beforeDestroy(){window.removeEventListener("beforeunload",this.beforeWindowUnload)},created(){nt().setUser(m("user").value||{}),m("primaryColor").value&&r().setPrimaryColor({primaryColor:"#0163d2"}),r().setCurrency({currency:m("selectedCurrency").value,currencySymbol:m("selectedCurrencySymbol"),currencyConversionMultiple:m("currencyConversionMultiple")})},mounted(){r().setLayoutMode(localStorage.getItem("layoutMode")),F().setLocalProductsToCompare(JSON.parse(localStorage.getItem("compare")||"[]")),r().setLayoutType(m("layoutType").value||"ltr"),window.addEventListener("beforeunload",this.beforeWindowUnload),window.addEventListener("scroll",this.handleScroll),r().setInitialValues()}},ks=t("a",{href:"#"},[t("i",{class:"fas fa-chevron-up"})],-1),Ss=[ks],Ms=t("button",{id:"newsletterToggleButton","data-bs-toggle":"modal","data-bs-target":"#newsletter",class:"d-none"}," toggle modal ",-1);function Ts(e,s,v,g,c,o){const a=b("cartSuccessful"),y=b("quickView"),p=b("addedSuccessfulModal"),$=b("copySettingsModal"),n=b("threeSixtyModal"),D=b("ContactUs"),V=b("MoreAboutProduct");return d(),i("div",null,[at(e.$slots,"default"),t("div",{class:G(["tap-to-top",e.showTapToTop?"show":""])},Ss,2),(d(),O(lt,{to:"body"},[e.overlay?(d(),i("div",{key:0,class:"bg-overlay show",onClick:s[0]||(s[0]=k((...I)=>o.closeOverlay&&o.closeOverlay(...I),["prevent"]))})):M("",!0)])),_(a,{showModal:e.cartModal},null,8,["showModal"]),_(y,{showModal:e.quickViewModal},null,8,["showModal"]),_(p),_($,{showModal:e.copySettingsView},null,8,["showModal"]),_(n),_(D),_(V),Ms])}const Ns=C($s,[["render",Ts]]);export{Ns as default};
