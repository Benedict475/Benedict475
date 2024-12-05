import React, { useEffect, useState } from "react";
import ItemService from "../services/Movieservice";
import { Item } from "../types/Movie";
import { Link, useParams } from "react-router-dom";

export default function ItemPage() {

    const [item, setItem] = useState<Item>();
    const {id} = useParams();

    const getItem = (id: string) => {

        ItemService.get(id)
            .then((response: any) => {
                setItem(response.data);
                console.log(item);

            })
            .catch((e: Error) => {
                console.log(e);
                alert(e.message);
            })
    }

    useEffect(() => {
        if(id){
            getItem(id);
        }
        
    }, []);
    return (
        <div className="container is-fluid">
            <section className="section">
                <h1 className="title">{item?.name}</h1>
                <p className="content">{item?.id}</p>
                <p className="content">${item?.price}</p>
            </section>
        </div>
    );
}
