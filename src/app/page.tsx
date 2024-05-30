import Counter from "@/components/counter";
import FormLogin from "@/components/form-login";
import FormLogin2 from "@/components/form-login2";
import Hero from "@/components/hero";
import CatPage from "@/components/item-card";
import ItemCard from "@/components/item-card";
import Navbar from "@/components/navbar";
import Todo from "@/components/todo";
import { redirect } from "next/navigation";


export default function Home() {
  let linkImage = "https://cdn2.thecatapi.com/images";

  // redirect("/login")

  return (
    <div className="text-center">
      <h1 className="text-4xl my-10">Data Dibawah ini merupakan data 20 Pokemon </h1>
      
      <CatPage></CatPage>
    </div>
  );
}
