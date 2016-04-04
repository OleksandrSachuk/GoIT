var calculator = {
    read: function () {
        this.f = +prompt("Please enter a number", "");
        this.s = +prompt("Please enter a number", "");
    },
    sum: function () {
        return this.f + this.s;
    },
    m„‰: function () {
        return this.f * this.s;
    }
}
calculator.read();