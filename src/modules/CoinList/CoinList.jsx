import {observer} from "mobx-react-lite"
import { useEffect, useState } from "react"
import { CoinListText } from "./components/CoilListText"
import { CoinListItem } from "./components/CoinListItem"
import { CoinListName } from "./components/CoinListName"
import {CoinListStore} from "./stores/CoinListStore"

export const CoinList = observer(() => {

    const [coinListStore] = useState(new CoinListStore())

    const {list, loadLists, loading} = coinListStore

    useEffect(() => {
        loadLists()
    }, [])

    return (
        
        <main>
            {window.scrollTo(0, 0)}
            <div className="container">
                <h1 className="coin_title">Курс криптовалют</h1>
                <CoinListName/>
                {loading && <div className="container coin_center"><div className="lds-circle"><div></div></div></div>}
                
                {!loading &&  list.map(({id, rank, name, volumeUsd24Hr, marketCapUsd, changePercent24Hr, priceUsd}) =>
                    <CoinListItem 
                        rank={rank}
                        id={id}
                        key={id} 
                        name={name} 
                        volumeUsd24Hr={volumeUsd24Hr} 
                        marketCapUsd={marketCapUsd} 
                        changePercent24Hr={changePercent24Hr} 
                        priceUsd={priceUsd}
                    /> 
                )}
                <CoinListText/>
            </div>
        </main>
    )
})
