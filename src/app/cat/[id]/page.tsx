import Image from "next/image";

async function getData(id: string) {
  const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export default async function DetailCat({
  params,
}: {
  params: { id: string };
}) {
  let linkImage = "https://cdn2.thecatapi.com/images";
  try {
    const cat = await getData(params.id);

    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold">{cat.name}</h1>
        <Image
          src={cat.imageUrl}
          alt={cat.name}
          width={200}
          height={200}
        />
        <p>{cat.description}</p>
        <p>{cat.color}</p>
      </section>
    );
  } catch (error) {
    console.error('Error fetching cat data:', error);
    return (
      <div>
        <h1>Error fetching cat data</h1>
      </div>
    );
  }
}
