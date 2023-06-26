import axios from 'axios';

interface IforStonks {
    addListenerStocks: () => Promise<Object | null>,
    getStocksByTicket: () => Promise<Object | null>,
    deleteListenerStocks: (id: number | string) => Promise<Object | null>,
    getListStocks: () => Promise<Object>,

}

export const stocksApi: IforStonks = {
    addListenerStocks: async () => {
        const {data} = await axios.post('https://finnhub.io/api/v1/webhook/add?token=cdejdgaad3i8vpup3cpgcdejdgaad3i8vpup3cq0', {
            'event': 'earnings',
            'symbol': ' AAPL'
        })
        console.log("addListenerStocks data:", data);

        return data || null
    },
    getStocksByTicket: async () => {
        const {data} = await axios.post('https://iss.moex.com/iss/securities/IMOEX.xml')
        console.log("getStocksByTicket data:", data);

        return data || null
    },
    deleteListenerStocks: async (webhook_id) => {
        const {data} = await axios.post('https://finnhub.io/api/v1/webhook/delete?token=cdejdgaad3i8vpup3cpgcdejdgaad3i8vpup3cq0', {'id': webhook_id})
        console.log("deleteListenerStocks data:", data);
        return data || null
    },
    getListStocks: async () => {
        const {data} = await axios.get('https://iss.moex.com/iss/securities')
        console.log("getListStocks: ", data);
        return data || null
    }
};






