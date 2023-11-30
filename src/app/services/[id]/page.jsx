import { fetchService } from "@/lib/data";

export async function generateMetadata({ params }) {
  const service = await fetchService(params.id);

  return {
    title: service.name,
    description: service.text,
  };
}

export default async function Page({ params }) {
  const service = await fetchService(params.id);

  return (
    <main>
      <h1>Страница услуги {service.name}</h1>
      <p>{service.text}</p>
    </main>
  );
}
