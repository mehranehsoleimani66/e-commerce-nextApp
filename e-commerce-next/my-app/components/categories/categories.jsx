export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((item) => {
        return (
          <li className="my-2 cursor-pointer " key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
