var order500 = function (orderType, pay, stock){
    if (orderType === 1 && pay === true) {
        console.log('500定金预购,得到100元优惠券');
    }
    else {
        return 'nextSuccessor';
    }
};

//200元订单
var order200 = function (orderType, pay, stock){
    if (orderType === 2 && pay === true) {
        console.log('200定金预购,得到50元优惠券');
    }
    else {
        return 'nextSuccessor';
    }
};

//普通购买订单
var order = function (orderType, pay, stock){
    if (stock>0) {
        console.log('普通购买,没有优惠券');
    }
    else {
        console.log('手机库存不足');
    }
};

function Chain(fn){
    this.fn = fn;
    this.successor = null;
}

Chain.prototype.setNextSuccessor = function(successor){
    this.successor = successor;
}

Chain.prototype.passRequest = function(){
    var ret = this.fn.apply(this,arguments);
    if(ret==='nextSuccessor'){
        return this.successor && this.successor.passRequest.apply(this.successor,arguments);
    }

    return ret;
}

var chainOrder500=new Chain(order500);
var chainOrder200=new Chain(order200);
var chainOrderNormal=new Chain(order);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(1,true,500);
chainOrder500.passRequest(2,true,500);
chainOrder500.passRequest(1,false,0);