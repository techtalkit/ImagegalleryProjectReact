import React, { useState } from 'react'
import "../TabMenu/tab.css";
import Menu from './menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const allCatValues=[...new Set(Menu.map((curElem)=>curElem.category)),"all"];
console.log(allCatValues);

const GalleryReact = () => {
    const [items, setitems] = useState(Menu);
    const[catItems,setCatItems]=useState(allCatValues);
    const filterItem=(categItem)=>{
    if(categItem=="all"){
       setitems(Menu);
       return;
    }
       const updatedItems=Menu.filter((curElem)=>{
            return curElem.category===categItem;
       });
       setitems(updatedItems);
    }
    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favorite Dish</h1>
            <hr />
            <CatMenu filterItem={filterItem} catItems={catItems}/>
            {/* my main item section */}
            <MenuItems items={items}/>
        </>
    )
}

export default GalleryReact
