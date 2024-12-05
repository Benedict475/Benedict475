import React, { useEffect, useState } from "react";
import ItemService from "../services/Movieservice";
import { Item } from "../types/Movie";
import { Link } from "react-router-dom";

export default function Items() {

    const [items, setItems] = useState<Item[]>([]);

    const getItems = () => {

        ItemService.getAll()
            .then((response: any) => {
                setItems(response.data);
                console.log(items);

            })
            .catch((e: Error) => {
                console.log(e);
                alert(e.message);
            })
    }

    useEffect(() => {
        getItems();
    }, []);
    return (
        <div className="container is-fluid">
            <section className="section">
                <h1 className="title">Item Catalogue</h1>
            </section>
            <div className="columns is-multiline">
                {
                    items.map((item, index) => (
                        <div className="column">
                            <div className="card">
                                <div className="card=header">
                                    <h2 className="card-header-title"> {item.name}</h2>
                                </div>
                                <div className="card-content">
                                    <p className="content">{item.id}</p>
                                    <p className="content">${item.price}</p>
                                </div>
                                <div className="card-footer">
                                    <Link className="button is-rounded is-danger" to={`/items/${item.id}`}>View Item</Link>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
