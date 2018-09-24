// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    //50¢, 25¢, 10¢, 5¢ and 1¢
    //H, Q, D, N and P - количество монет
    
    let H = 0 , Q = 0, D = 0, N = 0, P = 0;

    if(currency>10000)
    {
        let result = {error: "You are rich, my friend! We don't have so much coins for exchange"}
        return result;
    }

    while (currency - 50 >= 0)
    {
        H++;
        currency = currency - 50;
    }

    while (currency - 25 >= 0)
    {
        Q++;
        currency = currency - 25;
    }

    while (currency - 10 >= 0)
    {
        D++;
        currency = currency - 10;
    }

    while (currency - 5 >= 0)
    {
        N++;
        currency = currency - 5;
    }

    while (currency -1  >= 0)
    {
        P++;
        currency = currency - 1;
    }

    let result_H = {};
    let result_Q = {};
    let result_D = {};
    let result_N = {};
    let result_P = {};

    if(H!=0)
    {
        result_H = {"H":H}
    }
    if(Q!=0)
    {
        result_Q = {"Q":Q}
    }
    if(D!=0)
    {
        result_D = {"D":D}
    }
    if(N!=0)
    {
        result_N = {"N":N}
    }
    if(P!=0)
    {
        result_P = {"P":P}
    }

    let result = Object.assign(result_H, result_Q, result_D, result_N, result_P);
    return result;

}
