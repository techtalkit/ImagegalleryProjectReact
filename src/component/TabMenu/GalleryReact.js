import React, { useState } from 'react'
import "../TabMenu/tab.css";
import Menu from './menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const allCatValues=[...new Set(Menu.map((curElem)=>{return curElem.category}))];
console.log(allCatValues);

const GalleryReact = () => {
    const [items, setitems] = useState(Menu);
    const filterItem=(categItem)=>{
       const updatedItems=Menu.filter((curElem)=>{
            return curElem.category===categItem;
       });
       setitems(updatedItems);
    }
    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favorite Dish</h1>
            <hr />
            <CatMenu filterItem={filterItem}/>
            {/* my main item section */}
            <MenuItems items={items}/>
        </>
    )
}

export default GalleryReact
