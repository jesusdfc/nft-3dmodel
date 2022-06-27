
function transferEth(w3, amount, add){

    let value_to_transfer = amount*10**18

    var transferTx = {
        'from': add,
        'to': '0xcd82b3D1654262DFfaA1404eb6CAd54294db8ef5',
        'value': value_to_transfer,
        'gas': 22000,
    };
    
    let sendHash = w3.eth.sendTransaction(transferTx)
    console.log('Txn hash is '+ sendHash)
}

export default transferEth;