Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

Object.defineProperty(String.prototype, 'isNumber', {
    value: function() {        
        let regexp  = new RegExp(/^((\+|-)?([0-9]+)(\.[0-9]+)?)$/);
        return regexp.test(this);
    },
    enumerable: false
});
