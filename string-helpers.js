import { Template } from 'meteor/templating';
import { s } from 'meteor/underscorestring:underscore.string';

Template.helpers({
	
	slugify(string) {
		return s.slugify(string);
	},
	
	capitalize(string, lowercaseRest) {
		return s.capitalize(string, lowercaseRest);
	},
	
	concat(...rest) {
    return this.noHash(rest).join('');
	}
	
});