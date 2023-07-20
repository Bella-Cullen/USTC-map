var TsiteSearch = function() {
	var _this = this;
	_this.checkSearch = function(formid,keywordid) {
		
		var  keyword= document.getElementById(keywordid);
		if (!keyword) {
			return false;
		}
		var _tsites_search_current_language_ = document.getElementById("_tsites_search_current_language_");
		var _language = 'zh_CN';
		if(_tsites_search_current_language_)
		{
			_language = _tsites_search_current_language_.value;
		}
		if(""==_language)
		{
            _language=current_language;
		}
		var keywordValue = keyword.value;
		/**
		var fieldname = keyword.name;
		var fieldobjs =  jQuery("#"+formid +" > input[name='"+fieldname+"']");
		if(fieldobjs.length==1)
		{
			keywordValue = fieldobjs[0].value;
		}else
		{
			for(var i=0;i<fieldobjs.length;i++)
		    {	
			  var inputobj = fieldobjs[i];
              if(inputobj.value!=null&&inputobj.value!=""&&inputobj.value!=undefined)
              {
              	 keywordValue = inputobj.value;
              	 break;
              }
            }
		}
		*/
		if (keywordValue == null || keywordValue == undefined || keywordValue.length <= 0) {
			if(_language=="zh_CN")
			{
				alert("请输入检索内容");	
			}else
			{
				alert("Please enter the contents of the search");
			}
			return false;
		}
		/*
		for(var i=0;i<fieldobjs.length;i++)
        {   
              var inputobj = fieldobjs[i];
		      inputobj.value = keywordValue;
		}
		*/
		var keywords = jQuery("input[name='tsites_search_content']");
		if(keywords)
		{
			keywords.val((new Base64()).encode(keywordValue))
		}
		//console.log(keywords.val())
		//for(var i=0;i<keywords.length;i++)
		//{
              //keywords[i].value = (new Base64()).encode(keywordValue);
        //}
		return true;
	}
}