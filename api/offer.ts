export type OfferDiscount = {
    value: number;
    valueType: "percentage" | "fixed_amount";
    title: string;
};

export type OfferChange = {
    type: "add_variant";
    variantID: number;
    quantity: number;
    discount: OfferDiscount;
};

export type Offer = {
    id: number;
    title: string;
    productTitle: string;
    productImageURL: string;
    productDescription: string[];
    changes: OfferChange[];
};

const OFFERS: Offer[] = [
    {
        id: 1,
        title: "One time offer",
        productTitle: "Minimal Snowboard",
        productImageURL: "https://cdn.shopify.com/s/files/1/0930/0167/9222/files/Main_b9e0da7f-db89-4d41-83f0-7f417b02831d.jpg?v=1752477617",
        productDescription: [
            "This product is a great addition to your purchase.",
        ],
        changes: [
            {
                type: "add_variant",
                variantID: 55922219450742,
                quantity: 1,
                discount: {
                    value: 15,
                    valueType: "percentage",
                    title: "15% off",
                },
            },
        ],
    },
];

export function getOffers(): Offer[] {
    return OFFERS;
}

export async function GET() {
    return new Response(JSON.stringify(OFFERS), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}