import * as marketrepo from "../repository/marketRepository";

export const fetchallmarkets = async ()=>{return await marketrepo.getallmarkets();};

export const fetchmarketbyid = async (id: number) => 
    {const market = await marketrepo.getmarketbyid(id);
    if (!market) throw new Error("market not found");
    return marketrepo;
};

export function getallMarket() {
  throw new Error('Function not implemented.');
}
