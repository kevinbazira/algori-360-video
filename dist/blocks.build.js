!function(e){function t(n){if(l[n])return l[n].exports;var a=l[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var l={};t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l(1)},function(e,t,l){"use strict";var n=l(2),a=(l.n(n),l(3)),o=(l.n(a),wp.components),i=o.PanelBody,r=o.TextControl,s=o.Spinner,c=o.withNotices,d=o.Notice,m=wp.element.Fragment,__=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.blockEditor,g=u.BlockControls,w=u.InspectorControls,h=u.BlockAlignmentToolbar,b=u.MediaPlaceholder,v=u.MediaReplaceFlow,E=(u.MediaUpload,u.MediaUploadCheck,u.AlignmentToolbar,u.RichText,wp.blob.isBlobURL),f=["video"],y={title:{type:"array",source:"children",selector:"p"},url:{type:"string"},align:{type:"string"},widthBeforeWideFullAlignments:{type:"number",default:600},width:{type:"number",default:600},height:{type:"number",default:300},contentAlign:{type:"string",default:"center"},id:{type:"number"}},k=wp.blocks.getCategories().some(function(e){return"common"===e.slug});p("algori-360-video/block-algori-360-video",{title:__("360\xb0 Video"),description:__("Embed a 360\xb0 video file with a simple play/pause button."),icon:"format-video",category:k?"common":"media",keywords:[__("algori panorama video - three sixty degree video"),__("spherical video - full-sphere video"),__("equirectangular video - VR (Virtual Reality) videography")],example:{attributes:{url:"../wp-content/plugins/algori-360-video/360-video-example.mp4"}},attributes:y,getEditWrapperProps:function(e){return{"data-align":e.align}},edit:c(function(e){var t=e.attributes,l=e.setAttributes,n=(e.isSelected,e.className),a=e.noticeOperations,o=e.noticeUI,c=t.url,p=(t.title,t.align),u=t.widthBeforeWideFullAlignments,y=t.width,k=t.height,V=(t.contentAlign,t.id),N=function(e){return l({width:parseInt(e,10),widthBeforeWideFullAlignments:parseInt(e,10)})},P=function(e){return l({height:parseInt(e,10)})},O=function(){var e=document.getElementById("algori-360-video");e.paused?e.play():e.pause()},x=function(e){if(!e||!e.url)return void l({url:void 0,id:void 0});l({url:e.url,id:e.id})},A=function(e){e!==c&&l({url:e,id:void 0})},B=function(e){a.removeAllNotices(),a.createErrorNotice(e)},I=function(e){var t=-1!==["wide","full"].indexOf(e)?{width:void 0}:{width:u};l(Object.assign({},t,{align:e}))},M=wp.element.createElement(m,null,wp.element.createElement(g,null,wp.element.createElement(h,{value:p,onChange:I}),wp.element.createElement(v,{mediaId:V,mediaURL:c,allowedTypes:f,accept:"video/*",onSelect:x,onSelectURL:A,onError:B})),!!c&&wp.element.createElement(w,null,wp.element.createElement(i,{title:__("360\xb0 Video Settings")},wp.element.createElement("div",null,wp.element.createElement("p",null,__("Video Dimensions")),wp.element.createElement("div",null,-1!==["wide","full"].indexOf(p)?wp.element.createElement(d,{status:"informational",isDismissible:"false"},__("The")," \xa0",wp.element.createElement("strong",null,__("Width"))," \xa0",__("setting has been disabled because you have chosen either")," \xa0",wp.element.createElement("strong",null,__("Full"))," \xa0",__("or")," \xa0",wp.element.createElement("strong",null,__("Wide"))," \xa0",__("width alignment from the block toolbar.")):wp.element.createElement(r,{type:"number",label:__("Width"),value:void 0!==y?y:"",placeholder:600,min:1,onChange:N}),wp.element.createElement(r,{type:"number",label:__("Height"),value:void 0!==k?k:"",placeholder:300,min:1,onChange:P}))))));return c?wp.element.createElement(m,null,M,E(c)&&wp.element.createElement(s,null),wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(p)?{height:k}:{width:y,height:k},className:"wp-block-algori-360-video-block-algori-360-video align"+p},wp.element.createElement("a-scene",{"loading-screen":"enabled: false;",embedded:!0},wp.element.createElement("a-entity",{camera:"","look-controls":"reverseMouseDrag: true"}),wp.element.createElement("a-assets",null,wp.element.createElement("video",{id:"algori-360-video",src:c,crossorigin:"anonymous",autoplay:"false",loop:"true"})),wp.element.createElement("a-videosphere",{src:"#algori-360-video"})),wp.element.createElement("div",{class:"wp-block-algori-360-video-block-algori-360-video-controls"},wp.element.createElement("button",{id:"algori-360-video-play-pause-btn",onClick:O},wp.element.createElement("span",{class:"dashicons-before dashicons-controls-play"},__("Play")),"\xa0|\xa0",wp.element.createElement("span",{class:"dashicons-before dashicons-controls-pause"},__("Pause")))))):wp.element.createElement(m,null,M,wp.element.createElement(b,{icon:"format-video",className:n,labels:{title:__("360 Video"),instructions:__("Drag a 360\xb0 video, upload a new one, insert from URL or select a file from your library.")},onSelect:x,onSelectURL:A,accept:"video/*",allowedTypes:f,notices:o,onError:a.createErrorNotice}))}),save:function(e){var t=e.attributes,l=(e.className,t.url),n=(t.title,t.align),a=t.width,o=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(n)?{height:o}:{width:a,height:o},className:"align"+n},wp.element.createElement("a-scene",{"loading-screen":"enabled: false;","device-orientation-permission-ui":"enabled: false",embedded:""},wp.element.createElement("a-entity",{camera:"","look-controls":"reverseMouseDrag: true"}),wp.element.createElement("a-assets",null,wp.element.createElement("video",{id:"algori-360-video",src:l,crossorigin:"anonymous",autoplay:"false",loop:"true"})),wp.element.createElement("a-videosphere",{src:"#algori-360-video"})),wp.element.createElement("div",{className:"wp-block-algori-360-video-block-algori-360-video-controls"},wp.element.createElement("button",{id:"algori-360-video-play-pause-btn",onclick:"const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();"},wp.element.createElement("span",{class:"dashicons-before dashicons-controls-play"},__("Play")),"\xa0|\xa0",wp.element.createElement("span",{class:"dashicons-before dashicons-controls-pause"},__("Pause")))))},deprecated:[{attributes:Object.assign({},y),save:function(e){var t=e.attributes,l=(e.className,t.url),n=(t.title,t.align),a=t.width,o=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(n)?{height:o}:{width:a,height:o},className:"align"+n},wp.element.createElement("a-scene",{"loading-screen":"enabled: false;","device-orientation-permission-ui":"enabled: false",embedded:""},wp.element.createElement("a-entity",{camera:"","look-controls":"reverseMouseDrag: true"}),wp.element.createElement("a-assets",null,wp.element.createElement("video",{id:"algori-360-video",src:l,crossorigin:"anonymous",autoplay:"false",loop:"true"})),wp.element.createElement("a-videosphere",{src:"#algori-360-video"})),wp.element.createElement("div",{className:"wp-block-cgb-block-algori-360-video-controls"},wp.element.createElement("button",{id:"algori-360-video-play-pause-btn",onclick:"const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();"},wp.element.createElement("span",{class:"dashicons-before dashicons-controls-play"},__("Play")),"\xa0|\xa0",wp.element.createElement("span",{class:"dashicons-before dashicons-controls-pause"},__("Pause")))))}},{attributes:Object.assign({},y),save:function(e){var t=e.attributes,l=(e.className,t.url),n=(t.title,t.align),a=t.width,o=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(n)?{height:o}:{width:a,height:o},className:"align"+n},wp.element.createElement("a-scene",{"loading-screen":"enabled: false;",embedded:""},wp.element.createElement("a-entity",{camera:"","look-controls":"reverseMouseDrag: true"}),wp.element.createElement("a-assets",null,wp.element.createElement("video",{id:"algori-360-video",src:l,crossorigin:"anonymous",autoplay:"false",loop:"true"})),wp.element.createElement("a-videosphere",{src:"#algori-360-video"})),wp.element.createElement("div",{className:"wp-block-cgb-block-algori-360-video-controls"},wp.element.createElement("button",{id:"algori-360-video-play-pause-btn",onclick:"const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();"},wp.element.createElement("span",{class:"dashicons-before dashicons-controls-play"},__("Play")),"\xa0|\xa0",wp.element.createElement("span",{class:"dashicons-before dashicons-controls-pause"},__("Pause")))))}},{attributes:Object.assign({},y),save:function(e){var t=e.attributes,l=(e.className,t.url),n=(t.title,t.align),a=t.width,o=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(n)?{height:o}:{width:a,height:o},className:"align"+n},wp.element.createElement("a-scene",{embedded:""},wp.element.createElement("a-assets",null,wp.element.createElement("video",{id:"algori-360-video",src:l,crossorigin:"anonymous",autoplay:"false",loop:"true"})),wp.element.createElement("a-videosphere",{src:"#algori-360-video"})),wp.element.createElement("div",{className:"wp-block-cgb-block-algori-360-video-controls"},wp.element.createElement("button",{id:"algori-360-video-play-pause-btn",onclick:"const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();"},wp.element.createElement("span",{class:"dashicons-before dashicons-controls-play"},__("Play")),"\xa0|\xa0",wp.element.createElement("span",{class:"dashicons-before dashicons-controls-pause"},__("Pause")))))}},{attributes:Object.assign({},y),save:function(e){var t=e.attributes,l=(e.className,t.url),n=(t.title,t.align,t.width),a=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:{width:n,height:a}},wp.element.createElement("a-scene",{embedded:""},wp.element.createElement("a-assets",null,wp.element.createElement("video",{id:"algori-360-video",src:l,crossorigin:"anonymous",autoplay:"false",loop:"true"})),wp.element.createElement("a-videosphere",{src:"#algori-360-video"})),wp.element.createElement("div",{className:"wp-block-cgb-block-algori-360-video-controls"},wp.element.createElement("button",{id:"algori-360-video-play-pause-btn",onclick:"const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();"},wp.element.createElement("span",{class:"dashicons-before dashicons-controls-play"},__("Play")),"\xa0|\xa0",wp.element.createElement("span",{class:"dashicons-before dashicons-controls-pause"},__("Pause")))))}},{attributes:Object.assign({},y),save:function(e){var t=e.attributes,l=(e.className,t.url),n=(t.title,t.align,t.width),a=t.height;t.contentAlign,t.id;return wp.element.createElement("div",null,wp.element.createElement("a-scene",{className:"wp-block-cgb-block-algori-360-video-embedded-scene",style:{width:n,height:a},embedded:""},wp.element.createElement("a-assets",null,wp.element.createElement("video",{id:"algori-360-video",src:l,crossorigin:"anonymous",autoplay:"false",loop:"true"})),wp.element.createElement("a-videosphere",{src:"#algori-360-video"})),wp.element.createElement("div",{className:"wp-block-cgb-block-algori-360-video-controls",style:{width:n}},wp.element.createElement("button",{id:"algori-360-video-play-pause-btn",onclick:"const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();"},wp.element.createElement("span",{class:"dashicons-before dashicons-controls-play"},__("Play")),"\xa0|\xa0",wp.element.createElement("span",{class:"dashicons-before dashicons-controls-pause"},__("Pause")))))}}]})},function(e,t){},function(e,t){}]);