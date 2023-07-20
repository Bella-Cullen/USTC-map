function TsitesClickUtil() {
	var _this = this;
	/**
	 * 更新一个内容的点击次数
	 * 
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            apptype
	 * @param {}
	 *            lang
	 * @param {}
	 *            contentid
	 */
	_this.updateClick = function(uid, apptype, lang, contentuuid,pdtype,treeuuid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.updateClick(uid, apptype, lang, contentuuid,pdtype,treeuuid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"uid" : uid,
									"apptype" : apptype,
									"lang" : lang,
									"contentuuid" : contentuuid,
									"treeuuid" : treeuuid,
									"pdtype":pdtype,
									"ac" : "updateclicks"
								}, function() {
								}, "json");
					});
		}
	}
/**
 * 先更新然后获取点击次数
 * @param {} domnode
 * @param {} teacherid
 * @param {} apptype
 * @param {} lang
 * @param {} contentid
 */	
 _this.updateAndGetClick = function(domid,pdtype, uid, apptype, lang, contentuuid,treeuuid) {
	 var clickdomnode = document.getElementById(domid);
	 var curdayclickdomnode = document.getElementById(domid+"_jsdjl");
        if (!window.jQuery) {
            _this._checkjquery();
            setTimeout(function() {
                        _this.updateClick(uid, apptype, lang, contentuuid,pdtype,treeuuid);
                    }, 1000);
        } else {
            jQuery(document).ready(function() {
                        jQuery.post("/system/resource/tsites/click.jsp", {
                                    "uid" : uid,
                                    "apptype" : apptype,
                                    "lang" : lang,
                                    "pdtype":pdtype,
                                    "contentuuid" : contentuuid,
                                    "treeuuid" : treeuuid,
                                    "ac" : "updateAndGetClick"
                                },function(data) {
                                    if (clickdomnode && data) {
                                    	var dn  = jQuery(clickdomnode);
                                    	if(dn)
                                    	{
                                            dn.html(data.click);
                                    	}
                                    	var cc  = jQuery(curdayclickdomnode);
                                    	if(cc)
                                    	{
                                            cc.html(data.dayclick);
                                    	}
                                    }
                                }, "json");
                    });
        }
    }
    
	/**
	 * 查询一个内容点击次数
	 * 
	 * @param {}
	 *            domnode
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            apptype
	 * @param {}
	 *            contentid
	 */
	_this.getClick = function(domnode, uid, apptype, contentuuid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getClick(domnode, uid, apptype, contentuuid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"uid" : uid,
									"apptype" : apptype,
									"contentuuid" : contentuuid,
									"ac" : "getClick"
								}, function(data) {
									if (domnode && data) {
										jQuery(domnode).html(data.click);
									}
								}, "json");
					});
		}
	}
	
	/**
	 * 更新查询一个栏目的点击次数
	 */
	_this.updateAndGetTreeClick = function(pdtype,totaluid,curdayuid, account,  treeuuid,lang) {
		var totaluiddomnode = document.getElementById(totaluid);
		var curdayuidclickdomnode = document.getElementById(curdayuid);
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getClick(domnode, teacherid, apptype, contentid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"account" : account,
									"treeuuid" : treeuuid,
									"lang":lang,
									"pdtype":pdtype,
									"ac" : "updateAndGetTreeClick"
								}, function(data) {
									if (data) {
										var dn  = jQuery(totaluiddomnode);
                                    	if(dn)
                                    	{
                                            dn.html(data.click);
                                    	}
                                    	var cc  = jQuery(curdayuidclickdomnode);
                                    	if(cc)
                                    	{
                                            cc.html(data.dayclick);
                                    	}
									}
								}, "json");
					});
		}
	}
	
	/**
	 * 批量获取内容点击次数,使用在列表组件上
	 * 
	 * @param {}
	 *            domcss
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            apptype
	 * @param {}
	 *            ids
	 */
	_this.getClicks = function(viewid, uid, apptype, uuids) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getClicks(viewid, uid, apptype, uuids);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
				jQuery.post("/system/resource/tsites/click.jsp", {
							"uid" : uid,
							"apptype" : apptype,
							"uuids" : uuids,
							"ac" : "getClicks"
						}, function(data) {
							if (data) {
								for (var i = 0; i < data.length; i++) {
									var uuid = data[i].uuid;
									var clickdom =jQuery("#" + apptype + "_" + viewid + "_"+ uuid);
									if(clickdom)
									{
										clickdom.html(data[i].click);	
									}
									var curclickdom = jQuery("#" + apptype + "_" + viewid + "_"+ uuid+"_jsdjl");
									if(curclickdom)
									{
										curclickdom.html(data[i].dayclick);
									}
								}
							}
						}, "json");
			});
		}
	}
    /**
	 * 综合门户上批量获取内容的点击次数  getComprehensivePortalClicks
     * @param viewid
     * @param uid
     * @param apptype
     * @param uuids
     */
    _this.getCPClicks = function(viewid, apptype, uidanduuid) {
        if (!window.jQuery) {
            _this._checkjquery();
            setTimeout(function() {
                _this.getCPClicks(viewid,  apptype, uidanduuid);
            }, 1000);
        } else {
            jQuery(document).ready(function() {
                jQuery.post("/system/resource/tsites/click.jsp", {
                    "apptype" : apptype,
                    "uidanduuid" : uidanduuid,
                    "ac" : "getComprehensivePortalClicks"
                }, function(data) {
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var uuid = data[i].uuid;
                            var clickdom =jQuery("#" + apptype + "_" + viewid + "_"+ uuid);
                            if(clickdom)
                            {
                                clickdom.html(data[i].click);
                            }
                            var curclickdom = jQuery("#" + apptype + "_" + viewid + "_"+ uuid+"_jsdjl");
                            if(curclickdom)
                            {
                                curclickdom.html(data[i].dayclick);
                            }
                        }
                    }
                }, "json");
            });
        }
    }
	/**
	 * 获取整个主页门户的点击次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum 初始值
	 * @param {}
	 *            len 显示长度
	 */
	_this.getSiteClicks = function(nodeobj, basenum, len) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getSiteClicks(nodeobj, basenum, len);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"ac" : "getSiteClicks"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}
		/**
	 * 获取整个主页门户的点击次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum 初始值
	 * @param {}
	 *            len 显示长度
	 */
	_this.getSiteClicksByType = function(nodeobj, basenum, len,type,average_click_form_days) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getSiteClicksByType(nodeobj, basenum, len,type,average_click_form_days);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"type":type,
									"average_click_form_days":average_click_form_days,
									"ac" : "getSiteClicksByType"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}
	/**
	 * 获取一个教师主页访问次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum
	 * @param {}
	 *            len
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            homepageid
	 */
	_this.getHomepageClick = function(nodeobj, basenum, len, teacherid,homepageid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getHomepageClick(nodeobj, basenum, len, teacherid,homepageid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"teacherid" : teacherid,
									"homepageid" : homepageid,
									"ac" : "getHomepageClick"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}

	/**
	 * 获取一个教师主页访问次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum
	 * @param {}
	 *            len
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            homepageid
	 */
	_this.getHomepageClickByType = function(nodeobj, basenum, len,type, uid,homepageuuid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getHomepageClickByType(nodeobj, basenum, len,type, uid,homepageuuid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"type":type,
									"uid" : uid,
									"homepageuuid" : homepageuuid,
									"ac" : "getHomepageClickByType"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}
	
	/** 判断jquery是否引入* */
	_this._checkjquery = function() {
		if (!window.jQuery) {
			_this._loadJquery();
		}
	}
	/** 加载jquey* */
	_this._loadJquery = function() {
		if(_tsites_com_view_mode_type_&&(_tsites_com_view_mode_type_==8||_tsites_com_view_mode_type_==10))
		{
    		var head = document.getElementsByTagName('head');
    		var jqueryScript = document.createElement('script');
    		jqueryScript.src = "/system/resource/js/jquery/jquery-latest.min.js";
    		jqueryScript.type = 'text/javascript';
    		head[0].appendChild(jqueryScript);
		}
	}

}