"use strict";(self.webpackChunkreact_social_media_embed=self.webpackChunkreact_social_media_embed||[]).push([[60],{"./src/stories/embeds/TikTokEmbed.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPlaceholder:()=>CustomPlaceholder,CustomPlaceholderLinkText:()=>CustomPlaceholderLinkText,MainExample:()=>MainExample,PlaceholderDisabled:()=>PlaceholderDisabled,PlaceholderSpinnerDisabled:()=>PlaceholderSpinnerDisabled,UrlOnly:()=>UrlOnly,Width100Percent:()=>Width100Percent,Width150AtUnderMin:()=>Width150AtUnderMin,Width325AtMin:()=>Width325AtMin,Width400:()=>Width400,Width480AtMax:()=>Width480AtMax,Width800AtOverMax:()=>Width800AtOverMax,WithPlaceholderImage:()=>WithPlaceholderImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TikTokEmbed_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dist=__webpack_require__("./node_modules/react-sub-unsub/dist/index.js"),useFrame=__webpack_require__("./src/components/hooks/useFrame.ts"),PlaceholderEmbed=__webpack_require__("./src/components/placeholder/PlaceholderEmbed.tsx"),uuid=__webpack_require__("./src/components/uuid.ts"),EmbedStyle=__webpack_require__("./src/components/embeds/EmbedStyle.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TikTokEmbed=_ref=>{let{url,width,height,linkText="View post on TikTok",placeholderImageUrl,placeholderSpinner,placeholderSpinnerDisabled=!1,placeholderProps,embedPlaceholder,placeholderDisabled=!1,scriptLoadDisabled=!1,retryDelay=5e3,retryDisabled=!1,frame,debug=!1,...divProps}=_ref;const[stage,setStage]=react.useState("process-embed"),uuidRef=react.useRef((0,uuid.g)()),[processTime,setProcessTime]=react.useState(Date.now()),embedContainerKey=react.useMemo((()=>`${uuidRef.current}-${processTime}`),[processTime]),frm=(0,useFrame.a)(frame);react.useEffect((()=>{debug&&console.log(`[${(new Date).toISOString()}]: ${stage}`)}),[debug,stage]),react.useEffect((()=>{if("process-embed"===stage&&frm.document&&!scriptLoadDisabled){const scriptId="tiktok-embed-script",prevScript=frm.document.getElementById(scriptId);prevScript&&prevScript.remove();const scriptElement=frm.document.createElement("script");scriptElement.setAttribute("src",`https://www.tiktok.com/embed.js?t=${Date.now()}`),scriptElement.setAttribute("id",scriptId),frm.document.head.appendChild(scriptElement),setStage("confirm-embed-success")}}),[scriptLoadDisabled,stage,frm.document]),react.useEffect((()=>{const subs=new dist.us;return"confirm-embed-success"===stage&&(subs.setInterval((()=>{if(frm.document){frm.document.getElementById(uuidRef.current)||setStage("embed-success")}}),1),retryDisabled||subs.setTimeout((()=>{setStage("retrying")}),retryDelay)),subs.createCleanup()}),[retryDelay,retryDisabled,stage,frm.document]),react.useEffect((()=>{"retrying"===stage&&(setProcessTime(Date.now()),setStage("process-embed"))}),[stage]);const embedId=url.replace(/[?].*$/,"").replace(/^.+\//,""),placeholderStyle={minWidth:325,maxWidth:480,width:void 0!==width?width:"100%",height:void 0!==height?height:void 0!==divProps.style?.height||void 0!==divProps.style?.maxHeight?"100%":550,border:"solid 1px rgba(22,24,35,0.12)",borderRadius:8},placeholder=embedPlaceholder??(0,jsx_runtime.jsx)(PlaceholderEmbed.Y,{url,imageUrl:placeholderImageUrl,linkText,spinner:placeholderSpinner,spinnerDisabled:placeholderSpinnerDisabled,...placeholderProps,style:{...placeholderStyle,...placeholderProps?.style}});return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()("rsme-embed rsme-tiktok-embed",divProps.className),style:{overflow:"hidden",width:width??void 0,height:height??void 0,borderRadius:8,...divProps.style},children:[(0,jsx_runtime.jsx)(EmbedStyle.e,{}),(0,jsx_runtime.jsx)("div",{className:"tiktok-embed-container",children:(0,jsx_runtime.jsx)("blockquote",{className:"tiktok-embed",cite:url,"data-video-id":embedId,children:placeholderDisabled?(0,jsx_runtime.jsx)("div",{id:uuidRef.current,style:{display:"none"},children:" "}):(0,jsx_runtime.jsx)("div",{id:uuidRef.current,style:{display:"flex",justifyContent:"center"},children:placeholder})},embedContainerKey)})]})};TikTokEmbed.displayName="TikTokEmbed";try{TikTokEmbed.displayName="TikTokEmbed",TikTokEmbed.__docgenInfo={description:"",displayName:"TikTokEmbed",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},linkText:{defaultValue:{value:"View post on TikTok"},description:"",name:"linkText",required:!1,type:{name:"string"}},placeholderImageUrl:{defaultValue:null,description:"",name:"placeholderImageUrl",required:!1,type:{name:"string"}},placeholderSpinner:{defaultValue:null,description:"",name:"placeholderSpinner",required:!1,type:{name:"ReactNode"}},placeholderSpinnerDisabled:{defaultValue:{value:"false"},description:"",name:"placeholderSpinnerDisabled",required:!1,type:{name:"boolean"}},placeholderProps:{defaultValue:null,description:"",name:"placeholderProps",required:!1,type:{name:"PlaceholderEmbedProps"}},embedPlaceholder:{defaultValue:null,description:"",name:"embedPlaceholder",required:!1,type:{name:"ReactNode"}},placeholderDisabled:{defaultValue:{value:"false"},description:"",name:"placeholderDisabled",required:!1,type:{name:"boolean"}},scriptLoadDisabled:{defaultValue:{value:"false"},description:"",name:"scriptLoadDisabled",required:!1,type:{name:"boolean"}},retryDelay:{defaultValue:{value:"5000"},description:"",name:"retryDelay",required:!1,type:{name:"number"}},retryDisabled:{defaultValue:{value:"false"},description:"",name:"retryDisabled",required:!1,type:{name:"boolean"}},frame:{defaultValue:{value:"undefined"},description:"",name:"frame",required:!1,type:{name:"Frame"}},debug:{defaultValue:{value:"false"},description:"",name:"debug",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/embeds/TikTokEmbed.tsx#TikTokEmbed"]={docgenInfo:TikTokEmbed.__docgenInfo,name:"TikTokEmbed",path:"src/components/embeds/TikTokEmbed.tsx#TikTokEmbed"})}catch(__react_docgen_typescript_loader_error){}var Templates=__webpack_require__("./src/stories/Templates.tsx");const TikTokEmbed_stories={title:"Embeds/TikTokEmbed",component:TikTokEmbed,parameters:{options:{showPanel:!1}}},url="https://www.tiktok.com/@epicgardening/video/7055411162212633903",MainExample={args:{url,width:325},decorators:[Templates.YJ]},Width325AtMin={args:{url,width:325},decorators:[Templates.Kg]},Width400={args:{url,width:400},decorators:[Templates.Kg]},Width480AtMax={args:{url,width:480},decorators:[Templates.Kg]},Width800AtOverMax={args:{url,width:800},decorators:[Templates.Kg]},Width150AtUnderMin={args:{url,width:150},decorators:[Templates.Kg]},Width100Percent={args:{url,width:"100%"},decorators:[Templates.Kg]},UrlOnly={args:{url},decorators:[Templates.Kg]},WithPlaceholderImage={args:{url,placeholderImageUrl:"https://placekitten.com/325/560"},decorators:[Templates.Kg]},CustomPlaceholder={args:{url,embedPlaceholder:(0,jsx_runtime.jsx)("div",{style:{width:325,padding:"150px 0",backgroundColor:"lightsteelblue",textAlign:"center"},children:"Custom Placeholder!"})},decorators:[Templates.Kg]},CustomPlaceholderLinkText={args:{url,linkText:"Custom link text"},decorators:[Templates.Kg]},PlaceholderSpinnerDisabled={args:{url,width:400,placeholderSpinnerDisabled:!0},decorators:[Templates.Kg]},PlaceholderDisabled={args:{url,placeholderDisabled:!0},decorators:[Templates.Kg]};MainExample.parameters={...MainExample.parameters,docs:{...MainExample.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: 325\n  },\n  decorators: [MainExampleTemplate]\n}",...MainExample.parameters?.docs?.source}}},Width325AtMin.parameters={...Width325AtMin.parameters,docs:{...Width325AtMin.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: 325\n  },\n  decorators: [ToggledOffTemplate]\n}",...Width325AtMin.parameters?.docs?.source}}},Width400.parameters={...Width400.parameters,docs:{...Width400.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: 400\n  },\n  decorators: [ToggledOffTemplate]\n}",...Width400.parameters?.docs?.source}}},Width480AtMax.parameters={...Width480AtMax.parameters,docs:{...Width480AtMax.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: 480\n  },\n  decorators: [ToggledOffTemplate]\n}",...Width480AtMax.parameters?.docs?.source}}},Width800AtOverMax.parameters={...Width800AtOverMax.parameters,docs:{...Width800AtOverMax.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: 800\n  },\n  decorators: [ToggledOffTemplate]\n}",...Width800AtOverMax.parameters?.docs?.source}}},Width150AtUnderMin.parameters={...Width150AtUnderMin.parameters,docs:{...Width150AtUnderMin.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: 150\n  },\n  decorators: [ToggledOffTemplate]\n}",...Width150AtUnderMin.parameters?.docs?.source}}},Width100Percent.parameters={...Width100Percent.parameters,docs:{...Width100Percent.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: '100%'\n  },\n  decorators: [ToggledOffTemplate]\n}",...Width100Percent.parameters?.docs?.source}}},UrlOnly.parameters={...UrlOnly.parameters,docs:{...UrlOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    url\n  },\n  decorators: [ToggledOffTemplate]\n}",...UrlOnly.parameters?.docs?.source}}},WithPlaceholderImage.parameters={...WithPlaceholderImage.parameters,docs:{...WithPlaceholderImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    placeholderImageUrl\n  },\n  decorators: [ToggledOffTemplate]\n}",...WithPlaceholderImage.parameters?.docs?.source}}},CustomPlaceholder.parameters={...CustomPlaceholder.parameters,docs:{...CustomPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    embedPlaceholder: <div style={{\n      width: 325,\n      padding: '150px 0',\n      backgroundColor: 'lightsteelblue',\n      textAlign: 'center'\n    }}>\n        Custom Placeholder!\n      </div>\n  },\n  decorators: [ToggledOffTemplate]\n}",...CustomPlaceholder.parameters?.docs?.source}}},CustomPlaceholderLinkText.parameters={...CustomPlaceholderLinkText.parameters,docs:{...CustomPlaceholderLinkText.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    linkText: 'Custom link text'\n  },\n  decorators: [ToggledOffTemplate]\n}",...CustomPlaceholderLinkText.parameters?.docs?.source}}},PlaceholderSpinnerDisabled.parameters={...PlaceholderSpinnerDisabled.parameters,docs:{...PlaceholderSpinnerDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    width: 400,\n    placeholderSpinnerDisabled: true\n  },\n  decorators: [ToggledOffTemplate]\n}",...PlaceholderSpinnerDisabled.parameters?.docs?.source}}},PlaceholderDisabled.parameters={...PlaceholderDisabled.parameters,docs:{...PlaceholderDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    placeholderDisabled: true\n  },\n  decorators: [ToggledOffTemplate]\n}",...PlaceholderDisabled.parameters?.docs?.source}}};const __namedExportsOrder=["MainExample","Width325AtMin","Width400","Width480AtMax","Width800AtOverMax","Width150AtUnderMin","Width100Percent","UrlOnly","WithPlaceholderImage","CustomPlaceholder","CustomPlaceholderLinkText","PlaceholderSpinnerDisabled","PlaceholderDisabled"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button {\n  border: solid 1px rgb(182, 182, 182);\n  background-color: white;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 8px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: rgb(226, 226, 226);\n  cursor: pointer;\n}\n\n.button:active {\n  background-color: rgb(192, 192, 192);\n  box-shadow: inset 0 0 5px #4b4b4b;\n  cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/stories/button.css"],names:[],mappings:"AAAA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,6EAA6E;EAC7E,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,iCAAiC;EACjC,eAAe;AACjB",sourcesContent:[".button {\n  border: solid 1px rgb(182, 182, 182);\n  background-color: white;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 8px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: rgb(226, 226, 226);\n  cursor: pointer;\n}\n\n.button:active {\n  background-color: rgb(192, 192, 192);\n  box-shadow: inset 0 0 5px #4b4b4b;\n  cursor: pointer;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/embeds/EmbedStyle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>EmbedStyle});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const EmbedStyle=_ref=>{let{...styleProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style",{...styleProps,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(styleProps.className),style:{...styleProps.style},children:"\n        .rsme-embed .rsme-d-none {\n          display: none;\n        }\n    \n        .rsme-embed .twitter-tweet {\n          margin: 0 !important;\n        }\n    \n        .rsme-embed blockquote {\n          margin: 0 !important;\n          padding: 0 !important;\n        }\n\n        .rsme-embed.rsme-facebook-embed .fb-post iframe {\n          width: 100% !important;\n        }\n\n        .rsme-embed.rsme-facebook-embed .fb-post span {\n          width: 100% !important;\n        }\n      "})};EmbedStyle.displayName="EmbedStyle";try{EmbedStyle.displayName="EmbedStyle",EmbedStyle.__docgenInfo={description:"",displayName:"EmbedStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/embeds/EmbedStyle.tsx#EmbedStyle"]={docgenInfo:EmbedStyle.__docgenInfo,name:"EmbedStyle",path:"src/components/embeds/EmbedStyle.tsx#EmbedStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/hooks/useFrame.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>useFrame});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useFrame=frame=>react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>frame||{document:"undefined"!=typeof document?document:void 0,window:"undefined"!=typeof window?window:void 0}),[frame])},"./src/components/placeholder/PlaceholderEmbed.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>PlaceholderEmbed});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),EmbedStyle=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/embeds/EmbedStyle.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BorderSpinner=_ref=>{let{...divProps}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("style",{children:"\n        .rsme-spinner {\n          border: 3px solid rgba(0,0,0,0.75);\n          border-right-color: transparent;\n          border-radius: 50%;\n          animation: rsme-spin 1s linear infinite;\n        }\n        @keyframes rsme-spin {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }  \n      "}),(0,jsx_runtime.jsx)("div",{...divProps,className:classnames_default()("rsme-spinner",divProps.className),style:{width:10,height:10,...divProps.style}})]})};try{BorderSpinner.displayName="BorderSpinner",BorderSpinner.__docgenInfo={description:"",displayName:"BorderSpinner",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/BorderSpinner.tsx#BorderSpinner"]={docgenInfo:BorderSpinner.__docgenInfo,name:"BorderSpinner",path:"src/components/placeholder/parts/BorderSpinner.tsx#BorderSpinner"})}catch(__react_docgen_typescript_loader_error){}const EngagementIconsPlaceholder=_ref=>{let{...divProps}=_ref;return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()(divProps.className),style:{display:"flex",alignItems:"center",columnGap:14,...divProps.style},children:[(0,jsx_runtime.jsx)(HeartIcon,{}),(0,jsx_runtime.jsx)(ChatBubbleIcon,{}),(0,jsx_runtime.jsx)(ShareArrowIcon,{})]})};EngagementIconsPlaceholder.displayName="EngagementIconsPlaceholder";const HeartIcon=props=>(0,jsx_runtime.jsxs)("div",{...props,children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",height:"12.5px",transform:"rotate(-45deg) translateX(3px) translateY(1px)",width:"12.5px",flexGrow:0,marginRight:"6px",marginLeft:"2px"}}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})]});HeartIcon.displayName="HeartIcon";const ChatBubbleIcon=props=>(0,jsx_runtime.jsxs)("div",{...props,children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"20px",width:"20px"}}),(0,jsx_runtime.jsx)("div",{style:{width:0,height:0,borderTop:"2px solid transparent",borderLeft:"6px solid #f4f4f4",borderBottom:"2px solid transparent",transform:"translateX(16px) translateY(-4px) rotate(30deg)"}})]});ChatBubbleIcon.displayName="ChatBubbleIcon";const ShareArrowIcon=props=>(0,jsx_runtime.jsx)("div",{...props,style:{height:25,width:25,transform:"translateX(0px) translateY(-2px)"},children:(0,jsx_runtime.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:[(0,jsx_runtime.jsx)("path",{style:{fill:"#F4F4F4"},d:"M295.204,180.593C132.168,180.593,0,312.759,0,475.796\nc51.398-130.047,184.869-203.22,317.483-183.603L295.204,180.593z"}),(0,jsx_runtime.jsx)("path",{style:{fill:"#F4F4F4"},d:"M512,253L295.204,36.204v217.818C159.946,249.655,34.992,339.262,0,475.794\nc59.905-109.171,178.724-165.463,295.204-151.033v145.035L512,253z"})]})});ShareArrowIcon.displayName="ShareArrowIcon";try{EngagementIconsPlaceholder.displayName="EngagementIconsPlaceholder",EngagementIconsPlaceholder.__docgenInfo={description:"",displayName:"EngagementIconsPlaceholder",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#EngagementIconsPlaceholder"]={docgenInfo:EngagementIconsPlaceholder.__docgenInfo,name:"EngagementIconsPlaceholder",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#EngagementIconsPlaceholder"})}catch(__react_docgen_typescript_loader_error){}try{HeartIcon.displayName="HeartIcon",HeartIcon.__docgenInfo={description:"",displayName:"HeartIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#HeartIcon"]={docgenInfo:HeartIcon.__docgenInfo,name:"HeartIcon",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#HeartIcon"})}catch(__react_docgen_typescript_loader_error){}try{ChatBubbleIcon.displayName="ChatBubbleIcon",ChatBubbleIcon.__docgenInfo={description:"",displayName:"ChatBubbleIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ChatBubbleIcon"]={docgenInfo:ChatBubbleIcon.__docgenInfo,name:"ChatBubbleIcon",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ChatBubbleIcon"})}catch(__react_docgen_typescript_loader_error){}try{ShareArrowIcon.displayName="ShareArrowIcon",ShareArrowIcon.__docgenInfo={description:"",displayName:"ShareArrowIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ShareArrowIcon"]={docgenInfo:ShareArrowIcon.__docgenInfo,name:"ShareArrowIcon",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ShareArrowIcon"})}catch(__react_docgen_typescript_loader_error){}const ProfilePlaceholder=_ref=>{let{...divProps}=_ref;return(0,jsx_runtime.jsx)("div",{...divProps,className:classnames_default()(divProps.className),style:{...divProps.style},children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",columnGap:14},children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",width:40,height:40}}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",rowGap:6},children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,width:100,height:14}}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,width:60,height:14}})]})]})})};ProfilePlaceholder.displayName="ProfilePlaceholder";try{ProfilePlaceholder.displayName="ProfilePlaceholder",ProfilePlaceholder.__docgenInfo={description:"",displayName:"ProfilePlaceholder",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/ProfilePlaceholder.tsx#ProfilePlaceholder"]={docgenInfo:ProfilePlaceholder.__docgenInfo,name:"ProfilePlaceholder",path:"src/components/placeholder/parts/ProfilePlaceholder.tsx#ProfilePlaceholder"})}catch(__react_docgen_typescript_loader_error){}const PlaceholderEmbed=_ref=>{let{url,linkText="View post",imageUrl,spinner=(0,jsx_runtime.jsx)(BorderSpinner,{}),spinnerDisabled,...divProps}=_ref;return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()(divProps.className),style:{overflow:"hidden",border:"1px solid #dee2e6",backgroundColor:"#ffffff",borderRadius:0,boxSizing:"border-box",position:"relative",...divProps.style},children:[(0,jsx_runtime.jsx)(EmbedStyle.e,{}),(0,jsx_runtime.jsxs)("a",{href:url,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:[!imageUrl&&(0,jsx_runtime.jsx)("div",{style:{position:"absolute",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"start",paddingLeft:16,paddingRight:16,paddingTop:16,paddingBottom:16,zIndex:2,backgroundColor:"#ffffff"},children:(0,jsx_runtime.jsx)(ProfilePlaceholder,{})}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:imageUrl?"start":"center",height:"100%",width:"100%"},children:[!imageUrl&&(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",rowGap:16,zIndex:3,padding:8,backgroundColor:"#ffffff"},children:[!spinnerDisabled&&spinner,!!linkText&&(0,jsx_runtime.jsx)("div",{style:{color:"#000000",fontFamily:"Arial,sans-serif",fontSize:"14px",fontStyle:"normal",fontWeight:550,lineHeight:"18px",textAlign:"center"},children:linkText})]}),imageUrl&&(void 0!==divProps.style?.height?(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"100%",background:`url("${imageUrl}")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",marginBottom:"40"}}):(0,jsx_runtime.jsx)("div",{style:{width:"100%",marginBottom:40},children:(0,jsx_runtime.jsx)("img",{src:imageUrl,style:{width:"100%"}})}))]}),(0,jsx_runtime.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,height:40,width:"100%",backgroundColor:"#ffffff",zIndex:1},children:[!imageUrl&&(0,jsx_runtime.jsx)(EngagementIconsPlaceholder,{style:{marginLeft:16}}),imageUrl&&(0,jsx_runtime.jsxs)("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"space-between",columnGap:16},children:[(0,jsx_runtime.jsx)("div",{style:{color:"#0095f6",fontWeight:600,fontFamily:"Arial,sans-serif",fontSize:"14px",fontStyle:"normal",whiteSpace:"nowrap",marginLeft:16},children:linkText}),!spinnerDisabled&&(0,jsx_runtime.jsx)("div",{style:{marginRight:16},children:spinner})]})]})]})]})};PlaceholderEmbed.displayName="PlaceholderEmbed";try{PlaceholderEmbed.displayName="PlaceholderEmbed",PlaceholderEmbed.__docgenInfo={description:"",displayName:"PlaceholderEmbed",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},linkText:{defaultValue:{value:"View post"},description:"",name:"linkText",required:!1,type:{name:"string"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},spinner:{defaultValue:{value:"<BorderSpinner />"},description:"",name:"spinner",required:!1,type:{name:"ReactNode"}},spinnerDisabled:{defaultValue:null,description:"",name:"spinnerDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/PlaceholderEmbed.tsx#PlaceholderEmbed"]={docgenInfo:PlaceholderEmbed.__docgenInfo,name:"PlaceholderEmbed",path:"src/components/placeholder/PlaceholderEmbed.tsx#PlaceholderEmbed"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/uuid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>generateUUID});const generateUUID=()=>{let d=(new Date).getTime(),d2="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){let r=16*Math.random();return d>0?(r=(d+r)%16|0,d=Math.floor(d/16)):(r=(d2+r)%16|0,d2=Math.floor(d2/16)),("x"===c?r:3&r|8).toString(16)}))}},"./src/stories/Templates.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YJ:()=>MainExampleTemplate,Kg:()=>ToggledOffTemplate,iU:()=>ToggledOnTemplate});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stories_button=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stories_button.c,options);stories_button.c&&stories_button.c.locals&&stories_button.c.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const EmbedToggler=_ref=>{let{defaultToggledOn=!1,...divProps}=_ref;const[show,setShow]=react.useState(defaultToggledOn);return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()(divProps.className),style:{...divProps.style},children:[(0,jsx_runtime.jsx)("div",{className:"button",onClick:()=>setShow(!show),style:{marginBottom:"5px"},children:show?"Hide Embed":"Show Embed"}),(0,jsx_runtime.jsx)("div",{children:show&&divProps.children})]})};EmbedToggler.displayName="EmbedToggler";try{EmbedToggler.displayName="EmbedToggler",EmbedToggler.__docgenInfo={description:"",displayName:"EmbedToggler",props:{defaultToggledOn:{defaultValue:{value:"false"},description:"",name:"defaultToggledOn",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/EmbedToggler.tsx#EmbedToggler"]={docgenInfo:EmbedToggler.__docgenInfo,name:"EmbedToggler",path:"src/stories/EmbedToggler.tsx#EmbedToggler"})}catch(__react_docgen_typescript_loader_error){}const MainExampleTemplate=Child=>(0,jsx_runtime.jsx)(EmbedToggler,{defaultToggledOn:!0,children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Child,{})})});MainExampleTemplate.displayName="MainExampleTemplate";const ToggledOffTemplate=Child=>(0,jsx_runtime.jsx)(EmbedToggler,{defaultToggledOn:"undefined"!=typeof window&&window.location.href.includes("localhost"),children:(0,jsx_runtime.jsx)(Child,{})});ToggledOffTemplate.displayName="ToggledOffTemplate";const ToggledOnTemplate=Child=>(0,jsx_runtime.jsx)(EmbedToggler,{defaultToggledOn:!0,children:(0,jsx_runtime.jsx)(Child,{})});ToggledOnTemplate.displayName="ToggledOnTemplate";try{MainExampleTemplate.displayName="MainExampleTemplate",MainExampleTemplate.__docgenInfo={description:"",displayName:"MainExampleTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Templates.tsx#MainExampleTemplate"]={docgenInfo:MainExampleTemplate.__docgenInfo,name:"MainExampleTemplate",path:"src/stories/Templates.tsx#MainExampleTemplate"})}catch(__react_docgen_typescript_loader_error){}try{ToggledOffTemplate.displayName="ToggledOffTemplate",ToggledOffTemplate.__docgenInfo={description:"",displayName:"ToggledOffTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Templates.tsx#ToggledOffTemplate"]={docgenInfo:ToggledOffTemplate.__docgenInfo,name:"ToggledOffTemplate",path:"src/stories/Templates.tsx#ToggledOffTemplate"})}catch(__react_docgen_typescript_loader_error){}try{ToggledOnTemplate.displayName="ToggledOnTemplate",ToggledOnTemplate.__docgenInfo={description:"",displayName:"ToggledOnTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Templates.tsx#ToggledOnTemplate"]={docgenInfo:ToggledOnTemplate.__docgenInfo,name:"ToggledOnTemplate",path:"src/stories/Templates.tsx#ToggledOnTemplate"})}catch(__react_docgen_typescript_loader_error){}}}]);