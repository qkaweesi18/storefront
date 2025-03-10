// filepath: c:\Users\qkawe\my-medusa-store-storefront\src\modules\home\components\hero\index.tsx
import { Button, Heading } from "@medusajs/ui";

const Hero = () => {
    return (
        <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
            <div className="absolute top-0 left-0 right-0 z-10 flex flex-col justify-start items-center text-center small:p-32 gap-6 mt-8">
                <span>
                    <Heading
                        level="h1"
                        className="text-5xl leading-10 text-ui-fg-base font-bold"
                    >
                        Welcome to Our Car Shop
                    </Heading>
                    <Heading
                        level="h2"
                        className="text-2xl leading-10 text-ui-fg-subtle font-normal"
                    >
                        Find the best vehicles and equipment for cars at unbeatable prices!
                    </Heading>
                </span>
                <a href="/collections" className="mt-4">
                    <Button variant="primary">
                        View Our Collection
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Hero;

