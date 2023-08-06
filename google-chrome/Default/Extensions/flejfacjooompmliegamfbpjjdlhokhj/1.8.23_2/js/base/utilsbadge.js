var UtilsBadge = {
	"setColor": function(color){
		if(!color){
			color = "#FF9800";
		}
	  	chrome.browserAction.setBadgeBackgroundColor({"color":color});
	},
	"setBadge": function(text, color){
		chrome.browserAction.setBadgeText({"text": text +""});
	  	UtilsBadge.setColor(color);
	}
}