import catalogCpuStore from "../stores/CatalogCpuStore"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { CpuItems } from "./Components/CpuItems"
import { GoBack } from "../components/GoBack"
import { CpuText } from "./Components/CpuText"

export const Cpu = observer(() => {

    const {manufacturerCpu,
        manufacturerCpuIndex,
        setCpuManufactur,
        loadCpuManufactur} = catalogCpuStore
    
        useEffect(()=>{
            if(manufacturerCpu)
            loadCpuManufactur(manufacturerCpu[manufacturerCpuIndex])
        }, [manufacturerCpu, manufacturerCpuIndex])

    return(
        <main>
            <div className="container">

                <div className="category_wrapper">
                    <h1>Процессоры</h1>
                    <GoBack/>
                </div>

                <div className="manufacturer_wrapper">

                    <div className="manufacturer">
                        {manufacturerCpu && manufacturerCpu.map((manufacturCpu, index) => 
                            <button onClick={()=>{setCpuManufactur(index)}} key={index} className='manufactur_btn'>{manufacturCpu}</button>
                        )
                    }
                    </div>

                    <div className="cpu_wrapper">

                        <CpuItems/>

                    </div>

                </div>

                <CpuText/>

            </div>

        </main>
    )
} 
)