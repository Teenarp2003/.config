"use strict";(self.webpackChunkaria_extension=self.webpackChunkaria_extension||[]).push([[676],{50791:(o,n,r)=>{r.d(n,{Z:()=>i});var a=r(8081),e=r.n(a),c=r(23645),t=r.n(c),p=r(61667),b=r.n(p),g=new URL(r(43102),r.b),l=new URL(r(49513),r.b),u=new URL(r(47918),r.b),d=new URL(r(86379),r.b),h=t()(e()),s=b()(g),x=b()(l),v=b()(u),k=b()(d);h.push([o.id,`body {\n  --opera-gx-accent-color: env(-opera-gx-accent-color);\n  --opera-chatbot-first-background-title: #fff;\n  --opera-onboarding-description: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 77%\n  );\n  --opera-onboarding-text: rgba(255, 255, 255, 0.8);\n  --opera-chatbot-button-animation: 0.2s ease-in-out;\n  --opera-onboarding-title: env(-opera-gx-accent-color);\n  --opera-menu-content-width: 291px;\n  --opera-button-border-radius: 4px;\n  --opera-chatbot-button-border-radius: 2px;\n  --opera-menu-option-border-radius: 2px;\n\n  --opera-chatbot-button-primary-active: env(-opera-gx-accent-color);\n  --opera-chatbot-button-primary-hovered: rgb(\n    calc(env(-opera-gx-accent-color-r) * (0.6)) calc(env(-opera-gx-accent-color-g) * (0.6))\n      calc(env(-opera-gx-accent-color-b) * (0.6))\n  );\n  --opera-chatbot-button-primary-disabled: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-chatbot-button-primary-color: #fff;\n  --opera-chatbot-button-primary-color-disabled: rgba(255, 255, 255, 0.5);\n\n  --opera-chatbot-button-secondary-active-border: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-chatbot-button-secondary-active-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 16%\n  );\n  --opera-chatbot-button-secondary-hovered: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 24%\n  );\n  --opera-chatbot-button-secondary-color: #fff;\n\n  --opera-chatbot-scrollbar-thumb: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-chatbot-scrollbar-track: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 8%\n  );\n  --opera-input-scrollbar-track: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 16%\n  );\n  --opera-menu-scrollbar-track: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 8%\n  );\n\n  --opera-chatbot-background: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 12%\n  );\n  --opera-chatbot-input-placeholder: rgba(255, 255, 255, 0.5);\n  --opera-chatbot-input: #fff;\n  --opera-chatbot-form-input-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 8%\n  );\n  --opera-chatbot-burger-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-chatbot-header: #fff;\n  --opera-chatbot-to-content: #fff;\n  --opera-chatbot-from-content: #fff;\n  --opera-chatbot-from: none;\n  --opera-chatbot-to: hsl(env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 20%);\n  --opera-chatbot-message-info-border: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 40%\n  );\n  --opera-chatbot-message-active-border: rgb(\n    calc(env(-opera-gx-accent-color-r) * (0.6)) calc(env(-opera-gx-accent-color-g) * (0.6))\n      calc(env(-opera-gx-accent-color-b) * (0.6))\n  );\n  --opera-chatbot-message-title: #fff;\n\n  --opera-menu-background: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 16%\n  );\n  --opera-menu-background-hover: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 12%\n  );\n  --opera-menu-wrapper-box-shadow: 12px 0px 31px 0px rgba(0, 0, 0, 0.25);\n  --opera-menu-checked-box: env(-opera-gx-accent-color);\n  --opera-menu-option: hsl(env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 24%);\n  --opera-menu-option-buttons-bg: transparent;\n  --opera-menu-input: #fff;\n  --opera-menu-edit-input-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-menu-edit-input-color: #fff;\n  --opera-menu-footer-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 24%\n  );\n  --opera-menu-settings-border: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-menu-footer-text: rgba(255, 255, 255, 0.8);\n\n  --opera-confirmation-popup-background: rgba(0, 0, 0, 0.67);\n  --opera-confirmation-popup-box-shadow: 0px 0px 40px 0px rgba(3, 6, 21, 0.53);\n  --opera-confirmation-popup-text: #fff;\n\n  --opera-tooltip-box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.16);\n  --opera-onboarding-background: url(${s});\n  --opera-chatbot-first-background: url(${x});\n\n  --opera-chatbot-link-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-chatbot-link-hover-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 24%\n  );\n  --opera-chatbot-table-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n\n  --menu-chat-opacity: 50%;\n\n  --opera-chatbot-codebox-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 4%\n  );\n  --opera-chatbot-codebox-header-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 12%\n  );\n  --opera-chatbot-codebox-header-text: #fff;\n  --opera-icon-color: #fff;\n  --opera-icon-copy: url(${v});\n  --opera-icon-done: url(${k});\n\n  --opera-chatbot-scroll-down-border-color: rgb(\n    calc(env(-opera-gx-accent-color-r)) calc(env(-opera-gx-accent-color-g))\n      calc(env(-opera-gx-accent-color-b))\n  );\n  --opera-chatbot-scroll-down-border-width: 6px;\n  --opera-chatbot-blockquote-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 32%\n  );\n  --opera-chatbot-logo-bg: hsl(\n    env(-opera-gx-background-color-h) env(-opera-gx-background-color-s) 0%\n  );\n}\n`,""]);const i=h},39676:(o,n,r)=>{r.r(n),r.d(n,{default:()=>k});var a=r(93379),e=r.n(a),c=r(7795),t=r.n(c),p=r(90569),b=r.n(p),g=r(68575),l=r.n(g),u=r(19216),d=r.n(u),h=r(44589),s=r.n(h),x=r(50791),v={attributes:{source:"aria-extension"}};v.styleTagTransform=s(),v.setAttributes=l(),v.insert=b().bind(null,"head"),v.domAPI=t(),v.insertStyleElement=d(),e()(x.Z,v);const k=x.Z&&x.Z.locals?x.Z.locals:void 0},43102:(o,n,r)=>{o.exports=r.p+"ae414ff37144d1181768.png"},49513:(o,n,r)=>{o.exports=r.p+"a4a5f5a3d0037415378d.svg"}}]);