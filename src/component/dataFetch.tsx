// In a separate file or inside a component
async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error(error.message);
  return data;
}

// Inside your component
import { useQuery } from "react-query";
import supabase from "../supabaseClient";

function ProductsComponent() {
  const { data, isLoading, error } = useQuery("products", fetchProducts);

  if (isLoading) return "Loading...";
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
