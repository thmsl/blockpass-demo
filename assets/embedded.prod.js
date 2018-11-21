!function(){window.bpWidget.VERSION="1.0.3";const e='<style>.bp-widget-container{font-family: "Helvetica Neue", "Arial";}#blockpass-connect{width: auto; background-color: #000; font-size: 16px; color: white; padding: 10px; border-radius: 10px; display: inline-block; line-height: 32px; cursor: pointer;}#blockpass-widget-popup{font-size: 12px; color:#666;}#blockpass-widget-popup a{color: #333;}#blockpass-widget-popup p{margin: inherit; line-height: 16px;}.container-form{position: relative; margin: auto; background-color: white; font-family: "Helvetica Neue", "Arial";}.container-form-inner{position: relative; background-color: white; z-index: 10; margin: auto; padding: 15px 30px;}.container-qrcode{position: relative; z-index: 10; background-color: white; padding: 15px;}.qrcode{background-color: black; text-align: center; width: 290px; height: 290px; margin: auto;}#welcome-container{background-color: white; position: relative; z-index: 10; padding: 15px;}/* BP logo animation */.bpLogoPlaceholder{width: 20px; height:20px; left:-10px; position: relative; margin: 100px auto; overflow: visible;}.bpSquare{width:100%; height:100%; position: absolute; background-color:#222; overflow: visible; opacity: .20;}.bpSquare0{opacity: 1; animation:spin 2s infinite; transform-origin: 50%; animation-fill-mode:backwards !important;}.bpSquare1{left:110%; animation: flipXRight1 2s infinite; transform-origin: left;}.bpSquare2{left:220%; animation: flipXRight2 2s infinite; transform-origin: left;}.bpSquare3{left:110%; top:110%; animation: flipYBottom 2s infinite; transform-origin:top;}.bpSquare4{left:-110%; animation: flipXLeft 2s infinite; transform-origin: right;}.bpSquare5{left:-110%; top:-110%; animation: flipYTop 2s infinite; transform-origin: bottom;}@keyframes flipYBottom{0%, 25%, 75%, 100%{transform: perspective(400px) rotate3d(1, 0, 0, -90deg);}45%, 55%{transform: perspective(400px); opacity: 1;}}@keyframes flipYTop{0%, 30%, 75%, 100%{transform: perspective(400px) rotate3d(1, 0, 0, 90deg);}50%, 65%{transform: perspective(400px); opacity: 1;}}@keyframes flipXLeft{0%, 100%{transform: perspective(400px) rotate3d(0, 1, 0, -90deg);}25%, 85%{transform: perspective(400px); opacity: 1;}}@keyframes flipXRight1{0%, 100%{transform: perspective(400px) rotate3d(0, 1, 0, 90deg);}20%, 70%{transform: perspective(400px); opacity: 1;}}@keyframes flipXRight2{0%, 10%, 70%, 100%{transform: perspective(400px) rotate3d(0, 1, 0, 90deg);}30%, 50%{transform: perspective(400px); opacity: 1;}}@keyframes spin{0%, 94%{transform: rotateX(0deg);}100%{transform: rotate(90deg);}}</style><div class="bp-widget-container"> <div style="text-align:center"> <div id="blockpass-connect" class="blockpass-widget-popup_open" onclick="onBpConnectClick()"> <img id="image_logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gESBQ4GIQPs3QAAAHFJREFUWMPtl0EKwCAMBE3tf5L/v8IPyfbSHGuhIQTpzklQcMBdVAGAVsjRiqEABU4fmNly4RgjV2C1yZscM0CBrQXEL6PMpC+rjRtVxROZc8wABVjDhiBfa+ikHcGcszYDvXe2YLNHaYRIhYV/w98LXCezDb4fzwD+AAAAAElFTkSuQmCC" style="float:left;filter: invert(100%);margin-right:4px;"> <span id="connect_status"style="font-weight:bold">Connect</span> with <span id="service_name" style="font-weight:bold">Blockpass</span> </div></div></div><div id="blockpass-widget-popup"> <div style="text-align:center;" id="container-qrcode"> <div class="container-form"> <div class="container-qrcode"> <div class="qrcode" id="qrcodeform"> <canvas id="qrcode" width="290" height="290"></canvas> </div><p>Scan this qr-code <br/> with your <a href="https://www.blockpass.org" title="Go to blockpass.org website">Blockpass</a> mobile application to connect</p></div></div></div><div style="text-align:center; display:none;background-color:transparent" id="welcome-container"> <div class="container-form"> <div class="container-form-inner"> <p id="welcome">Successfully connected</p></p></div></div></div><div style="text-align:center;display:none" id="loadingComponents"> <div class="container-form"> <div style="width: 320px;height:320px;padding-top: 10px"> <div class="bpLogoPlaceholder"> <div class="bpSquare bpSquare0"></div><div class="bpSquare bpSquare1"></div><div class="bpSquare bpSquare2"></div><div class="bpSquare bpSquare3"></div><div class="bpSquare bpSquare4"></div><div class="bpSquare bpSquare5"></div></div><p class="display-5 ">Follow the instructions on your phone <br/> to continue your registration</p></div></div></div></div>',i=[];function t(e){return new Promise((i,t)=>{var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,i())}:o.onload=function(){i()},o.src=e,document.getElementsByTagName("head")[0].appendChild(o)})}let o,n,a;function r(){!function(i){i.innerHTML=e}(n),a=o.getApplink(),$("#service_name").text(window.bpWidget.serviceName),o.generateSSOData(),$("#blockpass-widget-popup").popup()}function s(e){window.onBpConnectClick=function(i){!function(e){const i=o.clientId,t=(o.env,window.bpWidget.refId);let n=JSON.stringify({clientId:i,session:e.session,refId:t});const a={render:"canvas",minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:290,fill:"#000000",background:"#ffffff",text:n||"Hello something went wrong when trying to generate session, please reload the webpage",radius:.5,quiet:1,mode:4,mSize:.1,mPosX:.5,mPosY:.5,label:"no label",fontname:"sans",fontcolor:"#000",image:document.getElementById("image_logo")};jQuery("#qrcode").qrcode(a)}(e)}}function p(){$("#container-qrcode").fadeOut(200,function(){$("#loadingComponents").fadeIn(100,function(){})})}function c(e){window.bpWidget.onSSOComplete&&window.bpWidget.onSSOComplete(e,r),$("#container-qrcode").fadeOut(),$("#loadingComponents").fadeOut(500,function(){$("#welcome-container").fadeIn(1e3)}),$("#connect_status").text("Connected"),setTimeout(function(){$("#blockpass-widget-popup").popup("hide")},2e3)}window.jQuery||i.push(t("https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")),Promise.all(i).then(()=>Promise.all([t("https://cdn.blockpass.org/sdk/v2.0.2/blockpass.min.js"),t("https://cdn.blockpass.org/widget/scripts/websdk/jquery.popupoverlay.min.js"),t("https://cdn.blockpass.org/widget/scripts/websdk/jquery-qrcode-0.14.0.min.js")])).then(()=>{o=new window.Blockpass.WebSDK({clientId:window.bpWidget.clientId,env:window.bpWidget.env}),n=document.getElementById("blockpass-connect-button"),o.on("code-refresh",s),o.on("sso-processing",p),o.on("sso-complete",c),o.on("code-expired",e=>{r()}),r()}).catch(e=>void 0)}();