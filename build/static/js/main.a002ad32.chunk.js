(this.webpackJsonpbot=this.webpackJsonpbot||[]).push([[0],{152:function(t,a,e){"use strict";e.r(a);var r=e(0),o=e.n(r),n=e(7),i=e.n(n),s=(e(85),e(35)),u=e(36),p=e(29),g=e(44),P=e(43),c=e(72),m=e(46),N=(e(86),e(87),e(88),e(89),e(90),e(91),e(97),e(70)),d=e.n(N),l=e(71),h=e.n(l),S=e(64),E=e.n(S),b=e(180),v=function(t){Object(g.a)(e,t);var a=Object(P.a)(e);function e(t){var r;return Object(s.a)(this,e),(r=a.call(this,t)).state={text:r.props.text},r}return Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid h-100 d-flex justify-content-center",style:{backgroundColor:"#f1f3f4",marginTop:"5%",paddingBottom:"5%",paddingTop:"5%"}},o.a.createElement(b.a,{variant:"subtitle1",component:"subtitle1",align:"justify",paragraph:"true",display:"block"},this.state.text))}}]),e}(r.Component),f=e(45),k=e(69),I=e(186),A=e(184),C=e(185),y=function(t){Object(g.a)(e,t);var a=Object(P.a)(e);function e(t){var r;return Object(s.a)(this,e),(r=a.call(this,t)).formOptions=function(){for(var t=[],a=0;a<f.length;a++){var e={};e.value=f[a][1].content,e.label=f[a][0].content,t.push(e)}r.setState({options:t})},r.onUpload=function(t){var a=Math.round(100*t.loaded/t.total);r.setState({perc:a})},r.onClickReset=function(){r.setState(r.initialState)},r.onChangeHandlerSelect=function(t){r.setState({value_lang:t.target.value}),console.log(t.target.value)},r.onChangeHandler=function(t){r.setState({loaded:!1}),r.setState({selectedFile:t.target.files[0]})},r.isDisabled=function(){return"On"!==r.state.value_diarization},r.handleOnClick=function(){var t={onUploadProgress:r.onUpload};r.setState({isLoading:!0});var a=new FormData;a.append("file",r.state.selectedFile),a.append("lang",r.state.value_lang),a.append("diari",r.state.value_diarization),a.append("punt",r.state.puntuation),a.append("n_speakers",r.state.speakers),console.log("data sent...",r.state.value_lang),E.a.post("http://138.197.132.198:3000/speechtotext",a,t).then((function(t){console.log("result",t),r.setState({result_text:t.data,show:!0,isLoading:!1})}),(function(t){console.log(t)}))},r.state=r.initialState,r.handleOnClick=r.handleOnClick.bind(Object(p.a)(r)),r.onUpload=r.onUpload.bind(Object(p.a)(r)),r}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.formOptions()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container-fluid",style:{marginTop:"5%",paddingBottom:"5%",paddingTop:"5%"}},o.a.createElement("div",{className:"row"},o.a.createElement(I.a,{id:"demo-simple-select-label"},"Languages"),o.a.createElement(A.a,{labelId:"demo-simple-select-label",value:this.state.value_lang,onChange:this.onChangeHandlerSelect,className:"container-fluid"},this.state.options.map((function(t){return o.a.createElement(C.a,{value:t.value},t.label)})))),o.a.createElement("div",{className:"row align-items-center",style:{marginTop:"5%"}},o.a.createElement("div",{className:"col-sm"},o.a.createElement(A.a,{label:"Speaker diarization",value:this.state.value_diarization,onChange:function(a){return t.setState({value_diarization:a.target.value,disabled:!t.state.disabled})},className:"container-fluid",color:"primary"},o.a.createElement(C.a,{value:"Off"},"Off"),o.a.createElement(C.a,{value:"On"},"On"))),o.a.createElement("div",{className:"col-sm"},o.a.createElement(A.a,{disabled:this.state.disabled,label:"Speakers",value:this.state.speakers,onChange:function(a){return t.setState({speakers:a.target.value})},className:"container-fluid",color:"primary"},o.a.createElement(C.a,{value:"1"},"1 Speaker"),o.a.createElement(C.a,{value:"2"},"2 Speakers"),o.a.createElement(C.a,{value:"3"},"3 Speakers"),o.a.createElement(C.a,{value:"4"},"4 Speakers"),o.a.createElement(C.a,{value:"5"},"5 Speakers"))),o.a.createElement("div",{className:"col-sm h-100 d-flex justify-content-center"},o.a.createElement(c.a,{checked:this.state.puntuation,onChange:function(a){return t.setState({puntuation:!!a.currentTarget.checked})},label:"Puntuation"}))),o.a.createElement("div",{className:"row",style:{marginTop:"5%"}},o.a.createElement("div",{className:"col-sm"},o.a.createElement("div",{class:"upload-btn-wrapper"},o.a.createElement(m.a,{raised:!0,variant:"contained",color:"primary"},o.a.createElement(d.a,null)," Choose File "),o.a.createElement("input",{type:"file",name:"audio",onChange:this.onChangeHandler}))),o.a.createElement("div",{className:"col-sm"},o.a.createElement(m.a,{raised:!0,disabled:this.state.loaded||this.state.isLoading,onClick:this.handleOnClick},o.a.createElement(h.a,null)," To Text")))),this.state.isLoading&&""===this.state.result_text&&o.a.createElement("div",{className:"container-fluid h-100 d-flex justify-content-center",style:{backgroundColor:"#f1f3f4",marginTop:"5%",paddingBottom:"5%",paddingTop:"5%"}},o.a.createElement(k.Facebook,{color:"#6200ee",size:40})),this.state.show&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{text:this.state.result_text})," ",o.a.createElement(m.a,{onClick:this.onClickReset,icon:"refresh"})))}},{key:"initialState",get:function(){return{value_lang:"",value_diarization:"Off",puntuation:!1,selectedFile:null,loaded:!0,result_text:"",show:!1,isLoading:!1,options:[],speakers:"1",disabled:!0,perc:0}}}]),e}(r.Component);e(151);var T=function(){return o.a.createElement("div",{className:"App container",style:{backgroundColor:"#f1f3f4"}},o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},45:function(t){t.exports=JSON.parse('[[{"content":"Arabic (United Arab Emirates)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":0,"endPos":30},{"content":"ar-AE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":30,"endPos":35}],[{"content":"Arabic (Bahrain)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":107,"endPos":124},{"content":"ar-BH","isParticipating":true,"groupNum":2,"groupName":2,"startPos":124,"endPos":129}],[{"content":"Arabic (Algeria)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":188,"endPos":205},{"content":"ar-DZ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":205,"endPos":210}],[{"content":"Arabic (Egypt)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":269,"endPos":284},{"content":"ar-EG","isParticipating":true,"groupNum":2,"groupName":2,"startPos":284,"endPos":289}],[{"content":"Arabic (Israel)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":346,"endPos":362},{"content":"ar-IL","isParticipating":true,"groupNum":2,"groupName":2,"startPos":362,"endPos":367}],[{"content":"Arabic (Iraq)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":425,"endPos":439},{"content":"ar-IQ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":439,"endPos":444}],[{"content":"Arabic (Jordan)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":500,"endPos":516},{"content":"ar-JO","isParticipating":true,"groupNum":2,"groupName":2,"startPos":516,"endPos":521}],[{"content":"Arabic (Kuwait)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":579,"endPos":595},{"content":"ar-KW","isParticipating":true,"groupNum":2,"groupName":2,"startPos":595,"endPos":600}],[{"content":"Arabic (Lebanon)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":658,"endPos":675},{"content":"ar-LB","isParticipating":true,"groupNum":2,"groupName":2,"startPos":675,"endPos":680}],[{"content":"Arabic (Morocco)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":739,"endPos":756},{"content":"ar-MA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":756,"endPos":761}],[{"content":"Arabic (Oman)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":820,"endPos":834},{"content":"ar-OM","isParticipating":true,"groupNum":2,"groupName":2,"startPos":834,"endPos":839}],[{"content":"Arabic (State of Palestine)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":895,"endPos":923},{"content":"ar-PS","isParticipating":true,"groupNum":2,"groupName":2,"startPos":923,"endPos":928}],[{"content":"Arabic (Qatar)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":998,"endPos":1013},{"content":"ar-QA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1013,"endPos":1018}],[{"content":"Arabic (Saudi Arabia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1075,"endPos":1097},{"content":"ar-SA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1097,"endPos":1102}],[{"content":"Arabic (Tunisia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1166,"endPos":1183},{"content":"ar-TN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1183,"endPos":1188}],[{"content":"German (Germany)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1247,"endPos":1264},{"content":"de-DE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1264,"endPos":1269}],[{"content":"English (Australia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1332,"endPos":1352},{"content":"en-AU","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1352,"endPos":1357}],[{"content":"English (Canada)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1421,"endPos":1438},{"content":"en-CA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1438,"endPos":1443}],[{"content":"English (United Kingdom)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1500,"endPos":1525},{"content":"en-GB","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1525,"endPos":1530}],[{"content":"English (Ghana)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1706,"endPos":1722},{"content":"en-GH","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1722,"endPos":1727}],[{"content":"English (Ireland)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1785,"endPos":1803},{"content":"en-IE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1803,"endPos":1808}],[{"content":"English (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1866,"endPos":1882},{"content":"en-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1882,"endPos":1887}],[{"content":"English (Kenya)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":1949,"endPos":1965},{"content":"en-KE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":1965,"endPos":1970}],[{"content":"English (Nigeria)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2028,"endPos":2046},{"content":"en-NG","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2046,"endPos":2051}],[{"content":"English (New Zealand)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2111,"endPos":2133},{"content":"en-NZ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2133,"endPos":2138}],[{"content":"English (Philippines)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2200,"endPos":2222},{"content":"en-PH","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2222,"endPos":2227}],[{"content":"English (Singapore)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2291,"endPos":2311},{"content":"en-SG","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2311,"endPos":2316}],[{"content":"English (Tanzania)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2376,"endPos":2395},{"content":"en-TZ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2395,"endPos":2400}],[{"content":"English (United States)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2461,"endPos":2485},{"content":"en-US","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2485,"endPos":2490}],[{"content":"English (South Africa)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2714,"endPos":2737},{"content":"en-ZA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2737,"endPos":2742}],[{"content":"Spanish (Argentina)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2807,"endPos":2827},{"content":"es-AR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2827,"endPos":2832}],[{"content":"Spanish (Bolivia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2892,"endPos":2910},{"content":"es-BO","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2910,"endPos":2915}],[{"content":"Spanish (Chile)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":2973,"endPos":2989},{"content":"es-CL","isParticipating":true,"groupNum":2,"groupName":2,"startPos":2989,"endPos":2994}],[{"content":"Spanish (Colombia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3050,"endPos":3069},{"content":"es-CO","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3069,"endPos":3074}],[{"content":"Spanish (Costa Rica)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3133,"endPos":3154},{"content":"es-CR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3154,"endPos":3159}],[{"content":"Spanish (Dominican Republic)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3220,"endPos":3249},{"content":"es-DO","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3249,"endPos":3254}],[{"content":"Spanish (Ecuador)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3323,"endPos":3341},{"content":"es-EC","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3341,"endPos":3346}],[{"content":"Spanish (Spain)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3404,"endPos":3420},{"content":"es-ES","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3420,"endPos":3425}],[{"content":"Spanish (Guatemala)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3485,"endPos":3505},{"content":"es-GT","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3505,"endPos":3510}],[{"content":"Spanish (Honduras)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3570,"endPos":3589},{"content":"es-HN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3589,"endPos":3594}],[{"content":"Spanish (Mexico)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3653,"endPos":3670},{"content":"es-MX","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3670,"endPos":3675}],[{"content":"Spanish (Nicaragua)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3732,"endPos":3752},{"content":"es-NI","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3752,"endPos":3757}],[{"content":"Spanish (Panama)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3817,"endPos":3834},{"content":"es-PA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3834,"endPos":3839}],[{"content":"Spanish (Peru)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3896,"endPos":3911},{"content":"es-PE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3911,"endPos":3916}],[{"content":"Spanish (Puerto Rico)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":3971,"endPos":3993},{"content":"es-PR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":3993,"endPos":3998}],[{"content":"Spanish (Paraguay)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4060,"endPos":4079},{"content":"es-PY","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4079,"endPos":4084}],[{"content":"Spanish (El Salvador)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4143,"endPos":4165},{"content":"es-SV","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4165,"endPos":4170}],[{"content":"Spanish (United States)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4232,"endPos":4256},{"content":"es-US","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4256,"endPos":4261}],[{"content":"Spanish (Uruguay)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4430,"endPos":4448},{"content":"es-UY","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4448,"endPos":4453}],[{"content":"Spanish (Venezuela)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4511,"endPos":4531},{"content":"es-VE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4531,"endPos":4536}],[{"content":"French (Canada)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4596,"endPos":4612},{"content":"fr-CA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4612,"endPos":4617}],[{"content":"French (France)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4675,"endPos":4691},{"content":"fr-FR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4691,"endPos":4696}],[{"content":"Italian (Italy)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4758,"endPos":4774},{"content":"it-IT","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4774,"endPos":4779}],[{"content":"Japanese (Japan)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4841,"endPos":4858},{"content":"ja-JP","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4858,"endPos":4863}],[{"content":"Korean (South Korea)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":4926,"endPos":4947},{"content":"ko-KR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":4947,"endPos":4952}],[{"content":"Dutch (Netherlands)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5017,"endPos":5037},{"content":"nl-NL","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5037,"endPos":5042}],[{"content":"Dutch (Belgium)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5104,"endPos":5120},{"content":"nl-BE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5120,"endPos":5125}],[{"content":"Polish (Poland)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5181,"endPos":5197},{"content":"pl-PL","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5197,"endPos":5202}],[{"content":"Portuguese (Brazil)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5260,"endPos":5280},{"content":"pt-BR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5280,"endPos":5285}],[{"content":"Russian (Russia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5349,"endPos":5366},{"content":"ru-RU","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5366,"endPos":5371}],[{"content":"Thai (Thailand)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5519,"endPos":5535},{"content":"th-TH","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5535,"endPos":5540}],[{"content":"Turkish (Turkey)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5598,"endPos":5615},{"content":"tr-TR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5615,"endPos":5620}],[{"content":"Chinese, Mandarin (Simplified, China)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5681,"endPos":5729},{"content":"ns-CN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5729,"endPos":5734}],[{"content":"Chinese, Cantonese (Traditional, Hong Kong)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5830,"endPos":5880},{"content":"nt-HK","isParticipating":true,"groupNum":2,"groupName":2,"startPos":5880,"endPos":5885}],[{"content":"Chinese, Mandarin (Traditional, Taiwan)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":5977,"endPos":6030},{"content":"nt-TW","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6030,"endPos":6035}],[{"content":"Bulgarian (Bulgaria)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6134,"endPos":6155},{"content":"bg-BG","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6155,"endPos":6160}],[{"content":"Catalan (Spain)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6221,"endPos":6237},{"content":"ca-ES","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6237,"endPos":6242}],[{"content":"Czech (Czech Republic)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6298,"endPos":6321},{"content":"cs-CZ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6321,"endPos":6326}],[{"content":"Danish (Denmark)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6393,"endPos":6410},{"content":"da-DK","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6410,"endPos":6415}],[{"content":"Greek (Greece)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6476,"endPos":6491},{"content":"el-GR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6491,"endPos":6496}],[{"content":"Finnish (Finland)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6551,"endPos":6569},{"content":"fi-FI","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6569,"endPos":6574}],[{"content":"Hebrew (Israel)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6636,"endPos":6652},{"content":"he-IL","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6652,"endPos":6657}],[{"content":"Hindi (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6715,"endPos":6729},{"content":"hi-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6729,"endPos":6734}],[{"content":"Croatian (Croatia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6790,"endPos":6809},{"content":"hr-HR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6809,"endPos":6814}],[{"content":"Hungarian (Hungary)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6873,"endPos":6893},{"content":"hu-HU","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6893,"endPos":6898}],[{"content":"Indonesian (Indonesia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":6958,"endPos":6981},{"content":"id-ID","isParticipating":true,"groupNum":2,"groupName":2,"startPos":6981,"endPos":6986}],[{"content":"Lithuanian (Lithuania)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7053,"endPos":7076},{"content":"lt-LT","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7076,"endPos":7081}],[{"content":"Latvian (Latvia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7144,"endPos":7161},{"content":"lv-LV","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7161,"endPos":7166}],[{"content":"Norwegian Bokm\xe5l (Norway)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7223,"endPos":7249},{"content":"nb-NO","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7249,"endPos":7254}],[{"content":"Portuguese (Portugal)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7322,"endPos":7344},{"content":"pt-PT","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7344,"endPos":7349}],[{"content":"Romanian (Romania)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7413,"endPos":7432},{"content":"ro-RO","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7432,"endPos":7437}],[{"content":"Slovak (Slovakia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7496,"endPos":7514},{"content":"sk-SK","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7514,"endPos":7519}],[{"content":"Slovenian (Slovenia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7577,"endPos":7598},{"content":"sl-SI","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7598,"endPos":7603}],[{"content":"Serbian (Serbia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7664,"endPos":7681},{"content":"sr-RS","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7681,"endPos":7686}],[{"content":"Swedish (Sweden)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7745,"endPos":7762},{"content":"sv-SE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7762,"endPos":7767}],[{"content":"Ukrainian (Ukraine)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7828,"endPos":7848},{"content":"uk-UA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7848,"endPos":7853}],[{"content":"Vietnamese (Vietnam)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":7915,"endPos":7936},{"content":"vi-VN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":7936,"endPos":7941}],[{"content":"Afrikaans (South Africa)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8004,"endPos":8029},{"content":"af-ZA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8029,"endPos":8034}],[{"content":"Amharic (Ethiopia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8101,"endPos":8120},{"content":"am-ET","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8120,"endPos":8125}],[{"content":"Azerbaijani (Azerbaijan)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8184,"endPos":8209},{"content":"az-AZ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8209,"endPos":8214}],[{"content":"Bengali (Bangladesh)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8279,"endPos":8300},{"content":"bn-BD","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8300,"endPos":8305}],[{"content":"Bengali (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8368,"endPos":8384},{"content":"bn-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8384,"endPos":8389}],[{"content":"Estonian (Estonia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8445,"endPos":8464},{"content":"et-EE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8464,"endPos":8469}],[{"content":"Basque (Spain)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8528,"endPos":8543},{"content":"eu-ES","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8543,"endPos":8548}],[{"content":"Persian (Iran)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8603,"endPos":8618},{"content":"fa-IR","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8618,"endPos":8623}],[{"content":"Filipino (Philippines)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8680,"endPos":8704},{"content":"il-PH","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8704,"endPos":8709}],[{"content":"Galician (Spain)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8775,"endPos":8792},{"content":"gl-ES","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8792,"endPos":8797}],[{"content":"Gujarati (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8854,"endPos":8871},{"content":"gu-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8871,"endPos":8876}],[{"content":"Armenian (Armenia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":8935,"endPos":8954},{"content":"hy-AM","isParticipating":true,"groupNum":2,"groupName":2,"startPos":8954,"endPos":8959}],[{"content":"Icelandic (Iceland)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9018,"endPos":9038},{"content":"is-IS","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9038,"endPos":9043}],[{"content":"Javanese (Indonesia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9103,"endPos":9124},{"content":"jv-ID","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9124,"endPos":9129}],[{"content":"Georgian (Georgia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9190,"endPos":9209},{"content":"ka-GE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9209,"endPos":9214}],[{"content":"Khmer (Cambodia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9273,"endPos":9290},{"content":"km-KH","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9290,"endPos":9295}],[{"content":"Kannada (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9352,"endPos":9368},{"content":"kn-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9368,"endPos":9373}],[{"content":"Lao (Laos)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9431,"endPos":9442},{"content":"lo-LA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9442,"endPos":9447}],[{"content":"Macedonian (North Macedonia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9498,"endPos":9527},{"content":"mk-MK","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9527,"endPos":9532}],[{"content":"Malayalam (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9601,"endPos":9619},{"content":"ml-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9619,"endPos":9624}],[{"content":"Mongolian (Mongolia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9684,"endPos":9705},{"content":"mn-MN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9705,"endPos":9710}],[{"content":"Marathi (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9771,"endPos":9787},{"content":"mr-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9787,"endPos":9792}],[{"content":"Malay (Malaysia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9850,"endPos":9867},{"content":"ms-MY","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9867,"endPos":9872}],[{"content":"Burmese (Myanmar)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":9931,"endPos":9949},{"content":"my-MM","isParticipating":true,"groupNum":2,"groupName":2,"startPos":9949,"endPos":9954}],[{"content":"Nepali (Nepal)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10012,"endPos":10027},{"content":"ne-NP","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10027,"endPos":10032}],[{"content":"Punjabi (Gurmukhi, India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10087,"endPos":10118},{"content":"ru-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10118,"endPos":10123}],[{"content":"Sinhala (Sri Lanka)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10196,"endPos":10216},{"content":"si-LK","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10216,"endPos":10221}],[{"content":"Albanian (Albania)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10281,"endPos":10300},{"content":"sq-AL","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10300,"endPos":10305}],[{"content":"Sundanese (Indonesia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10364,"endPos":10386},{"content":"su-ID","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10386,"endPos":10391}],[{"content":"Swahili (Kenya)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10453,"endPos":10469},{"content":"sw-KE","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10469,"endPos":10474}],[{"content":"Swahili (Tanzania)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10530,"endPos":10549},{"content":"sw-TZ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10549,"endPos":10554}],[{"content":"Tamil (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10613,"endPos":10627},{"content":"ta-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10627,"endPos":10632}],[{"content":"Tamil (Sri Lanka)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10688,"endPos":10706},{"content":"ta-LK","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10706,"endPos":10711}],[{"content":"Tamil (Malaysia)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10769,"endPos":10786},{"content":"ta-MY","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10786,"endPos":10791}],[{"content":"Tamil (Singapore)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10848,"endPos":10866},{"content":"ta-SG","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10866,"endPos":10871}],[{"content":"Telugu (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":10929,"endPos":10944},{"content":"te-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":10944,"endPos":10949}],[{"content":"Urdu (India)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":11006,"endPos":11019},{"content":"ur-IN","isParticipating":true,"groupNum":2,"groupName":2,"startPos":11019,"endPos":11024}],[{"content":"Urdu (Pakistan)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":11077,"endPos":11093},{"content":"ur-PK","isParticipating":true,"groupNum":2,"groupName":2,"startPos":11093,"endPos":11098}],[{"content":"Uzbek (Uzbekistan)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":11156,"endPos":11175},{"content":"uz-UZ","isParticipating":true,"groupNum":2,"groupName":2,"startPos":11175,"endPos":11180}],[{"content":"Zulu (South Africa)","isParticipating":true,"groupNum":1,"groupName":1,"startPos":11277,"endPos":11297},{"content":"zu-ZA","isParticipating":true,"groupNum":2,"groupName":2,"startPos":11297,"endPos":11302}]]')},80:function(t,a,e){t.exports=e(152)},97:function(t,a,e){}},[[80,1,2]]]);
//# sourceMappingURL=main.a002ad32.chunk.js.map