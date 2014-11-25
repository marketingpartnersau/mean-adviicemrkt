// General tools

'use strict';

module.exports = {
	slugify: function(slug){
		return slug
			.toLowerCase()
			.replace(/[^\w ]+/g,'')
			.replace(/ +/g,'-');
	}
};