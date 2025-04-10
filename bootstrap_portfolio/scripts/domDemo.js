console.log(document);

function testTheDom() {
    var nodes = document.getElementsByTagName("li");
    for (let node of nodes) {
        console.log(node.innerHTML);
        console.log(node.textContent);
    }

    var checkingNode = document.getElementById("checkingBalance");
    console.log(checkingNode.textContent)
    // checkingNode.textContent = "Changed :)";
    var balance = parseInt(checkingNode.textContent);
}

function depositChecking() {
    var checkingNode = document.getElementById("checkingBalance");
    var balance = parseInt(checkingNode.textContent);
    balance += 100;
    checkingNode.textContent = balance;
}

function depositSavings() {
    var savingsNode = document.getElementById("savingsBalance");
    var balance = parseInt(savingsNode.textContent);
    balance += 100;
    savingsNode.textContent = balance;

    if (balance != 0) {
        var bankHeadingNode = document.getElementById("bankHeader")
        bankHeadingNode.textContent = "Bank Accounts"
    }

}

function emptySavings() {
    var savingsNode = document.getElementById("savingsBalance");
    var balance = parseInt(savingsNode.textContent);;
    savingsNode.textContent = 0;

    var bankHeadingNode = document.getElementById("bankHeader")
    bankHeadingNode.textContent = "Alert: Savings Empty"
}