import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
  return response.json();
}

export default async function CatPage() {
  let linkImage = "https://cdn2.thecatapi.com/images";
  const cats = await getData();

  return (
    <section className="flex flex-row flex-wrap gap-10 mt-3 justify-center">
      {cats.map((item: any) => (
        <div className="w-52 border-4 border-gray-900" key={item.id}>
          <Link href={`/cat/${item.id}`}>
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={800}
              height={100}
              className="h-40 object-cover"
            />
            <h2 className="text-left text-2xl font-bold mt-5">{item.name}</h2>
            <div className="flex flex-row gap-5 justify-center">
              <p className="bg-yellow-400 mt-5 p-1 px-5 ">{item.types[0]}</p>
              {item.types[1] ? (
            <p className="bg-green-600 mt-5 p-1 px-5">{item.types[1]}</p>
              ) : null}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}