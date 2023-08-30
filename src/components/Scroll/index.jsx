import { useRef } from "react";


const cats = [
  { src: "https://placekitten.com/g/200/200", id: 0, name: "Tom" },
  { src: "https://placekitten.com/g/300/200", id: 1, name: "Maru" },
  { src: "https://placekitten.com/g/250/200", id: 2, name: "Jelly" }
]

export default function CatFriends() {
  const catsRef = useRef([]);

  function handleScrollCat(id) {
    const node = catsRef.current.find(node => Number(node.id) === id);
    node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
    });
  }

  return (
    <>
      <nav>
        {
          cats.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => handleScrollCat(cat.id)}
            >
              {cat.name}
            </button>
          ))
        }
      </nav>
      <div>
        <ul>
          {
            cats.map(cat => (
              <li
                ref={(node) => {
                    if (!catsRef.current.find(item => item.id == cat.id)) {
                      catsRef.current.push(node)
                    }
                  }
                }
                key={cat.id} id={cat.id}
              >
                <img src={cat.src} />
              </li>
              ))
          }
        </ul>
      </div>
    </>
  );
}
