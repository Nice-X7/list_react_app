import { useState } from "react";
import { Input } from "./Input";

export const Kwest = () => {
    const [kwest, setKwest] = useState([
        {favorite: false, text: "Купить продукты"},
        {favorite: false, text: "Купить бананы"},
        {favorite: false, text: "Купить машину"},
        {favorite: false, text: "Купить дом"},
        {favorite: false, text: "Купить участок"},
    ])

    // ____________________Delete______________________
    const DeleteElement = (ind) => {
        const Delete = kwest.filter((element, index) => {
            if (ind === index) {
                return false
            } else {
                return true
            }
        })
        setKwest(Delete)
    }

    // ____________________Add-Favorite_______________
    const AddFavorite = (indexOfList) => {
        const Add = kwest.map((item, index) => {
            if(indexOfList === index) {
                return {
                    ...item,
                    favorite: !item.favorite
                }
            }else {
                return item
            }
        })
        setKwest([...Add])
    }

    // ____________________Content____________________
    const newKwest = kwest.map((text, index) => {
        return(
        <div className={text.favorite ? "section section2" : "section"} key={index}>
            <div className="star star2">
                <button onClick={() => AddFavorite(index)}>★</button>
            </div>

            <div className="text">
                {text.text}
            </div>

            <div className="delete">
                <button onClick={() => DeleteElement(index)}>❌</button>
            </div>
        </div>
    )
})
    return (
        <>
            <Input kwest={kwest} setKwest={setKwest} />
            {newKwest}
        </>
        )
}