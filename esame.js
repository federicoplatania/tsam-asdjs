function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

function summall(myarray){
	var s = 0;
	for (var i = 0; i < myarray.length; i++){
		s = s + myarray[i];
	}
	return s;
}

// esercizio 1
function searchNum(myarray,wanted){
    if (myarray.length == 0) {
        return 0;
    } else if (myarray[0] == wanted) {
        return 1 + searchNum(myarray.slice(1),wanted);
    } else {
        return 0 + searchNum(myarray.slice(1),wanted);
    }
}

//esercizio 2
function sumquadPariPos(myarray){
    if(myarray.length == 0){
        return 0;
    }else{
        var tarray = myarray
        .filter(function fil(myarray){if (myarray%2 == 0 && myarray > 0)return myarray;})
        .map(tarray => tarray * tarray);
        } 
        return Math.sqrt(tarray.reduce((acc,tarray) => acc + tarray,0));  
}

//esercizio 3

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

function Stack(){
    this.myarray = [];
}

Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}

function readExpression(expression)  {
    expression = expression.split(" "); 
    var num = new Stack();
    var op = new Stack();
    while(expression.length>0) {        
        tmp = expression[0];
        switch(tmp) {
            case '+':
                    op.push(tmp);
                    break;
            case '-':
                    op.push(tmp);
                    break;
            case '*':
                    op.push(tmp);
                    break;
            case '/':
                    op.push(tmp);
                    break;
            case ')':
                    num2 = num.pop();
                    num1 = num.pop();
                    oper = op.pop();
                    switch(oper) {
                        case '+':
                                num1 = parseInt(num1) + parseInt(num2);
                                num.push(num1);
                                break;
                        case '*' :
                                num1 = parseInt(num1) * parseInt(num2);
                                num.push(num1);
                                break;
                        case '-' :
                                num1 = parseInt(num1) - parseInt(num2);
                                num.push(num1);
                                break;
                        case '/' :
                                num1 = parseInt(num1) / parseInt(num2);
                                num.push(num1);
                                break;
                    }
                    break;
            case '(' :
                    break;
            default:
                num.push(tmp);
                break;
        }
        expression = expression.slice(1);
    }
    return num.pop();
}
//esercizio 4
function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }
}


function searchMaxNode(node) {
    var max = node.item;
    if(node.left != null) {
        max = Math.max(max, searchMaxNode(node.left));
    }
    if(node.right != null) {
        max = Math.max(max, searchMaxNode(node.right));
    }
    return max;
}

function initialTree(){
    var a = initialArray();
    var tree = new BST();
    for(var i = 0; i < a.length; i++) {
        tree.add(a[i]);
    }
    return searchMaxNode(tree.root);
}