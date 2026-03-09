import React, {useState} from 'react';
import { menus } from '../data';
import { GrRadialSelected } from "react-icons/gr";

const Home = () => {
    const [ selected, setSelected ] = useState(menus[0]);

  return (
<>
   <div>
        <h1>PRACTICE DATA DISPLAY</h1>
        <section className='bg-blue-100'>
             {menus.map((menu) => {
                    return (
                        <div
                            key={menu.id}
                            className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
                            style={{ backgroundColor: menu.bgColor }}
                            onClick={() => {
                                setSelected(menu);
                            }}
                        >
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                                    {menu.icon} {menu.name}
                                </h1>
                                {selected.id === menu.id && (
                                    <GrRadialSelected className="text-white" size={20} />
                                )}
                            </div>
                            <p className="text-[#ababab] text-sm font-semibold">
                             
                            </p>
                        </div>
                    );
                })}

        </section>
        

    </div>
</>
 
    
  )
}

export default Home