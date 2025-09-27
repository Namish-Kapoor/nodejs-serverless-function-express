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
    availableForSale: boolean;
    id: string;
    product: {
        title: string;
        handle: string;
        featuredMedia: {
            preview: {
                image: {
                    url: string;
                };
            };
        };
    };
    price: string;
    compareAtPrice: string | null;
    usps: string[];
};

const OFFERS = {
    "data": {
        "nodes": [
            {
                "availableForSale": true,
                "id": "gid://shopify/ProductVariant/55922219450742",
                "product": {
                    "title": "The Videographer Snowboard",
                    "handle": "the-videographer-snowboard",
                    "featuredMedia": {
                        "preview": {
                            "image": {
                                "url": "https://cdn.shopify.com/s/files/1/0930/0167/9222/files/Main.jpg?v=1752477616"
                            }
                        }
                    }
                },
                "price": "885.95",
                "compareAtPrice": null,
                "usps": ['Free Shipping', '100% Money Back Guarantee', '24/7 Customer Support']
            },
            {
                "availableForSale": true,
                "id": "gid://shopify/ProductVariant/55922219516278",
                "product": {
                    "title": "Selling Plans Ski Wax",
                    "handle": "selling-plans-ski-wax",
                    "featuredMedia": {
                        "preview": {
                            "image": {
                                "url": "https://cdn.shopify.com/s/files/1/0930/0167/9222/files/snowboard_wax.png?v=1752477617"
                            }
                        }
                    }
                },
                "price": "24.95",
                "compareAtPrice": null,
                "usps": ['Free Shipping', '100% Money Back Guarantee', '24/7 Customer Support']
            }
        ]
    }
}

export function getOffers(): { data: { nodes: Offer[] } } {
    return OFFERS;
}