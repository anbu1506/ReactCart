import Item from "./Item";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([{ id: 0, count: 0 }]);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="d-flex flex-row">
          <h3 className="display-3 text-primary">Items:</h3>
          <div className=" display-3 text-danger d-block">{items.length}</div>
          <span>
            <button
              className="btn btn-warning"
              onClick={() => {
                setItems([...items, { id: items.length, count: 0 }]);
              }}
            >
              +
            </button>
          </span>
        </div>
      </nav>

      <div className="d-flex flex-column mb-3">
        {items.map((item) => {
          const it = items.find((v) => {
            return v.id == item.id;
          });
          return (
            <Item
              item={item}
              onAdd={() => {
                const idx = items.indexOf(it);
                it["count"] += 1;
                const itemscp = [...items];
                itemscp[idx] = it;
                setItems(itemscp);
              }}
              onRemove={() => {
                if (it["count"] > 0) {
                  it["count"] -= 1;
                  setItems([...items]);
                }
              }}
              onDelete={() => {
                const itemscp = items.filter((v) => {
                  return v != it;
                });
                setItems(itemscp);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
