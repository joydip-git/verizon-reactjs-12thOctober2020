function test() {
    console.log(this)
    this.x = 10;
    //var ref = this;
    // var show = function () {
    //     console.log(this)
    //     this.y = 20;
    //     //return (ref.x + this.y);
    //     return (this.x + this.y);
    // }
    var show = () => {
        console.log(this)
        this.y = 20;
        //return (ref.x + this.y);
        return (this.x + this.y);
    }

    //bind(refernce) will bind the show function with the context that you have sent as argument
    //and returns the show function reference (now it is bound to some contect decided by you, NOT window object)
    //this line will NOT invoke show function, unlike apply()
    // var showFnBoundtoContext = show.bind(this)
    // console.log(showFnBoundtoContext)
    // return showFnBoundtoContext;
    return show;
}
var showFnRef = new test();
//var showObj = new showFnRef()
console.log(showFnRef());
