import Link from "next/link";
import { fetchServices } from "@/lib/data";

export default async function Page() {
  const dataServices = await fetchServices();

  return (
    <main>
      <h1>Страница услуг</h1>
      <div>
        {dataServices.map((service) => (
          <div key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.text}</p>
            <Link href={`/services/${service.nameLatin}`}>Подробнее</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
