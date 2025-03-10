// filepath: c:\Users\qkawe\my-medusa-store-storefront\src\app\[countryCode]\(main)\page.tsx
import { Metadata } from "next";
import Hero from "@modules/home/components/hero";
import FeaturedProducts from "@modules/home/components/featured-products";
import FeaturedCars from "@modules/home/components/featured-cars";
import { listCollections } from "@lib/data/collections";
import { getRegion } from "@lib/data/regions";

export const metadata: Metadata = {
    title: "Car Shop",
    description: "Find the best cars at unbeatable prices!",
};

export default async function Home(props: {
    params: Promise<{ countryCode: string }>;
}) {
    const params = await props.params;
    const { countryCode } = params;
    const region = await getRegion(countryCode);
    const { collections } = await listCollections({
        fields: "id, handle, title",
    });

    if (!collections || !region) {
        return null;
    }

    return (
        <>
            <Hero />
            <FeaturedCars />
            <ul className="flex flex-col gap-x-6">
                <FeaturedProducts collections={collections} region={region} />
            </ul>
        </>
    );
}